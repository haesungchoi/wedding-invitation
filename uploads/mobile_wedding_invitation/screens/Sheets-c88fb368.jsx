/* Shared overlays: map / RSVP / accounts / share */

function Sheet({ open, onClose, children, title, accent }) {
  if (!open) return null;
  return (
    <div className="scrim" onClick={onClose} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          background: '#FFFFFF',
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          padding: '14px 22px 28px',
          maxHeight: '82%',
          overflowY: 'auto',
          animation: 'slideInRight 280ms cubic-bezier(.2,.7,.2,1) both',
          transform: 'translateY(0)',
        }}
      >
        <div style={{
          width: 38, height: 4, borderRadius: 99,
          background: 'rgba(0,0,0,0.18)', margin: '4px auto 16px',
        }} />
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: 18,
        }}>
          <div className="label-en" style={{ color: accent || '#111' }}>{title}</div>
          <button
            onClick={onClose}
            className="tap"
            style={{
              border: 'none', background: 'transparent', cursor: 'pointer',
              fontSize: 22, color: '#111', lineHeight: 1, padding: 4,
            }}
            aria-label="닫기"
          >×</button>
        </div>
        {children}
      </div>
    </div>
  );
}

function MapSheet({ open, onClose }) {
  const lat = 37.4920, lng = 127.0265; // 삼성 서초사옥 근사값
  const naverUrl = `https://map.naver.com/p/search/삼성전자 서초사옥`;
  const kakaoUrl = `https://map.kakao.com/?q=삼성전자 서초사옥`;
  const tmapUrl  = `tmap://search?name=삼성전자 서초사옥`;

  return (
    <Sheet open={open} onClose={onClose} title="Location · 오시는 길">
      <div style={{ fontFamily: "'Pretendard'" }}>
        <div className="display" style={{ fontSize: 36, lineHeight: 1, marginBottom: 6 }}>
          삼성전자 서초사옥
        </div>
        <div className="ko-reg" style={{ fontSize: 14, color: '#444', marginBottom: 18 }}>
          5층 웨딩홀 · 서울 서초구 서초대로74길 11
        </div>

        {/* Mock map */}
        <div style={{
          width: '100%', aspectRatio: '4/3', borderRadius: 14, overflow: 'hidden',
          background: '#E9EBE4', position: 'relative', marginBottom: 18,
          border: '1px solid rgba(0,0,0,0.06)',
        }}>
          <svg viewBox="0 0 320 240" style={{ width: '100%', height: '100%' }}>
            <rect width="320" height="240" fill="#E9EBE4" />
            {/* roads */}
            <path d="M0 130 L320 110" stroke="#D2D4CB" strokeWidth="16" />
            <path d="M180 0 L210 240" stroke="#D2D4CB" strokeWidth="12" />
            <path d="M0 60 L320 90" stroke="#E2E4DB" strokeWidth="6" />
            <path d="M40 0 L70 240" stroke="#E2E4DB" strokeWidth="6" />
            <path d="M0 200 L320 190" stroke="#E2E4DB" strokeWidth="6" />
            {/* blocks */}
            <rect x="90" y="20" width="60" height="40" fill="#DFE0D7" rx="3"/>
            <rect x="230" y="20" width="60" height="40" fill="#DFE0D7" rx="3"/>
            <rect x="90" y="140" width="60" height="40" fill="#DFE0D7" rx="3"/>
            <rect x="230" y="140" width="60" height="40" fill="#DFE0D7" rx="3"/>
            <rect x="20" y="80" width="50" height="30" fill="#DFE0D7" rx="3"/>
            {/* venue building */}
            <rect x="158" y="98" width="44" height="34" fill="#111" rx="2" />
            <text x="180" y="120" fill="#D8F23A" fontFamily="Archivo" fontWeight="700"
              fontSize="9" textAnchor="middle">SAMSUNG</text>
            {/* pin */}
            <g transform="translate(180,90)">
              <path d="M0,-22 C-10,-22 -16,-14 -16,-6 C-16,4 0,18 0,18 C0,18 16,4 16,-6 C16,-14 10,-22 0,-22 Z"
                fill="#D8F23A" stroke="#111" strokeWidth="1.4" />
              <circle r="4" fill="#111" cy="-6" />
            </g>
          </svg>
          <div style={{
            position: 'absolute', bottom: 10, left: 10,
            background: '#111', color: '#D8F23A', padding: '5px 10px',
            fontFamily: "'Spoqa Han Sans Neo', sans-serif", fontSize: 10, letterSpacing: '0.18em',
            borderRadius: 99, fontWeight: 600,
          }}>VENUE · 5F WEDDING HALL</div>
        </div>

        {/* address copy */}
        <button
          className="tap"
          onClick={() => { navigator.clipboard?.writeText('서울 서초구 서초대로74길 11'); }}
          style={{
            width: '100%', border: '1px solid #111', background: '#fff',
            padding: '14px 16px', borderRadius: 12, display: 'flex',
            alignItems: 'center', justifyContent: 'space-between',
            marginBottom: 10, cursor: 'pointer',
          }}>
          <span className="ko-reg" style={{ fontSize: 14 }}>서울 서초구 서초대로74길 11</span>
          <span className="label-en">COPY</span>
        </button>

        {/* nav apps */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 18 }}>
          {[
            { name: 'NAVER', url: naverUrl },
            { name: 'KAKAO', url: kakaoUrl },
            { name: 'TMAP',  url: tmapUrl },
          ].map(b => (
            <a key={b.name} href={b.url} target="_blank" rel="noreferrer" className="tap"
              style={{
                background: '#D8F23A', color: '#111', textAlign: 'center',
                padding: '12px 0', borderRadius: 10, fontFamily: "'Spoqa Han Sans Neo', sans-serif",
                fontWeight: 700, fontSize: 12, letterSpacing: '0.1em',
                textDecoration: 'none',
              }}>{b.name}</a>
          ))}
        </div>

        {/* Transit info */}
        <div className="label-en" style={{ marginBottom: 10 }}>HOW TO COME</div>
        <div style={{ display: 'grid', gap: 10 }}>
          <div style={{ display: 'flex', gap: 12 }}>
            <div className="num-mono" style={{ fontSize: 13, fontWeight: 700, width: 56, paddingTop: 2 }}>지하철</div>
            <div className="ko-reg" style={{ fontSize: 13, color: '#333', lineHeight: 1.5 }}>
              2호선 강남역 8번 출구 도보 5분 · 신분당선 강남역 5번 출구 도보 7분
            </div>
          </div>
          <div className="hr" />
          <div style={{ display: 'flex', gap: 12 }}>
            <div className="num-mono" style={{ fontSize: 13, fontWeight: 700, width: 56, paddingTop: 2 }}>버스</div>
            <div className="ko-reg" style={{ fontSize: 13, color: '#333', lineHeight: 1.5 }}>
              강남역 정류장 — 간선 146, 341, 360 / 지선 4419
            </div>
          </div>
          <div className="hr" />
          <div style={{ display: 'flex', gap: 12 }}>
            <div className="num-mono" style={{ fontSize: 13, fontWeight: 700, width: 56, paddingTop: 2 }}>주차</div>
            <div className="ko-reg" style={{ fontSize: 13, color: '#333', lineHeight: 1.5 }}>
              사옥 지하주차장 2시간 무료 (혼잡 시 대중교통 권장)
            </div>
          </div>
        </div>
      </div>
    </Sheet>
  );
}

