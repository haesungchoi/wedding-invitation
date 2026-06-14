/* App orchestrator — routes, tweaks, sheets */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "lime",
  "bw": true,
  "showFrame": true
}/*EDITMODE-END*/;

const PALETTES = {
  lime:    { lime: '#D8F23A', ink: '#111111', label: 'NEON LIME' },
  butter:  { lime: '#F5E64B', ink: '#1E1A12', label: 'BUTTER YELLOW' },
  cobalt:  { lime: '#3B6CFF', ink: '#0A0A1A', label: 'COBALT POP' },
  blossom: { lime: '#FFB7C5', ink: '#1A0F12', label: 'BLOSSOM PINK' },
};

function App() {
  const [route, setRoute] = React.useState('main');
  const [transition, setTransition] = React.useState(null); // { direction } | null
  const [sheet, setSheet] = React.useState(null);
  const [tweaks, setTweaks] = useTweaks(TWEAK_DEFAULTS);
  const transitionLock = React.useRef(false);

  const palette = PALETTES[tweaks.palette] || PALETTES.lime;
  const effectiveTweaks = { ...tweaks, lime: palette.lime, ink: palette.ink };

  const goTo = (next) => {
    if (next === route || transitionLock.current) return;
    transitionLock.current = true;
    // direction: main -> groom/bride = right; back = left
    const dir = (route === 'main') ? 'right' : (next === 'main' ? 'left' : 'right');
    setTransition({ direction: dir });
    // swap route content at ~52% — envelope is fully covering by then
    setTimeout(() => {
      setRoute(next);
      const el = document.querySelector('.inv-screen');
      if (el) el.scrollTop = 0;
    }, 880);
    // clear overlay at end
    setTimeout(() => {
      setTransition(null);
      transitionLock.current = false;
    }, 1750);
  };

  const openSheet = (name) => setSheet(name);
  const closeSheet = () => setSheet(null);

  const ScreenForRoute = (r) => {
    switch (r) {
      case 'groom': return <GroomScreen goTo={goTo} openSheet={openSheet} tweaks={effectiveTweaks} />;
      case 'bride': return <BrideScreen goTo={goTo} openSheet={openSheet} tweaks={effectiveTweaks} />;
      default:      return <MainScreen  goTo={goTo} openSheet={openSheet} tweaks={effectiveTweaks} />;
    }
  };

  return (
    <div className="stage">
      {tweaks.showFrame ? (
        <IOSDevice width={390} height={830}>
          <div style={{ position: 'relative', height: '100%', width: '100%', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0 }}>
              {ScreenForRoute(route)}
            </div>
            {transition && (
              <DoveTransition direction={transition.direction} accent={palette.lime} />
            )}

            {/* Sheets */}
            <MapSheet     open={sheet === 'map'}            onClose={closeSheet} />
            <RSVPSheet    open={sheet === 'rsvp'}           onClose={closeSheet} />
            <ShareSheet   open={sheet === 'share'}          onClose={closeSheet} />
            <AccountSheet open={sheet === 'account-groom'}  onClose={closeSheet} side="groom" />
            <AccountSheet open={sheet === 'account-bride'}  onClose={closeSheet} side="bride" />
            <AccountSheet open={sheet === 'account-both'}   onClose={closeSheet} side="both"  />
          </div>
        </IOSDevice>
      ) : (
        <div style={{
          width: 390, height: 830, position: 'relative',
          overflow: 'hidden', borderRadius: 12,
          boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
        }}>
          <div style={{ position: 'absolute', inset: 0 }}>
            {ScreenForRoute(route)}
          </div>
          {transition && (
            <DoveTransition direction={transition.direction} accent={palette.lime} />
          )}
          <MapSheet     open={sheet === 'map'}            onClose={closeSheet} />
          <RSVPSheet    open={sheet === 'rsvp'}           onClose={closeSheet} />
          <ShareSheet   open={sheet === 'share'}          onClose={closeSheet} />
          <AccountSheet open={sheet === 'account-groom'}  onClose={closeSheet} side="groom" />
          <AccountSheet open={sheet === 'account-bride'}  onClose={closeSheet} side="bride" />
          <AccountSheet open={sheet === 'account-both'}   onClose={closeSheet} side="both"  />
        </div>
      )}

      {/* Tweaks panel */}
      <TweaksPanel title="Tweaks">
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
          value={route}
          options={[
            { value: 'main',  label: 'Main' },
            { value: 'groom', label: 'Groom' },
            { value: 'bride', label: 'Bride' },
          ]}
          onChange={v => goTo(v)}
        />
      </TweaksPanel>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
