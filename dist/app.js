/* App orchestrator — routes, tweaks, sheets */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "lime",
  "bw": false,
  "showFrame": true,
  "displayFont": "bricolage"
} /*EDITMODE-END*/;
function getViewport() {
  const w = window.innerWidth;
  if (w >= 1200) return 'pc';
  if (w >= 768) return 'tablet';
  return 'mobile';
}
const PALETTES = {
  lime: {
    lime: '#D4E607',
    ink: '#111111',
    label: 'NEON LIME'
  },
  butter: {
    lime: '#F5E64B',
    ink: '#1E1A12',
    label: 'BUTTER YELLOW'
  },
  cobalt: {
    lime: '#3B6CFF',
    ink: '#0A0A1A',
    label: 'COBALT POP'
  },
  blossom: {
    lime: '#FFB7C5',
    ink: '#1A0F12',
    label: 'BLOSSOM PINK'
  }
};
function App() {
  const [viewport, setViewport] = React.useState(getViewport);
  React.useEffect(() => {
    const h = () => setViewport(getViewport());
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);

  // modal: null | 'memories' | 'numbers'  — main is always the background root.
  const [modal, setModal] = React.useState(null);
  const [closingModal, setClosingModal] = React.useState(false);
  const [sheet, setSheet] = React.useState(null);
  const [tweaks, setTweaks] = useTweaks(TWEAK_DEFAULTS);
  const transitionLock = React.useRef(false);
  // 오버레이(map/following/account 등) 시트를 닫은 직후, 닫는 탭에서 파생되는
  // ghost-click(합성 클릭)이 그 아래 드러난 Memories의 'MAIN' 백버튼이나 배경에
  // 떨어져 화면이 통째로 빠져나가던 문제 방지용 — 닫은 직후 잠깐 Main 이탈을 막는다.
  const sheetClosedAtRef = React.useRef(0);
  const [sheetDragY, setSheetDragY] = React.useState(0);
  const [isDraggingSheet, setIsDraggingSheet] = React.useState(false);
  const sheetDragRef = React.useRef({
    active: false,
    startY: 0,
    startTime: 0,
    delta: 0
  });
  const sheetClosingViaSwipe = React.useRef(false);
  const onSheetTouchStart = e => {
    sheetDragRef.current = {
      active: false,
      startY: e.touches[0].clientY,
      startTime: Date.now(),
      delta: 0,
      fromGrabber: e.touches[0].clientY < 72
    };
  };
  const onSheetTouchMove = e => {
    const delta = e.touches[0].clientY - sheetDragRef.current.startY;
    if (sheetDragRef.current.active) {
      if (delta > 0) {
        sheetDragRef.current.delta = delta;
        setSheetDragY(delta);
      }
      return;
    }

    // feed view 활성 상태면 sheet drag 완전 비활성화
    const scrollEl = e.currentTarget.querySelector('.inv-screen');
    if (scrollEl && scrollEl.dataset.feedActive === 'true') return;

    // grabber 영역(상단 72px)에서 시작한 아래 방향 스와이프만 sheet drag 활성화
    if (delta > 8 && sheetDragRef.current.fromGrabber) {
      sheetDragRef.current.active = true;
      setIsDraggingSheet(true);
      sheetDragRef.current.delta = delta;
      setSheetDragY(delta);
    }
  };
  const onSheetTouchEnd = () => {
    if (!sheetDragRef.current.active) return;
    sheetDragRef.current.active = false;
    setIsDraggingSheet(false);
    const elapsed = Math.max(1, Date.now() - sheetDragRef.current.startTime);
    const {
      delta
    } = sheetDragRef.current;
    sheetDragRef.current.delta = 0;
    if (delta > 100 || delta / elapsed > 0.5) {
      sheetClosingViaSwipe.current = true;
      setSheetDragY(900);
    } else {
      setSheetDragY(0);
    }
  };
  const onSheetTransitionEnd = e => {
    if (e.propertyName !== 'transform' || !sheetClosingViaSwipe.current) return;
    sheetClosingViaSwipe.current = false;
    setSheetDragY(0);
    setIsDraggingSheet(false);
    transitionLock.current = false;
    setModal(null);
    setClosingModal(false);
  };
  const palette = PALETTES[tweaks.palette] || PALETTES.lime;
  const effectiveTweaks = {
    ...tweaks,
    lime: palette.lime,
    ink: palette.ink
  };

  // Apple-style sheet transition. Pushed-back root + sheet slides up from below.
  const SHEET_MS = 480;

  // 시트가 닫혀 null이 되는 순간을 기록 (ghost-click 쿨다운 기준점)
  React.useEffect(() => {
    if (!sheet) sheetClosedAtRef.current = Date.now();
  }, [sheet]);
  const goTo = next => {
    if (transitionLock.current) return;
    if (next === 'main') {
      if (!modal) return;
      // 오버레이 시트를 닫은 직후의 ghost-click/잔여 탭으로 인한 오작동 차단
      if (Date.now() - sheetClosedAtRef.current < 500) return;
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
  const openSheet = name => setSheet(name);
  const closeSheet = () => setSheet(null);

  // Sync display font CSS variable
  React.useEffect(() => {
    const fontMap = {
      bricolage: "'Bricolage Grotesque'",
      gravitas: "'GravitasOne'",
      limelight: "'Limelight'"
    };
    document.documentElement.style.setProperty('--display-font', fontMap[tweaks.displayFont] || "'Bricolage Grotesque'");
  }, [tweaks.displayFont]);

  // Expose navigation for PPTX export
  React.useEffect(() => {
    window.__goTo = goTo;
  }, [modal]);

  // ── Wide layout (PC / Tablet) ─────────────────────────────
  if (viewport !== 'mobile') {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WideApp, {
      tweaks: effectiveTweaks,
      openSheet: openSheet,
      variant: viewport
    }), /*#__PURE__*/React.createElement(MapSheet, {
      open: sheet === 'map',
      onClose: closeSheet,
      pc: true
    }), /*#__PURE__*/React.createElement(RSVPSheet, {
      open: sheet === 'rsvp',
      onClose: closeSheet,
      pc: true
    }), /*#__PURE__*/React.createElement(ShareSheet, {
      open: sheet === 'share',
      onClose: closeSheet,
      pc: true
    }), /*#__PURE__*/React.createElement(AccountSheet, {
      open: sheet === 'account-groom',
      onClose: closeSheet,
      side: "groom",
      pc: true
    }), /*#__PURE__*/React.createElement(AccountSheet, {
      open: sheet === 'account-bride',
      onClose: closeSheet,
      side: "bride",
      pc: true
    }), /*#__PURE__*/React.createElement(AccountSheet, {
      open: sheet === 'account-both',
      onClose: closeSheet,
      side: "both",
      pc: true
    }), /*#__PURE__*/React.createElement(FollowingSheet, {
      open: sheet === 'following',
      onClose: closeSheet,
      lime: effectiveTweaks.lime,
      ink: effectiveTweaks.ink,
      onOpenMap: () => openSheet('map'),
      onOpenAccount: () => openSheet('account-both'),
      onOpenCalendar: () => openSheet('calendar')
    }), /*#__PURE__*/React.createElement(CalendarSheet, {
      open: sheet === 'calendar',
      onClose: closeSheet,
      pc: true
    }), /*#__PURE__*/React.createElement(TweaksPanel, {
      title: "Tweaks"
    }, /*#__PURE__*/React.createElement(TweakSection, {
      label: "Font"
    }), /*#__PURE__*/React.createElement(TweakRadio, {
      label: "영문 폰트",
      value: tweaks.displayFont,
      options: [{
        value: 'bricolage',
        label: 'Bricolage'
      }, {
        value: 'gravitas',
        label: 'Gravitas One'
      }, {
        value: 'limelight',
        label: 'Limelight'
      }],
      onChange: v => setTweaks('displayFont', v)
    }), /*#__PURE__*/React.createElement(TweakSection, {
      label: "Palette"
    }), /*#__PURE__*/React.createElement(TweakSelect, {
      label: "컬러 팔레트",
      value: tweaks.palette,
      options: [{
        value: 'lime',
        label: 'Neon Lime'
      }, {
        value: 'butter',
        label: 'Butter Yellow'
      }, {
        value: 'cobalt',
        label: 'Cobalt Pop'
      }, {
        value: 'blossom',
        label: 'Blossom Pink'
      }],
      onChange: v => setTweaks('palette', v)
    }), /*#__PURE__*/React.createElement(TweakSection, {
      label: "Photo"
    }), /*#__PURE__*/React.createElement(TweakToggle, {
      label: "흑백 처리",
      value: tweaks.bw,
      onChange: v => setTweaks('bw', v)
    })));
  }

  // ── Mobile layout ─────────────────────────────────────────
  const rootPushed = modal && !closingModal;
  const stageInner = /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      width: '100%',
      overflow: 'hidden',
      background: '#000'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: `page-root ${rootPushed ? 'page-pushed' : ''}`
  }, /*#__PURE__*/React.createElement(MainScreen, {
    goTo: goTo,
    openSheet: openSheet,
    tweaks: effectiveTweaks
  })), /*#__PURE__*/React.createElement("div", {
    className: `page-scrim ${rootPushed ? 'page-scrim-on' : ''}`,
    style: sheet ? {
      pointerEvents: 'none'
    } : undefined,
    onClick: () => {
      if (modal && !sheet && !closingModal) goTo('main');
    }
  }), modal && /*#__PURE__*/React.createElement("div", {
    className: `modal-sheet ${closingModal ? 'modal-closing' : ''}`,
    style: sheetDragY > 0 || isDraggingSheet ? {
      transform: `translateY(${sheetDragY}px)`,
      transition: isDraggingSheet ? 'none' : 'transform 320ms cubic-bezier(.32,.72,0,1)',
      animation: 'none'
    } : undefined,
    onTouchStart: onSheetTouchStart,
    onTouchMove: onSheetTouchMove,
    onTouchEnd: onSheetTouchEnd,
    onTouchCancel: onSheetTouchEnd,
    onTransitionEnd: onSheetTransitionEnd
  }, modal === 'memories' && /*#__PURE__*/React.createElement(MemoriesScreen, {
    goTo: goTo,
    tweaks: effectiveTweaks,
    openSheet: openSheet
  }), modal === 'numbers' && /*#__PURE__*/React.createElement(NumbersScreen, {
    goTo: goTo,
    openSheet: openSheet,
    tweaks: effectiveTweaks
  })), /*#__PURE__*/React.createElement(MapSheet, {
    open: sheet === 'map',
    onClose: closeSheet
  }), /*#__PURE__*/React.createElement(RSVPSheet, {
    open: sheet === 'rsvp',
    onClose: closeSheet
  }), /*#__PURE__*/React.createElement(ShareSheet, {
    open: sheet === 'share',
    onClose: closeSheet
  }), /*#__PURE__*/React.createElement(AccountSheet, {
    open: sheet === 'account-groom',
    onClose: closeSheet,
    side: "groom"
  }), /*#__PURE__*/React.createElement(AccountSheet, {
    open: sheet === 'account-bride',
    onClose: closeSheet,
    side: "bride"
  }), /*#__PURE__*/React.createElement(AccountSheet, {
    open: sheet === 'account-both',
    onClose: closeSheet,
    side: "both"
  }), /*#__PURE__*/React.createElement(FollowingSheet, {
    open: sheet === 'following',
    onClose: closeSheet,
    lime: effectiveTweaks.lime,
    ink: effectiveTweaks.ink,
    onOpenMap: () => openSheet('map'),
    onOpenAccount: () => openSheet('account-both'),
    onOpenCalendar: () => openSheet('calendar')
  }), /*#__PURE__*/React.createElement(CalendarSheet, {
    open: sheet === 'calendar',
    onClose: closeSheet
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      overflow: 'hidden'
    }
  }, stageInner);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));