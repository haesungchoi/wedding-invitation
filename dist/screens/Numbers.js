import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
/* NUMBERS DETAIL — opened from "THE TWO" photo on Main */

function NumbersScreen({
  goTo,
  openSheet,
  tweaks
}) {
  const lime = tweaks.lime;
  const ink = tweaks.ink;
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
  return /*#__PURE__*/_jsxDEV("div", {
    className: "inv-screen",
    "data-screen-label": "04 Numbers · 함께한 시간",
    children: [/*#__PURE__*/_jsxDEV("div", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 5,
        padding: '58px 20px 14px',
        background: 'rgba(212, 230, 7,0.92)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
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
          padding: 0,
          color: ink,
          fontFamily: "'Pretendard', sans-serif",
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
        className: "label-en",
        children: "OUR STORY"
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("section", {
      style: {
        background: lime,
        padding: '8px 24px 32px'
      },
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "label-en",
        style: {
          marginBottom: 10
        },
        children: "· NUMBERS"
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "display agrandir",
        style: {
          lineHeight: 0.86,
          color: ink,
          fontSize: 56,
          marginBottom: 22,
          letterSpacing: '-0.02em'
        },
        children: "The Two"
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        style: {
          position: 'relative',
          overflow: 'hidden',
          aspectRatio: '4/5'
        },
        children: /*#__PURE__*/_jsxDEV("img", {
          src: "img/couple-main.jpg",
          alt: "couple",
          loading: "lazy",
          decoding: "async",
          className: tweaks.bw ? 'bw kenburns' : 'kenburns',
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 35%'
          }
        }, void 0, false)
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("section", {
      style: {
        background: lime,
        padding: '24px 24px 56px'
      },
      children: /*#__PURE__*/_jsxDEV("div", {
        style: {
          display: 'grid',
          gap: 0
        },
        children: stats.map((s, i) => /*#__PURE__*/_jsxDEV("div", {
          style: {
            paddingTop: i === 0 ? 0 : 28,
            paddingBottom: 28,
            borderBottom: i === stats.length - 1 ? 'none' : `1px solid ${ink}`
          },
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "display agrandir",
            style: {
              fontSize: 88,
              color: ink,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              marginBottom: 14
            },
            children: s.n
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "ko-bold",
            style: {
              fontSize: 18,
              color: ink,
              marginBottom: 10,
              lineHeight: 1.3
            },
            children: s.t
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "ko-light",
            style: {
              fontSize: 14,
              color: ink,
              opacity: 0.85,
              lineHeight: 1.65
            },
            children: s.d.map((line, j) => /*#__PURE__*/_jsxDEV("div", {
              children: line
            }, j, false))
          }, void 0, false)]
        }, i, true))
      }, void 0, false)
    }, void 0, false), /*#__PURE__*/_jsxDEV("section", {
      style: {
        background: '#F8F6F0',
        padding: '36px 24px 80px',
        textAlign: 'center'
      },
      children: /*#__PURE__*/_jsxDEV("button", {
        onClick: () => goTo('main'),
        className: "tap",
        style: {
          background: 'transparent',
          border: `1px solid ${ink}`,
          color: ink,
          padding: '14px 28px',
          borderRadius: 99,
          cursor: 'pointer',
          fontFamily: "'Pretendard', sans-serif",
          fontWeight: 700,
          fontSize: 11,
          letterSpacing: '0.18em'
        },
        children: "← 메인으로 돌아가기"
      }, void 0, false)
    }, void 0, false)]
  }, void 0, true);
}
Object.assign(window, {
  NumbersScreen
});