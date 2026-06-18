import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
/* MEMORIES — 4-tab Instagram-style profile · chaewon_and_haeseong */

/* ─── Tab Icons ────────────────────────────────────────────── */
function TabIconGrid({
  active,
  ink
}) {
  const c = active ? ink : '#AAAAAA';
  const sq = (x, y) => /*#__PURE__*/_jsxDEV("rect", {
    x: x,
    y: y,
    width: "6",
    height: "6",
    fill: c
  }, `${x}${y}`, false);
  return /*#__PURE__*/_jsxDEV("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    children: [sq(1, 1), sq(9, 1), sq(17, 1), sq(1, 9), sq(9, 9), sq(17, 9), sq(1, 17), sq(9, 17), sq(17, 17)]
  }, void 0, true);
}
function TabIconFeed({
  active,
  ink
}) {
  const c = active ? ink : '#AAAAAA';
  return /*#__PURE__*/_jsxDEV("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [/*#__PURE__*/_jsxDEV("rect", {
      x: "2",
      y: "2",
      width: "20",
      height: "20",
      rx: "3"
    }, void 0, false), /*#__PURE__*/_jsxDEV("line", {
      x1: "2",
      y1: "8",
      x2: "22",
      y2: "8"
    }, void 0, false), /*#__PURE__*/_jsxDEV("line", {
      x1: "8",
      y1: "2",
      x2: "8",
      y2: "8"
    }, void 0, false), /*#__PURE__*/_jsxDEV("line", {
      x1: "16",
      y1: "2",
      x2: "16",
      y2: "8"
    }, void 0, false), /*#__PURE__*/_jsxDEV("polygon", {
      points: "9.5,12 9.5,18.5 17,15.5",
      fill: c,
      stroke: "none"
    }, void 0, false)]
  }, void 0, true);
}
function TabIconRepost({
  active,
  ink
}) {
  const c = active ? ink : '#AAAAAA';
  return /*#__PURE__*/_jsxDEV("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [/*#__PURE__*/_jsxDEV("polyline", {
      points: "1,4 1,10 7,10"
    }, void 0, false), /*#__PURE__*/_jsxDEV("polyline", {
      points: "23,20 23,14 17,14"
    }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
      d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10"
    }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
      d: "M3.51 15A9 9 0 0 0 18.36 18.36L23 14"
    }, void 0, false)]
  }, void 0, true);
}
function TabIconMention({
  active,
  ink
}) {
  const c = active ? ink : '#AAAAAA';
  return /*#__PURE__*/_jsxDEV("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [/*#__PURE__*/_jsxDEV("path", {
      d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
    }, void 0, false), /*#__PURE__*/_jsxDEV("circle", {
      cx: "12",
      cy: "7",
      r: "4"
    }, void 0, false)]
  }, void 0, true);
}

/* ─── Post Icons ───────────────────────────────────────────── */
function HeartIcon({
  filled
}) {
  return /*#__PURE__*/_jsxDEV("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: filled ? '#E0345A' : 'none',
    stroke: filled ? '#E0345A' : '#111',
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: /*#__PURE__*/_jsxDEV("path", {
      d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
    }, void 0, false)
  }, void 0, false);
}
function CommentIcon() {
  return /*#__PURE__*/_jsxDEV("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#111",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: /*#__PURE__*/_jsxDEV("path", {
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    }, void 0, false)
  }, void 0, false);
}
function SendIcon() {
  return /*#__PURE__*/_jsxDEV("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#111",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [/*#__PURE__*/_jsxDEV("line", {
      x1: "22",
      y1: "2",
      x2: "11",
      y2: "13"
    }, void 0, false), /*#__PURE__*/_jsxDEV("polygon", {
      points: "22 2 15 22 11 13 2 9 22 2"
    }, void 0, false)]
  }, void 0, true);
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
  return /*#__PURE__*/_jsxDEV("div", {
    style: {
      position: 'relative'
    },
    children: [/*#__PURE__*/_jsxDEV("div", {
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
      },
      children: [/*#__PURE__*/_jsxDEV("div", {
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
        },
        children: Array.from({
          length: photoCount
        }, (_, i) => /*#__PURE__*/_jsxDEV("div", {
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
          },
          children: images[i] ? /*#__PURE__*/_jsxDEV("img", {
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
          }, void 0, false) : /*#__PURE__*/_jsxDEV("image-slot", {
            id: `${postId}-p${i}`,
            shape: "rect",
            fit: "cover",
            placeholder: "탭하여 사진 추가",
            style: {
              width: '100%',
              height: '100%',
              display: 'block'
            }
          }, void 0, false)
        }, i, false))
      }, void 0, false), photoCount > 1 && /*#__PURE__*/_jsxDEV("div", {
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
        },
        children: [slide + 1, "/", photoCount]
      }, void 0, true), photoCount > 1 && /*#__PURE__*/_jsxDEV("div", {
        style: {
          position: 'absolute',
          top: 10,
          left: 10,
          zIndex: 5,
          pointerEvents: 'none'
        },
        children: /*#__PURE__*/_jsxDEV("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "rgba(255,255,255,0.9)",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [/*#__PURE__*/_jsxDEV("rect", {
            x: "2",
            y: "2",
            width: "13",
            height: "13",
            rx: "2"
          }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
            d: "M17 6h3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-3"
          }, void 0, false)]
        }, void 0, true)
      }, void 0, false)]
    }, void 0, true), photoCount > 1 && /*#__PURE__*/_jsxDEV("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        padding: '8px 0 2px',
        background: '#fff'
      },
      children: Array.from({
        length: photoCount
      }, (_, i) => /*#__PURE__*/_jsxDEV("button", {
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
      }, i, false))
    }, void 0, false)]
  }, void 0, true);
}

