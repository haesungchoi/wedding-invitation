import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
// pc-layout.jsx — Wide layout for PC (≥1200px) and Tablet (768–1199px)
// Usage: <WideApp tweaks={...} openSheet={fn} variant="pc"|"tablet" />

/* ─── Header ────────────────────────────────────────────────── */
function PCHeader({
  lime,
  ink,
  openSheet,
  variant,
  onOpenMemories
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', h, {
      passive: true
    });
    return () => window.removeEventListener('scroll', h);
  }, []);
  const H = variant === 'pc' ? 64 : 56;
  const px = variant === 'pc' ? 64 : 32;
  const navItems = [{
    label: 'THE DAY',
    onClick: () => document.getElementById('wide-day')?.scrollIntoView({
      behavior: 'smooth'
    })
  }, {
    label: '우리의 추억',
    onClick: onOpenMemories
  }];
  return /*#__PURE__*/_jsxDEV("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 200,
      height: H,
      padding: `0 ${px}px`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(248,246,240,0.94)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(17,17,17,0.07)' : 'none',
      transition: 'background 0.3s, border-color 0.3s'
    },
    children: [/*#__PURE__*/_jsxDEV("div", {
      style: {
        fontFamily: "'Martian Mono', monospace",
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '0.18em',
        color: ink
      },
      children: "CHAEWON · HAESEONG"
    }, void 0, false), /*#__PURE__*/_jsxDEV("nav", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: variant === 'pc' ? 28 : 16
      },
      children: [navItems.map(item => /*#__PURE__*/_jsxDEV("button", {
        onClick: item.onClick,
        style: {
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: "'Martian Mono', monospace",
          fontSize: 9,
          letterSpacing: '0.16em',
          fontWeight: 600,
          color: ink,
          padding: 0
        },
        children: item.label
      }, item.label, false)), /*#__PURE__*/_jsxDEV("button", {
        onClick: () => openSheet('share'),
        style: {
          background: ink,
          color: lime,
          border: 'none',
          padding: '8px 18px',
          borderRadius: 99,
          cursor: 'pointer',
          fontFamily: "'Martian Mono', monospace",
          fontSize: 9,
          letterSpacing: '0.14em',
          fontWeight: 700
        },
        children: "SHARE ↗"
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
}

/* ─── Hero Section ──────────────────────────────────────────── */
function PCHeroSection({
  lime,
  ink,
  tweaks,
  openSheet,
  variant,
  onOpenMemories
}) {
  const wedding = new Date('2026-09-12T13:00:00+09:00');
  const days = Math.max(0, Math.ceil((wedding - new Date()) / (86400 * 1000)));
  const nameSize = variant === 'pc' ? 112 : 76;
  const H = variant === 'pc' ? 64 : 56;
  const px = variant === 'pc' ? 80 : 48;
  return /*#__PURE__*/_jsxDEV("section", {
    style: {
      background: lime,
      height: '100vh',
      boxSizing: 'border-box',
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    },
    children: [/*#__PURE__*/_jsxDEV("div", {
      style: {
        paddingTop: H + (variant === 'pc' ? 48 : 32),
        paddingRight: variant === 'pc' ? px / 2 : 28,
        paddingBottom: variant === 'pc' ? 48 : 32,
        paddingLeft: px,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden'
      },
      children: [/*#__PURE__*/_jsxDEV("div", {
        style: {
          fontFamily: "'Martian Mono', monospace",
          fontSize: variant === 'pc' ? 26 : 18,
          letterSpacing: '0.2em',
          fontWeight: 600,
          color: ink,
          opacity: 0.6,
          lineHeight: 1.4
        },
        children: ["WEDDING", /*#__PURE__*/_jsxDEV("br", {}, void 0, false), "INVITATION"]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        children: [/*#__PURE__*/_jsxDEV("div", {
          style: {
            marginBottom: 8
          },
          children: [/*#__PURE__*/_jsxDEV("div", {
            style: {
              fontFamily: "'Pretendard', sans-serif",
              fontSize: nameSize,
              fontWeight: 600,
              lineHeight: 0.88,
              color: ink
            },
            children: "윤채원"
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            style: {
              fontFamily: "'Martian Mono', monospace",
              fontSize: variant === 'pc' ? 26 : 18,
              color: ink,
              opacity: 0.65,
              marginTop: 5,
              marginLeft: 3
            },
            children: "Chaewon Yun"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            margin: `${variant === 'pc' ? 22 : 14}px 0`,
            marginLeft: 3
          },
          children: [/*#__PURE__*/_jsxDEV("span", {
            style: {
              display: 'inline-block',
              width: 36,
              height: 1,
              background: ink
            }
          }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
            style: {
              fontFamily: "'Martian Mono', monospace",
              fontSize: variant === 'pc' ? 22 : 17,
              color: ink,
              opacity: 0.65
            },
            children: "and"
          }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
            style: {
              display: 'inline-block',
              width: 36,
              height: 1,
              background: ink
            }
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          children: [/*#__PURE__*/_jsxDEV("div", {
            style: {
              fontFamily: "'Pretendard', sans-serif",
              fontSize: nameSize,
              fontWeight: 600,
              lineHeight: 0.88,
              color: ink
            },
            children: "최해성"
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            style: {
              fontFamily: "'Martian Mono', monospace",
              fontSize: variant === 'pc' ? 26 : 18,
              color: ink,
              opacity: 0.65,
              marginTop: 5,
              marginLeft: 3
            },
            children: "Haeseong Choi"
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        style: {
          borderTop: `1px solid ${ink}`,
          paddingTop: 22
        },
        children: [/*#__PURE__*/_jsxDEV("div", {
          style: {
            marginBottom: 16
          },
          children: /*#__PURE__*/_jsxDEV("div", {
            style: {
              fontFamily: "'Martian Mono', monospace",
              fontSize: variant === 'pc' ? 17 : 13,
              color: ink,
              fontWeight: 300
            },
            children: "2026.09.12"
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          style: {
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap'
          },
          children: [{
            label: 'LOCATION →',
            action: () => openSheet('map')
          }, {
            label: 'ACCOUNTS →',
            action: () => openSheet('account-both')
          }].map(b => /*#__PURE__*/_jsxDEV("button", {
            onClick: b.action,
            style: {
              background: b.dark ? ink : 'transparent',
              color: b.dark ? lime : ink,
              border: b.dark ? 'none' : `1px solid ${ink}`,
              padding: '9px 18px',
              borderRadius: 99,
              cursor: 'pointer',
              fontFamily: "'Martian Mono', monospace",
              fontSize: 9,
              letterSpacing: '0.14em',
              fontWeight: 700
            },
            children: b.label
          }, b.label, false))
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
      onClick: onOpenMemories,
      className: "tap",
      style: {
        position: 'relative',
        overflow: 'hidden',
        padding: 0,
        border: 'none',
        cursor: 'pointer',
        display: 'block',
        width: '100%',
        height: '100%'
      },
      children: [/*#__PURE__*/_jsxDEV("img", {
        src: "img/couple-main.jpg",
        alt: "couple",
        fetchPriority: "high",
        decoding: "async",
        className: tweaks.bw ? 'bw kenburns' : 'kenburns',
        style: {
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 30%'
        }
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        style: {
          position: 'absolute',
          top: 20,
          left: 20,
          background: lime,
          color: ink,
          fontFamily: "'Pretendard', sans-serif",
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: '0.18em',
          padding: '5px 10px',
          borderRadius: 2
        },
        children: "우리의 추억 보기 ↗"
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "vertical-headline",
        style: {
          position: 'absolute',
          right: 20,
          top: 80,
          fontSize: 11,
          letterSpacing: '0.12em',
          color: 'rgba(255,255,255,0.55)',
          fontWeight: 400,
          fontFamily: "'Martian Mono', monospace"
        },
        children: "WEDDING INVITATION"
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
}

/* ─── Ticker Band (separator) ───────────────────────────────── */
function PCTickerBand({
  lime,
  ink
}) {
  const items = Array.from({
    length: 10
  }, (_, i) => i);
  return /*#__PURE__*/_jsxDEV("div", {
    className: "ticker-wrap",
    style: {
      height: 44,
      padding: '12px 0',
      background: lime
    },
    children: /*#__PURE__*/_jsxDEV("div", {
      className: "ticker-track",
      children: [items.map(i => /*#__PURE__*/_jsxDEV("span", {
        className: "ticker-item",
        style: {
          fontSize: 12,
          color: ink
        },
        children: "Welcome to our wedding"
      }, 'a' + i, false)), items.map(i => /*#__PURE__*/_jsxDEV("span", {
        className: "ticker-item",
        style: {
          fontSize: 12,
          color: ink
        },
        children: "Welcome to our wedding"
      }, 'b' + i, false))]
    }, void 0, true)
  }, void 0, false);
}

/* ─── THE DAY Section ───────────────────────────────────────── */
function PCTheDaySection({
  ink,
  variant
}) {
  const daySize = variant === 'pc' ? 172 : 120;
  const px = variant === 'pc' ? 80 : 48;
  const py = variant === 'pc' ? 112 : 72;
  return /*#__PURE__*/_jsxDEV("section", {
    id: "wide-day",
    style: {
      background: '#F8F6F0',
      padding: `${py}px ${px}px`
    },
    children: /*#__PURE__*/_jsxDEV("div", {
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "label-en",
        style: {
          marginBottom: variant === 'pc' ? 56 : 36
        },
        children: "· THE DAY"
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: variant === 'pc' ? 48 : 28,
          marginBottom: variant === 'pc' ? 72 : 48
        },
        children: [/*#__PURE__*/_jsxDEV("div", {
          style: {
            fontFamily: "'Martian Mono', monospace",
            fontStretch: '112.5%',
            fontSize: daySize,
            color: ink,
            lineHeight: 0.85,
            fontWeight: 400
          },
          children: "09"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          style: {
            width: 1,
            height: daySize * 0.65,
            background: ink,
            transform: 'rotate(8deg)',
            flexShrink: 0
          }
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          style: {
            fontFamily: "'Martian Mono', monospace",
            fontStretch: '112.5%',
            fontSize: daySize,
            color: ink,
            lineHeight: 0.85,
            fontWeight: 400
          },
          children: "12"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: variant === 'pc' ? '1fr 1fr 1fr' : '1fr 1fr',
          gap: variant === 'pc' ? 48 : 28
        },
        children: [{
          label: '· DATE & TIME',
          body: /*#__PURE__*/_jsxDEV("div", {
            style: {
              fontFamily: "'Pretendard'",
              fontSize: variant === 'pc' ? 21 : 17,
              fontWeight: 400,
              lineHeight: 1.55,
              color: ink
            },
            children: ["2026년 9월 12일", /*#__PURE__*/_jsxDEV("br", {}, void 0, false), /*#__PURE__*/_jsxDEV("span", {
              style: {
                color: '#555',
                fontSize: variant === 'pc' ? 17 : 14
              },
              children: "토요일 오후 1시"
            }, void 0, false)]
          }, void 0, true)
        }, {
          label: '· VENUE',
          body: /*#__PURE__*/_jsxDEV("div", {
            style: {
              fontFamily: "'Pretendard'",
              fontSize: variant === 'pc' ? 21 : 17,
              fontWeight: 400,
              lineHeight: 1.55,
              color: ink
            },
            children: ["삼성전자 서초사옥", /*#__PURE__*/_jsxDEV("br", {}, void 0, false), /*#__PURE__*/_jsxDEV("span", {
              style: {
                color: '#555',
                fontSize: variant === 'pc' ? 17 : 14
              },
              children: "5층 웨딩홀"
            }, void 0, false)]
          }, void 0, true)
        }, {
          label: '· FAMILY',
          style: {
            gridColumn: variant === 'pc' ? 'auto' : '1 / -1'
          },
          body: /*#__PURE__*/_jsxDEV("div", {
            style: {
              fontFamily: "'Pretendard'",
              fontSize: variant === 'pc' ? 21 : 17,
              fontWeight: 400,
              lineHeight: 1.55,
              color: ink
            },
            children: [/*#__PURE__*/_jsxDEV("div", {
              children: [/*#__PURE__*/_jsxDEV("span", {
                style: {
                  fontWeight: 600
                },
                children: "최교선 · 구지영"
              }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                style: {
                  color: '#555',
                  fontSize: variant === 'pc' ? 17 : 14
                },
                children: "의 아들 해성"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              style: {
                height: 1,
                background: 'rgba(17,17,17,0.1)',
                margin: '10px 0'
              }
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              children: [/*#__PURE__*/_jsxDEV("span", {
                style: {
                  fontWeight: 600
                },
                children: "윤재경 · 공명아"
              }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                style: {
                  color: '#555',
                  fontSize: variant === 'pc' ? 17 : 14
                },
                children: "의 딸 채원"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true)
        }].map(col => /*#__PURE__*/_jsxDEV("div", {
          style: col.style,
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "label-en",
            style: {
              marginBottom: 14
            },
            children: col.label
          }, void 0, false), col.body]
        }, col.label, true))
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        style: {
          marginTop: variant === 'pc' ? 64 : 44,
          textAlign: 'center'
        },
        children: /*#__PURE__*/_jsxDEV("div", {
          style: {
            fontFamily: "'Pretendard'",
            fontSize: variant === 'pc' ? 18 : 15,
            color: '#555',
            lineHeight: 1.9
          },
          children: ["두 사람의 이야기가 하나가 되는 날,", /*#__PURE__*/_jsxDEV("br", {}, void 0, false), "함께 축복해 주세요"]
        }, void 0, true)
      }, void 0, false)]
    }, void 0, true)
  }, void 0, false);
}

/* ─── MEMORIES Section ──────────────────────────────────────── */
function PCMemoriesSection({
  lime,
  ink,
  tweaks,
  variant,
  openSheet
}) {
  const [tab, setTab] = React.useState('grid');
  const [story, setStory] = React.useState(null);
  const [heartKey, setHeartKey] = React.useState(0);
  const burstHeart = () => setHeartKey(k => k + 1);
  const px = variant === 'pc' ? 80 : 48;
  const gridCols = variant === 'pc' ? 6 : 3;
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
    id: 'wi-1',
    label: '여행',
    sub: 'Travel'
  }, {
    id: 'wi-2',
    label: '음악',
    sub: 'Music'
  }, {
    id: 'wi-3',
    label: '카페',
    sub: 'Café',
    src: 'img/memories/repost-cafe/cafe-1.jpg'
  }, {
    id: 'wi-4',
    label: '영화',
    sub: 'Film'
  }, {
    id: 'wi-5',
    label: '자연',
    sub: 'Nature'
  }, {
    id: 'wi-6',
    label: '음식',
    sub: 'Food',
    src: 'img/memories/repost-food/food-1.jpg'
  }];
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
  return /*#__PURE__*/_jsxDEV("section", {
    id: "wide-memories",
    style: {
      background: '#fff',
      borderTop: '1px solid rgba(17,17,17,0.07)'
    },
    children: [story && /*#__PURE__*/_jsxDEV("div", {
      style: {
        position: 'fixed',
        inset: 0,
        zIndex: 500
      },
      children: /*#__PURE__*/_jsxDEV(StoryViewer, {
        groups: story.groups,
        startGroupIdx: story.startGroupIdx,
        onClose: () => setStory(null)
      }, void 0, false)
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      style: {
        padding: `${variant === 'pc' ? 52 : 36}px ${px}px 20px`,
        borderBottom: '1px solid rgba(17,17,17,0.08)'
      },
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "label-en",
        style: {
          marginBottom: 28
        },
        children: "· 우리의 추억"
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: variant === 'pc' ? 44 : 24,
          flexWrap: 'wrap',
          marginBottom: 16
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
              padding: variant === 'pc' ? 3 : 2.5,
              borderRadius: '50%',
              background: 'linear-gradient(45deg,#fcaf45,#f77737,#f56040,#fd1d1d,#e1306c,#c13584,#833ab4,#5851db)'
            },
            children: /*#__PURE__*/_jsxDEV("div", {
              style: {
                padding: variant === 'pc' ? 3 : 2.5,
                borderRadius: '50%',
                background: '#fff'
              },
              children: /*#__PURE__*/_jsxDEV("img", {
                src: "img/couple-main.jpg",
                alt: "채원 ♥ 해성",
                loading: "lazy",
                decoding: "async",
                className: tweaks.bw ? 'bw' : '',
                style: {
                  width: variant === 'pc' ? 92 : 68,
                  height: variant === 'pc' ? 92 : 68,
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
            gap: variant === 'pc' ? 44 : 24
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
                fontSize: variant === 'pc' ? 26 : 20,
                color: ink,
                lineHeight: 1
              },
              children: s.n
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              style: {
                fontFamily: "'Pretendard',sans-serif",
                fontSize: 11,
                color: '#666',
                marginTop: 4
              },
              children: s.l
            }, void 0, false)]
          }, i, true))
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          style: {
            marginLeft: variant === 'pc' ? 24 : 4
          },
          children: [/*#__PURE__*/_jsxDEV("div", {
            style: {
              fontFamily: "'Pretendard',sans-serif",
              fontWeight: 700,
              fontSize: 15,
              color: ink
            },
            children: "채원 ♡ 해성"
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            style: {
              fontFamily: "'Pretendard',sans-serif",
              fontSize: 13,
              color: '#444',
              lineHeight: 1.7,
              marginTop: 4
            },
            children: ["2026.09.12", /*#__PURE__*/_jsxDEV("br", {}, void 0, false), "두 사람의 이야기가 하나가 되는 날"]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        style: {
          display: 'flex',
          gap: 8,
          marginBottom: 20,
          maxWidth: 480
        },
        children: [/*#__PURE__*/_jsxDEV("button", {
          className: "tap",
          onClick: () => openSheet && openSheet('following'),
          style: {
            flex: 1,
            padding: '8px 0',
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
            gap: 4
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
            flex: 2,
            padding: '8px 0',
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
            fontSize: 120,
            lineHeight: 1
          },
          children: "❤️"
        }, void 0, false)
      }, heartKey, false), /*#__PURE__*/_jsxDEV("div", {
        style: {
          display: 'flex',
          gap: variant === 'pc' ? 20 : 14,
          overflowX: 'auto',
          paddingBottom: 4
        },
        children: highlights.map((h, i) => {
          const hasImages = h.images.length > 0;
          return /*#__PURE__*/_jsxDEV("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 6,
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
                  width: variant === 'pc' ? 64 : 56,
                  height: variant === 'pc' ? 64 : 56,
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
                    fontSize: 22,
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
        display: 'flex',
        justifyContent: 'center',
        borderBottom: '1px solid rgba(17,17,17,0.08)'
      },
      children: TABS.map(({
        key,
        Icon
      }) => /*#__PURE__*/_jsxDEV("button", {
        onClick: () => setTab(key),
        className: "tap",
        style: {
          padding: `14px ${variant === 'pc' ? 40 : 28}px`,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          borderBottom: tab === key ? `2px solid ${ink}` : '2px solid transparent',
          transition: 'border-color .15s'
        },
        children: /*#__PURE__*/_jsxDEV(Icon, {
          active: tab === key,
          ink: ink
        }, void 0, false)
      }, key, false))
    }, void 0, false), tab === 'grid' && /*#__PURE__*/_jsxDEV("div", {
      style: {
        padding: `40px ${px}px 80px`,
        background: '#FAFAFA'
      },
      children: [/*#__PURE__*/_jsxDEV("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: variant === 'pc' ? '1fr 1fr 1fr' : '1fr',
          gap: 20,
          maxWidth: 1200,
          margin: '0 auto'
        },
        children: posts.map(p => /*#__PURE__*/_jsxDEV("div", {
          style: {
            background: '#fff',
            border: '1px solid rgba(17,17,17,0.07)',
            borderRadius: 12,
            overflow: 'hidden'
          },
          children: /*#__PURE__*/_jsxDEV(MemoryPost, {
            lime: lime,
            ink: ink,
            ...p
          }, void 0, false)
        }, p.id, false))
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        style: {
          background: lime,
          padding: '48px 0',
          textAlign: 'center',
          borderRadius: 12,
          maxWidth: 1200,
          margin: '40px auto 0'
        },
        children: /*#__PURE__*/_jsxDEV("div", {
          style: {
            fontFamily: "'Grand Hotel', cursive",
            fontSize: 52,
            color: ink,
            lineHeight: 1
          },
          children: "Lovestagram"
        }, void 0, false)
      }, void 0, false)]
    }, void 0, true), tab === 'repost' && /*#__PURE__*/_jsxDEV("div", {
      children: [/*#__PURE__*/_jsxDEV("div", {
        style: {
          padding: `24px ${px}px 16px`,
          borderBottom: '1px solid rgba(17,17,17,0.07)'
        },
        children: [/*#__PURE__*/_jsxDEV("div", {
          style: {
            fontFamily: "'Bricolage Grotesque',sans-serif",
            fontSize: 22,
            fontWeight: 400,
            color: ink
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
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: 2,
          background: '#ddd'
        },
        children: interests.map(it => /*#__PURE__*/_jsxDEV("div", {
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
              background: 'linear-gradient(transparent,rgba(0,0,0,0.52))',
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
    }, void 0, true), tab === 'mention' && /*#__PURE__*/_jsxDEV("div", {
      style: {
        maxWidth: 720,
        margin: '0 auto',
        padding: '48px 24px 80px'
      },
      children: /*#__PURE__*/_jsxDEV(GuestbookTab, {
        lime: lime,
        ink: ink
      }, void 0, false)
    }, void 0, false)]
  }, void 0, true);
}

/* ─── OUR STORY / Numbers Section ──────────────────────────── */
function PCNumbersSection({
  lime,
  ink,
  tweaks,
  variant
}) {
  const px = variant === 'pc' ? 80 : 48;
  const py = variant === 'pc' ? 112 : 72;
  const numSize = variant === 'pc' ? 88 : 68;
  const stats = [{
    n: '1914',
    t: '처음 만난 날부터 결혼하는 날까지',
    d: ['1,914일을 함께 걸어왔습니다', '그 모든 날이 오늘을 만들었습니다']
  }, {
    n: '1',
    t: '이제, 하나가 됩니다',
    d: ['각자의 이야기를 써온 두 사람이', '오늘부터 같은 페이지를 씁니다']
  }, {
    n: '∞',
    t: '오늘부터, 영원히',
    d: ['서로를 완성하기보다,', '함께 무한히 삶을 만들어가려 합니다']
  }];
  return /*#__PURE__*/_jsxDEV("section", {
    id: "wide-story",
    style: {
      background: lime,
      padding: `${py}px ${px}px`
    },
    children: /*#__PURE__*/_jsxDEV("div", {
      style: {
        maxWidth: 1200,
        margin: '0 auto'
      },
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "label-en",
        style: {
          marginBottom: variant === 'pc' ? 56 : 36
        },
        children: "· OUR STORY"
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: variant === 'pc' ? 80 : 48,
          alignItems: 'start'
        },
        children: [/*#__PURE__*/_jsxDEV("div", {
          style: {
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 8
          },
          children: [/*#__PURE__*/_jsxDEV("img", {
            src: "img/couple-main.jpg",
            alt: "couple",
            loading: "lazy",
            decoding: "async",
            className: tweaks.bw ? 'bw' : '',
            style: {
              width: '100%',
              aspectRatio: '4/5',
              objectFit: 'cover',
              objectPosition: 'center 30%',
              display: 'block'
            }
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            style: {
              position: 'absolute',
              top: 16,
              left: 16,
              background: lime,
              color: ink,
              fontFamily: "'Martian Mono', monospace",
              fontSize: 9,
              letterSpacing: '0.14em',
              padding: '4px 10px',
              borderRadius: 2
            },
            children: "The Two"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          children: stats.map((s, i) => /*#__PURE__*/_jsxDEV("div", {
            style: {
              paddingTop: i === 0 ? 0 : 32,
              paddingBottom: 32,
              borderBottom: i === stats.length - 1 ? 'none' : `1px solid ${ink}`
            },
            children: [/*#__PURE__*/_jsxDEV("div", {
              style: {
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: numSize,
                color: ink,
                lineHeight: 0.9,
                letterSpacing: '-0.02em',
                marginBottom: 14
              },
              children: s.n
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              style: {
                fontFamily: "'Pretendard', sans-serif",
                fontWeight: 700,
                fontSize: 17,
                color: ink,
                marginBottom: 8,
                lineHeight: 1.3
              },
              children: s.t
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              style: {
                fontFamily: "'Pretendard', sans-serif",
                fontSize: 14,
                color: ink,
                opacity: 0.82,
                lineHeight: 1.65
              },
              children: s.d.map((line, j) => /*#__PURE__*/_jsxDEV("div", {
                children: line
              }, j, false))
            }, void 0, false)]
          }, i, true))
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true)
  }, void 0, false);
}

/* ─── VENUE + ACCOUNT Section ───────────────────────────────── */
function PCVenueSection({
  lime,
  ink,
  openSheet,
  variant
}) {
  const px = variant === 'pc' ? 80 : 48;
  const py = variant === 'pc' ? 96 : 64;
  return /*#__PURE__*/_jsxDEV("section", {
    style: {
      background: '#F8F6F0',
      padding: `${py}px ${px}px`
    },
    children: /*#__PURE__*/_jsxDEV("div", {
      style: {
        maxWidth: 1200,
        margin: '0 auto'
      },
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "label-en",
        style: {
          marginBottom: variant === 'pc' ? 44 : 28
        },
        children: "· INFORMATION"
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 14,
          marginBottom: 14
        },
        children: [{
          label: 'VENUE',
          title: '삼성전자 서초사옥',
          sub: '5층 웨딩홀',
          cta: '오시는 길 보기 →',
          action: () => openSheet('map')
        }, {
          label: 'ACCOUNT',
          title: '마음 전하실 곳',
          sub: '계좌 번호 안내',
          cta: '계좌 번호 보기 →',
          action: () => openSheet('account-both')
        }].map(card => /*#__PURE__*/_jsxDEV("button", {
          onClick: card.action,
          className: "tap",
          style: {
            display: 'block',
            width: '100%',
            border: `1px solid ${ink}`,
            background: '#fff',
            padding: `${variant === 'pc' ? 38 : 26}px 28px`,
            textAlign: 'left',
            cursor: 'pointer'
          },
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "label-en",
            style: {
              marginBottom: 12
            },
            children: card.label
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            style: {
              fontFamily: "'Pretendard'",
              fontSize: variant === 'pc' ? 24 : 19,
              fontWeight: 500,
              marginBottom: 6,
              color: ink
            },
            children: card.title
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            style: {
              fontFamily: "'Pretendard'",
              fontSize: 14,
              color: '#666',
              marginBottom: 22
            },
            children: card.sub
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            style: {
              fontFamily: "'Martian Mono'",
              fontSize: 10,
              color: ink,
              letterSpacing: '0.14em',
              fontWeight: 600
            },
            children: card.cta
          }, void 0, false)]
        }, card.label, true))
      }, void 0, false)]
    }, void 0, true)
  }, void 0, false);
}

/* ─── CLOSING Section ───────────────────────────────────────── */
function PCClosingSection({
  lime,
  ink,
  openSheet,
  variant
}) {
  const px = variant === 'pc' ? 80 : 48;
  return /*#__PURE__*/_jsxDEV("section", {
    style: {
      background: lime,
      padding: `${variant === 'pc' ? 112 : 72}px ${px}px`
    },
    children: /*#__PURE__*/_jsxDEV("div", {
      style: {
        maxWidth: 1200,
        margin: '0 auto'
      },
      children: [/*#__PURE__*/_jsxDEV("div", {
        style: {
          fontSize: variant === 'pc' ? 54 : 38,
          fontFamily: "'Pretendard', sans-serif",
          fontWeight: 500,
          lineHeight: 1.1,
          letterSpacing: '-0.4px',
          color: ink,
          marginBottom: 48
        },
        children: ["보내주시는 따뜻한 축하에 감사하며,", /*#__PURE__*/_jsxDEV("br", {}, void 0, false), "함께 잘 살아가겠습니다"]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        style: {
          height: 1,
          background: ink,
          marginBottom: 22
        }
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: 52
        },
        children: [/*#__PURE__*/_jsxDEV("div", {
          style: {
            fontFamily: "'Martian Mono', monospace",
            fontSize: 10,
            letterSpacing: '0.18em',
            color: ink,
            fontWeight: 600
          },
          children: "CHAEWON · HAESEONG"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          style: {
            fontFamily: "'Martian Mono', monospace",
            fontSize: 13,
            color: ink,
            fontWeight: 300
          },
          children: "2026.09.12"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        style: {
          display: 'flex',
          gap: 10
        },
        children: /*#__PURE__*/_jsxDEV("button", {
          onClick: () => openSheet('share'),
          style: {
            background: ink,
            color: lime,
            border: 'none',
            padding: '12px 28px',
            borderRadius: 99,
            cursor: 'pointer',
            fontFamily: "'Martian Mono', monospace",
            fontSize: 9,
            letterSpacing: '0.14em',
            fontWeight: 700
          },
          children: "SHARE ↗"
        }, void 0, false)
      }, void 0, false)]
    }, void 0, true)
  }, void 0, false);
}

/* ─── Root ──────────────────────────────────────────────────── */
function WideApp({
  tweaks,
  openSheet,
  variant
}) {
  const [showMemories, setShowMemories] = React.useState(false);
  const lime = tweaks.lime;
  const ink = tweaks.ink;
  const openMemories = () => setShowMemories(true);
  const closeMemories = () => setShowMemories(false);
  return /*#__PURE__*/_jsxDEV("div", {
    style: {
      minHeight: '100vh',
      background: '#F8F6F0'
    },
    children: [showMemories && /*#__PURE__*/_jsxDEV("div", {
      style: {
        position: 'fixed',
        inset: 0,
        zIndex: 300,
        background: '#fff',
        overflowY: 'auto'
      },
      children: [/*#__PURE__*/_jsxDEV("button", {
        onClick: closeMemories,
        style: {
          position: 'fixed',
          top: variant === 'pc' ? 20 : 14,
          left: variant === 'pc' ? 28 : 16,
          zIndex: 301,
          background: 'rgba(248,246,240,0.92)',
          border: `1px solid ${ink}`,
          borderRadius: 99,
          padding: '8px 18px',
          cursor: 'pointer',
          fontFamily: "'Martian Mono', monospace",
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: '0.14em',
          color: ink,
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)'
        },
        children: "← BACK"
      }, void 0, false), /*#__PURE__*/_jsxDEV(PCMemoriesSection, {
        lime: lime,
        ink: ink,
        tweaks: tweaks,
        variant: variant,
        openSheet: openSheet
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV(PCHeader, {
      lime: lime,
      ink: ink,
      openSheet: openSheet,
      variant: variant,
      onOpenMemories: openMemories
    }, void 0, false), /*#__PURE__*/_jsxDEV(PCHeroSection, {
      lime: lime,
      ink: ink,
      tweaks: tweaks,
      openSheet: openSheet,
      variant: variant,
      onOpenMemories: openMemories
    }, void 0, false), /*#__PURE__*/_jsxDEV(PCTickerBand, {
      lime: lime,
      ink: ink
    }, void 0, false), /*#__PURE__*/_jsxDEV(PCTheDaySection, {
      ink: ink,
      variant: variant
    }, void 0, false), /*#__PURE__*/_jsxDEV(PCVenueSection, {
      lime: lime,
      ink: ink,
      openSheet: openSheet,
      variant: variant
    }, void 0, false), /*#__PURE__*/_jsxDEV(PCClosingSection, {
      lime: lime,
      ink: ink,
      openSheet: openSheet,
      variant: variant
    }, void 0, false)]
  }, void 0, true);
}
Object.assign(window, {
  WideApp
});