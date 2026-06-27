/* MAIN PAGE — Single-screen invitation */

function MainScreen({
  goTo,
  openSheet,
  tweaks
}) {
  const lime = tweaks.lime;
  const ink = tweaks.ink;

  // countdown
  const wedding = new Date('2026-09-12T13:00:00+09:00');
  const now = new Date();
  const days = Math.max(0, Math.ceil((wedding - now) / (86400 * 1000)));
  const scrollToSection = (id, onDone) => {
    const container = document.querySelector('.inv-screen');
    const target = document.getElementById(id);
    if (!container || !target) {
      if (onDone) onDone();
      return;
    }
    const containerTop = container.getBoundingClientRect().top;
    const targetTop = target.getBoundingClientRect().top;
    const distance = Math.abs(targetTop - containerTop);
    container.scrollBy({
      top: targetTop - containerTop,
      behavior: 'smooth'
    });
    if (onDone) setTimeout(onDone, Math.max(400, Math.min(800, distance * 0.4)));
  };
  const tickerText = 'Welcome to our wedding';
  const tickerItems = Array.from({
    length: 8
  }, (_, i) => i);
  const weddingTextRef = React.useRef(null);
  const photoRef = React.useRef(null);
  const tickerTrackRef = React.useRef(null);

  // 상단 티커 마퀴 — Web Animations API로 '픽셀 단위' 구동.
  // 기존 CSS의 translateX(-50%)는 폰트가 늦게 로드되며 트랙 폭이 바뀌면 -50%가
  // 다른 픽셀값으로 재계산돼 화면이 '중간부터 보이거나 튀거나 멈춘 듯' 보였다.
  // 동일한 그룹 2개를 두고 한 그룹 폭(px)만큼만 이동 → 이음매 없는 무한 루프.
  // 폰트 로드/리사이즈로 폭이 바뀌면 ResizeObserver가 정확한 값으로 다시 계산한다.
  React.useEffect(() => {
    const track = tickerTrackRef.current;
    if (!track || typeof track.animate !== 'function') return; // 폴백: CSS 애니메이션
    const group = track.firstElementChild;
    if (!group) return;
    track.style.animation = 'none'; // CSS 폴백 끄고 JS가 구동
    const SPEED = 55; // px/초 — 폭과 무관하게 항상 같은 속도
    let anim = null;
    const run = () => {
      const dist = group.offsetWidth; // 레이아웃 폭(조상 transform 영향 없음)
      if (!dist) return;
      if (anim) anim.cancel();
      anim = track.animate([{
        transform: 'translateX(0px)'
      }, {
        transform: `translateX(${-dist}px)`
      }], {
        duration: dist / SPEED * 1000,
        iterations: Infinity,
        easing: 'linear'
      });
    };
    run();
    let ro = null,
      raf = 0;
    if (window.ResizeObserver) {
      ro = new ResizeObserver(() => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(run);
      });
      ro.observe(group);
    }
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(run);
    return () => {
      if (anim) anim.cancel();
      if (ro) ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  // 세로 'WEDDING INVITATION' 헤드라인의 높이를 사진 카드 위치에 맞춰 정렬한다.
  // 이 헤드라인은 transform: rotate(180deg)(중심 기준)이라 '높이'가 곧 화면상 위치다.
  // 그런데 정렬 기준이 되는 사진 위치는 위쪽 이름 텍스트 높이에 의존하고, 그 텍스트는
  // font-display:swap 폰트가 '첫 페인트 이후' 늦게 교체되며 reflow된다 → 높이 재계산 →
  // 회전 중심 이동 → 글자가 위아래로 '튕겨' 보였다.
  // 해결: 폰트로 위치가 확정될 때까지 헤드라인을 opacity:0으로 숨겨 중간 점프를 가리고,
  //       reflow가 끝난 다음 프레임에 '한 번' 정렬한 뒤 부드럽게 표시한다.
  React.useLayoutEffect(() => {
    const offsetWithin = (el, ancestor) => {
      let y = 0;
      while (el && el !== ancestor) {
        y += el.offsetTop;
        el = el.offsetParent;
      }
      return y;
    };
    const align = () => {
      const text = weddingTextRef.current;
      const photo = photoRef.current;
      if (!text || !photo) return;
      const section = text.closest('section');
      if (!section) return;
      const h = offsetWithin(photo, section) + photo.offsetHeight - 70;
      if (h > 0) text.style.height = `${Math.round(h)}px`;
    };
    let revealed = false;
    const finalize = () => {
      align();
      if (!revealed && weddingTextRef.current) {
        revealed = true;
        weddingTextRef.current.style.opacity = '0.95';
      }
    };
    // 첫 페인트 전: 폰트가 아직이라 위치가 미확정 → 숨긴 채 임시 정렬만 해 둔다.
    align();
    // 폰트 swap reflow가 끝난 '다음 프레임'에 최종 정렬 + 노출(중간 상태는 안 보임).
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => requestAnimationFrame(finalize));
    } else {
      requestAnimationFrame(finalize);
    }
    // 폰트 이벤트가 끝내 안 오는 경우 대비 안전망.
    const t = setTimeout(finalize, 800);
    // 리사이즈/회전 시에는 이미 노출된 상태이므로 위치만 다시 맞춘다.
    window.addEventListener('resize', align);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', align);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "01 Main",
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ticker-wrap",
    style: {
      background: lime
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ticker-track",
    ref: tickerTrackRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "ticker-group",
    "aria-hidden": "false"
  }, tickerItems.map(i => /*#__PURE__*/React.createElement("span", {
    key: `a${i}`,
    className: "ticker-item",
    style: {
      color: ink
    }
  }, tickerText))), /*#__PURE__*/React.createElement("div", {
    className: "ticker-group",
    "aria-hidden": "true"
  }, tickerItems.map(i => /*#__PURE__*/React.createElement("span", {
    key: `b${i}`,
    className: "ticker-item",
    style: {
      color: ink
    }
  }, tickerText))))), /*#__PURE__*/React.createElement("div", {
    className: "inv-screen",
    style: {
      position: 'relative',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      ...{
        position: 'relative',
        background: lime,
        minHeight: 'calc(100% - 0px)',
        padding: '48px 24px 56px',
        overflow: 'hidden'
      },
      background: "rgb(212, 230, 7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "label-en",
    style: {
      color: ink,
      opacity: 0.7
    }
  }, "CHAEWON\xA0 ·\xA0 HAESEONG")), /*#__PURE__*/React.createElement("div", {
    ref: weddingTextRef,
    className: "vertical-headline agrandir",
    style: {
      position: 'absolute',
      right: -1,
      top: 70,
      fontSize: 'min(64px, 16.4vw)',
      color: ink,
      lineHeight: 0.85,
      opacity: 0,
      transition: 'opacity 0.45s ease',
      height: "640px",
      fontFamily: "'Martian Mono', monospace",
      fontWeight: "400",
      fontStretch: '100%',
      letterSpacing: '0em'
    }
  }, "WEDDING", /*#__PURE__*/React.createElement("br", null), "INVITATION"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      position: 'relative',
      zIndex: 2,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "fade-up",
    style: {
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 'min(77px, 20vw)',
      color: ink,
      lineHeight: 0.88,
      fontWeight: 600,
      fontFamily: "'Pretendard', sans-serif",
      whiteSpace: 'nowrap'
    }
  }, "윤채원"), /*#__PURE__*/React.createElement("div", {
    className: "serif agrandir",
    style: {
      fontSize: 'min(22px, 5.6vw)',
      color: ink,
      opacity: 0.8,
      marginTop: 2,
      marginLeft: 4,
      fontFamily: "'Martian Mono', monospace",
      letterSpacing: '0em',
      whiteSpace: 'nowrap'
    }
  }, "Chaewon Yun")), /*#__PURE__*/React.createElement("div", {
    className: "display fade-up delay-1",
    style: {
      fontSize: 'min(36px, 9vw)',
      margin: '14px 0 14px 4px',
      color: ink,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 28,
      height: 1,
      background: ink
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'min(20px, 5vw)',
      fontFamily: "'Martian Mono', monospace",
      fontWeight: 300,
      letterSpacing: '0em'
    }
  }, "and"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 28,
      height: 1,
      background: ink
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "fade-up delay-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 'min(77px, 20vw)',
      color: ink,
      lineHeight: 0.88,
      fontWeight: 600,
      fontFamily: "'Pretendard', sans-serif",
      whiteSpace: 'nowrap'
    }
  }, "최해성"), /*#__PURE__*/React.createElement("div", {
    className: "serif agrandir",
    style: {
      fontSize: 'min(22px, 5.6vw)',
      color: ink,
      opacity: 0.8,
      marginTop: 2,
      marginLeft: 4,
      fontFamily: "'Martian Mono', monospace",
      letterSpacing: '0em',
      whiteSpace: 'nowrap'
    }
  }, "Haeseong Choi"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => openSheet('map'),
    className: "tap",
    style: {
      border: `1.5px solid ${ink}`,
      background: ink,
      color: lime,
      padding: '9px 14px',
      borderRadius: 99,
      cursor: 'pointer',
      fontFamily: "'Martian Mono', monospace",
      fontSize: 9,
      letterSpacing: '0.12em',
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      minHeight: 36,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "13",
    viewBox: "0 0 10 13",
    fill: "none",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 0C2.24 0 0 2.24 0 5c0 3.75 5 8 5 8s5-4.25 5-8c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1 1 5 3.5a1.5 1.5 0 0 1 0 3z",
    fill: "currentColor"
  })), "LOCATION"), /*#__PURE__*/React.createElement("button", {
    onClick: () => openSheet('account-both'),
    className: "tap",
    style: {
      border: `1.5px solid ${ink}`,
      background: 'transparent',
      color: ink,
      padding: '9px 14px',
      borderRadius: 99,
      cursor: 'pointer',
      fontFamily: "'Martian Mono', monospace",
      fontSize: 9,
      letterSpacing: '0.12em',
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      minHeight: 36,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "11",
    viewBox: "0 0 12 11",
    fill: "none",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.75",
    y: "0.75",
    width: "10.5",
    height: "9.5",
    rx: "1.25",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0.75 3.5h10.5",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 6.5h2M3 8h3.5",
    stroke: "currentColor",
    strokeWidth: "1.2",
    strokeLinecap: "round"
  })), "ACCOUNTS"))), /*#__PURE__*/React.createElement("button", {
    onClick: () => goTo('memories'),
    className: "tap fade-up delay-3",
    style: {
      marginTop: 28,
      marginLeft: 4,
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Pretendard', sans-serif",
      fontSize: 10,
      letterSpacing: '0.16em',
      fontWeight: 600,
      color: ink
    }
  })), /*#__PURE__*/React.createElement("button", {
    ref: photoRef,
    onClick: () => goTo('memories'),
    className: "fade-up delay-3 tap",
    style: {
      marginTop: 38,
      position: 'relative',
      marginLeft: -4,
      marginRight: 68,
      display: 'block',
      width: 'auto',
      padding: 0,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      aspectRatio: '4/5',
      maxHeight: 280
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/couple-main.jpg",
    alt: "couple",
    fetchPriority: "high",
    decoding: "async",
    className: tweaks.bw ? 'bw kenburns' : 'kenburns',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 35%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10,
      background: ink,
      color: lime,
      fontFamily: "'Pretendard', sans-serif",
      fontSize: 10,
      fontWeight: 600,
      padding: '7px 11px',
      letterSpacing: '0.12em',
      borderRadius: 99,
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      boxShadow: '0 2px 8px rgba(0,0,0,0.22)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "5.5",
    cy: "5.5",
    r: "4.75",
    stroke: "currentColor",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "5.5",
    cy: "5.5",
    r: "1.6",
    fill: "currentColor"
  })), "우리의 추억 보기", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 300,
      lineHeight: 1
    }
  }, "↗")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      paddingTop: 18,
      borderTop: `1px solid ${ink}`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "num-mono agrandir",
    style: {
      fontWeight: 300,
      color: ink,
      letterSpacing: '-0.02em',
      fontSize: "16px",
      fontFamily: "'Martian Mono', monospace",
      fontStretch: '75%'
    }
  }, "2026.09.12"), /*#__PURE__*/React.createElement("button", {
    onClick: () => openSheet('map'),
    className: "tap",
    style: {
      fontFamily: "'Pretendard', sans-serif",
      letterSpacing: '-0.02em',
      fontWeight: 600,
      color: ink,
      fontSize: "16px",
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: 0
    }
  }, "삼성전자 서초사옥"))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#F8F6F0',
      padding: '64px 24px 71px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "label-en",
    style: {
      marginBottom: 28,
      textAlign: "left"
    }
  }, "· THE DAY"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 8,
      fontWeight: "400",
      lineHeight: 0.85
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      color: ink,
      fontSize: 'min(120px, 30.8vw)',
      fontFamily: "'Martian Mono', monospace",
      fontStretch: '112.5%'
    }
  }, "09"), /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      color: ink,
      fontSize: 'min(120px, 30.8vw)',
      fontFamily: "'Martian Mono', monospace",
      fontStretch: '112.5%'
    }
  }, "12")), /*#__PURE__*/React.createElement("div", {
    className: "ko-med",
    style: {
      textAlign: 'center',
      color: ink,
      lineHeight: 1.35,
      letterSpacing: '-0.01em',
      marginTop: 14,
      marginBottom: 10,
      fontFamily: "Pretendard",
      fontSize: 'min(20px, 5.2vw)',
      fontWeight: "400"
    }
  }, "2026년 9월 12일", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "ko-light",
    style: {
      fontFamily: "Pretendard",
      color: "rgb(17, 17, 17)",
      fontSize: 'min(20px, 5.2vw)',
      fontWeight: "400"
    }
  }, "토요일 오후 1시")), /*#__PURE__*/React.createElement("div", {
    className: "ko-light",
    style: {
      textAlign: 'center',
      fontSize: 12,
      color: '#777',
      marginBottom: 36,
      fontFamily: "'Pretendard', sans-serif",
      letterSpacing: '0.18em',
      fontWeight: 500
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ko-med",
    style: {
      marginBottom: 4,
      fontSize: 'min(20px, 5.2vw)',
      fontWeight: "400"
    }
  }, "삼성전자 서초사옥"), /*#__PURE__*/React.createElement("div", {
    className: "ko-light",
    style: {
      color: "rgb(17, 17, 17)",
      fontSize: 'min(20px, 5.2vw)',
      fontWeight: "400"
    }
  }, "5층 웨딩홀")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "label-en",
    style: {
      marginBottom: 14
    }
  }, "· FAMILY"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14,
      fontFamily: "'Pretendard'"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ko-reg",
    style: {
      fontSize: 'min(20px, 5.2vw)',
      color: '#666',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: ink
    }
  }, "최교선"), /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '0 6px',
      opacity: 0.5
    }
  }, "·"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: ink
    }
  }, "구지영"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 6,
      fontSize: 'min(16px, 4.1vw)'
    }
  }, "의 아들")), /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 'min(20px, 5.2vw)',
      fontWeight: "400",
      fontFamily: "'Pretendard', sans-serif"
    }
  }, "해성")), /*#__PURE__*/React.createElement("div", {
    className: "hr"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ko-reg",
    style: {
      fontSize: 'min(20px, 5.2vw)',
      color: '#666',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: ink
    }
  }, "윤재경"), /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '0 6px',
      opacity: 0.5
    }
  }, "·"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: ink
    }
  }, "공명아"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 6,
      fontSize: 'min(16px, 4.1vw)'
    }
  }, "의 딸")), /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 'min(20px, 5.2vw)',
      fontWeight: "400",
      fontFamily: "'Pretendard', sans-serif"
    }
  }, "채원")))), /*#__PURE__*/React.createElement("div", {
    className: "ko-light",
    style: {
      textAlign: 'center',
      fontSize: 14,
      color: '#555',
      lineHeight: 1.75,
      padding: '0 4px',
      fontFamily: "Pretendard"
    }
  }, "두 사람의 이야기가 하나가 되는 날,", /*#__PURE__*/React.createElement("br", null), "함께 축복해 주세요"), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      textAlign: 'center',
      marginTop: 0,
      fontSize: 22,
      color: ink
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "label-en",
    style: {
      marginBottom: 18,
      color: ink
    }
  }, "· NUMBERS"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 12
    }
  }, [{
    n: '1914',
    t: '함께한 날들'
  }, {
    n: '1',
    t: '하나가 되는 날'
  }, {
    n: '∞',
    t: '오늘부터, 영원히'
  }].map((x, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 44,
      color: ink,
      lineHeight: 0.9
    }
  }, x.n), /*#__PURE__*/React.createElement("div", {
    className: "ko-light",
    style: {
      fontSize: 11,
      color: ink,
      opacity: 0.7,
      marginTop: 6,
      lineHeight: 1.4
    }
  }, x.t))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#F8F6F0',
      padding: '24px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: `1px solid ${ink}`,
      background: '#fff',
      padding: '22px 20px',
      fontFamily: "'Pretendard'"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "label-en"
  }, "MEAL"), /*#__PURE__*/React.createElement("div", {
    className: "ko-light",
    style: {
      fontSize: 12,
      color: '#666'
    }
  }, "식사")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ko-med",
    style: {
      fontSize: 15,
      marginBottom: 6
    }
  }, "식사 시간"), /*#__PURE__*/React.createElement("div", {
    className: "ko-light",
    style: {
      fontSize: 15,
      color: '#555',
      lineHeight: 1.65
    }
  }, "오후 1시 ~ 3시까지 식사가 제공됩니다")), /*#__PURE__*/React.createElement("div", {
    className: "hr",
    style: {
      margin: '0 0 16px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ko-med",
    style: {
      fontSize: 15,
      marginBottom: 6
    }
  }, "식사 장소"), /*#__PURE__*/React.createElement("div", {
    className: "ko-light",
    style: {
      fontSize: 15,
      color: '#555',
      lineHeight: 1.65
    }
  }, "서초사옥 지하1층에서 이뤄집니다", /*#__PURE__*/React.createElement("br", null), "양식 · 중식 · 일식 중 선택하실 수 있습니다")), /*#__PURE__*/React.createElement("div", {
    className: "hr",
    style: {
      margin: '0 0 16px'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ko-med",
    style: {
      fontSize: 15,
      marginBottom: 6
    }
  }, "식당 선택"), /*#__PURE__*/React.createElement("div", {
    className: "ko-light",
    style: {
      fontSize: 15,
      color: '#555',
      lineHeight: 1.65
    }
  }, "식당 선택은 축의대에서 이뤄지오니", /*#__PURE__*/React.createElement("br", null), "함께 오시는 분이 계시다면 미리 상의하고 오시면 좋습니다"))))), /*#__PURE__*/React.createElement("section", {
    id: "section-location",
    style: {
      background: '#F8F6F0',
      padding: '24px 24px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => openSheet('map'),
    className: "tap",
    style: {
      display: 'block',
      width: '100%',
      border: 'none',
      background: 'transparent',
      padding: 0,
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: `1.5px solid ${ink}`,
      background: '#fff',
      padding: '20px 20px',
      borderRadius: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontFamily: "'Pretendard'"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: `1.5px solid ${ink}`,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "17",
    viewBox: "0 0 14 17",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 0C4.24 0 2 2.24 2 5c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5zm0 7A2 2 0 1 1 7 3a2 2 0 0 1 0 4z",
    fill: ink
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "label-en"
  }, "VENUE"), /*#__PURE__*/React.createElement("div", {
    className: "ko-light",
    style: {
      fontSize: 12,
      color: '#888'
    }
  }, "오시는 길 보기")), /*#__PURE__*/React.createElement("div", {
    className: "ko-med",
    style: {
      fontSize: 16
    }
  }, "삼성전자 서초사옥 5층"))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: ink,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      flexShrink: 0,
      marginLeft: 12
    }
  }, "→"))), /*#__PURE__*/React.createElement("div", {
    id: "section-accounts"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => openSheet('account-both'),
    className: "tap",
    style: {
      display: 'block',
      width: '100%',
      border: 'none',
      background: 'transparent',
      padding: 0,
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: `1.5px solid ${ink}`,
      background: '#fff',
      padding: '20px 20px',
      borderRadius: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontFamily: "'Pretendard'"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: `1.5px solid ${ink}`,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "14",
    viewBox: "0 0 16 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1",
    width: "14",
    height: "12",
    rx: "1.5",
    stroke: ink,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 4.5h14",
    stroke: ink,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 8.5h3M4 10.5h5",
    stroke: ink,
    strokeWidth: "1.2",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "label-en"
  }, "ACCOUNT"), /*#__PURE__*/React.createElement("div", {
    className: "ko-light",
    style: {
      fontSize: 12,
      color: '#888'
    }
  }, "계좌번호 보기")), /*#__PURE__*/React.createElement("div", {
    className: "ko-med",
    style: {
      fontSize: 16
    }
  }, "마음 전하실 곳"))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: ink,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      flexShrink: 0,
      marginLeft: 12
    }
  }, "→")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...{
        background: lime,
        padding: '12px 24px 12px',
        position: 'relative',
        overflow: 'hidden'
      },
      background: "rgb(212, 230, 7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "label-en",
    style: {
      marginBottom: 24
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      color: ink,
      fontSize: "20px",
      fontFamily: "Pretendard",
      fontWeight: "500",
      lineHeight: "1",
      letterSpacing: "-0.2px",
      margin: "0px"
    }
  }, "보내주시는 따뜻한 축하에 감사하며,", /*#__PURE__*/React.createElement("br", null), "함께 잘 살아가겠습니다"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    },
    className: "hr-ink"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "num-mono",
    style: {
      fontSize: 13,
      color: ink,
      fontWeight: "300",
      fontFamily: "'Martian Mono', monospace",
      fontStretch: '100%'
    }
  }, "CHAEWON"), /*#__PURE__*/React.createElement("div", {
    className: "num-mono",
    style: {
      fontSize: 13,
      color: ink,
      fontWeight: "300",
      fontFamily: "'Martian Mono', monospace",
      fontStretch: '100%'
    }
  }, "HAESEONG")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      textAlign: 'center',
      fontFamily: "'Pretendard', sans-serif",
      fontSize: 10,
      letterSpacing: '0.2em',
      fontWeight: 500,
      color: ink,
      opacity: 0.55
    }
  }))));
}
Object.assign(window, {
  MainScreen
});