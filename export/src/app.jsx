/* App orchestrator — routes, tweaks, sheets */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "lime",
  "bw": false,
  "showFrame": true,
  "displayFont": "gravitas"
}/*EDITMODE-END*/;

const PALETTES = {
  lime:    { lime: '#D4E607', ink: '#111111', label: 'NEON LIME' },
  butter:  { lime: '#F5E64B', ink: '#1E1A12', label: 'BUTTER YELLOW' },
  cobalt:  { lime: '#3B6CFF', ink: '#0A0A1A', label: 'COBALT POP' },
  blossom: { lime: '#FFB7C5', ink: '#1A0F12', label: 'BLOSSOM PINK' },
};

function App() {
  // modal: null | 'groom' | 'bride'  — main is always the background root.
  const [modal, setModal] = React.useState(null);
  const [closingModal, setClosingModal] = React.useState(false);
  const [sheet, setSheet] = React.useState(null);
  const [tweaks, setTweaks] = useTweaks(TWEAK_DEFAULTS);
  const transitionLock = React.useRef(false);

  const palette = PALETTES[tweaks.palette] || PALETTES.lime;
  const effectiveTweaks = { ...tweaks, lime: palette.lime, ink: palette.ink };

  // Apple-style sheet transition. Pushed-back root + sheet slides up from below.
  const SHEET_MS = 480;

  const goTo = (next) => {
    if (transitionLock.current) return;

    if (next === 'main') {
      if (!modal) return;
      transitionLock.current = true;
      setClosingModal(true);
      setTimeout(() => {
        setModal(null);
        setClosingModal(false);
        transitionLock.current = false;
      }, SHEET_MS);
      return;
    }

    if (next === 'memories' || next === 'numbers') {
      if (modal === next) return;
      if (!modal) {
        setModal(next);
        return;
      }
      // swap: close current sheet, then open the new one
      transitionLock.current = true;
      setClosingModal(true);
      setTimeout(() => {
        setModal(next);
        setClosingModal(false);
        requestAnimationFrame(() => {
          const el = document.querySelector('.modal-sheet .inv-screen');
          if (el) el.scrollTop = 0;
        });
        transitionLock.current = false;
      }, SHEET_MS);
    }
  };

  const openSheet = (name) => setSheet(name);
  const closeSheet = () => setSheet(null);

  // Sync display font CSS variable
  React.useEffect(() => {
    const fontMap = { gravitas: "'GravitasOne'", limelight: "'Limelight'" };
    document.documentElement.style.setProperty('--display-font', fontMap[tweaks.displayFont] || "'GravitasOne'");
  }, [tweaks.displayFont]);

  // Expose navigation for PPTX export
  React.useEffect(() => { window.__goTo = goTo; }, [modal]);

  const rootPushed = modal && !closingModal;

  const stageInner = (
    <div style={{ position: 'relative', height: '100%', width: '100%', overflow: 'hidden', background: '#000' }}>
      {/* Background — main page; scales/dims when a modal sheet is up */}
      <div className={`page-root ${rootPushed ? 'page-pushed' : ''}`}>
        <MainScreen goTo={goTo} openSheet={openSheet} tweaks={effectiveTweaks} />
      </div>
      <div
        className={`page-scrim ${rootPushed ? 'page-scrim-on' : ''}`}
        onClick={() => modal && goTo('main')}
      />

      {/* Modal sheet — Apple-style slide up from bottom */}
      {modal && (
        <div className={`modal-sheet ${closingModal ? 'modal-closing' : ''}`}>
          <div className="sheet-handle" />
          {modal === 'memories' && <MemoriesScreen goTo={goTo} tweaks={effectiveTweaks} />}
          {modal === 'numbers'  && <NumbersScreen  goTo={goTo} openSheet={openSheet} tweaks={effectiveTweaks} />}
        </div>
      )}

      {/* Sheets (overlays for share/map/RSVP/etc) */}
      <MapSheet     open={sheet === 'map'}            onClose={closeSheet} />
      <RSVPSheet    open={sheet === 'rsvp'}           onClose={closeSheet} />
      <ShareSheet   open={sheet === 'share'}          onClose={closeSheet} />
      <AccountSheet open={sheet === 'account-groom'}  onClose={closeSheet} side="groom" />
      <AccountSheet open={sheet === 'account-bride'}  onClose={closeSheet} side="bride" />
      <AccountSheet open={sheet === 'account-both'}   onClose={closeSheet} side="both"  />
    </div>
  );

  return (
    <div className="stage">
      {tweaks.showFrame ? (
        <IOSDevice width={390} height={830}>
          {stageInner}
        </IOSDevice>
      ) : (
        <div style={{
          width: 390, height: 830, position: 'relative',
          overflow: 'hidden', borderRadius: 12,
          boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
        }}>
          {stageInner}
        </div>
      )}

      {/* Tweaks panel */}
      <TweaksPanel title="Tweaks">
        <TweakSection label="Font" />
        <TweakRadio
          label="영문 폰트"
          value={tweaks.displayFont}
          options={[
            { value: 'gravitas',  label: 'Gravitas One' },
            { value: 'limelight', label: 'Limelight' },
          ]}
          onChange={v => setTweaks('displayFont', v)}
        />

        <TweakSection label="Palette" />
        <TweakSelect
          label="컬러 팔레트"
          value={tweaks.palette}
          options={[
            { value: 'lime',    label: 'Neon Lime' },
            { value: 'butter',  label: 'Butter Yellow' },
            { value: 'cobalt',  label: 'Cobalt Pop' },
            { value: 'blossom', label: 'Blossom Pink' },
          ]}
          onChange={v => setTweaks('palette', v)}
        />

        <TweakSection label="Photo" />
        <TweakToggle
          label="흑백 처리"
          value={tweaks.bw}
          onChange={v => setTweaks('bw', v)}
        />

        <TweakSection label="Preview" />
        <TweakToggle
          label="iPhone 프레임"
          value={tweaks.showFrame}
          onChange={v => setTweaks('showFrame', v)}
        />

        <TweakSection label="Jump to" />
        <TweakRadio
          label="화면"
          value={modal || 'main'}
          options={[
            { value: 'main',     label: 'Main' },
            { value: 'memories', label: '추억' },
            { value: 'numbers',  label: 'Story' },
          ]}
          onChange={v => goTo(v)}
        />
      </TweaksPanel>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
