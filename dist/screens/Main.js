import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
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
  return /*#__PURE__*/_jsxDEV("div", {
    "data-screen-label": "01 Main",
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    },
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "ticker-wrap",
      style: {
        background: lime
      },
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "ticker-track",
        children: [tickerItems.map(i => /*#__PURE__*/_jsxDEV("span", {
          className: "ticker-item",
          style: {
            color: ink
          },
          children: tickerText
        }, `a${i}`, false)), tickerItems.map(i => /*#__PURE__*/_jsxDEV("span", {
          className: "ticker-item",
          style: {
            color: ink
          },
          children: tickerText
        }, `b${i}`, false))]
      }, void 0, true)
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: "inv-screen",
      style: {
        position: 'relative',
        flex: 1
      },
      children: [/*#__PURE__*/_jsxDEV("section", {
        style: {
          ...{
            position: 'relative',
            background: lime,
            minHeight: 'calc(100% - 0px)',
            padding: '48px 24px 56px',
            overflow: 'hidden'
          },
          background: "rgb(212, 230, 7)"
        },
        children: [/*#__PURE__*/_jsxDEV("div", {
          style: {
            marginBottom: 30
          },
          children: /*#__PURE__*/_jsxDEV("div", {
            className: "label-en",
            style: {
              color: ink,
              opacity: 0.7
            },
            children: "CHAEWON\xA0 ·\xA0 HAESEONG"
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          ref: weddingTextRef,
          className: "vertical-headline agrandir",
          style: {
            position: 'absolute',
            right: -1,
            top: 70,
            fontSize: 64,
            color: ink,
            lineHeight: 0.85,
            opacity: 0,
            transition: 'opacity 0.45s ease',
            height: "640px",
            fontFamily: "'Martian Mono', monospace",
            fontWeight: "400",
            fontStretch: '100%',
            letterSpacing: '0em'
          },
          children: ["WEDDING", /*#__PURE__*/_jsxDEV("br", {}, void 0, false), "INVITATION"]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          style: {
            marginTop: 18,
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
          },
          children: [/*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "fade-up",
              style: {
                marginBottom: 4
              },
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "display",
                style: {
                  fontSize: 77,
                  color: ink,
                  lineHeight: 0.88,
                  fontWeight: 600,
                  fontFamily: "'Pretendard', sans-serif"
                },
                children: "윤채원"
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                className: "serif agrandir",
                style: {
                  fontSize: 22,
                  color: ink,
                  opacity: 0.8,
                  marginTop: 2,
                  marginLeft: 4,
                  fontFamily: "'Martian Mono', monospace",
                  letterSpacing: '0em'
                },
                children: "Chaewon Yun"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "display fade-up delay-1",
              style: {
                fontSize: 36,
                margin: '14px 0 14px 4px',
                color: ink,
                display: 'flex',
                alignItems: 'center',
                gap: 10
              },
              children: [/*#__PURE__*/_jsxDEV("span", {
                style: {
                  display: 'inline-block',
                  width: 28,
                  height: 1,
                  background: ink
                }
              }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                style: {
                  fontSize: 20,
                  fontFamily: "'Martian Mono', monospace",
                  fontWeight: 300,
                  letterSpacing: '0em'
                },
                children: "and"
              }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                style: {
                  display: 'inline-block',
                  width: 28,
                  height: 1,
                  background: ink
                }
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "fade-up delay-2",
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "display",
                style: {
                  fontSize: 77,
                  color: ink,
                  lineHeight: 0.88,
                  fontWeight: 600,
                  fontFamily: "'Pretendard', sans-serif"
                },
                children: "최해성"
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                className: "serif agrandir",
                style: {
                  fontSize: 22,
                  color: ink,
                  opacity: 0.8,
                  marginTop: 2,
                  marginLeft: 4,
                  fontFamily: "'Martian Mono', monospace",
                  letterSpacing: '0em'
                },
                children: "Haeseong Choi"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: 6
            },
            children: [/*#__PURE__*/_jsxDEV("button", {
              onClick: () => openSheet('map'),
              className: "tap",
              style: {
                border: `1px solid ${ink}`,
                background: 'transparent',
                padding: '5px 8px',
                borderRadius: 99,
                cursor: 'pointer',
                fontFamily: "'Martian Mono', monospace",
                fontSize: 9,
                letterSpacing: '0.14em',
                fontWeight: 300
              },
              children: "LOCATION"
            }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
              onClick: () => openSheet('account-both'),
              className: "tap",
              style: {
                border: `1px solid ${ink}`,
                background: 'transparent',
                padding: '5px 8px',
                borderRadius: 99,
                cursor: 'pointer',
                fontFamily: "'Martian Mono', monospace",
                fontSize: 9,
                letterSpacing: '0.14em',
                fontWeight: 300
              },
              children: "ACCOUNTS"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
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
          },
          children: /*#__PURE__*/_jsxDEV("div", {
            style: {
              fontFamily: "'Pretendard', sans-serif",
              fontSize: 10,
              letterSpacing: '0.16em',
              fontWeight: 600,
              color: ink
            }
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
          ref: photoRef,
          onClick: () => goTo('memories'),
          className: "fade-up delay-3 tap",
          style: {
            marginTop: 38,
            position: 'relative',
            marginLeft: -4,
            marginRight: 30,
            display: 'block',
            width: 'auto',
            padding: 0,
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            textAlign: 'left'
          },
          children: /*#__PURE__*/_jsxDEV("div", {
            style: {
              position: 'relative',
              overflow: 'hidden',
              aspectRatio: '4/5',
              maxHeight: 280
            },
            children: [/*#__PURE__*/_jsxDEV("img", {
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
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              style: {
                position: 'absolute',
                top: 10,
                left: 10,
                background: lime,
                color: ink,
                fontFamily: "'Pretendard', sans-serif",
                fontSize: 9,
                fontWeight: 700,
                padding: '4px 8px',
                letterSpacing: '0.18em',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 6
              },
              children: ["우리의 추억 보기 ", /*#__PURE__*/_jsxDEV("span", {
                style: {
                  fontSize: 11,
                  opacity: 0.7
                },
                children: "↗"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true)
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          style: {
            marginTop: 32,
            paddingTop: 18,
            borderTop: `1px solid ${ink}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline'
          },
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "num-mono agrandir",
            style: {
              fontWeight: 300,
              color: ink,
              letterSpacing: '-0.02em',
              fontSize: "16px",
              fontFamily: "'Martian Mono', monospace",
              fontStretch: '75%'
            },
            children: "2026.09.12"
          }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
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
            },
            children: "삼성전자 서초사옥"
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("section", {
        style: {
          background: '#F8F6F0',
          padding: '64px 24px 71px',
          position: 'relative'
        },
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "label-en",
          style: {
            marginBottom: 28,
            textAlign: "left"
          },
          children: "· THE DAY"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 8,
            fontWeight: "400",
            lineHeight: 0.85
          },
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "display",
            style: {
              color: ink,
              fontSize: "120px",
              fontFamily: "'Martian Mono', monospace",
              fontStretch: '112.5%'
            },
            children: "09"
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "display",
            style: {
              color: ink,
              fontSize: "120px",
              fontFamily: "'Martian Mono', monospace",
              fontStretch: '112.5%'
            },
            children: "12"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "ko-med",
          style: {
            textAlign: 'center',
            color: ink,
            lineHeight: 1.35,
            letterSpacing: '-0.01em',
            marginTop: 14,
            marginBottom: 10,
            fontFamily: "Pretendard",
            fontSize: "20px",
            fontWeight: "400"
          },
          children: ["2026년 9월 12일", /*#__PURE__*/_jsxDEV("br", {}, void 0, false), /*#__PURE__*/_jsxDEV("span", {
            className: "ko-light",
            style: {
              fontFamily: "Pretendard",
              color: "rgb(17, 17, 17)",
              fontSize: "20px",
              fontWeight: "400"
            },
            children: "토요일 오후 1시"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
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
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          style: {
            textAlign: 'center',
            marginBottom: 36
          },
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "ko-med",
            style: {
              marginBottom: 4,
              fontSize: "20px",
              fontWeight: "400"
            },
            children: "삼성전자 서초사옥"
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "ko-light",
            style: {
              color: "rgb(17, 17, 17)",
              fontSize: "20px",
              fontWeight: "400"
            },
            children: "5층 웨딩홀"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          style: {
            marginBottom: 32
          },
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "label-en",
            style: {
              marginBottom: 14
            },
            children: "· FAMILY"
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            style: {
              display: 'grid',
              gap: 14,
              fontFamily: "'Pretendard'"
            },
            children: [/*#__PURE__*/_jsxDEV("div", {
              style: {
                display: 'flex',
                alignItems: 'baseline',
                gap: 10
              },
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "ko-reg",
                style: {
                  fontSize: 20,
                  color: '#666',
                  flex: 1
                },
                children: [/*#__PURE__*/_jsxDEV("span", {
                  style: {
                    color: ink
                  },
                  children: "최교선"
                }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                  style: {
                    margin: '0 6px',
                    opacity: 0.5
                  },
                  children: "·"
                }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                  style: {
                    color: ink
                  },
                  children: "구지영"
                }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                  style: {
                    marginLeft: 6,
                    fontSize: "16px"
                  },
                  children: "의 아들"
                }, void 0, false)]
              }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
                className: "display",
                style: {
                  fontSize: 20,
                  fontWeight: "400",
                  fontFamily: "'Pretendard', sans-serif"
                },
                children: "해성"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "hr"
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              style: {
                display: 'flex',
                alignItems: 'baseline',
                gap: 10
              },
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "ko-reg",
                style: {
                  fontSize: 20,
                  color: '#666',
                  flex: 1
                },
                children: [/*#__PURE__*/_jsxDEV("span", {
                  style: {
                    color: ink
                  },
                  children: "윤재경"
                }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                  style: {
                    margin: '0 6px',
                    opacity: 0.5
                  },
                  children: "·"
                }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                  style: {
                    color: ink
                  },
                  children: "공명아"
                }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                  style: {
                    marginLeft: 6,
                    fontSize: "16px"
                  },
                  children: "의 딸"
                }, void 0, false)]
              }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
                className: "display",
                style: {
                  fontSize: 20,
                  fontWeight: "400",
                  fontFamily: "'Pretendard', sans-serif"
                },
                children: "채원"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "ko-light",
          style: {
            textAlign: 'center',
            fontSize: 14,
            color: '#555',
            lineHeight: 1.75,
            padding: '0 4px',
            fontFamily: "Pretendard"
          },
          children: ["두 사람의 이야기가 하나가 되는 날,", /*#__PURE__*/_jsxDEV("br", {}, void 0, false), "함께 축복해 주세요"]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "serif",
          style: {
            textAlign: 'center',
            marginTop: 0,
            fontSize: 22,
            color: ink
          }
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("section", {
        style: {
          display: 'none'
        },
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "label-en",
          style: {
            marginBottom: 18,
            color: ink
          },
          children: "· NUMBERS"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 12
          },
          children: [{
            n: '1914',
            t: '함께한 날들'
          }, {
            n: '1',
            t: '하나가 되는 날'
          }, {
            n: '∞',
            t: '오늘부터, 영원히'
          }].map((x, i) => /*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "display",
              style: {
                fontSize: 44,
                color: ink,
                lineHeight: 0.9
              },
              children: x.n
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "ko-light",
              style: {
                fontSize: 11,
                color: ink,
                opacity: 0.7,
                marginTop: 6,
                lineHeight: 1.4
              },
              children: x.t
            }, void 0, false)]
          }, i, true))
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("section", {
        style: {
          background: '#F8F6F0',
          padding: '24px 24px 0'
        },
        children: /*#__PURE__*/_jsxDEV("div", {
          style: {
            border: `1px solid ${ink}`,
            background: '#fff',
            padding: '22px 20px',
            fontFamily: "'Pretendard'"
          },
          children: [/*#__PURE__*/_jsxDEV("div", {
            style: {
              display: 'flex',
              alignItems: 'baseline',
              gap: 12,
              marginBottom: 20
            },
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "label-en",
              children: "MEAL"
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "ko-light",
              style: {
                fontSize: 11,
                color: '#666'
              },
              children: "식사"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 0
            },
            children: [/*#__PURE__*/_jsxDEV("div", {
              style: {
                paddingBottom: 16
              },
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "ko-med",
                style: {
                  fontSize: 14,
                  marginBottom: 6
                },
                children: "식사 시간"
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                className: "ko-light",
                style: {
                  fontSize: 13,
                  color: '#555',
                  lineHeight: 1.65
                },
                children: "오후 1시 ~ 3시까지 식사가 제공됩니다"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "hr",
              style: {
                margin: '0 0 16px'
              }
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              style: {
                paddingBottom: 16
              },
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "ko-med",
                style: {
                  fontSize: 14,
                  marginBottom: 6
                },
                children: "식사 장소"
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                className: "ko-light",
                style: {
                  fontSize: 13,
                  color: '#555',
                  lineHeight: 1.65
                },
                children: ["서초사옥 지하1층에서 이뤄집니다", /*#__PURE__*/_jsxDEV("br", {}, void 0, false), "양식 · 중식 · 일식 중 선택하실 수 있습니다"]
              }, void 0, true)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "hr",
              style: {
                margin: '0 0 16px'
              }
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "ko-med",
                style: {
                  fontSize: 14,
                  marginBottom: 6
                },
                children: "식당 선택"
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                className: "ko-light",
                style: {
                  fontSize: 13,
                  color: '#555',
                  lineHeight: 1.65
                },
                children: ["식당 선택은 축의대에서 이뤄지오니", /*#__PURE__*/_jsxDEV("br", {}, void 0, false), "함께 오시는 분이 계시다면 미리 상의하고 오시면 좋습니다"]
              }, void 0, true)]
            }, void 0, true)]
          }, void 0, true)]
        }, void 0, true)
      }, void 0, false), /*#__PURE__*/_jsxDEV("section", {
        id: "section-location",
        style: {
          background: '#F8F6F0',
          padding: '24px 24px 24px'
        },
        children: /*#__PURE__*/_jsxDEV("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 24
          },
          children: [/*#__PURE__*/_jsxDEV("button", {
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
            },
            children: /*#__PURE__*/_jsxDEV("div", {
              style: {
                border: `1px solid ${ink}`,
                background: '#fff',
                padding: '22px 20px',
                borderRadius: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontFamily: "'Pretendard'"
              },
              children: [/*#__PURE__*/_jsxDEV("div", {
                style: {
                  flex: 1,
                  textAlign: 'left'
                },
                children: [/*#__PURE__*/_jsxDEV("div", {
                  style: {
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 24,
                    marginBottom: 6
                  },
                  children: [/*#__PURE__*/_jsxDEV("div", {
                    className: "label-en",
                    children: "VENUE"
                  }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                    className: "ko-light",
                    style: {
                      fontSize: 11,
                      color: '#666'
                    },
                    children: "오시는 길 보기"
                  }, void 0, false)]
                }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
                  className: "ko-med",
                  style: {
                    fontSize: 16
                  },
                  children: "삼성전자 서초사옥 5층"
                }, void 0, false)]
              }, void 0, true), /*#__PURE__*/_jsxDEV("span", {
                style: {
                  fontSize: 22,
                  marginLeft: 12
                },
                children: "→"
              }, void 0, false)]
            }, void 0, true)
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            id: "section-accounts",
            children: /*#__PURE__*/_jsxDEV("button", {
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
              },
              children: /*#__PURE__*/_jsxDEV("div", {
                style: {
                  border: `1px solid ${ink}`,
                  background: '#fff',
                  padding: '22px 20px',
                  borderRadius: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontFamily: "'Pretendard'"
                },
                children: [/*#__PURE__*/_jsxDEV("div", {
                  style: {
                    flex: 1,
                    textAlign: 'left'
                  },
                  children: [/*#__PURE__*/_jsxDEV("div", {
                    style: {
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: 6,
                      marginBottom: 6
                    },
                    children: [/*#__PURE__*/_jsxDEV("div", {
                      className: "label-en",
                      children: "ACCOUNT"
                    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                      className: "ko-light",
                      style: {
                        fontSize: 11,
                        color: '#666'
                      },
                      children: "계좌번호 보기"
                    }, void 0, false)]
                  }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
                    className: "ko-med",
                    style: {
                      fontSize: 16
                    },
                    children: "마음 전하실 곳"
                  }, void 0, false)]
                }, void 0, true), /*#__PURE__*/_jsxDEV("span", {
                  style: {
                    fontSize: 22,
                    marginLeft: 12
                  },
                  children: "→"
                }, void 0, false)]
              }, void 0, true)
            }, void 0, false)
          }, void 0, false)]
        }, void 0, true)
      }, void 0, false), /*#__PURE__*/_jsxDEV("section", {
        style: {
          ...{
            background: lime,
            padding: '12px 24px 12px',
            position: 'relative',
            overflow: 'hidden'
          },
          background: "rgb(212, 230, 7)"
        },
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "label-en",
          style: {
            marginBottom: 24
          }
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "display",
          style: {
            color: ink,
            fontSize: "20px",
            fontFamily: "Pretendard",
            fontWeight: "500",
            lineHeight: "1",
            letterSpacing: "-0.2px",
            margin: "0px"
          },
          children: ["보내주시는 따뜻한 축하에 감사하며,", /*#__PURE__*/_jsxDEV("br", {}, void 0, false), "함께 잘 살아가겠습니다"]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          style: {
            marginTop: 36
          },
          className: "hr-ink"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          style: {
            marginTop: 16,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline'
          },
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "num-mono",
            style: {
              fontSize: 13,
              color: ink,
              fontWeight: "300",
              fontFamily: "'Martian Mono', monospace",
              fontStretch: '100%'
            },
            children: "CHAEWON"
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "num-mono",
            style: {
              fontSize: 13,
              color: ink,
              fontWeight: "300",
              fontFamily: "'Martian Mono', monospace",
              fontStretch: '100%'
            },
            children: "HAESEONG"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
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
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true);
}
Object.assign(window, {
  MainScreen
});