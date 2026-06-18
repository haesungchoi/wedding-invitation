/* Dove transition — bird carries an envelope across screen,
   envelope grows + opens, revealing new screen. */

function DoveSVG() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 140 90",
    width: "140",
    height: "90",
    style: {
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "14,52 0,42 0,60",
    fill: "#FFFFFF",
    stroke: "#111",
    strokeWidth: "1.6",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "55",
    cy: "52",
    rx: "38",
    ry: "14",
    fill: "#FFFFFF",
    stroke: "#111",
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "92",
    cy: "40",
    r: "13",
    fill: "#FFFFFF",
    stroke: "#111",
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "99",
    cy: "37",
    r: "1.6",
    fill: "#111"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "104,40 118,42 104,44",
    fill: "#FFB347",
    stroke: "#111",
    strokeWidth: "1.4",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "58",
    y1: "65",
    x2: "58",
    y2: "72",
    stroke: "#111",
    strokeWidth: "1.3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "65",
    y1: "65",
    x2: "65",
    y2: "72",
    stroke: "#111",
    strokeWidth: "1.3"
  }), /*#__PURE__*/React.createElement("g", {
    className: "dove-wing-back"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 50,46 Q 58,30 75,38 Q 70,48 50,46 Z",
    fill: "#E6E2D6",
    stroke: "#111",
    strokeWidth: "1.4",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("g", {
    className: "dove-wing-front"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38,48 Q 55,8 82,40 Q 60,58 38,48 Z",
    fill: "#FFFFFF",
    stroke: "#111",
    strokeWidth: "1.6",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 50,42 Q 58,28 70,38",
    fill: "none",
    stroke: "#111",
    strokeWidth: "1",
    opacity: "0.45"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 55,46 Q 62,33 74,42",
    fill: "none",
    stroke: "#111",
    strokeWidth: "1",
    opacity: "0.35"
  })));
}
function TinyEnvelope() {
  return /*#__PURE__*/React.createElement("div", {
    className: "env-tiny"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 40 28",
    width: "40",
    height: "28"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1",
    width: "38",
    height: "26",
    fill: "#F8F6F0",
    stroke: "#111",
    strokeWidth: "1.3"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "1,1 20,16 39,1",
    fill: "#F8F6F0",
    stroke: "#111",
    strokeWidth: "1.3",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "20",
    cy: "20",
    r: "3",
    fill: "#D4E607",
    stroke: "#111",
    strokeWidth: "0.8"
  })));
}
function BigEnvelope({
  accent
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "env-big"
  }, /*#__PURE__*/React.createElement("div", {
    className: "env-bot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "env-content-line"
  }), /*#__PURE__*/React.createElement("div", {
    className: "env-content-line short"
  }), /*#__PURE__*/React.createElement("div", {
    className: "env-content-line"
  }), /*#__PURE__*/React.createElement("div", {
    className: "env-seal",
    style: {
      background: accent
    }
  }, /*#__PURE__*/React.createElement("span", null, "♡"))), /*#__PURE__*/React.createElement("div", {
    className: "env-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "env-flap"
  })));
}
function DoveTransition({
  direction,
  accent
}) {
  // direction: 'right' (forward) | 'left' (back)
  return /*#__PURE__*/React.createElement("div", {
    className: "dove-stage",
    "data-dir": direction
  }, /*#__PURE__*/React.createElement("div", {
    className: "dove-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dove-svg"
  }, /*#__PURE__*/React.createElement(DoveSVG, null)), /*#__PURE__*/React.createElement(TinyEnvelope, null)), /*#__PURE__*/React.createElement(BigEnvelope, {
    accent: accent
  }));
}
Object.assign(window, {
  DoveTransition,
  DoveSVG
});