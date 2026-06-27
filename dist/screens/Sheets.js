/* Shared overlays: map / RSVP / accounts / share */

function Sheet({
  open,
  onClose,
  children,
  title,
  accent,
  pc
}) {
  const [dragY, setDragY] = React.useState(0);
  const [closing, setClosing] = React.useState(false);
  const drag = React.useRef({
    active: false,
    startY: 0,
    startTime: 0,
    delta: 0
  });
  if (!open) return null;
  const startDrag = y => {
    drag.current = {
      active: true,
      startY: y,
      startTime: Date.now(),
      delta: 0
    };
  };
  const updateDrag = y => {
    if (!drag.current.active) return;
    const delta = y - drag.current.startY;
    if (delta > 0) {
      drag.current.delta = delta;
      setDragY(delta);
    }
  };
  const commitDrag = () => {
    if (!drag.current.active) return;
    drag.current.active = false;
    const elapsed = Math.max(1, Date.now() - drag.current.startTime);
    const delta = drag.current.delta;
    drag.current.delta = 0;
    if (delta > 80 || delta / elapsed > 0.45) {
      setClosing(true);
      setDragY(700);
      setTimeout(() => {
        setDragY(0);
        setClosing(false);
        onClose();
      }, 300);
    } else {
      setDragY(0);
    }
  };
  const attachMouse = e => {
    startDrag(e.clientY);
    const mm = ev => updateDrag(ev.clientY);
    const mu = () => {
      commitDrag();
      window.removeEventListener('mousemove', mm);
      window.removeEventListener('mouseup', mu);
    };
    window.addEventListener('mousemove', mm);
    window.addEventListener('mouseup', mu);
  };
  if (pc) {
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.48)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: e => e.stopPropagation(),
      style: {
        width: '90%',
        maxWidth: 560,
        background: '#FFFFFF',
        borderRadius: 24,
        padding: '28px 32px 36px',
        maxHeight: '88vh',
        overflowY: 'auto',
        animation: 'pcSheetIn 220ms cubic-bezier(.2,.8,.2,1) both'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "label-en",
      style: {
        color: accent || '#111'
      }
    }, title), /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      className: "tap",
      style: {
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontSize: 24,
        color: '#111',
        lineHeight: 1,
        padding: 4
      },
      "aria-label": "닫기"
    }, "×")), children));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "scrim",
    onClick: onClose,
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      background: '#FFFFFF',
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      maxHeight: '82%',
      /* 헤더(손잡이+제목)는 스크롤 영역 밖의 고정 블록, 본문만 스크롤한다.
         position:sticky는 transform이 걸린 스크롤 컨테이너 안에서 안드로이드 Chrome에선
         깨져(고정되지 않고 같이 스크롤됨) 위쪽으로 뒤 내용이 비쳐 보였다 → flex 레이아웃으로 교체. */
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      animation: 'sheet-in 280ms cubic-bezier(.32,.72,0,1) both',
      transform: `translateY(${dragY}px)`,
      transition: !closing && dragY > 0 ? 'none' : 'transform 300ms cubic-bezier(.32,.72,0,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onTouchStart: e => startDrag(e.touches[0].clientY),
    onTouchMove: e => updateDrag(e.touches[0].clientY),
    onTouchEnd: commitDrag,
    onTouchCancel: commitDrag,
    onMouseDown: attachMouse,
    style: {
      flexShrink: 0,
      cursor: 'grab',
      touchAction: 'none',
      userSelect: 'none',
      background: '#FFFFFF',
      padding: '12px 22px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 4,
      borderRadius: 99,
      background: 'rgba(0,0,0,0.32)',
      margin: '0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: '22px 0 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "label-en",
    style: {
      color: accent || '#111'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "tap",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      fontSize: 22,
      color: '#111',
      lineHeight: 1,
      padding: 4
    },
    "aria-label": "닫기"
  }, "×"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: dragY > 0 || closing ? 'hidden' : 'auto',
      WebkitOverflowScrolling: 'touch',
      padding: '0 22px 28px'
    }
  }, children)));
}
function MapSheet({
  open,
  onClose,
  pc
}) {
  const naverUrl = `https://map.naver.com/p/search/삼성전자 서초사옥`;
  const kakaoUrl = `https://map.kakao.com/?q=삼성전자 서초사옥`;
  const tmapUrl = `tmap://search?name=삼성전자 서초사옥 주차장`;
  return /*#__PURE__*/React.createElement(Sheet, {
    open: open,
    onClose: onClose,
    title: "Location · 오시는 길",
    pc: pc
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Pretendard'"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 36,
      lineHeight: 1,
      marginBottom: 6
    }
  }, "삼성전자 서초사옥"), /*#__PURE__*/React.createElement("div", {
    className: "ko-reg",
    style: {
      fontSize: 14,
      color: '#444',
      marginBottom: 18
    }
  }, "5층 웨딩홀"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '4/3',
      borderRadius: 14,
      overflow: 'hidden',
      background: '#EAEAE4',
      position: 'relative',
      marginBottom: 18,
      border: '1px solid rgba(0,0,0,0.06)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 320 240",
    style: {
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("rect", {
    width: "320",
    height: "240",
    fill: "#EAEAE4"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "88",
    height: "52",
    fill: "#D4D5CC",
    rx: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "98",
    y: "2",
    width: "86",
    height: "52",
    fill: "#D4D5CC",
    rx: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "152",
    width: "88",
    height: "40",
    fill: "#D4D5CC",
    rx: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "98",
    y: "152",
    width: "86",
    height: "40",
    fill: "#D4D5CC",
    rx: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "58",
    width: "200",
    height: "20",
    fill: "#C8CAC1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "196",
    y: "0",
    width: "18",
    height: "240",
    fill: "#CECFC7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "198",
    width: "200",
    height: "5",
    fill: "#CECFC7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "58",
    width: "88",
    height: "88",
    fill: "#D4E607",
    rx: "6"
  }), /*#__PURE__*/React.createElement("text", {
    x: "48",
    y: "82",
    fill: "#111",
    fontSize: "10",
    fontWeight: "700",
    fontFamily: "Pretendard,sans-serif",
    textAnchor: "middle"
  }, "강남역"), /*#__PURE__*/React.createElement("text", {
    x: "48",
    y: "96",
    fill: "rgba(0,0,0,0.55)",
    fontSize: "7",
    fontFamily: "Pretendard,sans-serif",
    textAnchor: "middle"
  }, "2호선 · 신분당선"), /*#__PURE__*/React.createElement("rect", {
    x: "12",
    y: "104",
    width: "72",
    height: "20",
    fill: "#111",
    rx: "4"
  }), /*#__PURE__*/React.createElement("text", {
    x: "48",
    y: "118",
    fill: "#D4E607",
    fontSize: "8.5",
    fontWeight: "700",
    fontFamily: "Pretendard,sans-serif",
    textAnchor: "middle"
  }, "8번 출구"), /*#__PURE__*/React.createElement("line", {
    x1: "92",
    y1: "100",
    x2: "214",
    y2: "100",
    stroke: "#111",
    strokeWidth: "1.5",
    strokeDasharray: "6,4"
  }), /*#__PURE__*/React.createElement("text", {
    x: "153",
    y: "90",
    fill: "#111",
    fontSize: "9",
    fontWeight: "700",
    fontFamily: "Pretendard,sans-serif",
    textAnchor: "middle"
  }, "실내 연결 통로"), /*#__PURE__*/React.createElement("text", {
    x: "153",
    y: "116",
    fill: "#444",
    fontSize: "8",
    fontFamily: "Pretendard,sans-serif",
    textAnchor: "middle"
  }, "야외 이동 없음"), /*#__PURE__*/React.createElement("g", {
    transform: "translate(266,14)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,-12 C-6,-12 -10,-8 -10,-3 C-10,4 0,16 0,16 C0,16 10,4 10,-3 C10,-8 6,-12 0,-12 Z",
    fill: "#111"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "3",
    fill: "#D4E607",
    cy: "-3"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "214",
    y: "28",
    width: "104",
    height: "104",
    fill: "#D4E607",
    rx: "5"
  }), /*#__PURE__*/React.createElement("text", {
    x: "266",
    y: "54",
    fill: "#111",
    fontSize: "11",
    fontWeight: "700",
    fontFamily: "Pretendard,sans-serif",
    textAnchor: "middle"
  }, "삼성전자"), /*#__PURE__*/React.createElement("text", {
    x: "266",
    y: "74",
    fill: "#111",
    fontSize: "10",
    fontFamily: "Pretendard,sans-serif",
    textAnchor: "middle"
  }, "서초사옥"), /*#__PURE__*/React.createElement("text", {
    x: "266",
    y: "100",
    fill: "rgba(0,0,0,0.5)",
    fontSize: "7.5",
    fontFamily: "Pretendard,sans-serif",
    textAnchor: "middle"
  }, "5F WEDDING HALL"), /*#__PURE__*/React.createElement("rect", {
    x: "214",
    y: "138",
    width: "104",
    height: "52",
    fill: "#111",
    rx: "4"
  }), /*#__PURE__*/React.createElement("text", {
    x: "266",
    y: "162",
    fill: "white",
    fontSize: "9",
    fontWeight: "700",
    fontFamily: "Pretendard,sans-serif",
    textAnchor: "middle"
  }, "방문객 주차장"), /*#__PURE__*/React.createElement("text", {
    x: "266",
    y: "180",
    fill: "rgba(255,255,255,0.55)",
    fontSize: "7.5",
    fontFamily: "Pretendard,sans-serif",
    textAnchor: "middle"
  }, "지하 입차 · 3시간 무료"), /*#__PURE__*/React.createElement("rect", {
    x: "214",
    y: "196",
    width: "48",
    height: "36",
    fill: "#D4D5CC",
    rx: "3",
    opacity: "0.6"
  }), /*#__PURE__*/React.createElement("text", {
    x: "238",
    y: "218",
    fill: "#999",
    fontSize: "7",
    fontFamily: "Pretendard,sans-serif",
    textAnchor: "middle"
  }, "삼성생명"), /*#__PURE__*/React.createElement("rect", {
    x: "268",
    y: "196",
    width: "50",
    height: "36",
    fill: "#D4D5CC",
    rx: "3",
    opacity: "0.6"
  }), /*#__PURE__*/React.createElement("text", {
    x: "293",
    y: "218",
    fill: "#999",
    fontSize: "7",
    fontFamily: "Pretendard,sans-serif",
    textAnchor: "middle"
  }, "삼성화재"))), /*#__PURE__*/React.createElement("button", {
    className: "tap",
    onClick: () => {
      navigator.clipboard?.writeText('서울 서초구 서초대로74길 11');
    },
    style: {
      width: '100%',
      border: '1px solid #111',
      background: '#fff',
      padding: '14px 16px',
      borderRadius: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ko-reg",
    style: {
      fontSize: 14
    }
  }, "서울 서초구 서초대로74길 11"), /*#__PURE__*/React.createElement("span", {
    className: "label-en"
  }, "COPY")), (() => {
    const apps = pc ? [{
      name: 'NAVER',
      url: naverUrl
    }, {
      name: 'KAKAO',
      url: kakaoUrl
    }] : [{
      name: 'NAVER',
      url: naverUrl
    }, {
      name: 'KAKAO',
      url: kakaoUrl
    }, {
      name: 'TMAP',
      url: tmapUrl
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: `repeat(${apps.length}, 1fr)`,
        gap: 8,
        marginBottom: 18
      }
    }, apps.map(b => /*#__PURE__*/React.createElement("a", {
      key: b.name,
      href: b.url,
      target: "_blank",
      rel: "noreferrer",
      className: "tap",
      style: {
        background: '#D4E607',
        color: '#111',
        textAlign: 'center',
        padding: '12px 0',
        borderRadius: 10,
        fontFamily: "'Pretendard', sans-serif",
        fontWeight: 700,
        fontSize: 12,
        letterSpacing: '0.1em',
        textDecoration: 'none'
      }
    }, b.name)));
  })(), /*#__PURE__*/React.createElement("div", {
    className: "label-en",
    style: {
      marginBottom: 10
    }
  }, "HOW TO COME"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "num-mono",
    style: {
      fontSize: 13,
      fontWeight: 700,
      width: 56,
      paddingTop: 2
    }
  }, "지하철"), /*#__PURE__*/React.createElement("div", {
    className: "ko-reg",
    style: {
      fontSize: 13,
      color: '#333',
      lineHeight: 1.5
    }
  }, "강남역 8번 출구 실내 연결 통로 이용")), /*#__PURE__*/React.createElement("div", {
    className: "hr"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "num-mono",
    style: {
      fontSize: 13,
      fontWeight: 700,
      width: 56,
      paddingTop: 2
    }
  }, "주차"), /*#__PURE__*/React.createElement("div", {
    className: "ko-reg",
    style: {
      fontSize: 13,
      color: '#333',
      lineHeight: 1.5
    }
  }, "방문객 주차장 이용 (3시간 무료)")))));
}
function RSVPSheet({
  open,
  onClose,
  pc
}) {
  const [attending, setAttending] = React.useState(null);
  const [side, setSide] = React.useState('groom');
  const [meal, setMeal] = React.useState(true);
  const [companions, setCompanions] = React.useState(0);
  const [name, setName] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  if (submitted) {
    return /*#__PURE__*/React.createElement(Sheet, {
      open: open,
      onClose: onClose,
      title: "RSVP · 참석 의사 전달",
      pc: pc
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        padding: '24px 0 8px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "display",
      style: {
        fontSize: 64,
        color: '#111',
        lineHeight: 1
      }
    }, "THANK", /*#__PURE__*/React.createElement("br", null), "YOU"), /*#__PURE__*/React.createElement("div", {
      className: "ko-reg",
      style: {
        marginTop: 18,
        color: '#555',
        fontSize: 14,
        lineHeight: 1.6
      }
    }, "소중한 마음 잘 전달받았습니다.", /*#__PURE__*/React.createElement("br", null), "당일에 뵙기를 기다릴게요."), /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      className: "tap",
      style: {
        marginTop: 24,
        background: '#111',
        color: '#D4E607',
        border: 'none',
        padding: '14px 28px',
        borderRadius: 99,
        fontFamily: "'Pretendard', sans-serif",
        fontWeight: 700,
        letterSpacing: '0.1em',
        fontSize: 12,
        cursor: 'pointer'
      }
    }, "CLOSE")));
  }
  const Pill = ({
    on,
    children,
    ...rest
  }) => /*#__PURE__*/React.createElement("button", {
    ...rest,
    className: "tap",
    style: {
      flex: 1,
      padding: '12px 0',
      borderRadius: 10,
      cursor: 'pointer',
      border: on ? '1.5px solid #111' : '1px solid rgba(0,0,0,0.18)',
      background: on ? '#D4E607' : '#fff',
      fontWeight: on ? 700 : 500,
      fontSize: 13,
      fontFamily: "'Pretendard'"
    }
  }, children);
  return /*#__PURE__*/React.createElement(Sheet, {
    open: open,
    onClose: onClose,
    title: "RSVP · 참석 의사 전달",
    pc: pc
  }, /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 44,
      lineHeight: 0.9,
      marginBottom: 4
    }
  }, "함께해", /*#__PURE__*/React.createElement("br", null), "주실 건가요?"), /*#__PURE__*/React.createElement("div", {
    className: "ko-reg",
    style: {
      color: '#555',
      fontSize: 13,
      marginBottom: 22
    }
  }, "식사 준비에 도움이 됩니다. 부담 없이 알려주세요."), /*#__PURE__*/React.createElement("div", {
    className: "label-en",
    style: {
      marginBottom: 8
    }
  }, "참석 여부"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    on: attending === true,
    onClick: () => setAttending(true)
  }, "참석합니다"), /*#__PURE__*/React.createElement(Pill, {
    on: attending === false,
    onClick: () => setAttending(false)
  }, "참석이 어려워요")), /*#__PURE__*/React.createElement("div", {
    className: "label-en",
    style: {
      marginBottom: 8
    }
  }, "참석 인원 (본인 포함)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: '#F4F2EB',
      borderRadius: 12,
      padding: '12px 16px',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setCompanions(Math.max(0, companions - 1)),
    style: {
      width: 32,
      height: 32,
      borderRadius: 99,
      border: '1px solid #111',
      background: '#fff',
      cursor: 'pointer',
      fontSize: 18
    }
  }, "−"), /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 28
    }
  }, 1 + companions, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: '#777',
      marginLeft: 6
    }
  }, "명")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCompanions(Math.min(8, companions + 1)),
    style: {
      width: 32,
      height: 32,
      borderRadius: 99,
      border: '1px solid #111',
      background: '#D4E607',
      cursor: 'pointer',
      fontSize: 18
    }
  }, "＋")), /*#__PURE__*/React.createElement("div", {
    className: "label-en",
    style: {
      marginBottom: 8
    }
  }, "구분"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    on: side === 'groom',
    onClick: () => setSide('groom')
  }, "신랑측"), /*#__PURE__*/React.createElement(Pill, {
    on: side === 'bride',
    onClick: () => setSide('bride')
  }, "신부측")), /*#__PURE__*/React.createElement("div", {
    className: "label-en",
    style: {
      marginBottom: 8
    }
  }, "식사 여부"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    on: meal === true,
    onClick: () => setMeal(true)
  }, "예정"), /*#__PURE__*/React.createElement(Pill, {
    on: meal === false,
    onClick: () => setMeal(false)
  }, "안 함")), /*#__PURE__*/React.createElement("div", {
    className: "label-en",
    style: {
      marginBottom: 8
    }
  }, "성함"), /*#__PURE__*/React.createElement("input", {
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "홍길동",
    style: {
      width: '100%',
      padding: '14px 16px',
      border: '1px solid rgba(0,0,0,0.18)',
      borderRadius: 12,
      fontSize: 15,
      fontFamily: "'Pretendard'",
      outline: 'none',
      marginBottom: 22,
      background: '#fff'
    }
  }), /*#__PURE__*/React.createElement("button", {
    disabled: attending === null,
    onClick: () => setSubmitted(true),
    className: "tap",
    style: {
      width: '100%',
      padding: '16px 0',
      borderRadius: 99,
      background: attending === null ? '#999' : '#111',
      color: attending === null ? '#ccc' : '#D4E607',
      border: 'none',
      fontFamily: "'Pretendard', sans-serif",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '0.15em',
      cursor: attending === null ? 'not-allowed' : 'pointer'
    }
  }, "SEND RSVP →"));
}
function AccountSheet({
  open,
  onClose,
  side,
  pc
}) {
  // side: 'groom' | 'bride' | 'both'
  const groom = [{
    role: '신랑',
    name: '최해성',
    bank: '우리은행',
    no: '1002-9666-38828'
  }, {
    role: '아버지',
    name: '최교선',
    bank: '우리은행',
    no: '1002-032-377631'
  }, {
    role: '어머니',
    name: '구지영',
    bank: '신한은행',
    no: '110-444-937048'
  }];
  const bride = [{
    role: '신부',
    name: '윤채원',
    bank: '신한은행',
    no: '110-237-552513'
  }, {
    role: '아버지',
    name: '윤재경',
    bank: '카카오뱅크',
    no: '3333-03-1764677'
  }, {
    role: '어머니',
    name: '공명아',
    bank: '신한은행',
    no: '110-066-395030'
  }];
  const [copied, setCopied] = React.useState(null);
  const copy = (txt, id) => {
    navigator.clipboard?.writeText(txt);
    setCopied(id);
    setTimeout(() => setCopied(null), 1400);
  };
  const Row = ({
    a,
    idx,
    gkey
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 0',
      borderBottom: '1px solid rgba(0,0,0,0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label-en",
    style: {
      fontSize: 10,
      minWidth: 38,
      flexShrink: 0
    }
  }, a.role), /*#__PURE__*/React.createElement("span", {
    className: "ko-med",
    style: {
      fontSize: 15
    }
  }, a.name)), /*#__PURE__*/React.createElement("div", {
    className: "num-mono",
    style: {
      fontSize: 12,
      color: '#555'
    }
  }, a.bank, " · ", a.no)), /*#__PURE__*/React.createElement("button", {
    onClick: () => copy(`${a.bank} ${a.no}`, `${gkey}-${idx}`),
    className: "tap",
    style: {
      background: copied === `${gkey}-${idx}` ? gkey === 'b' ? '#D4E607' : '#111' : gkey === 'b' ? '#111' : '#D4E607',
      color: copied === `${gkey}-${idx}` ? gkey === 'b' ? '#111' : '#D4E607' : gkey === 'b' ? '#D4E607' : '#111',
      border: 'none',
      padding: '8px 14px',
      borderRadius: 99,
      fontFamily: "'Pretendard', sans-serif",
      fontWeight: 700,
      letterSpacing: '0.1em',
      fontSize: 10,
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, copied === `${gkey}-${idx}` ? 'COPIED' : 'COPY'));
  const showGroom = side === 'groom' || side === 'both';
  const showBride = side === 'bride' || side === 'both';
  return /*#__PURE__*/React.createElement(Sheet, {
    open: open,
    onClose: onClose,
    title: "마음 전하실 곳",
    pc: pc
  }, /*#__PURE__*/React.createElement("div", {
    className: "ko-reg",
    style: {
      color: '#555',
      fontSize: 13,
      marginBottom: 22,
      lineHeight: 1.6
    }
  }, "참석이 어려우신 분들을 위해 마련했습니다", /*#__PURE__*/React.createElement("br", null), "축하의 마음을 담아 보내주신 정성, 감사히 받겠습니다"), showGroom && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#D4E607',
      display: 'inline-block',
      padding: '6px 12px',
      borderRadius: 99,
      fontFamily: "'Pretendard', sans-serif",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '0.15em',
      marginBottom: 4
    }
  }, "GROOM · 신랑측"), groom.map((a, i) => /*#__PURE__*/React.createElement(Row, {
    key: i,
    a: a,
    idx: i,
    gkey: "g"
  }))), showBride && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#111',
      color: '#D4E607',
      display: 'inline-block',
      padding: '6px 12px',
      borderRadius: 99,
      fontFamily: "'Pretendard', sans-serif",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '0.15em',
      marginBottom: 4
    }
  }, "BRIDE · 신부측"), bride.map((a, i) => /*#__PURE__*/React.createElement(Row, {
    key: i,
    a: a,
    idx: i,
    gkey: "b"
  }))));
}
function ShareSheet({
  open,
  onClose,
  pc
}) {
  const [copied, setCopied] = React.useState(false);
  const link = 'https://haeseong-chaewon.wedding';
  const Btn = ({
    bg,
    fg,
    children,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    className: "tap",
    style: {
      background: bg,
      color: fg,
      border: 'none',
      padding: '14px 16px',
      borderRadius: 12,
      cursor: 'pointer',
      fontFamily: "'Pretendard'",
      fontWeight: 600,
      fontSize: 14,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, children);
  return /*#__PURE__*/React.createElement(Sheet, {
    open: open,
    onClose: onClose,
    title: "Share · 공유하기",
    pc: pc
  }, /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 36,
      lineHeight: 0.95,
      marginBottom: 18
    }
  }, "함께", /*#__PURE__*/React.createElement("br", null), "나눠주세요"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    bg: "#FEE500",
    fg: "#111"
  }, /*#__PURE__*/React.createElement("span", null, "카카오톡으로 공유"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Pretendard', sans-serif",
      fontSize: 11,
      letterSpacing: '0.1em'
    }
  }, "KAKAO →")), /*#__PURE__*/React.createElement(Btn, {
    bg: "#03C75A",
    fg: "#fff"
  }, /*#__PURE__*/React.createElement("span", null, "네이버 밴드로 공유"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Pretendard', sans-serif",
      fontSize: 11,
      letterSpacing: '0.1em'
    }
  }, "BAND →")), /*#__PURE__*/React.createElement(Btn, {
    bg: "#111",
    fg: "#D4E607",
    onClick: () => {
      navigator.clipboard?.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    }
  }, /*#__PURE__*/React.createElement("span", null, copied ? '복사되었습니다' : '링크 복사'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Pretendard', sans-serif",
      fontSize: 11,
      letterSpacing: '0.1em'
    }
  }, copied ? 'OK' : 'COPY'))), /*#__PURE__*/React.createElement("div", {
    className: "num-mono",
    style: {
      marginTop: 18,
      fontSize: 11,
      color: '#777',
      textAlign: 'center'
    }
  }, link));
}
function CalendarSheet({
  open,
  onClose,
  pc
}) {
  const [saved, setSaved] = React.useState(null);
  const text = encodeURIComponent('채원 ♡ 해성 결혼식');
  const loc = encodeURIComponent('삼성전자 서초사옥 5층 웨딩홀, 서울 서초구 서초대로74길 11');
  const desc = encodeURIComponent('두 사람의 이야기가 하나가 되는 날 · 함께 축복해 주세요');
  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=20260912T040000Z%2F20260912T060000Z&details=${desc}&location=${loc}`;
  const downloadICS = label => {
    const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Wedding//KR', 'BEGIN:VEVENT', 'DTSTART:20260912T040000Z', 'DTEND:20260912T060000Z', 'SUMMARY:채원 ♡ 해성 결혼식', 'LOCATION:삼성전자 서초사옥 5층 웨딩홀\\, 서울 서초구 서초대로74길 11', 'DESCRIPTION:두 사람의 이야기가 하나가 되는 날', 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
    const blob = new Blob([ics], {
      type: 'text/calendar;charset=utf-8'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'chaewon-haeseong-wedding.ics';
    a.click();
    URL.revokeObjectURL(url);
    setSaved(label);
    setTimeout(() => setSaved(null), 2000);
  };
  const Row = ({
    bg,
    fg,
    label,
    tag,
    href,
    onClick
  }) => {
    const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Pretendard', sans-serif",
        fontWeight: 600,
        fontSize: 14
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Pretendard', sans-serif",
        fontSize: 11,
        letterSpacing: '0.1em',
        opacity: 0.75
      }
    }, saved === label ? 'SAVED ✓' : tag));
    const shared = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      padding: '14px 16px',
      borderRadius: 12,
      background: bg,
      color: fg,
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'none'
    };
    return href ? /*#__PURE__*/React.createElement("a", {
      href: href,
      target: "_blank",
      rel: "noreferrer",
      className: "tap",
      style: shared
    }, inner) : /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      className: "tap",
      style: shared
    }, inner);
  };
  return /*#__PURE__*/React.createElement(Sheet, {
    open: open,
    onClose: onClose,
    title: "캘린더에 저장",
    pc: pc
  }, /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 38,
      lineHeight: 0.95,
      marginBottom: 6
    }
  }, "2026년", /*#__PURE__*/React.createElement("br", null), "9월 12일 토"), /*#__PURE__*/React.createElement("div", {
    className: "ko-reg",
    style: {
      fontSize: 13,
      color: '#555',
      marginBottom: 22
    }
  }, "오후 1시 · 삼성전자 서초사옥 5층 웨딩홀"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Row, {
    bg: "#4285F4",
    fg: "#fff",
    label: "구글 캘린더",
    tag: "GOOGLE →",
    href: googleUrl
  })));
}
Object.assign(window, {
  Sheet,
  MapSheet,
  RSVPSheet,
  AccountSheet,
  ShareSheet,
  CalendarSheet
});