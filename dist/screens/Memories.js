/* MEMORIES — 4-tab Instagram-style profile · chaewon_and_haeseong */

/* ─── Tab Icons ────────────────────────────────────────────── */
function TabIconGrid({
  active,
  ink
}) {
  const c = active ? ink : '#AAAAAA';
  const sq = (x, y) => /*#__PURE__*/React.createElement("rect", {
    key: `${x}${y}`,
    x: x,
    y: y,
    width: "6",
    height: "6",
    fill: c
  });
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, sq(1, 1), sq(9, 1), sq(17, 1), sq(1, 9), sq(9, 9), sq(17, 9), sq(1, 17), sq(9, 17), sq(17, 17));
}
function TabIconFeed({
  active,
  ink
}) {
  const c = active ? ink : '#AAAAAA';
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "2",
    y1: "8",
    x2: "22",
    y2: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "2",
    x2: "8",
    y2: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "2",
    x2: "16",
    y2: "8"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "9.5,12 9.5,18.5 17,15.5",
    fill: c,
    stroke: "none"
  }));
}
function TabIconTagged({
  active,
  ink
}) {
  const c = active ? ink : '#AAAAAA';
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "4",
    ry: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "9",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 19a5.5 5.5 0 0 1 11 0"
  }));
}
function TabIconBookmark({
  active,
  ink
}) {
  const c = active ? ink : '#AAAAAA';
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: active ? ink : 'none',
    stroke: c,
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17l-6-4.5L6 21V4z"
  }));
}
function TabIconMention({
  active,
  ink
}) {
  const c = active ? ink : '#AAAAAA';
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "7",
    r: "4"
  }));
}

/* ─── Post Icons ───────────────────────────────────────────── */
function HeartIcon({
  filled
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: filled ? '#E0345A' : 'none',
    stroke: filled ? '#E0345A' : '#111',
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
  }));
}
function CommentIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#111",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
  }));
}
function SendIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#111",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "22",
    y1: "2",
    x2: "11",
    y2: "13"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "22 2 15 22 11 13 2 9 22 2"
  }));
}

/* ─── Photo Carousel ────────────────────────────────────────── */
function PhotoCarousel({
  postId,
  photoCount,
  images = [],
  onSwipeBack
}) {
  const [slide, setSlide] = React.useState(0);
  const [dragDx, setDragDx] = React.useState(0);
  const trackRef = React.useRef(null);
  const startX = React.useRef(0);
  const startY = React.useRef(0);
  const dir = React.useRef(null); // 'x' | 'y' | null — 첫 제스처 방향 잠금
  const widthRef = React.useRef(0);
  const goTo = i => setSlide(Math.max(0, Math.min(photoCount - 1, i)));

  // 세로 스와이프는 touch-action:pan-y 로 브라우저가 페이지 스크롤을 처리하고,
  // 가로 스와이프만 JS가 처리해 슬라이드를 넘긴다. (네이티브 가로 스크롤 컨테이너가
  // iOS에서 세로 스크롤을 가로채던 문제를 근본적으로 제거)
  const onTouchStart = e => {
    if (photoCount < 2 && !onSwipeBack) return;
    e.stopPropagation();
    const t = e.touches[0];
    startX.current = t.clientX;
    startY.current = t.clientY;
    dir.current = null;
    widthRef.current = trackRef.current ? trackRef.current.clientWidth : 0;
  };
  const onTouchMove = e => {
    if (photoCount < 2 && !onSwipeBack) return;
    const t = e.touches[0];
    const dx = t.clientX - startX.current;
    const dy = t.clientY - startY.current;
    if (dir.current === null && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
      dir.current = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
    }
    if (dir.current === 'x') {
      let d = dx;
      if (slide === 0 && dx > 0 || slide === photoCount - 1 && dx < 0) d = dx * 0.35;
      setDragDx(d);
    }
  };
  const onTouchEnd = () => {
    if (dir.current === 'x') {
      const w = widthRef.current || 1;
      const threshold = Math.max(40, w * 0.2);
      if (dragDx <= -threshold && photoCount >= 2) goTo(slide + 1);else if (dragDx >= threshold) {
        if (slide === 0 && onSwipeBack) onSwipeBack();else if (photoCount >= 2) goTo(slide - 1);
      }
    }
    dir.current = null;
    setDragDx(0);
  };

  // 마우스 드래그 (PC) — touch 이벤트와 중복 방지를 위해 pointerType 체크
  const onPointerDown = e => {
    if (e.pointerType === 'touch' || photoCount < 2) return;
    startX.current = e.clientX;
    dir.current = 'x';
    widthRef.current = e.currentTarget.clientWidth;
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = e => {
    if (e.pointerType === 'touch' || dir.current !== 'x') return;
    const dx = e.clientX - startX.current;
    let d = dx;
    if (slide === 0 && dx > 0 || slide === photoCount - 1 && dx < 0) d = dx * 0.35;
    setDragDx(d);
  };
  const onPointerUp = e => {
    if (e.pointerType === 'touch' || dir.current !== 'x') return;
    dir.current = null;
    const dx = e.clientX - startX.current;
    const w = widthRef.current || 1;
    const threshold = Math.max(40, w * 0.2);
    if (dx <= -threshold) goTo(slide + 1);else if (dx >= threshold) goTo(slide - 1);
    setDragDx(0);
  };

  // 이미지가 있으면 원본 비율, 없으면 4:5 플레이스홀더
  const hasPreset = images.length > 0 && images.some(Boolean);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onPointerDown: onPointerDown,
    onPointerMove: onPointerMove,
    onPointerUp: onPointerUp,
    onPointerCancel: onPointerUp,
    style: {
      position: 'relative',
      width: '100%',
      ...(hasPreset ? {} : {
        aspectRatio: '4/5'
      }),
      overflow: 'hidden',
      background: '#F4F2EB',
      cursor: photoCount > 1 ? 'grab' : 'default'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd,
    onTouchCancel: onTouchEnd,
    className: "carousel-strip",
    style: {
      ...(hasPreset ? {
        position: 'relative',
        width: '100%'
      } : {
        position: 'absolute',
        inset: 0
      }),
      display: 'flex',
      touchAction: 'pan-y',
      transform: `translateX(calc(${-slide * 100}% + ${dragDx}px))`,
      transition: dragDx === 0 ? 'transform .35s cubic-bezier(.32,.72,0,1)' : 'none',
      willChange: 'transform'
    }
  }, Array.from({
    length: photoCount
  }, (_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      ...(hasPreset ? {
        flex: '0 0 100%',
        minWidth: 0
      } : {
        minWidth: '100%',
        height: '100%'
      }),
      flexShrink: 0,
      overflow: 'hidden'
    }
  }, images[i] ? /*#__PURE__*/React.createElement("img", {
    src: images[i],
    alt: "",
    loading: "lazy",
    decoding: "async",
    draggable: false,
    style: {
      width: '100%',
      height: 'auto',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("image-slot", {
    id: `${postId}-p${i}`,
    shape: "rect",
    fit: "cover",
    placeholder: "탭하여 사진 추가",
    style: {
      width: '100%',
      height: '100%',
      display: 'block'
    }
  })))), photoCount > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      zIndex: 5,
      background: 'rgba(0,0,0,0.55)',
      color: '#fff',
      padding: '3px 9px',
      borderRadius: 99,
      fontFamily: "'Bricolage Grotesque',sans-serif",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.04em',
      pointerEvents: 'none'
    }
  }, slide + 1, "/", photoCount), photoCount > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10,
      zIndex: 5,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "rgba(255,255,255,0.9)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "13",
    height: "13",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 6h3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-3"
  })))), photoCount > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 5,
      padding: '8px 0 2px',
      background: '#fff'
    }
  }, Array.from({
    length: photoCount
  }, (_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => goTo(i),
    style: {
      width: i === slide ? 7 : 5,
      height: i === slide ? 7 : 5,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      background: i === slide ? '#111' : 'rgba(17,17,17,0.28)',
      transition: 'all .15s'
    }
  }))));
}