/* carousel icon for grid cells */
function CarouselBadge() {
  return /*#__PURE__*/_jsxDEV("div", {
    style: {
      position: 'absolute',
      top: 7,
      right: 7
    },
    children: /*#__PURE__*/_jsxDEV("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "rgba(255,255,255,0.92)",
      strokeWidth: "2.2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [/*#__PURE__*/_jsxDEV("rect", {
        x: "2",
        y: "2",
        width: "13",
        height: "13",
        rx: "2"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "M17 6h3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-3"
      }, void 0, false)]
    }, void 0, true)
  }, void 0, false);
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
  return /*#__PURE__*/_jsxDEV("div", {
    id: 'post-' + id,
    onTouchStart: onPostTouchStart,
    onTouchEnd: onPostTouchEnd,
    style: {
      background: '#fff',
      borderBottom: '1px solid rgba(17,17,17,0.08)'
    },
    children: [/*#__PURE__*/_jsxDEV("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '10px 14px'
      },
      children: [/*#__PURE__*/_jsxDEV("div", {
        style: {
          width: 34,
          height: 34,
          borderRadius: '50%',
          flexShrink: 0,
          border: `1.5px solid ${ink}`,
          overflow: 'hidden'
        },
        children: /*#__PURE__*/_jsxDEV("img", {
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
        }, void 0, false)
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        style: {
          flex: 1
        },
        children: [/*#__PURE__*/_jsxDEV("div", {
          style: {
            fontFamily: "'Pretendard',sans-serif",
            fontWeight: 700,
            fontSize: 13,
            color: ink
          },
          children: "chaewon_and_haeseong"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          style: {
            fontFamily: "'Pretendard',sans-serif",
            fontSize: 11,
            color: '#888',
            marginTop: 1
          },
          children: date
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        style: {
          fontSize: 18,
          color: '#888',
          letterSpacing: '0.08em'
        },
        children: "···"
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV(PhotoCarousel, {
      postId: id,
      photoCount: photoCount,
      images: images,
      onSwipeBack: onSwipeBack
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '10px 14px 6px'
      },
      children: [/*#__PURE__*/_jsxDEV("button", {
        onClick: handleLike,
        style: {
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          display: 'flex',
          transform: heartPop ? 'scale(1.35)' : 'scale(1)',
          transition: 'transform 0.15s'
        },
        children: /*#__PURE__*/_jsxDEV(HeartIcon, {
          filled: liked
        }, void 0, false)
      }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
        style: {
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          display: 'flex'
        },
        children: /*#__PURE__*/_jsxDEV(CommentIcon, {}, void 0, false)
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        style: {
          marginLeft: 'auto',
          display: 'flex'
        },
        children: /*#__PURE__*/_jsxDEV(SendIcon, {}, void 0, false)
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      style: {
        fontFamily: "'Pretendard',sans-serif",
        fontWeight: 700,
        fontSize: 13,
        color: ink,
        padding: '0 14px 4px'
      },
      children: ["좋아요 ", liked ? (likeN + 1).toLocaleString() : likes, "개"]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      style: {
        fontFamily: "'Pretendard',sans-serif",
        fontSize: 13,
        lineHeight: 1.6,
        color: '#111',
        padding: '0 14px 16px'
      },
      children: [/*#__PURE__*/_jsxDEV("span", {
        style: {
          fontWeight: 700,
          marginRight: 6,
          color: ink
        },
        children: "chaewon_and_haeseong"
      }, void 0, false), caption]
    }, void 0, true)]
  }, void 0, true);
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
  return /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "scrim",
      onClick: onClose,
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        zIndex: 110
      },
      children: /*#__PURE__*/_jsxDEV("div", {
        onClick: e => e.stopPropagation(),
        style: {
          width: '100%',
          background: '#fff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          animation: 'sheet-in 280ms cubic-bezier(.32,.72,0,1) both',
          transform: `translateY(${dragY}px)`,
          transition: !closing && dragY > 0 ? 'none' : 'transform 300ms cubic-bezier(.32,.72,0,1)'
        },
        children: [/*#__PURE__*/_jsxDEV("div", {
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
          },
          children: /*#__PURE__*/_jsxDEV("div", {
            style: {
              width: 36,
              height: 4,
              borderRadius: 99,
              background: 'rgba(0,0,0,0.18)'
            }
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          style: {
            textAlign: 'center',
            padding: '10px 0 16px',
            fontFamily: "'Pretendard', sans-serif",
            fontWeight: 700,
            fontSize: 15,
            color: '#111'
          },
          children: "chaewon_and_haeseong"
        }, void 0, false), items.map((item, i) => /*#__PURE__*/_jsxDEV(React.Fragment, {
          children: [/*#__PURE__*/_jsxDEV("button", {
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
            },
            children: [/*#__PURE__*/_jsxDEV("span", {
              children: item.label
            }, void 0, false), item.icon === 'star-filled' && /*#__PURE__*/_jsxDEV("div", {
              style: {
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'rgba(17,17,17,0.09)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              },
              children: /*#__PURE__*/_jsxDEV("svg", {
                width: "17",
                height: "17",
                viewBox: "0 0 24 24",
                fill: "#111",
                stroke: "none",
                children: /*#__PURE__*/_jsxDEV("polygon", {
                  points: "12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                }, void 0, false)
              }, void 0, false)
            }, void 0, false), item.icon === 'star-empty' && /*#__PURE__*/_jsxDEV("div", {
              style: {
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'rgba(17,17,17,0.09)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              },
              children: /*#__PURE__*/_jsxDEV("svg", {
                width: "17",
                height: "17",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "#111",
                strokeWidth: "1.8",
                strokeLinejoin: "round",
                children: /*#__PURE__*/_jsxDEV("polygon", {
                  points: "12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                }, void 0, false)
              }, void 0, false)
            }, void 0, false), item.icon === 'chevron' && /*#__PURE__*/_jsxDEV("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "#C0C0C0",
              strokeWidth: "2.2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: /*#__PURE__*/_jsxDEV("polyline", {
                points: "9,18 15,12 9,6"
              }, void 0, false)
            }, void 0, false)]
          }, void 0, true), i < items.length - 1 && /*#__PURE__*/_jsxDEV("div", {
            style: {
              height: 1,
              background: 'rgba(17,17,17,0.09)'
            }
          }, void 0, false)]
        }, i, true)), /*#__PURE__*/_jsxDEV("div", {
          style: {
            height: 28
          }
        }, void 0, false)]
      }, void 0, true)
    }, void 0, false), toast && /*#__PURE__*/_jsxDEV("div", {
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
      },
      children: toast
    }, void 0, false)]
  }, void 0, true);
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
  return /*#__PURE__*/_jsxDEV("div", {
    style: {
      background: '#FAFAFA'
    },
    children: [/*#__PURE__*/_jsxDEV("div", {
      style: {
        background: '#fff',
        padding: '28px 20px 20px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(17,17,17,0.08)'
      },
      children: [/*#__PURE__*/_jsxDEV("div", {
        style: {
          fontFamily: "'Bricolage Grotesque',sans-serif",
          fontSize: 28,
          fontWeight: 400,
          color: ink,
          lineHeight: 1,
          marginBottom: 8
        },
        children: ["축하 메시지를", /*#__PURE__*/_jsxDEV("br", {}, void 0, false), "남겨주세요"]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        style: {
          fontFamily: "'Pretendard',sans-serif",
          fontSize: 13,
          color: '#666',
          lineHeight: 1.6
        },
        children: ["해성과 채원에게 전하고 싶은 말,", /*#__PURE__*/_jsxDEV("br", {}, void 0, false), "사진과 함께 남겨주세요."]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("form", {
      onSubmit: handleSubmit,
      style: {
        background: '#fff',
        margin: '8px 0',
        padding: '20px'
      },
      children: [/*#__PURE__*/_jsxDEV("div", {
        style: {
          marginBottom: 14
        },
        children: [/*#__PURE__*/_jsxDEV("div", {
          style: {
            fontFamily: "'Pretendard',sans-serif",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.12em',
            color: '#888',
            marginBottom: 6,
            textTransform: 'uppercase'
          },
          children: "이름"
        }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
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
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        style: {
          marginBottom: 14
        },
        children: [/*#__PURE__*/_jsxDEV("div", {
          style: {
            fontFamily: "'Pretendard',sans-serif",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.12em',
            color: '#888',
            marginBottom: 6,
            textTransform: 'uppercase'
          },
          children: "메시지"
        }, void 0, false), /*#__PURE__*/_jsxDEV("textarea", {
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
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        style: {
          marginBottom: 18
        },
        children: [/*#__PURE__*/_jsxDEV("div", {
          style: {
            fontFamily: "'Pretendard',sans-serif",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.12em',
            color: '#888',
            marginBottom: 8,
            textTransform: 'uppercase'
          },
          children: "사진 (선택)"
        }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
          ref: fileRef,
          type: "file",
          accept: "image/*",
          capture: "environment",
          onChange: handlePhoto,
          style: {
            display: 'none'
          }
        }, void 0, false), photo ? /*#__PURE__*/_jsxDEV("div", {
          style: {
            display: 'flex',
            gap: 8,
            alignItems: 'flex-start'
          },
          children: [/*#__PURE__*/_jsxDEV("div", {
            style: {
              position: 'relative'
            },
            children: [/*#__PURE__*/_jsxDEV("img", {
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
            }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
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
              },
              children: "×"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
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
            },
            children: "변경"
          }, void 0, false)]
        }, void 0, true) : /*#__PURE__*/_jsxDEV("button", {
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
          },
          children: [/*#__PURE__*/_jsxDEV("svg", {
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "#999",
            strokeWidth: "1.6",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [/*#__PURE__*/_jsxDEV("rect", {
              x: "3",
              y: "3",
              width: "18",
              height: "18",
              rx: "2"
            }, void 0, false), /*#__PURE__*/_jsxDEV("circle", {
              cx: "8.5",
              cy: "8.5",
              r: "1.5"
            }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
              d: "m21 15-5-5L5 21"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("span", {
            children: "사진 선택하기"
          }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
            style: {
              fontSize: 11,
              color: '#aaa'
            },
            children: "갤러리 또는 카메라"
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        style: {
          marginBottom: 18
        },
        children: [/*#__PURE__*/_jsxDEV("div", {
          style: {
            fontFamily: "'Pretendard',sans-serif",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.12em',
            color: '#888',
            marginBottom: 6,
            textTransform: 'uppercase'
          },
          children: "비밀번호"
        }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
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
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
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
        },
        children: done ? '전달되었습니다 ✓' : sending ? '전송 중...' : '메시지 보내기 →'
      }, void 0, false)]
    }, void 0, true), messages.length > 0 && /*#__PURE__*/_jsxDEV("div", {
      children: [/*#__PURE__*/_jsxDEV("div", {
        style: {
          padding: '16px 20px 8px',
          fontFamily: "'Pretendard',sans-serif",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.14em',
          color: '#999',
          textTransform: 'uppercase'
        },
        children: [messages.length, "개의 메시지"]
      }, void 0, true), messages.map((msg, i) => /*#__PURE__*/_jsxDEV("div", {
        style: {
          background: '#fff',
          margin: '0 0 2px',
          padding: '16px 20px',
          borderBottom: '1px solid rgba(17,17,17,0.06)'
        },
        children: /*#__PURE__*/_jsxDEV("div", {
          style: {
            display: 'flex',
            alignItems: 'flex-start',
            gap: 12
          },
          children: [/*#__PURE__*/_jsxDEV("div", {
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
            },
            children: initials(msg.name)
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            style: {
              flex: 1,
              minWidth: 0
            },
            children: [/*#__PURE__*/_jsxDEV("div", {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 4
              },
              children: [/*#__PURE__*/_jsxDEV("span", {
                style: {
                  fontFamily: "'Pretendard',sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  color: ink
                },
                children: msg.name
              }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                style: {
                  fontFamily: "'Pretendard',sans-serif",
                  fontSize: 11,
                  color: '#aaa'
                },
                children: msg.ts
              }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
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
                },
                children: "수정·삭제"
              }, void 0, false)]
            }, void 0, true), managingId === msg.id && /*#__PURE__*/_jsxDEV("div", {
              style: {
                marginBottom: 10
              },
              children: [/*#__PURE__*/_jsxDEV("div", {
                style: {
                  display: 'flex',
                  gap: 6,
                  alignItems: 'center'
                },
                children: [/*#__PURE__*/_jsxDEV("input", {
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
                }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
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
                  },
                  children: "확인"
                }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
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
                  },
                  children: "취소"
                }, void 0, false)]
              }, void 0, true), manageError && /*#__PURE__*/_jsxDEV("div", {
                style: {
                  marginTop: 5,
                  fontFamily: "'Pretendard',sans-serif",
                  fontSize: 12,
                  color: '#E0345A'
                },
                children: "비밀번호가 맞지 않아요"
              }, void 0, false)]
            }, void 0, true), editingId === msg.id ? /*#__PURE__*/_jsxDEV("div", {
              children: [/*#__PURE__*/_jsxDEV("textarea", {
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
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                style: {
                  display: 'flex',
                  gap: 6,
                  marginTop: 6
                },
                children: [/*#__PURE__*/_jsxDEV("button", {
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
                  },
                  children: "저장"
                }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
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
                  },
                  children: "삭제"
                }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
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
                  },
                  children: "취소"
                }, void 0, false)]
              }, void 0, true)]
            }, void 0, true) : /*#__PURE__*/_jsxDEV("div", {
              style: {
                fontFamily: "'Pretendard',sans-serif",
                fontSize: 14,
                color: '#222',
                lineHeight: 1.65
              },
              children: msg.text
            }, void 0, false), msg.photo && /*#__PURE__*/_jsxDEV("img", {
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
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)
      }, msg.id, false))]
    }, void 0, true), messages.length === 0 && /*#__PURE__*/_jsxDEV("div", {
      style: {
        padding: '48px 20px',
        textAlign: 'center',
        color: '#bbb',
        fontFamily: "'Pretendard',sans-serif",
        fontSize: 14
      },
      children: ["아직 메시지가 없어요.", /*#__PURE__*/_jsxDEV("br", {}, void 0, false), "첫 번째로 남겨주세요!"]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      style: {
        height: 80
      }
    }, void 0, false)]
  }, void 0, true);
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
  const timerRef = React.useRef(null);
  const touchRef = React.useRef(null);
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
  React.useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, elapsed / DURATION * 100);
      setProgress(pct);
      if (pct < 100) {
        timerRef.current = requestAnimationFrame(tick);
      } else {
        goNext();
      }
    };
    timerRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(timerRef.current);
  }, [idx, goNext]);
  const onTouchStart = e => {
    e.stopPropagation();
    const t = e.touches[0];
    touchRef.current = {
      x: t.clientX,
      y: t.clientY,
      t: Date.now()
    };
  };
  const onTouchMove = e => {
    e.stopPropagation();
  };
  const onTouchEnd = e => {
    e.stopPropagation();
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

  // 마우스 클릭 (PC) — 좌 38% 클릭 → 이전, 우 62% 클릭 → 다음
  const onPointerUp = e => {
    if (e.pointerType !== 'mouse') return;
    const w = e.currentTarget.getBoundingClientRect().width;
    if (e.clientX < w * 0.38) goPrev();else goNext();
  };
  return /*#__PURE__*/_jsxDEV("div", {
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd,
    onPointerUp: onPointerUp,
    style: {
      position: 'absolute',
      inset: 0,
      background: '#000',
      zIndex: 300,
      display: 'flex',
      flexDirection: 'column',
      userSelect: 'none',
      cursor: 'pointer',
      touchAction: 'none'
    },
    children: [/*#__PURE__*/_jsxDEV("div", {
      style: {
        display: 'flex',
        gap: 3,
        padding: '14px 10px 8px',
        zIndex: 2
      },
      children: images.map((_, i) => /*#__PURE__*/_jsxDEV("div", {
        style: {
          flex: 1,
          height: 2,
          background: 'rgba(255,255,255,0.3)',
          borderRadius: 99,
          overflow: 'hidden'
        },
        children: /*#__PURE__*/_jsxDEV("div", {
          style: {
            height: '100%',
            borderRadius: 99,
            background: '#fff',
            width: i < idx ? '100%' : i === idx ? `${progress}%` : '0%',
            transition: i === idx ? 'none' : undefined
          }
        }, void 0, false)
      }, i, false))
    }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
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
      },
      children: "×"
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
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
      },
      children: "‹"
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
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
      },
      children: "›"
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      style: {
        flex: 1,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      },
      children: /*#__PURE__*/_jsxDEV("img", {
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
      }, idx, false)
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      style: {
        textAlign: 'center',
        padding: '10px 0 16px',
        color: 'rgba(255,255,255,0.3)',
        fontFamily: "'Pretendard',sans-serif",
        fontSize: 11,
        letterSpacing: '0.1em',
        pointerEvents: 'none'
      },
      children: "아래로 스와이프하여 닫기"
    }, void 0, false)]
  }, void 0, true);
}

/* ─── Main Screen ───────────────────────────────────────────── */
function MemoriesScreen({
  goTo,
  tweaks,
  openSheet
}) {
  const lime = tweaks.lime;
  const ink = tweaks.ink;
  const [tab, setTab] = React.useState('grid');
  const [feedActive, setFeedActive] = React.useState(false);
  const [feedScrollTo, setFeedScrollTo] = React.useState(null);
  const [story, setStory] = React.useState(null);
  const [heartKey, setHeartKey] = React.useState(0);
  const burstHeart = () => setHeartKey(k => k + 1);
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
    photoCount: 1,
    images: ['img/memories/snap-shanghai/shanghai-1.jpg'],
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
    label: '여행',
    sub: 'Travel'
  }, {
    id: 'int-2',
    label: '음악',
    sub: 'Music'
  }, {
    id: 'int-3',
    label: '카페',
    sub: 'Café',
    src: 'img/memories/repost-cafe/cafe-1.jpg'
  }, {
    id: 'int-4',
    label: '영화',
    sub: 'Film'
  }, {
    id: 'int-5',
    label: '자연',
    sub: 'Nature'
  }, {
    id: 'int-6',
    label: '음식',
    sub: 'Food',
    src: 'img/memories/repost-food/food-1.jpg'
  }];
  const openPostInFeed = id => {
    setFeedScrollTo(id);
    setFeedActive(true);
    if (screenRef.current) screenRef.current.scrollTop = 0;
    setTimeout(() => {
      const screen = screenRef.current;
      const el = document.getElementById('post-' + id);
      if (screen && el) screen.scrollTop = el.offsetTop - topbarH;
    }, 60);
  };
  const backFromFeed = () => {
    setFeedActive(false);
    setFeedScrollTo(null);
    if (screenRef.current) screenRef.current.scrollTop = 0;
  };
  const TABS = [{
    key: 'grid',
    Icon: TabIconGrid
  }, {
    key: 'repost',
    Icon: TabIconRepost
  }, {
    key: 'mention',
    Icon: TabIconMention
  }];
  return /*#__PURE__*/_jsxDEV("div", {
    className: "inv-screen",
    "data-screen-label": "02 Memories · 우리의 추억",
    "data-feed-active": feedActive ? 'true' : undefined,
    ref: screenRef,
    style: {
      background: '#fff'
    },
    children: [story && /*#__PURE__*/_jsxDEV(StoryViewer, {
      groups: story.groups,
      startGroupIdx: story.startGroupIdx,
      onClose: () => setStory(null)
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      ref: topbarRef,
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: '#fff',
        borderBottom: '1px solid rgba(17,17,17,0.10)'
      },
      children: feedActive ? /*#__PURE__*/_jsxDEV("div", {
        style: {
          padding: '14px 16px 12px',
          display: 'flex',
          alignItems: 'center'
        },
        children: [/*#__PURE__*/_jsxDEV("button", {
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
          },
          children: /*#__PURE__*/_jsxDEV("svg", {
            width: "12",
            height: "20",
            viewBox: "0 0 12 20",
            fill: "none",
            stroke: ink,
            strokeWidth: "2.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/_jsxDEV("path", {
              d: "M10 2L2 10l8 8"
            }, void 0, false)
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          style: {
            flex: 1,
            textAlign: 'center'
          },
          children: [/*#__PURE__*/_jsxDEV("div", {
            style: {
              fontFamily: "'Pretendard',sans-serif",
              fontWeight: 700,
              fontSize: 15,
              color: ink,
              lineHeight: 1.2
            },
            children: "게시물"
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            style: {
              fontFamily: "'Pretendard',sans-serif",
              fontSize: 12,
              color: '#888',
              marginTop: 1
            },
            children: "chaewon_and_haeseong"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          style: {
            width: 44
          }
        }, void 0, false)]
      }, void 0, true) : /*#__PURE__*/_jsxDEV("div", {
        style: {
          padding: '14px 16px 12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/_jsxDEV("button", {
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
            fontSize: 11,
            letterSpacing: '0.16em'
          },
          children: [/*#__PURE__*/_jsxDEV("span", {
            style: {
              fontSize: 18,
              lineHeight: 1
            },
            children: "←"
          }, void 0, false), " MAIN"]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          style: {
            fontFamily: "'Bricolage Grotesque',sans-serif",
            fontWeight: 600,
            fontSize: 17,
            color: ink,
            letterSpacing: '-0.02em'
          },
          children: "chaewon_and_haeseong"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          style: {
            width: 48
          }
        }, void 0, false)]
      }, void 0, true)
    }, void 0, false), !feedActive && /*#__PURE__*/_jsxDEV(_Fragment, {
      children: [/*#__PURE__*/_jsxDEV("div", {
        style: {
          background: '#fff',
          padding: '20px 16px 0'
        },
        children: [/*#__PURE__*/_jsxDEV("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 20
          },
          children: [/*#__PURE__*/_jsxDEV("button", {
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
            },
            children: /*#__PURE__*/_jsxDEV("div", {
              style: {
                padding: 2.5,
                borderRadius: '50%',
                background: 'linear-gradient(45deg,#fcaf45,#f77737,#f56040,#fd1d1d,#e1306c,#c13584,#833ab4,#5851db)'
              },
              children: /*#__PURE__*/_jsxDEV("div", {
                style: {
                  padding: 2.5,
                  borderRadius: '50%',
                  background: '#fff'
                },
                children: /*#__PURE__*/_jsxDEV("img", {
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
                }, void 0, false)
              }, void 0, false)
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            style: {
              display: 'flex',
              flex: 1,
              justifyContent: 'space-around'
            },
            children: [{
              n: posts.length,
              l: '게시물'
            }, {
              n: '∞',
              l: '함께할 날'
            }, {
              n: '1',
              l: '영원히'
            }].map((s, i) => /*#__PURE__*/_jsxDEV("div", {
              style: {
                textAlign: 'center'
              },
              children: [/*#__PURE__*/_jsxDEV("div", {
                style: {
                  fontFamily: "'Bricolage Grotesque',sans-serif",
                  fontWeight: 700,
                  fontSize: 19,
                  color: ink,
                  lineHeight: 1
                },
                children: s.n
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                style: {
                  fontFamily: "'Pretendard',sans-serif",
                  fontSize: 11,
                  color: '#666',
                  marginTop: 3
                },
                children: s.l
              }, void 0, false)]
            }, i, true))
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          style: {
            marginTop: 14,
            marginBottom: 14
          },
          children: [/*#__PURE__*/_jsxDEV("div", {
            style: {
              fontFamily: "'Pretendard',sans-serif",
              fontWeight: 700,
              fontSize: 14,
              color: ink
            },
            children: "채원 ♡ 해성"
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            style: {
              fontFamily: "'Pretendard',sans-serif",
              fontSize: 13,
              color: '#333',
              lineHeight: 1.6,
              marginTop: 2
            },
            children: ["2026.09.12", /*#__PURE__*/_jsxDEV("br", {}, void 0, false), "두 사람의 이야기가 하나가 되는 날"]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          style: {
            display: 'flex',
            gap: 6,
            marginBottom: 14
          },
          children: [/*#__PURE__*/_jsxDEV("button", {
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
            },
            children: ["팔로잉 ", /*#__PURE__*/_jsxDEV("span", {
              style: {
                fontSize: 10
              },
              children: "▾"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
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
            },
            children: "축하메시지 보내기"
          }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
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
            },
            children: /*#__PURE__*/_jsxDEV("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: ink,
              strokeWidth: "2.2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [/*#__PURE__*/_jsxDEV("path", {
                d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
              }, void 0, false), /*#__PURE__*/_jsxDEV("circle", {
                cx: "9",
                cy: "7",
                r: "4"
              }, void 0, false), /*#__PURE__*/_jsxDEV("line", {
                x1: "19",
                y1: "8",
                x2: "19",
                y2: "14"
              }, void 0, false), /*#__PURE__*/_jsxDEV("line", {
                x1: "22",
                y1: "11",
                x2: "16",
                y2: "11"
              }, void 0, false)]
            }, void 0, true)
          }, void 0, false)]
        }, void 0, true), heartKey > 0 && /*#__PURE__*/_jsxDEV("div", {
          style: {
            position: 'fixed',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 999
          },
          children: /*#__PURE__*/_jsxDEV("span", {
            className: "heart-burst",
            style: {
              fontSize: 100,
              lineHeight: 1
            },
            children: "❤️"
          }, void 0, false)
        }, heartKey, false), /*#__PURE__*/_jsxDEV("div", {
          style: {
            display: 'flex',
            gap: 12,
            overflowX: 'auto',
            paddingBottom: 14
          },
          children: highlights.map((h, i) => {
            const hasImages = h.images.length > 0;
            return /*#__PURE__*/_jsxDEV("div", {
              style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 5,
                flexShrink: 0
              },
              children: [/*#__PURE__*/_jsxDEV("button", {
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
                },
                children: /*#__PURE__*/_jsxDEV("div", {
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
                  },
                  children: hasImages ? /*#__PURE__*/_jsxDEV("img", {
                    src: h.images[0],
                    alt: h.label,
                    loading: "lazy",
                    decoding: "async",
                    style: {
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }
                  }, void 0, false) : /*#__PURE__*/_jsxDEV("span", {
                    style: {
                      fontFamily: "'Bricolage Grotesque',sans-serif",
                      fontWeight: 600,
                      fontSize: 20,
                      color: '#888'
                    },
                    children: "+"
                  }, void 0, false)
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                style: {
                  fontFamily: "'Pretendard',sans-serif",
                  fontSize: 10,
                  color: '#444',
                  whiteSpace: 'nowrap'
                },
                children: h.label
              }, void 0, false)]
            }, i, true);
          })
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        style: {
          position: 'sticky',
          top: topbarH,
          zIndex: 10,
          background: '#fff',
          display: 'flex',
          borderTop: '1px solid rgba(17,17,17,0.09)',
          borderBottom: '1px solid rgba(17,17,17,0.09)'
        },
        children: TABS.map(({
          key,
          Icon
        }) => /*#__PURE__*/_jsxDEV("button", {
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
          },
          children: /*#__PURE__*/_jsxDEV(Icon, {
            active: tab === key,
            ink: ink
          }, void 0, false)
        }, key, false))
      }, void 0, false)]
    }, void 0, true), !feedActive && tab === 'grid' && /*#__PURE__*/_jsxDEV("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 2,
        background: '#ddd'
      },
      children: posts.map((p, i) => /*#__PURE__*/_jsxDEV("button", {
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
        },
        children: [/*#__PURE__*/_jsxDEV("img", {
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
        }, void 0, false), p.photoCount > 1 && /*#__PURE__*/_jsxDEV(CarouselBadge, {}, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          style: {
            position: 'absolute',
            bottom: 5,
            right: 6,
            fontFamily: "'Bricolage Grotesque',sans-serif",
            fontSize: 9,
            fontWeight: 700,
            color: 'rgba(255,255,255,0.9)',
            textShadow: '0 1px 3px rgba(0,0,0,0.5)'
          },
          children: String(i + 1).padStart(2, '0')
        }, void 0, false)]
      }, p.id, true))
    }, void 0, false), feedActive && /*#__PURE__*/_jsxDEV("div", {
      style: {
        background: '#fff'
      },
      children: [posts.map(p => /*#__PURE__*/_jsxDEV(MemoryPost, {
        lime: lime,
        ink: ink,
        ...p,
        onSwipeBack: backFromFeed
      }, p.id, false)), /*#__PURE__*/_jsxDEV("div", {
        style: {
          background: lime,
          padding: '40px 24px 80px',
          textAlign: 'center'
        },
        children: /*#__PURE__*/_jsxDEV("div", {
          style: {
            fontFamily: "'Grand Hotel',cursive",
            fontSize: 44,
            color: ink,
            lineHeight: 1,
            marginBottom: 16
          },
          children: "Lovestagram"
        }, void 0, false)
      }, void 0, false)]
    }, void 0, true), tab === 'repost' && /*#__PURE__*/_jsxDEV("div", {
      children: [/*#__PURE__*/_jsxDEV("div", {
        style: {
          background: '#fff',
          padding: '18px 16px 12px',
          borderBottom: '1px solid rgba(17,17,17,0.08)'
        },
        children: [/*#__PURE__*/_jsxDEV("div", {
          style: {
            fontFamily: "'Bricolage Grotesque',sans-serif",
            fontSize: 22,
            fontWeight: 400,
            color: ink,
            letterSpacing: '-0.01em'
          },
          children: "우리의 관심사"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          style: {
            fontFamily: "'Pretendard',sans-serif",
            fontSize: 13,
            color: '#666',
            marginTop: 4
          },
          children: "두 사람이 함께 좋아하는 것들"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 2,
          background: '#ddd'
        },
        children: interests.map((it, i) => /*#__PURE__*/_jsxDEV("div", {
          style: {
            aspectRatio: '4/5',
            background: '#F4F2EB',
            position: 'relative',
            overflow: 'hidden'
          },
          children: [/*#__PURE__*/_jsxDEV("image-slot", {
            id: it.id,
            shape: "rect",
            fit: "cover",
            placeholder: "탭하여 추가",
            src: it.src,
            style: {
              width: '100%',
              height: '100%',
              display: 'block'
            }
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            style: {
              position: 'absolute',
              top: 6,
              right: 6,
              width: 18,
              height: 18,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.88)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            },
            children: /*#__PURE__*/_jsxDEV("svg", {
              width: "10",
              height: "10",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "#111",
              strokeWidth: "2.5",
              strokeLinecap: "round",
              children: [/*#__PURE__*/_jsxDEV("polyline", {
                points: "1,4 1,10 7,10"
              }, void 0, false), /*#__PURE__*/_jsxDEV("polyline", {
                points: "23,20 23,14 17,14"
              }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
                d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10"
              }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
                d: "M3.51 15A9 9 0 0 0 18.36 18.36L23 14"
              }, void 0, false)]
            }, void 0, true)
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            style: {
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '20px 8px 8px',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.52))',
              textAlign: 'center'
            },
            children: [/*#__PURE__*/_jsxDEV("div", {
              style: {
                fontFamily: "'Pretendard',sans-serif",
                fontWeight: 700,
                fontSize: 13,
                color: '#fff'
              },
              children: it.label
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              style: {
                fontFamily: "'Bricolage Grotesque',sans-serif",
                fontSize: 9,
                color: 'rgba(255,255,255,0.7)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              },
              children: it.sub
            }, void 0, false)]
          }, void 0, true)]
        }, it.id, true))
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        style: {
          height: 60
        }
      }, void 0, false)]
    }, void 0, true), tab === 'mention' && /*#__PURE__*/_jsxDEV(GuestbookTab, {
      lime: lime,
      ink: ink
    }, void 0, false)]
  }, void 0, true);
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
  TabIconRepost,
  TabIconMention
});