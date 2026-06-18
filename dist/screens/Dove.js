import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
/* Dove transition — bird carries an envelope across screen,
   envelope grows + opens, revealing new screen. */

function DoveSVG() {
  return /*#__PURE__*/_jsxDEV("svg", {
    viewBox: "0 0 140 90",
    width: "140",
    height: "90",
    style: {
      overflow: 'visible'
    },
    children: [/*#__PURE__*/_jsxDEV("polygon", {
      points: "14,52 0,42 0,60",
      fill: "#FFFFFF",
      stroke: "#111",
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }, void 0, false), /*#__PURE__*/_jsxDEV("ellipse", {
      cx: "55",
      cy: "52",
      rx: "38",
      ry: "14",
      fill: "#FFFFFF",
      stroke: "#111",
      strokeWidth: "1.6"
    }, void 0, false), /*#__PURE__*/_jsxDEV("circle", {
      cx: "92",
      cy: "40",
      r: "13",
      fill: "#FFFFFF",
      stroke: "#111",
      strokeWidth: "1.6"
    }, void 0, false), /*#__PURE__*/_jsxDEV("circle", {
      cx: "99",
      cy: "37",
      r: "1.6",
      fill: "#111"
    }, void 0, false), /*#__PURE__*/_jsxDEV("polygon", {
      points: "104,40 118,42 104,44",
      fill: "#FFB347",
      stroke: "#111",
      strokeWidth: "1.4",
      strokeLinejoin: "round"
    }, void 0, false), /*#__PURE__*/_jsxDEV("line", {
      x1: "58",
      y1: "65",
      x2: "58",
      y2: "72",
      stroke: "#111",
      strokeWidth: "1.3"
    }, void 0, false), /*#__PURE__*/_jsxDEV("line", {
      x1: "65",
      y1: "65",
      x2: "65",
      y2: "72",
      stroke: "#111",
      strokeWidth: "1.3"
    }, void 0, false), /*#__PURE__*/_jsxDEV("g", {
      className: "dove-wing-back",
      children: /*#__PURE__*/_jsxDEV("path", {
        d: "M 50,46 Q 58,30 75,38 Q 70,48 50,46 Z",
        fill: "#E6E2D6",
        stroke: "#111",
        strokeWidth: "1.4",
        strokeLinejoin: "round"
      }, void 0, false)
    }, void 0, false), /*#__PURE__*/_jsxDEV("g", {
      className: "dove-wing-front",
      children: [/*#__PURE__*/_jsxDEV("path", {
        d: "M 38,48 Q 55,8 82,40 Q 60,58 38,48 Z",
        fill: "#FFFFFF",
        stroke: "#111",
        strokeWidth: "1.6",
        strokeLinejoin: "round"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "M 50,42 Q 58,28 70,38",
        fill: "none",
        stroke: "#111",
        strokeWidth: "1",
        opacity: "0.45"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "M 55,46 Q 62,33 74,42",
        fill: "none",
        stroke: "#111",
        strokeWidth: "1",
        opacity: "0.35"
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
}
function TinyEnvelope() {
  return /*#__PURE__*/_jsxDEV("div", {
    className: "env-tiny",
    children: /*#__PURE__*/_jsxDEV("svg", {
      viewBox: "0 0 40 28",
      width: "40",
      height: "28",
      children: [/*#__PURE__*/_jsxDEV("rect", {
        x: "1",
        y: "1",
        width: "38",
        height: "26",
        fill: "#F8F6F0",
        stroke: "#111",
        strokeWidth: "1.3"
      }, void 0, false), /*#__PURE__*/_jsxDEV("polygon", {
        points: "1,1 20,16 39,1",
        fill: "#F8F6F0",
        stroke: "#111",
        strokeWidth: "1.3",
        strokeLinejoin: "round"
      }, void 0, false), /*#__PURE__*/_jsxDEV("circle", {
        cx: "20",
        cy: "20",
        r: "3",
        fill: "#D4E607",
        stroke: "#111",
        strokeWidth: "0.8"
      }, void 0, false)]
    }, void 0, true)
  }, void 0, false);
}
function BigEnvelope({
  accent
}) {
  return /*#__PURE__*/_jsxDEV("div", {
    className: "env-big",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "env-bot",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "env-content-line"
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "env-content-line short"
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "env-content-line"
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "env-seal",
        style: {
          background: accent
        },
        children: /*#__PURE__*/_jsxDEV("span", {
          children: "♡"
        }, void 0, false)
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "env-top",
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "env-flap"
      }, void 0, false)
    }, void 0, false)]
  }, void 0, true);
}
function DoveTransition({
  direction,
  accent
}) {
  // direction: 'right' (forward) | 'left' (back)
  return /*#__PURE__*/_jsxDEV("div", {
    className: "dove-stage",
    "data-dir": direction,
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "dove-wrap",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "dove-svg",
        children: /*#__PURE__*/_jsxDEV(DoveSVG, {}, void 0, false)
      }, void 0, false), /*#__PURE__*/_jsxDEV(TinyEnvelope, {}, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV(BigEnvelope, {
      accent: accent
    }, void 0, false)]
  }, void 0, true);
}
Object.assign(window, {
  DoveTransition,
  DoveSVG
});