/* carousel icon for grid cells */
function CarouselBadge() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 8,
      right: 8,
      filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.35))'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "7.5",
    y: "3.5",
    width: "13",
    height: "13",
    rx: "3.5",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3.5",
    y: "7.5",
    width: "13",
    height: "13",
    rx: "3.5",
    fill: "#fff",
    stroke: "#fff",
    strokeWidth: "2"
  })));
}

/* ─── Feed Post ─────────────────────────────────────────────── */
function MemoryPost({
  id,
  date,
  caption,
  likes,
  photoCount = 1,
  images = [],
  lime,
  ink,
  onSwipeBack
}) {
  const [liked, setLiked] = React.useState(false);
  const [heartPop, setHeartPop] = React.useState(false);
  const likeN = parseInt(likes.replace(',', ''));
  const handleLike = () => {
    setLiked(l => !l);
    setHeartPop(true);
    setTimeout(() => setHeartPop(false), 300);
  };
  const swipeX = React.useRef(null);
  const onPostTouchStart = e => {
    swipeX.current = e.touches[0].clientX;
  };
  const onPostTouchEnd = e => {
    if (swipeX.current === null) return;
    const dx = e.changedTouches[0].clientX - swipeX.current;
    swipeX.current = null;
    if (dx > 60 && onSwipeBack) onSwipeBack();
  };
  return /*#__PURE__*/React.createElement("div", {
    id: 'post-' + id,
    onTouchStart: onPostTouchStart,
    onTouchEnd: onPostTouchEnd,
    style: {
      background: '#fff',
      borderBottom: '1px solid rgba(17,17,17,0.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      flexShrink: 0,
      border: `1.5px solid ${ink}`,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/couple-main.jpg",
    alt: "채원 ♥ 해성",
    loading: "lazy",
    decoding: "async",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 20%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Pretendard',sans-serif",
      fontWeight: 700,
      fontSize: 13,
      color: ink
    }
  }, "chaewon_and_haeseong"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 11,
      color: '#888',
      marginTop: 1
    }
  }, date)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      color: '#888',
      letterSpacing: '0.08em'
    }
  }, "···")), /*#__PURE__*/React.createElement(PhotoCarousel, {
    postId: id,
    photoCount: photoCount,
    images: images,
    onSwipeBack: onSwipeBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '10px 14px 6px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleLike,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      transform: heartPop ? 'scale(1.35)' : 'scale(1)',
      transition: 'transform 0.15s'
    }
  }, /*#__PURE__*/React.createElement(HeartIcon, {
    filled: liked
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(CommentIcon, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(SendIcon, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Pretendard',sans-serif",
      fontWeight: 700,
      fontSize: 13,
      color: ink,
      padding: '0 14px 4px'
    }
  }, "좋아요 ", liked ? (likeN + 1).toLocaleString() : likes, "개"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 13,
      lineHeight: 1.6,
      color: '#111',
      padding: '0 14px 16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      marginRight: 6,
      color: ink
    }
  }, "chaewon_and_haeseong"), caption));
}

/* ─── Following Sheet ──────────────────────────────────────── */
function FollowingSheet({
  open,
  onClose,
  lime,
  ink,
  onOpenMap,
  onOpenAccount,
  onOpenCalendar
}) {
  const [dragY, setDragY] = React.useState(0);
  const [closing, setClosing] = React.useState(false);
  const [toast, setToast] = React.useState('');
  const drag = React.useRef({
    active: false,
    startY: 0,
    startTime: 0,
    delta: 0
  });
  const showToast = msg => {
    setToast(msg);
    setTimeout(() => setToast(''), 2200);
  };
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
  if (!open) return null;
  const items = [{
    label: '친한 친구 리스트에 추가',
    icon: 'star-filled',
    action: () => showToast('이미 친한 친구잖아요 😄')
  }, {
    label: '결혼식 캘린더에 저장',
    icon: 'star-empty',
    action: () => onOpenCalendar()
  }, {
    label: '오시는 길 보기',
    icon: 'chevron',
    action: () => onOpenMap()
  }, {
    label: '팔로우 취소',
    red: true,
    action: () => showToast('그럴 수는 없어요 💍')
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "scrim",
    onClick: onClose,
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      zIndex: 110
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      background: '#fff',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
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
      padding: '12px 0 22px',
      display: 'flex',
      justifyContent: 'center',
      cursor: 'grab',
      touchAction: 'none',
      userSelect: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 4,
      borderRadius: 99,
      background: 'rgba(0,0,0,0.18)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '10px 0 16px',
      fontFamily: "'Pretendard', sans-serif",
      fontWeight: 700,
      fontSize: 15,
      color: '#111'
    }
  }, "chaewon_and_haeseong"), items.map((item, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("button", {
    onClick: item.action,
    className: "tap",
    style: {
      width: '100%',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 20px',
      fontFamily: "'Pretendard', sans-serif",
      fontSize: 16,
      color: item.red ? '#E0345A' : '#111',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", null, item.label), item.icon === 'star-filled' && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: 'rgba(17,17,17,0.09)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "#111",
    stroke: "none"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
  }))), item.icon === 'star-empty' && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: 'rgba(17,17,17,0.09)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#111",
    strokeWidth: "1.8",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
  }))), item.icon === 'chevron' && /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#C0C0C0",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "9,18 15,12 9,6"
  }))), i < items.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(17,17,17,0.09)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 28
    }
  }))), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 90,
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'rgba(17,17,17,0.88)',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: 99,
      fontFamily: "'Pretendard', sans-serif",
      fontSize: 13,
      fontWeight: 500,
      whiteSpace: 'nowrap',
      zIndex: 200,
      pointerEvents: 'none'
    }
  }, toast));
}