function RSVPSheet({ open, onClose }) {
  const [attending, setAttending] = React.useState(null);
  const [side, setSide] = React.useState('groom');
  const [meal, setMeal] = React.useState(true);
  const [companions, setCompanions] = React.useState(0);
  const [name, setName] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  if (submitted) {
    return (
      <Sheet open={open} onClose={onClose} title="RSVP · 참석 의사 전달">
        <div style={{ textAlign: 'center', padding: '24px 0 8px' }}>
          <div className="display" style={{ fontSize: 64, color: '#111', lineHeight: 1 }}>THANK<br/>YOU</div>
          <div className="ko-reg" style={{ marginTop: 18, color: '#555', fontSize: 14, lineHeight: 1.6 }}>
            소중한 마음 잘 전달받았습니다.<br/>당일에 뵙기를 기다릴게요.
          </div>
          <button onClick={onClose} className="tap"
            style={{
              marginTop: 24, background: '#111', color: '#D8F23A',
              border: 'none', padding: '14px 28px', borderRadius: 99,
              fontFamily: "'Spoqa Han Sans Neo', sans-serif", fontWeight: 700, letterSpacing: '0.1em',
              fontSize: 12, cursor: 'pointer',
            }}>CLOSE</button>
        </div>
      </Sheet>
    );
  }

  const Pill = ({ on, children, ...rest }) => (
    <button {...rest} className="tap"
      style={{
        flex: 1, padding: '12px 0', borderRadius: 10, cursor: 'pointer',
        border: on ? '1.5px solid #111' : '1px solid rgba(0,0,0,0.18)',
        background: on ? '#D8F23A' : '#fff',
        fontWeight: on ? 700 : 500, fontSize: 13,
        fontFamily: "'Pretendard'",
      }}>{children}</button>
  );

  return (
    <Sheet open={open} onClose={onClose} title="RSVP · 참석 의사 전달">
      <div className="display" style={{ fontSize: 44, lineHeight: 0.9, marginBottom: 4 }}>
        함께해<br/>주실 건가요?
      </div>
      <div className="ko-reg" style={{ color: '#555', fontSize: 13, marginBottom: 22 }}>
        식사 준비에 도움이 됩니다. 부담 없이 알려주세요.
      </div>

      <div className="label-en" style={{ marginBottom: 8 }}>참석 여부</div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 18 }}>
        <Pill on={attending === true}  onClick={() => setAttending(true)}>참석합니다</Pill>
        <Pill on={attending === false} onClick={() => setAttending(false)}>참석이 어려워요</Pill>
      </div>

      <div className="label-en" style={{ marginBottom: 8 }}>참석 인원 (본인 포함)</div>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: '#F4F2EB', borderRadius: 12, padding: '12px 16px', marginBottom: 18,
      }}>
        <button onClick={() => setCompanions(Math.max(0, companions - 1))}
          style={{ width: 32, height: 32, borderRadius: 99, border: '1px solid #111', background: '#fff', cursor: 'pointer', fontSize: 18 }}>−</button>
        <div className="display" style={{ fontSize: 28 }}>{1 + companions}<span style={{ fontSize: 14, color: '#777', marginLeft: 6 }}>명</span></div>
        <button onClick={() => setCompanions(Math.min(8, companions + 1))}
          style={{ width: 32, height: 32, borderRadius: 99, border: '1px solid #111', background: '#D8F23A', cursor: 'pointer', fontSize: 18 }}>＋</button>
      </div>

      <div className="label-en" style={{ marginBottom: 8 }}>구분</div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 18 }}>
        <Pill on={side === 'groom'} onClick={() => setSide('groom')}>신랑측</Pill>
        <Pill on={side === 'bride'} onClick={() => setSide('bride')}>신부측</Pill>
      </div>

      <div className="label-en" style={{ marginBottom: 8 }}>식사 여부</div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 18 }}>
        <Pill on={meal === true}  onClick={() => setMeal(true)}>예정</Pill>
        <Pill on={meal === false} onClick={() => setMeal(false)}>안 함</Pill>
      </div>

      <div className="label-en" style={{ marginBottom: 8 }}>성함</div>
      <input
        value={name} onChange={e => setName(e.target.value)}
        placeholder="홍길동"
        style={{
          width: '100%', padding: '14px 16px',
          border: '1px solid rgba(0,0,0,0.18)', borderRadius: 12,
          fontSize: 15, fontFamily: "'Pretendard'", outline: 'none',
          marginBottom: 22, background: '#fff',
        }}
      />

      <button
        disabled={attending === null}
        onClick={() => setSubmitted(true)}
        className="tap"
        style={{
          width: '100%', padding: '16px 0', borderRadius: 99,
          background: attending === null ? '#999' : '#111',
          color: attending === null ? '#ccc' : '#D8F23A',
          border: 'none', fontFamily: "'Spoqa Han Sans Neo', sans-serif", fontWeight: 700,
          fontSize: 13, letterSpacing: '0.15em', cursor: attending === null ? 'not-allowed' : 'pointer',
        }}>SEND RSVP →</button>
    </Sheet>
  );
}

