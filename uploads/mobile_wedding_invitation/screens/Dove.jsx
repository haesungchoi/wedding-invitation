/* Dove transition — bird carries an envelope across screen,
   envelope grows + opens, revealing new screen. */

function DoveSVG() {
  return (
    <svg viewBox="0 0 140 90" width="140" height="90" style={{ overflow: 'visible' }}>
      {/* tail */}
      <polygon points="14,52 0,42 0,60" fill="#FFFFFF" stroke="#111" strokeWidth="1.6" strokeLinejoin="round" />
      {/* body */}
      <ellipse cx="55" cy="52" rx="38" ry="14" fill="#FFFFFF" stroke="#111" strokeWidth="1.6" />
      {/* head */}
      <circle cx="92" cy="40" r="13" fill="#FFFFFF" stroke="#111" strokeWidth="1.6" />
      {/* eye */}
      <circle cx="99" cy="37" r="1.6" fill="#111" />
      {/* beak */}
      <polygon points="104,40 118,42 104,44" fill="#FFB347" stroke="#111" strokeWidth="1.4" strokeLinejoin="round" />
      {/* leg */}
      <line x1="58" y1="65" x2="58" y2="72" stroke="#111" strokeWidth="1.3" />
      <line x1="65" y1="65" x2="65" y2="72" stroke="#111" strokeWidth="1.3" />

      {/* far wing (behind body) — gentle flap */}
      <g className="dove-wing-back">
        <path
          d="M 50,46 Q 58,30 75,38 Q 70,48 50,46 Z"
          fill="#E6E2D6" stroke="#111" strokeWidth="1.4" strokeLinejoin="round"
        />
      </g>
      {/* near wing — big flap */}
      <g className="dove-wing-front">
        <path
          d="M 38,48 Q 55,8 82,40 Q 60,58 38,48 Z"
          fill="#FFFFFF" stroke="#111" strokeWidth="1.6" strokeLinejoin="round"
        />
        {/* feather lines */}
        <path d="M 50,42 Q 58,28 70,38" fill="none" stroke="#111" strokeWidth="1" opacity="0.45" />
        <path d="M 55,46 Q 62,33 74,42" fill="none" stroke="#111" strokeWidth="1" opacity="0.35" />
      </g>
    </svg>
  );
}

function TinyEnvelope() {
  return (
    <div className="env-tiny">
      <svg viewBox="0 0 40 28" width="40" height="28">
        <rect x="1" y="1" width="38" height="26" fill="#F8F6F0" stroke="#111" strokeWidth="1.3" />
        <polygon points="1,1 20,16 39,1" fill="#F8F6F0" stroke="#111" strokeWidth="1.3" strokeLinejoin="round" />
        <circle cx="20" cy="20" r="3" fill="#D8F23A" stroke="#111" strokeWidth="0.8" />
      </svg>
    </div>
  );
}

function BigEnvelope({ accent }) {
  return (
    <div className="env-big">
      {/* bottom half (envelope back) */}
      <div className="env-bot">
        <div className="env-content-line" />
        <div className="env-content-line short" />
        <div className="env-content-line" />
        <div className="env-seal" style={{ background: accent }}>
          <span>♡</span>
        </div>
      </div>
      {/* top flap */}
      <div className="env-top">
        <div className="env-flap" />
      </div>
    </div>
  );
}

function DoveTransition({ direction, accent }) {
  // direction: 'right' (forward) | 'left' (back)
  return (
    <div className="dove-stage" data-dir={direction}>
      <div className="dove-wrap">
        <div className="dove-svg">
          <DoveSVG />
        </div>
        <TinyEnvelope />
      </div>
      <BigEnvelope accent={accent} />
    </div>
  );
}

Object.assign(window, { DoveTransition, DoveSVG });