/* ─── Guestbook ─────────────────────────────────────────────── */
const GB_KEY = 'hc-guestbook-2026';
const GB_DELETED_KEY = 'hc-guestbook-deleted-2026';
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxFJvwTmwBzxQLx9CUYMQABj3Ivj2HBzpvj8c-uQl38amKC6qf79rqkxdAv4XdHyLsq/exec';
function gbLoad() {
  try {
    return JSON.parse(localStorage.getItem(GB_KEY)) || [];
  } catch {
    return [];
  }
}
function gbSave(msgs) {
  try {
    localStorage.setItem(GB_KEY, JSON.stringify(msgs));
  } catch {}
}
function getDeletedIds() {
  try {
    return new Set(JSON.parse(localStorage.getItem(GB_DELETED_KEY)) || []);
  } catch {
    return new Set();
  }
}
function addDeletedId(id) {
  try {
    const ids = getDeletedIds();
    ids.add(id);
    localStorage.setItem(GB_DELETED_KEY, JSON.stringify([...ids]));
  } catch {}
}
function compressImage(file, cb) {
  const reader = new FileReader();
  reader.onload = e => {
    const img = new Image();
    img.onload = () => {
      // 고화질: 최대 3000px, JPEG 95% 품질
      const MAX = 3000;
      const ratio = Math.min(MAX / img.width, MAX / img.height, 1);
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(img.width * ratio);
      canvas.height = Math.round(img.height * ratio);
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      cb(canvas.toDataURL('image/jpeg', 0.95));
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}
function GuestbookTab({
  lime,
  ink
}) {
  const [messages, setMessages] = React.useState(gbLoad);
  const [name, setName] = React.useState('');
  const [text, setText] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [photo, setPhoto] = React.useState(null);
  const [sending, setSending] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [managingId, setManagingId] = React.useState(null);
  const [manageInput, setManageInput] = React.useState('');
  const [manageError, setManageError] = React.useState(false);
  const [editingId, setEditingId] = React.useState(null);
  const [editText, setEditText] = React.useState('');
  const fileRef = React.useRef(null);
  React.useEffect(() => {
    fetch(`${SCRIPT_URL}?action=list`).then(r => r.json()).then(sheetsData => {
      const localData = gbLoad();
      const localMap = Object.fromEntries(localData.map(m => [Number(m.id), m]));
      const deleted = getDeletedIds();
      const merged = sheetsData.filter(sm => !deleted.has(sm.id)).map(sm => ({
        ...sm,
        pw: localMap[sm.id]?.pw || '',
        photo: localMap[sm.id]?.photo || null
      }));
      setMessages(merged);
      gbSave(merged);
    }).catch(() => {});
  }, []);
  const handlePhoto = e => {
    const f = e.target.files[0];
    if (!f) return;
    compressImage(f, url => setPhoto(url));
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    setSending(true);
    const ts = new Date().toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const newMsg = {
      id: Date.now(),
      name: name.trim(),
      text: text.trim(),
      pw: pw.trim(),
      photo,
      ts
    };
    const params = new URLSearchParams({
      id: newMsg.id,
      name: newMsg.name,
      text: newMsg.text,
      ts,
      hasPhoto: !!photo
    });
    fetch(`${SCRIPT_URL}?${params}`, {
      mode: 'no-cors'
    }).catch(() => {});
    const updated = [newMsg, ...messages];
    setMessages(updated);
    gbSave(updated);
    setName('');
    setText('');
    setPw('');
    setPhoto(null);
    setSending(false);
    setDone(true);
    setTimeout(() => setDone(false), 2500);
  };
  const closeManage = () => {
    setManagingId(null);
    setManageInput('');
    setManageError(false);
  };
  const handleManageConfirm = msg => {
    if (manageInput === msg.pw) {
      setManageError(false);
      setEditingId(msg.id);
      setEditText(msg.text);
      setManagingId(null);
      setManageInput('');
    } else {
      setManageError(true);
    }
  };
  const handleEditSave = msg => {
    if (!editText.trim()) return;
    const updated = messages.map(m => m.id === msg.id ? {
      ...m,
      text: editText.trim()
    } : m);
    setMessages(updated);
    gbSave(updated);
    setEditingId(null);
    setEditText('');
  };
  const handleDelete = msg => {
    addDeletedId(msg.id);
    const updated = messages.filter(m => m.id !== msg.id);
    setMessages(updated);
    gbSave(updated);
    setEditingId(null);
  };
  const initials = n => n.trim().slice(0, 1).toUpperCase() || '?';
  const colors = ['#D4E607', '#111', '#FFB7C5', '#3B6CFF', '#F5E64B', '#1F8A5B'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAFAFA'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      padding: '28px 20px 20px',
      textAlign: 'center',
      borderBottom: '1px solid rgba(17,17,17,0.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bricolage Grotesque',sans-serif",
      fontSize: 28,
      fontWeight: 400,
      color: ink,
      lineHeight: 1,
      marginBottom: 8
    }
  }, "축하 메시지를", /*#__PURE__*/React.createElement("br", null), "남겨주세요"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 13,
      color: '#666',
      lineHeight: 1.6
    }
  }, "해성과 채원에게 전하고 싶은 말,", /*#__PURE__*/React.createElement("br", null), "사진과 함께 남겨주세요.")), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    style: {
      background: '#fff',
      margin: '8px 0',
      padding: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.12em',
      color: '#888',
      marginBottom: 6,
      textTransform: 'uppercase'
    }
  }, "이름"), /*#__PURE__*/React.createElement("input", {
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "김서연",
    required: true,
    style: {
      width: '100%',
      padding: '12px 14px',
      border: '1px solid rgba(17,17,17,0.18)',
      borderRadius: 10,
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 15,
      outline: 'none',
      background: '#FAFAFA'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.12em',
      color: '#888',
      marginBottom: 6,
      textTransform: 'uppercase'
    }
  }, "메시지"), /*#__PURE__*/React.createElement("textarea", {
    value: text,
    onChange: e => setText(e.target.value),
    placeholder: "두 분의 행복한 앞날을 응원합니다!",
    required: true,
    rows: 4,
    style: {
      width: '100%',
      padding: '12px 14px',
      border: '1px solid rgba(17,17,17,0.18)',
      borderRadius: 10,
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 14,
      outline: 'none',
      resize: 'none',
      background: '#FAFAFA',
      lineHeight: 1.6
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.12em',
      color: '#888',
      marginBottom: 8,
      textTransform: 'uppercase'
    }
  }, "사진 (선택)"), /*#__PURE__*/React.createElement("input", {
    ref: fileRef,
    type: "file",
    accept: "image/*",
    capture: "environment",
    onChange: handlePhoto,
    style: {
      display: 'none'
    }
  }), photo ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "preview",
    loading: "lazy",
    decoding: "async",
    style: {
      width: 90,
      height: 90,
      objectFit: 'cover',
      borderRadius: 12,
      border: '1px solid rgba(17,17,17,0.10)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setPhoto(null),
    style: {
      position: 'absolute',
      top: -6,
      right: -6,
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: ink,
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      fontSize: 13,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      lineHeight: 1
    }
  }, "×")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => fileRef.current?.click(),
    style: {
      padding: '8px 14px',
      border: `1.5px solid rgba(17,17,17,0.18)`,
      borderRadius: 10,
      background: 'none',
      cursor: 'pointer',
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 12,
      color: '#555',
      alignSelf: 'center'
    }
  }, "변경")) : /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => fileRef.current?.click(),
    style: {
      width: '100%',
      padding: '16px',
      border: `1.5px dashed rgba(17,17,17,0.20)`,
      borderRadius: 12,
      background: '#FAFAFA',
      cursor: 'pointer',
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 13,
      color: '#666',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#999",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "8.5",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 15-5-5L5 21"
  })), /*#__PURE__*/React.createElement("span", null, "사진 선택하기"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#aaa'
    }
  }, "갤러리 또는 카메라"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.12em',
      color: '#888',
      marginBottom: 6,
      textTransform: 'uppercase'
    }
  }, "비밀번호"), /*#__PURE__*/React.createElement("input", {
    value: pw,
    onChange: e => setPw(e.target.value),
    type: "password",
    placeholder: "삭제·수정할 때 사용해요",
    required: true,
    style: {
      width: '100%',
      padding: '12px 14px',
      border: '1px solid rgba(17,17,17,0.18)',
      borderRadius: 10,
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 15,
      outline: 'none',
      background: '#FAFAFA'
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: sending,
    style: {
      width: '100%',
      padding: '15px 0',
      borderRadius: 99,
      border: 'none',
      background: done ? '#1F8A5B' : ink,
      color: done ? '#fff' : lime,
      fontFamily: "'Pretendard',sans-serif",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '0.15em',
      cursor: sending ? 'not-allowed' : 'pointer',
      transition: 'all .3s'
    }
  }, done ? '전달되었습니다 ✓' : sending ? '전송 중...' : '메시지 보내기 →')), messages.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px 8px',
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.14em',
      color: '#999',
      textTransform: 'uppercase'
    }
  }, messages.length, "개의 메시지"), messages.map((msg, i) => /*#__PURE__*/React.createElement("div", {
    key: msg.id,
    style: {
      background: '#fff',
      margin: '0 0 2px',
      padding: '16px 20px',
      borderBottom: '1px solid rgba(17,17,17,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      flexShrink: 0,
      background: colors[i % colors.length],
      color: [1].includes(i % colors.length) ? lime : ink,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Bricolage Grotesque',sans-serif",
      fontWeight: 700,
      fontSize: 16
    }
  }, initials(msg.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Pretendard',sans-serif",
      fontWeight: 700,
      fontSize: 14,
      color: ink
    }
  }, msg.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 11,
      color: '#aaa'
    }
  }, msg.ts), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setManagingId(msg.id);
      setManageInput('');
      setManageError(false);
      setEditingId(null);
    },
    style: {
      marginLeft: 'auto',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: '#ccc',
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 12,
      padding: 0,
      flexShrink: 0
    }
  }, "수정·삭제")), managingId === msg.id && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: manageInput,
    onChange: e => {
      setManageInput(e.target.value);
      setManageError(false);
    },
    onKeyDown: e => e.key === 'Enter' && handleManageConfirm(msg),
    type: "password",
    placeholder: "비밀번호 입력",
    autoFocus: true,
    style: {
      flex: 1,
      padding: '8px 12px',
      border: `1px solid ${manageError ? '#E0345A' : 'rgba(17,17,17,0.18)'}`,
      borderRadius: 8,
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 13,
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => handleManageConfirm(msg),
    style: {
      padding: '8px 12px',
      background: ink,
      color: lime,
      border: 'none',
      borderRadius: 8,
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 12,
      fontWeight: 700,
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, "확인"), /*#__PURE__*/React.createElement("button", {
    onClick: closeManage,
    style: {
      padding: '8px 10px',
      background: 'none',
      border: '1px solid rgba(17,17,17,0.18)',
      borderRadius: 8,
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 12,
      cursor: 'pointer',
      color: '#666'
    }
  }, "취소")), manageError && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5,
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 12,
      color: '#E0345A'
    }
  }, "비밀번호가 맞지 않아요")), editingId === msg.id ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("textarea", {
    value: editText,
    onChange: e => setEditText(e.target.value),
    rows: 3,
    style: {
      width: '100%',
      padding: '10px 12px',
      border: '1px solid rgba(17,17,17,0.18)',
      borderRadius: 8,
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 14,
      outline: 'none',
      resize: 'none',
      lineHeight: 1.6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => handleEditSave(msg),
    style: {
      flex: 1,
      padding: '9px 0',
      background: ink,
      color: lime,
      border: 'none',
      borderRadius: 8,
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 12,
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, "저장"), /*#__PURE__*/React.createElement("button", {
    onClick: () => handleDelete(msg),
    style: {
      padding: '9px 14px',
      background: 'none',
      border: '1px solid #E0345A',
      borderRadius: 8,
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 12,
      color: '#E0345A',
      cursor: 'pointer'
    }
  }, "삭제"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setEditingId(null),
    style: {
      padding: '9px 14px',
      background: 'none',
      border: '1px solid rgba(17,17,17,0.18)',
      borderRadius: 8,
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 12,
      color: '#666',
      cursor: 'pointer'
    }
  }, "취소"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 14,
      color: '#222',
      lineHeight: 1.65
    }
  }, msg.text), msg.photo && /*#__PURE__*/React.createElement("img", {
    src: msg.photo,
    alt: "",
    loading: "lazy",
    decoding: "async",
    style: {
      marginTop: 10,
      width: 120,
      height: 120,
      objectFit: 'cover',
      borderRadius: 8,
      border: '1px solid rgba(17,17,17,0.08)'
    }
  })))))), messages.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 20px',
      textAlign: 'center',
      color: '#bbb',
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 14
    }
  }, "아직 메시지가 없어요.", /*#__PURE__*/React.createElement("br", null), "첫 번째로 남겨주세요!"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 80
    }
  }));
}