function AccountSheet({ open, onClose, side }) {
  // side: 'groom' | 'bride' | 'both'
  const groom = [
    { role: '신랑',     name: '최해성', bank: '신한은행', no: '110-123-456789' },
    { role: '아버지',   name: '최교선', bank: 'KB국민은행', no: '123-12-1234-567' },
    { role: '어머니',   name: '구지영', bank: '우리은행',   no: '1002-321-654987' },
  ];
  const bride = [
    { role: '신부',     name: '윤채원', bank: '카카오뱅크', no: '3333-09-1234567' },
    { role: '아버지',   name: '윤재경', bank: '신한은행',   no: '110-987-654321' },
    { role: '어머니',   name: '공명아', bank: '하나은행',   no: '123-456789-12345' },
  ];

  const [copied, setCopied] = React.useState(null);
  const copy = (txt, id) => {
    navigator.clipboard?.writeText(txt);
    setCopied(id);
    setTimeout(() => setCopied(null), 1400);
  };

  const Row = ({ a, idx, gkey }) => (
    <div style={{
      padding: '14px 0', borderBottom: '1px solid rgba(0,0,0,0.08)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
    }}>
      <div style={{ minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
          <span className="label-en" style={{ fontSize: 10 }}>{a.role}</span>
          <span className="ko-med" style={{ fontSize: 15 }}>{a.name}</span>
        </div>
        <div className="num-mono" style={{ fontSize: 12, color: '#555' }}>
          {a.bank} · {a.no}
        </div>
      </div>
      <button
        onClick={() => copy(a.no, `${gkey}-${idx}`)}
        className="tap"
        style={{
          background: copied === `${gkey}-${idx}` ? '#111' : '#D8F23A',
          color:      copied === `${gkey}-${idx}` ? '#D8F23A' : '#111',
          border: 'none', padding: '8px 14px', borderRadius: 99,
          fontFamily: "'Spoqa Han Sans Neo', sans-serif", fontWeight: 700, letterSpacing: '0.1em',
          fontSize: 10, cursor: 'pointer', whiteSpace: 'nowrap',
        }}>{copied === `${gkey}-${idx}` ? 'COPIED' : 'COPY'}</button>
    </div>
  );

  const showGroom = side === 'groom' || side === 'both';
  const showBride = side === 'bride' || side === 'both';

  return (
    <Sheet open={open} onClose={onClose} title="마음 전하실 곳">
      <div className="ko-reg" style={{ color: '#555', fontSize: 13, marginBottom: 22, lineHeight: 1.6 }}>
        참석이 어려우신 분들을 위해 마련했습니다.<br/>
        축하의 마음을 담아 보내주신 정성, 감사히 받겠습니다.
      </div>

      {showGroom && (
        <div style={{ marginBottom: 24 }}>
          <div style={{
            background: '#D8F23A', display: 'inline-block',
            padding: '6px 12px', borderRadius: 99,
            fontFamily: "'Spoqa Han Sans Neo', sans-serif", fontWeight: 700, fontSize: 11,
            letterSpacing: '0.15em', marginBottom: 4,
          }}>GROOM · 신랑측</div>
          {groom.map((a, i) => <Row key={i} a={a} idx={i} gkey="g" />)}
        </div>
      )}

      {showBride && (
        <div>
          <div style={{
            background: '#111', color: '#D8F23A', display: 'inline-block',
            padding: '6px 12px', borderRadius: 99,
            fontFamily: "'Spoqa Han Sans Neo', sans-serif", fontWeight: 700, fontSize: 11,
            letterSpacing: '0.15em', marginBottom: 4,
          }}>BRIDE · 신부측</div>
          {bride.map((a, i) => <Row key={i} a={a} idx={i} gkey="b" />)}
        </div>
      )}
    </Sheet>
  );
}

function ShareSheet({ open, onClose }) {
  const [copied, setCopied] = React.useState(false);
  const link = 'https://haeseong-chaewon.wedding';

  const Btn = ({ bg, fg, children, onClick }) => (
    <button onClick={onClick} className="tap"
      style={{
        background: bg, color: fg, border: 'none',
        padding: '14px 16px', borderRadius: 12, cursor: 'pointer',
        fontFamily: "'Pretendard'", fontWeight: 600, fontSize: 14,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        width: '100%',
      }}>{children}</button>
  );

  return (
    <Sheet open={open} onClose={onClose} title="Share · 공유하기">
      <div className="display" style={{ fontSize: 36, lineHeight: 0.95, marginBottom: 18 }}>
        함께<br/>나눠주세요
      </div>
      <div style={{ display: 'grid', gap: 10 }}>
        <Btn bg="#FEE500" fg="#111">
          <span>카카오톡으로 공유</span><span style={{ fontFamily: "'Spoqa Han Sans Neo', sans-serif", fontSize: 11, letterSpacing: '0.1em' }}>KAKAO →</span>
        </Btn>
        <Btn bg="#03C75A" fg="#fff">
          <span>네이버 밴드로 공유</span><span style={{ fontFamily: "'Spoqa Han Sans Neo', sans-serif", fontSize: 11, letterSpacing: '0.1em' }}>BAND →</span>
        </Btn>
        <Btn bg="#111" fg="#D8F23A"
          onClick={() => { navigator.clipboard?.writeText(link); setCopied(true); setTimeout(() => setCopied(false), 1400); }}>
          <span>{copied ? '복사되었습니다' : '링크 복사'}</span>
          <span style={{ fontFamily: "'Spoqa Han Sans Neo', sans-serif", fontSize: 11, letterSpacing: '0.1em' }}>{copied ? 'OK' : 'COPY'}</span>
        </Btn>
      </div>
      <div className="num-mono" style={{ marginTop: 18, fontSize: 11, color: '#777', textAlign: 'center' }}>{link}</div>
    </Sheet>
  );
}

Object.assign(window, { Sheet, MapSheet, RSVPSheet, AccountSheet, ShareSheet });