/* ─── Story Viewer ─────────────────────────────────────────── */
function StoryViewer({
  groups,
  startGroupIdx = 0,
  onClose
}) {
  const [groupIdx, setGroupIdx] = React.useState(startGroupIdx);
  const [idx, setIdx] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const [dir, setDir] = React.useState(1);
  const [paused, setPaused] = React.useState(false); // 홀드 중 일시정지 (인스타 방식)
  const timerRef = React.useRef(null);
  const touchRef = React.useRef(null);
  const progressRef = React.useRef(0); // 일시정지 후 이어서 재생하기 위한 현재 진행도
  const DURATION = 4000;
  const images = groups[groupIdx]?.images || [];
  const goPrev = () => {
    if (idx === 0 && groupIdx === 0) return;
    cancelAnimationFrame(timerRef.current);
    setDir(-1);
    setProgress(0);
    if (idx > 0) {
      setIdx(idx - 1);
    } else {
      const prevImgs = groups[groupIdx - 1].images;
      setGroupIdx(groupIdx - 1);
      setIdx(prevImgs.length - 1);
    }
  };
  const goNext = React.useCallback(() => {
    cancelAnimationFrame(timerRef.current);
    setDir(1);
    setProgress(0);
    if (idx + 1 < images.length) {
      setIdx(idx + 1);
    } else if (groupIdx + 1 < groups.length) {
      setGroupIdx(groupIdx + 1);
      setIdx(0);
    } else {
      onClose();
    }
  }, [idx, images.length, groupIdx, groups.length, onClose]);

  // 새 사진으로 바뀌면 진행도 초기화
  React.useEffect(() => {
    progressRef.current = 0;
    setProgress(0);
  }, [idx, groupIdx]);

  // 자동 넘김 타이머 — 홀드 중(paused)에는 멈추고, 손을 떼면 남은 시간부터 이어서 진행
  React.useEffect(() => {
    if (paused) return;
    const startPct = progressRef.current;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, startPct + elapsed / DURATION * 100);
      progressRef.current = pct;
      setProgress(pct);
      if (pct < 100) {
        timerRef.current = requestAnimationFrame(tick);
      } else {
        goNext();
      }
    };
    timerRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(timerRef.current);
  }, [idx, groupIdx, paused, goNext]);
  const onTouchStart = e => {
    e.stopPropagation();
    const t = e.touches[0];
    touchRef.current = {
      x: t.clientX,
      y: t.clientY,
      t: Date.now()
    };
    setPaused(true); // 손가락을 대고 있는 동안 자동 넘김 정지
  };
  const onTouchMove = e => {
    e.stopPropagation();
  };
  const onTouchCancel = e => {
    e.stopPropagation();
    touchRef.current = null;
    setPaused(false);
  };
  const onTouchEnd = e => {
    e.stopPropagation();
    setPaused(false); // 손을 떼면 남은 시간부터 재생 재개
    if (!touchRef.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchRef.current.x;
    const dy = t.clientY - touchRef.current.y;
    const dt = Date.now() - touchRef.current.t;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    touchRef.current = null;

    // 아래로 스와이프 (세로가 가로보다 우세) → 닫기
    if (dy > 50 && absDy > absDx) {
      onClose();
      return;
    }

    // 수평 스와이프 (가로가 세로보다 우세, 40px 이상) → 그룹(하이라이트) 간 이동
    if (absDx > 40 && absDx > absDy) {
      cancelAnimationFrame(timerRef.current);
      setProgress(0);
      if (dx < 0) {
        if (groupIdx + 1 < groups.length) {
          setDir(1);
          setGroupIdx(groupIdx + 1);
          setIdx(0);
        } else {
          onClose();
        }
      } else {
        if (groupIdx > 0) {
          setDir(-1);
          setGroupIdx(groupIdx - 1);
          setIdx(0);
        }
      }
      return;
    }

    // 빠른 탭 → 현재 그룹 내 이전/다음 사진
    if (absDx < 12 && absDy < 12 && dt < 280) {
      const w = e.currentTarget.getBoundingClientRect().width;
      if (t.clientX < w * 0.38) goPrev();else goNext();
    }
  };

  // 마우스 누르고 있는 동안(PC) 자동 넘김 정지
  const onPointerDown = e => {
    if (e.pointerType !== 'mouse') return;
    setPaused(true);
  };

  // 마우스 클릭 (PC) — 좌 38% 클릭 → 이전, 우 62% 클릭 → 다음
  const onPointerUp = e => {
    if (e.pointerType !== 'mouse') return;
    setPaused(false);
    const w = e.currentTarget.getBoundingClientRect().width;
    if (e.clientX < w * 0.38) goPrev();else goNext();
  };
  return /*#__PURE__*/React.createElement("div", {
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd,
    onTouchCancel: onTouchCancel,
    onPointerDown: onPointerDown,
    onPointerUp: onPointerUp,
    style: {
      // 스크롤 중인 .inv-screen이 아니라 모달 프레임(transform 조상)에 고정 →
      // 그리드가 스크롤된 상태에서도 하단에 빈틈이 생겨 뒤가 비쳐 보이지 않는다.
      position: 'fixed',
      inset: 0,
      background: '#000',
      zIndex: 300,
      display: 'flex',
      flexDirection: 'column',
      userSelect: 'none',
      WebkitUserSelect: 'none',
      WebkitTouchCallout: 'none',
      // iOS 길게 누르기 컨텍스트 메뉴 차단
      cursor: 'pointer',
      touchAction: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3,
      padding: '14px 10px 8px',
      zIndex: 2
    }
  }, images.map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: 2,
      background: 'rgba(255,255,255,0.3)',
      borderRadius: 99,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      borderRadius: 99,
      background: '#fff',
      width: i < idx ? '100%' : i === idx ? `${progress}%` : '0%',
      transition: i === idx ? 'none' : undefined
    }
  })))), /*#__PURE__*/React.createElement("button", {
    onPointerUp: e => {
      e.stopPropagation();
      onClose();
    },
    onTouchEnd: e => {
      e.stopPropagation();
      onClose();
    },
    onClick: e => {
      e.stopPropagation();
      onClose();
    },
    style: {
      position: 'absolute',
      top: 14,
      right: 12,
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'rgba(0,0,0,0.35)',
      border: 'none',
      cursor: 'pointer',
      color: '#fff',
      fontSize: 20,
      zIndex: 3,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      WebkitTapHighlightColor: 'transparent'
    }
  }, "×"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: 16,
      transform: 'translateY(-50%)',
      color: 'rgba(255,255,255,0.25)',
      fontSize: 22,
      zIndex: 2,
      pointerEvents: 'none',
      lineHeight: 1
    }
  }, "‹"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      right: 16,
      transform: 'translateY(-50%)',
      color: 'rgba(255,255,255,0.25)',
      fontSize: 22,
      zIndex: 2,
      pointerEvents: 'none',
      lineHeight: 1
    }
  }, "›"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    key: idx,
    src: images[idx],
    alt: "",
    loading: "lazy",
    decoding: "async",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      animation: `${dir > 0 ? 'story-enter-right' : 'story-enter-left'} 220ms cubic-bezier(.25,.46,.45,.94) both`,
      pointerEvents: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '10px 0 16px',
      color: 'rgba(255,255,255,0.3)',
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 11,
      letterSpacing: '0.1em',
      pointerEvents: 'none'
    }
  }, "아래로 스와이프하여 닫기"));
}

/* ─── Main Screen ───────────────────────────────────────────── */
function MemoriesScreen({
  goTo,
  tweaks,
  openSheet,
  backHandlerRef
}) {
  const lime = tweaks.lime;
  const ink = tweaks.ink;
  const [tab, setTab] = React.useState('grid');
  const [feedActive, setFeedActive] = React.useState(false);
  const [feedType, setFeedType] = React.useState('posts'); // 'posts' | 'interests'
  const [feedScrollTo, setFeedScrollTo] = React.useState(null);
  const [story, setStory] = React.useState(null);
  const [hearts, setHearts] = React.useState([]);
  const burstHeart = () => {
    const id = Date.now() + Math.random();
    // 누를 때마다 위치·크기·기울기를 살짝 랜덤하게 → 연타하면 하트가 화면에 흩뿌려진다
    const x = Math.random() * 50 - 25; // -25 ~ 25 vw
    const y = Math.random() * 30 - 15; // -15 ~ 15 vh
    const rot = Math.random() * 40 - 20; // -20 ~ 20deg
    const size = 70 + Math.random() * 60; // 70 ~ 130px
    setHearts(hs => [...hs, {
      id,
      x,
      y,
      rot,
      size
    }]);
    // 애니메이션(1.4s)이 끝나면 스스로 제거 → 오버레이가 남아 클릭을 막지 않음
    setTimeout(() => setHearts(hs => hs.filter(h => h.id !== id)), 1400);
  };
  const screenRef = React.useRef(null);
  const topbarRef = React.useRef(null);
  const [topbarH, setTopbarH] = React.useState(52);
  const proposeImages = ['img/memories/propose-newyork/newyork-1.jpg', 'img/memories/propose-newyork/newyork-2.jpg'];
  const highlights = [{
    label: '2021',
    images: Array.from({
      length: 11
    }, (_, i) => `img/highlights/2021/${i + 1}.jpg`)
  }, {
    label: '2022',
    images: Array.from({
      length: 11
    }, (_, i) => `img/highlights/2022/${i + 1}.jpg`)
  }, {
    label: '2023',
    images: Array.from({
      length: 17
    }, (_, i) => `img/highlights/2023/${i + 1}.jpg`)
  }, {
    label: '2024',
    images: Array.from({
      length: 10
    }, (_, i) => `img/highlights/2024/${i + 1}.jpg`)
  }, {
    label: '2025',
    images: Array.from({
      length: 11
    }, (_, i) => `img/highlights/2025/${i + 1}.jpg`)
  }];
  const validHighlights = highlights.filter(h => h.images.length > 0);
  React.useEffect(() => {
    if (topbarRef.current) setTopbarH(topbarRef.current.offsetHeight);
  }, [feedActive]);
  const posts = [{
    id: 'mem-1',
    date: '2026.03.15',
    likes: '9,126',
    photoCount: 4,
    images: ['img/memories/studio-couple/couple-1.jpg', 'img/memories/studio-couple/couple-2.jpg', 'img/memories/studio-couple/couple-3.jpg', 'img/memories/studio-couple/couple-4.jpg'],
    caption: '해성 & 채원'
  }, {
    id: 'mem-2',
    date: '2026.03.15',
    likes: '3,862',
    photoCount: 1,
    images: ['img/memories/studio-groom/groom-1.jpg'],
    caption: '해성'
  }, {
    id: 'mem-3',
    date: '2026.03.15',
    likes: '5,204',
    photoCount: 6,
    images: ['img/memories/studio-bride/bride-0.jpg', 'img/memories/studio-bride/bride-1.jpg', 'img/memories/studio-bride/bride-2.jpg', 'img/memories/studio-bride/bride-3.jpg', 'img/memories/studio-bride/bride-4.jpg', 'img/memories/studio-bride/bride-5.jpg'],
    caption: '채원'
  }, {
    id: 'mem-4',
    date: '2026.02.12',
    likes: '4,477',
    photoCount: 5,
    images: ['img/memories/snap-shanghai/shanghai-1.jpg', 'img/memories/snap-shanghai/shanghai-2.jpg', 'img/memories/snap-shanghai/shanghai-3.jpg', 'img/memories/snap-shanghai/shanghai-4.jpg', 'img/memories/snap-shanghai/shanghai-5.jpg'],
    caption: '📍 상하이'
  }, {
    id: 'mem-5',
    date: '2026.04.24',
    likes: '3,991',
    photoCount: 5,
    images: ['img/memories/snap-gyeongju/gyeongju-1.jpg', 'img/memories/snap-gyeongju/gyeongju-2.jpg', 'img/memories/snap-gyeongju/gyeongju-3.jpg', 'img/memories/snap-gyeongju/gyeongju-4.jpg', 'img/memories/snap-gyeongju/gyeongju-5.jpg'],
    caption: '📍 경주'
  }, {
    id: 'mem-6',
    date: '2021.10.30',
    likes: '6,012',
    photoCount: 4,
    images: ['img/memories/wedding-ng/ng-1.jpg', 'img/memories/wedding-ng/ng-2.jpg', 'img/memories/wedding-ng/ng-3.jpg', 'img/memories/wedding-ng/ng-4.jpg'],
    caption: '📍 학교'
  }];
  const interests = [{
    id: 'int-1',
    label: '일상',
    sub: 'Daily',
    images: ['img/memories/interest-photo/interest-daily/IMG_1551.JPG', 'img/memories/interest-photo/interest-daily/IMG_1727.JPG', 'img/memories/interest-photo/interest-daily/IMG_2828.jpeg', 'img/memories/interest-photo/interest-daily/IMG_3053.JPG', 'img/memories/interest-photo/interest-daily/IMG_5753.JPG', 'img/memories/interest-photo/interest-daily/IMG_6411.JPG', 'img/memories/interest-photo/interest-daily/IMG_8708.JPG', 'img/memories/interest-photo/interest-daily/QT004134.DNG.JPG', 'img/memories/interest-photo/interest-daily/QT004708.JPG']
  }, {
    id: 'int-2',
    label: '맛집',
    sub: 'Eats',
    images: ['img/memories/interest-photo/interest-eats/1.JPG', 'img/memories/interest-photo/interest-eats/2.JPG', 'img/memories/interest-photo/interest-eats/3.JPG', 'img/memories/interest-photo/interest-eats/4.JPG', 'img/memories/interest-photo/interest-eats/5.JPG', 'img/memories/interest-photo/interest-eats/IMG_1655.JPG', 'img/memories/interest-photo/interest-eats/IMG_1767.JPG', 'img/memories/interest-photo/interest-eats/IMG_3748.jpeg', 'img/memories/interest-photo/interest-eats/IMG_4166.JPG', 'img/memories/interest-photo/interest-eats/IMG_8923.JPG']
  }, {
    id: 'int-3',
    label: '액티비티',
    sub: 'Activity',
    images: ['img/memories/interest-photo/interest-activity/IMG_1107.JPG', 'img/memories/interest-photo/interest-activity/IMG_6500.JPG']
  }, {
    id: 'int-4',
    label: '문화',
    sub: 'Culture',
    images: ['img/memories/interest-photo/interest-culture/IMG_0874.JPG', 'img/memories/interest-photo/interest-culture/IMG_1404.JPG', 'img/memories/interest-photo/interest-culture/IMG_1857.JPG', 'img/memories/interest-photo/interest-culture/IMG_1936.JPG', 'img/memories/interest-photo/interest-culture/IMG_2469.jpeg', 'img/memories/interest-photo/interest-culture/IMG_3731.JPG', 'img/memories/interest-photo/interest-culture/IMG_3900.jpeg', 'img/memories/interest-photo/interest-culture/IMG_7273.JPG', 'img/memories/interest-photo/interest-culture/IMG_7321.JPG', 'img/memories/interest-photo/interest-culture/IMG_7693.JPG']
  }, {
    id: 'int-5',
    label: '여행',
    sub: 'Travel',
    images: ['img/memories/interest-photo/interest-travel/1.jpeg', 'img/memories/interest-photo/interest-travel/AE61BB3F-3AC6-4C23-9147-D81FC11F20FF.JPG', 'img/memories/interest-photo/interest-travel/FEFBF014-C742-4181-9FD6-F74450949DD7.JPG', 'img/memories/interest-photo/interest-travel/IMG_0122.JPG', 'img/memories/interest-photo/interest-travel/IMG_3170.jpeg', 'img/memories/interest-photo/interest-travel/IMG_4262.JPG', 'img/memories/interest-photo/interest-travel/IMG_8334.JPG', 'img/memories/interest-photo/interest-travel/IMG_8430.JPG', 'img/memories/interest-photo/interest-travel/IMG_9529.JPG']
  }, {
    id: 'int-6',
    label: '사진',
    sub: 'Photos',
    images: ['img/memories/interest-photo/interest-photos/TREY4093.jpg', 'img/memories/interest-photo/interest-photos/TREY4254-2.jpg', 'img/memories/interest-photo/interest-photos/TREY4577.jpg']
  }];

  // 관심사도 Feed처럼 스크롤되도록 — 각 관심사를 게시물 형태로 변환
  const interestPosts = interests.map((it, i) => ({
    id: it.id,
    date: it.sub,
    likes: ['1,204', '2,318', '3,402', '4,510', '1,890', '5,221'][i] || '1,000',
    photoCount: it.images.length || 1,
    images: it.images,
    caption: `${it.label} · 두 사람이 함께 좋아하는 것`
  }));
  const openInFeed = (type, id) => {
    setFeedType(type);
    setFeedScrollTo(id);
    setFeedActive(true);
    if (screenRef.current) screenRef.current.scrollTop = 0;
    setTimeout(() => {
      const screen = screenRef.current;
      const el = document.getElementById('post-' + id);
      if (screen && el) screen.scrollTop = el.offsetTop - topbarH;
    }, 60);
  };
  const openPostInFeed = id => openInFeed('posts', id);
  const openInterestInFeed = id => openInFeed('interests', id);
  const feedItems = feedType === 'interests' ? interestPosts : posts;
  const backFromFeed = () => {
    setFeedActive(false);
    setFeedScrollTo(null);
    if (screenRef.current) screenRef.current.scrollTop = 0;
  };

  // 렌더마다 갱신되는 ref — popstate/capture 핸들러(스테일 클로저)에서 항상 최신 값 사용
  const backFnRef = React.useRef(null);
  backFnRef.current = () => {
    if (story) {
      setStory(null);
      return true;
    }
    if (feedActive) {
      backFromFeed();
      return true;
    }
    return false;
  };

  // 휴대폰 뒤로가기(popstate)를 앱 레벨에서 위임받는 핸들러 등록 (한 번만)
  React.useEffect(() => {
    if (!backHandlerRef) return;
    backHandlerRef.current = () => backFnRef.current?.();
    return () => {
      if (backHandlerRef) backHandlerRef.current = null;
    };
  }, [backHandlerRef]);

  // 피드 뷰 내 왼쪽 가장자리 스와이프 감지 — capture 단계로 등록해
  // 캐러셀의 stopPropagation()을 우회한다 (캡처는 버블보다 먼저 발동)
  React.useEffect(() => {
    const el = screenRef.current;
    if (!el) return;
    let edge = null;
    const onStart = e => {
      const x0 = e.touches[0].clientX;
      edge = x0 <= 30 ? {
        x0,
        y0: e.touches[0].clientY
      } : null;
    };
    const onEnd = e => {
      if (!edge) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - edge.x0;
      const dy = Math.abs(t.clientY - edge.y0);
      edge = null;
      if (dx > 60 && dx > dy * 1.5) backFnRef.current?.();
    };
    el.addEventListener('touchstart', onStart, {
      capture: true
    });
    el.addEventListener('touchend', onEnd, {
      capture: true
    });
    return () => {
      el.removeEventListener('touchstart', onStart, {
        capture: true
      });
      el.removeEventListener('touchend', onEnd, {
        capture: true
      });
    };
  }, []);
  const TABS = [{
    key: 'grid',
    Icon: TabIconGrid
  }, {
    key: 'repost',
    Icon: TabIconBookmark
  }, {
    key: 'mention',
    Icon: TabIconMention
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "inv-screen",
    "data-screen-label": "02 Memories · 우리의 추억",
    "data-feed-active": feedActive ? 'true' : undefined,
    ref: screenRef,
    style: {
      background: '#fff'
    }
  }, story && /*#__PURE__*/React.createElement(StoryViewer, {
    groups: story.groups,
    startGroupIdx: story.startGroupIdx,
    onClose: () => setStory(null)
  }), /*#__PURE__*/React.createElement("div", {
    ref: topbarRef,
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: '#fff',
      borderBottom: '1px solid rgba(17,17,17,0.10)'
    }
  }, feedActive ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px 12px',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: backFromFeed,
    className: "tap",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      padding: '8px 14px 8px 4px',
      margin: '-8px -14px -8px -4px',
      color: ink
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    stroke: ink,
    strokeWidth: "2.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Pretendard',sans-serif",
      fontWeight: 700,
      fontSize: 'min(15px, 3.8vw)',
      color: ink,
      lineHeight: 1.2,
      whiteSpace: 'nowrap'
    }
  }, "게시물"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 'min(12px, 3.1vw)',
      color: '#888',
      marginTop: 1,
      whiteSpace: 'nowrap'
    }
  }, "chaewon_and_haeseong")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44
    }
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px 12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => goTo('main'),
    className: "tap",
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '8px 16px 8px 4px',
      margin: '-8px -16px -8px -4px',
      color: ink,
      fontFamily: "'Pretendard',sans-serif",
      fontWeight: 600,
      fontSize: 'min(11px, 2.8vw)',
      letterSpacing: '0.16em',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'min(18px, 4.6vw)',
      lineHeight: 1
    }
  }, "←"), " MAIN"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bricolage Grotesque',sans-serif",
      fontWeight: 600,
      fontSize: 'min(17px, 4.4vw)',
      color: ink,
      letterSpacing: '-0.02em',
      whiteSpace: 'nowrap'
    }
  }, "chaewon_and_haeseong"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48
    }
  }))), !feedActive && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      padding: '20px 16px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "tap",
    onClick: () => setStory({
      groups: [{
        images: proposeImages
      }],
      startGroupIdx: 0
    }),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      borderRadius: '50%',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 2.5,
      borderRadius: '50%',
      background: 'linear-gradient(45deg,#fcaf45,#f77737,#f56040,#fd1d1d,#e1306c,#c13584,#833ab4,#5851db)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 2.5,
      borderRadius: '50%',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/couple-main.jpg",
    alt: "채원 ♥ 해성",
    loading: "lazy",
    decoding: "async",
    draggable: false,
    className: tweaks.bw ? 'bw' : '',
    style: {
      width: 72,
      height: 72,
      borderRadius: '50%',
      objectFit: 'cover',
      objectPosition: 'center 35%',
      display: 'block'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flex: 1,
      justifyContent: 'space-around'
    }
  }, [{
    n: posts.length,
    l: '게시물'
  }, {
    n: '∞',
    l: '함께할 날'
  }, {
    n: '1',
    l: '영원히'
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      textAlign: 'center',
      padding: '4px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bricolage Grotesque',sans-serif",
      fontWeight: 700,
      fontSize: 19,
      color: ink,
      lineHeight: 1
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 11,
      color: '#666',
      marginTop: 3
    }
  }, s.l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Pretendard',sans-serif",
      fontWeight: 700,
      fontSize: 14,
      color: ink
    }
  }, "채원 ♡ 해성"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 13,
      color: '#333',
      lineHeight: 1.6,
      marginTop: 2
    }
  }, "2026.09.12", /*#__PURE__*/React.createElement("br", null), "두 사람의 이야기가 하나가 되는 날")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "tap",
    onClick: () => openSheet && openSheet('following'),
    style: {
      flex: 1,
      padding: '7px 0',
      background: 'rgba(17,17,17,0.07)',
      border: '1px solid rgba(17,17,17,0.14)',
      borderRadius: 9,
      fontFamily: "'Pretendard',sans-serif",
      fontWeight: 600,
      fontSize: 13,
      color: ink,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 3
    }
  }, "팔로잉 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10
    }
  }, "▾")), /*#__PURE__*/React.createElement("button", {
    className: "tap",
    onClick: () => setTab('mention'),
    style: {
      flex: 1,
      padding: '7px 0',
      background: 'rgba(17,17,17,0.07)',
      border: '1px solid rgba(17,17,17,0.14)',
      borderRadius: 9,
      fontFamily: "'Pretendard',sans-serif",
      fontWeight: 600,
      fontSize: 13,
      color: ink,
      cursor: 'pointer'
    }
  }, "축하메시지 보내기"), /*#__PURE__*/React.createElement("button", {
    className: "tap",
    onClick: burstHeart,
    style: {
      width: 40,
      background: 'rgba(17,17,17,0.07)',
      border: '1px solid rgba(17,17,17,0.14)',
      borderRadius: 9,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: ink,
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "19",
    y1: "8",
    x2: "19",
    y2: "14"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "22",
    y1: "11",
    x2: "16",
    y2: "11"
  })))), hearts.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      overflow: 'hidden',
      zIndex: 999,
      pointerEvents: 'none'
    }
  }, hearts.map(h => /*#__PURE__*/React.createElement("span", {
    key: h.id,
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: `translate(-50%,-50%) translate(${h.x}vw, ${h.y}vh) rotate(${h.rot}deg)`
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "heart-burst",
    style: {
      display: 'inline-block',
      fontSize: h.size,
      lineHeight: 1
    }
  }, "❤️")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      overflowX: 'auto',
      paddingBottom: 14
    }
  }, highlights.map((h, i) => {
    const hasImages = h.images.length > 0;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "tap",
      onClick: () => {
        if (!hasImages) return;
        setStory({
          groups: validHighlights,
          startGroupIdx: validHighlights.indexOf(h)
        });
      },
      style: {
        padding: 0,
        border: 'none',
        background: 'none',
        cursor: hasImages ? 'pointer' : 'default'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 56,
        height: 56,
        borderRadius: '50%',
        border: hasImages ? `2px solid ${ink}` : '1.5px solid rgba(17,17,17,0.14)',
        overflow: 'hidden',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: hasImages ? 'transparent' : '#F4F2EB'
      }
    }, hasImages ? /*#__PURE__*/React.createElement("img", {
      src: h.images[0],
      alt: h.label,
      loading: "lazy",
      decoding: "async",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Bricolage Grotesque',sans-serif",
        fontWeight: 600,
        fontSize: 20,
        color: '#888'
      }
    }, "+"))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Pretendard',sans-serif",
        fontSize: 10,
        color: '#444',
        whiteSpace: 'nowrap'
      }
    }, h.label));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: topbarH,
      zIndex: 10,
      background: '#fff',
      display: 'flex',
      borderTop: '1px solid rgba(17,17,17,0.09)',
      borderBottom: '1px solid rgba(17,17,17,0.09)'
    }
  }, TABS.map(({
    key,
    Icon
  }) => /*#__PURE__*/React.createElement("button", {
    key: key,
    onClick: () => setTab(key),
    className: "tap",
    style: {
      flex: 1,
      padding: '12px 0',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: tab === key ? `2px solid ${ink}` : '2px solid transparent',
      transition: 'border-color .15s'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    active: tab === key,
    ink: ink
  }))))), !feedActive && tab === 'grid' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 2,
      background: '#ddd'
    }
  }, posts.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    onClick: () => openPostInFeed(p.id),
    className: "tap",
    style: {
      padding: 0,
      border: 'none',
      cursor: 'pointer',
      aspectRatio: '4/5',
      background: '#F4F2EB',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.images && p.images[0],
    alt: "",
    loading: "lazy",
    decoding: "async",
    draggable: false,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: i === 5 ? 'right center' : 'center',
      display: 'block',
      pointerEvents: 'none'
    }
  }), p.photoCount > 1 && /*#__PURE__*/React.createElement(CarouselBadge, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 5,
      right: 6,
      fontFamily: "'Bricolage Grotesque',sans-serif",
      fontSize: 9,
      fontWeight: 700,
      color: 'rgba(255,255,255,0.9)',
      textShadow: '0 1px 3px rgba(0,0,0,0.5)'
    }
  }, String(i + 1).padStart(2, '0'))))), feedActive && /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff'
    }
  }, feedItems.map(p => /*#__PURE__*/React.createElement(MemoryPost, {
    key: p.id,
    lime: lime,
    ink: ink,
    ...p,
    onSwipeBack: backFromFeed
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: lime,
      padding: '40px 24px 80px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Grand Hotel',cursive",
      fontSize: 44,
      color: ink,
      lineHeight: 1,
      marginBottom: 16
    }
  }, "Lovestagram"))), !feedActive && tab === 'repost' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      padding: '18px 16px 12px',
      borderBottom: '1px solid rgba(17,17,17,0.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bricolage Grotesque',sans-serif",
      fontSize: 22,
      fontWeight: 400,
      color: ink,
      letterSpacing: '-0.01em'
    }
  }, "우리의 관심사"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Pretendard',sans-serif",
      fontSize: 13,
      color: '#666',
      marginTop: 4
    }
  }, "두 사람이 함께 좋아하는 것들")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 2,
      background: '#ddd'
    }
  }, interests.map(it => {
    const thumb = it.images && it.images[0];
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => openInterestInFeed(it.id),
      className: "tap",
      style: {
        padding: 0,
        border: 'none',
        cursor: 'pointer',
        aspectRatio: '4/5',
        background: '#F4F2EB',
        position: 'relative',
        overflow: 'hidden'
      }
    }, thumb ? /*#__PURE__*/React.createElement("img", {
      src: thumb,
      alt: it.label,
      loading: "lazy",
      decoding: "async",
      draggable: false,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        pointerEvents: 'none'
      }
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F4F2EB'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Bricolage Grotesque',sans-serif",
        fontWeight: 600,
        fontSize: 30,
        color: '#C9C5B8',
        lineHeight: 1
      }
    }, "＋")), it.images && it.images.length > 1 && /*#__PURE__*/React.createElement(CarouselBadge, null), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '20px 8px 8px',
        background: 'linear-gradient(transparent, rgba(0,0,0,0.52))',
        textAlign: 'center',
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Pretendard',sans-serif",
        fontWeight: 700,
        fontSize: 13,
        color: '#fff'
      }
    }, it.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Bricolage Grotesque',sans-serif",
        fontSize: 9,
        color: 'rgba(255,255,255,0.7)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase'
      }
    }, it.sub)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 60
    }
  })), !feedActive && tab === 'mention' && /*#__PURE__*/React.createElement(GuestbookTab, {
    lime: lime,
    ink: ink
  }));
}
Object.assign(window, {
  MemoriesScreen,
  FollowingSheet,
  MemoryPost,
  PhotoCarousel,
  CarouselBadge,
  GuestbookTab,
  HeartIcon,
  CommentIcon,
  SendIcon,
  StoryViewer,
  TabIconGrid,
  TabIconFeed,
  TabIconTagged,
  TabIconMention
});