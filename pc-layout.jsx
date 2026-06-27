// pc-layout.jsx — Wide layout for PC (≥1200px) and Tablet (768–1199px)
// Usage: <WideApp tweaks={...} openSheet={fn} variant="pc"|"tablet" />

/* ─── Header ────────────────────────────────────────────────── */
function PCHeader({ lime, ink, openSheet, variant, onOpenMemories }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const H  = variant === 'pc' ? 64 : 56;
  const px = variant === 'pc' ? 64 : 32;

  const navItems = [
    { label: 'THE DAY',   onClick: () => document.getElementById('wide-day')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: '우리의 추억', onClick: onOpenMemories },
  ];

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 90,
      height: H, padding: `0 ${px}px`,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(248,246,240,0.94)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(17,17,17,0.07)' : 'none',
      transition: 'background 0.3s, border-color 0.3s',
    }}>
      <div style={{
        fontFamily: "'Martian Mono', monospace",
        fontSize: 12, fontWeight: 700, letterSpacing: '0.16em', color: ink,
      }}>CHAEWON · HAESEONG</div>

      <nav style={{ display: 'flex', alignItems: 'center', gap: variant === 'pc' ? 32 : 20 }}>
        {navItems.map(item => (
          <button key={item.label}
            onClick={item.onClick}
            className="tap"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: "'Martian Mono', monospace",
              fontSize: 12, letterSpacing: '0.14em', fontWeight: 600, color: ink, padding: '4px 0',
            }}>
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

/* ─── Hero Section ──────────────────────────────────────────── */
function PCHeroSection({ lime, ink, tweaks, openSheet, variant, onOpenMemories }) {
  const wedding = new Date('2026-09-12T13:00:00+09:00');
  const days = Math.max(0, Math.ceil((wedding - new Date()) / (86400 * 1000)));
  const nameSize = variant === 'pc' ? 112 : 76;
  const H = variant === 'pc' ? 64 : 56;
  const px = variant === 'pc' ? 80 : 48;

  return (
    <section style={{
      background: lime,
      height: '100vh',
      boxSizing: 'border-box',
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
    }}>
      {/* Left: text */}
      <div style={{
        paddingTop: H + (variant === 'pc' ? 48 : 32),
        paddingRight: variant === 'pc' ? px / 2 : 28,
        paddingBottom: variant === 'pc' ? 48 : 32,
        paddingLeft: px,
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        overflow: 'hidden',
      }}>
        <div style={{
          fontFamily: "'Martian Mono', monospace",
          fontSize: variant === 'pc' ? 20 : 15, letterSpacing: '0.2em', fontWeight: 600, color: ink, opacity: 0.6,
          lineHeight: 1.4,
        }}>WEDDING<br />INVITATION</div>

        {/* names */}
        <div>
          <div style={{ marginBottom: 8 }}>
            <div style={{
              fontFamily: "'Pretendard', sans-serif",
              fontSize: nameSize, fontWeight: 600, lineHeight: 0.88, color: ink,
            }}>윤채원</div>
            <div style={{
              fontFamily: "'Martian Mono', monospace",
              fontSize: variant === 'pc' ? 20 : 16, color: ink, opacity: 0.65,
              marginTop: 5, marginLeft: 3,
            }}>Chaewon Yun</div>
          </div>

          <div style={{
            display: 'flex', alignItems: 'center', gap: 14,
            margin: `${variant === 'pc' ? 22 : 14}px 0`, marginLeft: 3,
          }}>
            <span style={{ display: 'inline-block', width: 36, height: 1, background: ink }} />
            <span style={{ fontFamily: "'Martian Mono', monospace", fontSize: variant === 'pc' ? 18 : 15, color: ink, opacity: 0.65 }}>and</span>
            <span style={{ display: 'inline-block', width: 36, height: 1, background: ink }} />
          </div>

          <div>
            <div style={{
              fontFamily: "'Pretendard', sans-serif",
              fontSize: nameSize, fontWeight: 600, lineHeight: 0.88, color: ink,
            }}>최해성</div>
            <div style={{
              fontFamily: "'Martian Mono', monospace",
              fontSize: variant === 'pc' ? 20 : 16, color: ink, opacity: 0.65,
              marginTop: 5, marginLeft: 3,
            }}>Haeseong Choi</div>
          </div>
        </div>

        {/* date + CTAs */}
        <div style={{ borderTop: `1px solid ${ink}`, paddingTop: 22 }}>
          <div style={{ marginBottom: 18 }}>
            <div style={{
              fontFamily: "'Martian Mono', monospace", fontStretch: '75%',
              fontSize: variant === 'pc' ? 18 : 15, color: ink, fontWeight: 300, letterSpacing: '-0.02em',
            }}>2026.09.12</div>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button onClick={() => openSheet('map')} className="tap" style={{
              background: ink, color: lime,
              border: `1.5px solid ${ink}`,
              padding: '11px 18px', borderRadius: 99, cursor: 'pointer',
              fontFamily: "'Martian Mono', monospace",
              fontSize: 12, letterSpacing: '0.12em', fontWeight: 500,
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <svg width="10" height="13" viewBox="0 0 10 13" fill="none" style={{ flexShrink: 0 }}>
                <path d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 8 5 8s5-4.25 5-8c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1 1 5 3.5a1.5 1.5 0 0 1 0 3z" fill="currentColor" />
              </svg>
              LOCATION
            </button>
            <button onClick={() => openSheet('account-both')} className="tap" style={{
              background: 'transparent', color: ink,
              border: `1.5px solid ${ink}`,
              padding: '11px 18px', borderRadius: 99, cursor: 'pointer',
              fontFamily: "'Martian Mono', monospace",
              fontSize: 12, letterSpacing: '0.12em', fontWeight: 500,
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <svg width="12" height="11" viewBox="0 0 12 11" fill="none" style={{ flexShrink: 0 }}>
                <rect x="0.75" y="0.75" width="10.5" height="9.5" rx="1.25" stroke="currentColor" strokeWidth="1.5" />
                <path d="M0.75 3.5h10.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3 6.5h2M3 8h3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              ACCOUNTS
            </button>
          </div>
        </div>
      </div>

      {/* Right: full-bleed photo — click to open memories */}
      <button
        onClick={onOpenMemories}
        className="tap"
        style={{ position: 'relative', overflow: 'hidden', padding: 0, border: 'none', cursor: 'pointer', display: 'block', width: '100%', height: '100%' }}>
        <img src="img/couple-main.jpg" alt="couple"
          fetchPriority="high" decoding="async"
          className={tweaks.bw ? 'bw kenburns' : 'kenburns'}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%', objectFit: 'cover',
            objectPosition: 'center 30%',
          }} />
        <div style={{
          position: 'absolute', top: 20, left: 20,
          background: lime, color: ink,
          fontFamily: "'Pretendard', sans-serif",
          fontSize: 12, fontWeight: 700, letterSpacing: '0.14em',
          padding: '6px 12px', borderRadius: 2,
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 10, height: 10 }}>
            <span className="badge-live-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: ink, display: 'inline-block', position: 'relative', zIndex: 1 }} />
            <span className="badge-ping" style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: `1.5px solid ${ink}`, animation: 'badgePing 1.6s ease-out infinite' }} />
          </span>
          우리의 추억 보기
        </div>
        <style>{`
          @keyframes badgePing {
            0%   { transform: scale(1);   opacity: 0.7; }
            70%  { transform: scale(2.2); opacity: 0; }
            100% { transform: scale(2.2); opacity: 0; }
          }
        `}</style>
        <div className="vertical-headline" style={{
          position: 'absolute', right: 20, top: 80,
          fontSize: 11, letterSpacing: '0.12em',
          color: 'rgba(255,255,255,0.55)', fontWeight: 400,
          fontFamily: "'Martian Mono', monospace",
        }}>WEDDING INVITATION</div>
      </button>
    </section>
  );
}

/* ─── Ticker Band (separator) ───────────────────────────────── */
function PCTickerBand({ lime, ink }) {
  const items = Array.from({ length: 10 }, (_, i) => i);
  return (
    <div className="ticker-wrap" style={{ height: 44, padding: '12px 0', background: lime }}>
      <div className="ticker-track">
        {items.map(i => <span key={'a' + i} className="ticker-item" style={{ fontSize: 12, color: ink }}>Welcome to our wedding</span>)}
        {items.map(i => <span key={'b' + i} className="ticker-item" style={{ fontSize: 12, color: ink }}>Welcome to our wedding</span>)}
      </div>
    </div>
  );
}

/* ─── THE DAY Section ───────────────────────────────────────── */
function PCTheDaySection({ ink, variant }) {
  const daySize = variant === 'pc' ? 172 : 120;
  const px = variant === 'pc' ? 80 : 48;
  const py = variant === 'pc' ? 112 : 72;

  return (
    <section id="wide-day" style={{ background: '#F8F6F0', padding: `${py}px ${px}px` }}>
      <div>
        <div className="label-en" style={{ marginBottom: variant === 'pc' ? 56 : 36 }}>· THE DAY</div>

        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: variant === 'pc' ? 48 : 28, marginBottom: variant === 'pc' ? 72 : 48,
        }}>
          <div style={{
            fontFamily: "'Martian Mono', monospace", fontStretch: '112.5%',
            fontSize: daySize, color: ink, lineHeight: 0.85, fontWeight: 400,
          }}>09</div>
          <div style={{ width: 1, height: daySize * 0.65, background: ink, transform: 'rotate(8deg)', flexShrink: 0 }} />
          <div style={{
            fontFamily: "'Martian Mono', monospace", fontStretch: '112.5%',
            fontSize: daySize, color: ink, lineHeight: 0.85, fontWeight: 400,
          }}>12</div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: variant === 'pc' ? '1fr 1fr 1fr' : '1fr 1fr',
          gap: variant === 'pc' ? 48 : 28,
        }}>
          {[
            {
              label: '· DATE & TIME',
              body: <div style={{ fontFamily: "'Pretendard'", fontSize: variant === 'pc' ? 20 : 17, fontWeight: 400, lineHeight: 1.55, color: ink }}>
                2026년 9월 12일<br /><span style={{ color: '#555', fontSize: variant === 'pc' ? 17 : 14 }}>토요일 오후 1시</span>
              </div>,
            },
            {
              label: '· VENUE',
              body: <div style={{ fontFamily: "'Pretendard'", fontSize: variant === 'pc' ? 20 : 17, fontWeight: 400, lineHeight: 1.55, color: ink }}>
                삼성전자 서초사옥<br /><span style={{ color: '#555', fontSize: variant === 'pc' ? 17 : 14 }}>5층 웨딩홀</span>
              </div>,
            },
            {
              label: '· FAMILY',
              style: { gridColumn: variant === 'pc' ? 'auto' : '1 / -1' },
              body: <div style={{ fontFamily: "'Pretendard'", fontSize: variant === 'pc' ? 20 : 17, fontWeight: 400, lineHeight: 1.55, color: ink }}>
                <div><span style={{ fontWeight: 600 }}>최교선 · 구지영</span><span style={{ color: '#555', fontSize: variant === 'pc' ? 16 : 14 }}> 의 아들 해성</span></div>
                <div style={{ height: 1, background: 'rgba(17,17,17,0.1)', margin: '10px 0' }} />
                <div><span style={{ fontWeight: 600 }}>윤재경 · 공명아</span><span style={{ color: '#555', fontSize: variant === 'pc' ? 16 : 14 }}> 의 딸 채원</span></div>
              </div>,
            },
          ].map(col => (
            <div key={col.label} style={col.style}>
              <div className="label-en" style={{ marginBottom: 14 }}>{col.label}</div>
              {col.body}
            </div>
          ))}
        </div>

        <div style={{ marginTop: variant === 'pc' ? 64 : 44, textAlign: 'center' }}>
          <div style={{
            fontFamily: "'Pretendard'", fontSize: variant === 'pc' ? 16 : 14,
            color: '#555', lineHeight: 1.9,
          }}>두 사람의 이야기가 하나가 되는 날,<br />함께 축복해 주세요</div>
        </div>
      </div>
    </section>
  );
}

/* ─── MEMORIES Section ──────────────────────────────────────── */
function PCMemoriesSection({ lime, ink, tweaks, variant, openSheet, onBack }) {
  const [tab, setTab] = React.useState('grid');
  const [story, setStory] = React.useState(null);
  const [hearts, setHearts] = React.useState([]);
  const [gbRefreshKey, setGbRefreshKey] = React.useState(0);
  const px = variant === 'pc' ? 80 : 48;

  // Portal target: render StoryViewer at document.body to escape all stacking contexts
  const storyRoot = React.useRef(null);
  if (!storyRoot.current) {
    storyRoot.current = document.createElement('div');
    document.body.appendChild(storyRoot.current);
  }
  React.useEffect(() => {
    const el = storyRoot.current;
    return () => { if (el && el.parentNode) el.parentNode.removeChild(el); };
  }, []);

  const burstHeart = () => {
    const id = Date.now() + Math.random();
    const x = Math.random() * 50 - 25;
    const y = Math.random() * 30 - 15;
    const rot = Math.random() * 40 - 20;
    const size = 70 + Math.random() * 60;
    setHearts(hs => [...hs, { id, x, y, rot, size }]);
    setTimeout(() => setHearts(hs => hs.filter(h => h.id !== id)), 1400);
  };

  const proposeImages = ['img/memories/propose-newyork/newyork-1.jpg', 'img/memories/propose-newyork/newyork-2.jpg'];
  const proposeCaptions = ['2025년 6월, New York에서 프로포즈', 'Brookyln bridge가 보이는 Pebble beach에서'];

  const highlights = [
    { label: '2021', images: Array.from({length:11}, (_,i) => `img/highlights/2021/${i+1}.jpg`) },
    { label: '2022', images: Array.from({length:11}, (_,i) => `img/highlights/2022/${i+1}.jpg`) },
    { label: '2023', images: Array.from({length:17}, (_,i) => `img/highlights/2023/${i+1}.jpg`) },
    { label: '2024', images: Array.from({length:10}, (_,i) => `img/highlights/2024/${i+1}.jpg`) },
    { label: '2025', images: Array.from({length:11}, (_,i) => `img/highlights/2025/${i+1}.jpg`) },
  ];
  const validHighlights = highlights.filter(h => h.images.length > 0);

  const posts = [
    {
      id:'mem-1', date:'2026.03.15', likes:'9,126', photoCount:4,
      images:[
        'img/memories/studio-couple/couple-1.jpg',
        'img/memories/studio-couple/couple-2.jpg',
        'img/memories/studio-couple/couple-3.jpg',
        'img/memories/studio-couple/couple-4.jpg',
      ],
      caption:'해성 & 채원',
    },
    {
      id:'mem-2', date:'2026.03.15', likes:'3,862', photoCount:1,
      images:['img/memories/studio-groom/groom-1.jpg'],
      caption:'해성',
    },
    {
      id:'mem-3', date:'2026.03.15', likes:'5,204', photoCount:3,
      images:[
        'img/memories/studio-bride/bride-0.jpg',
        'img/memories/studio-bride/bride-1.jpg',
        'img/memories/studio-bride/bride-3.jpg',
      ],
      caption:'채원',
    },
    {
      id:'mem-4', date:'2026.02.12', likes:'4,477', photoCount:5,
      images:[
        'img/memories/snap-shanghai/shanghai-1.jpg',
        'img/memories/snap-shanghai/shanghai-2.jpg',
        'img/memories/snap-shanghai/shanghai-3.jpg',
        'img/memories/snap-shanghai/shanghai-4.jpg',
        'img/memories/snap-shanghai/shanghai-5.jpg',
      ],
      caption:'📍 상하이',
    },
    {
      id:'mem-5', date:'2026.04.24', likes:'3,991', photoCount:5,
      images:[
        'img/memories/snap-gyeongju/gyeongju-1.jpg',
        'img/memories/snap-gyeongju/gyeongju-2.jpg',
        'img/memories/snap-gyeongju/gyeongju-3.jpg',
        'img/memories/snap-gyeongju/gyeongju-4.jpg',
        'img/memories/snap-gyeongju/gyeongju-5.jpg',
      ],
      caption:'📍 경주',
    },
    {
      id:'mem-6', date:'2021.10.30', likes:'6,012', photoCount:4,
      images:[
        'img/memories/wedding-ng/ng-1.jpg',
        'img/memories/wedding-ng/ng-2.jpg',
        'img/memories/wedding-ng/ng-3.jpg',
        'img/memories/wedding-ng/ng-4.jpg',
      ],
      caption:'📍 학교',
    },
  ];

  const TABS = [
    { key: 'grid',    Icon: TabIconGrid },
    { key: 'mention', Icon: TabIconMention },
  ];

  return (
    <>
    {/* StoryViewer — portaled to document.body, fully outside stacking contexts */}
    {story && ReactDOM.createPortal(
      <StoryViewer groups={story.groups} startGroupIdx={story.startGroupIdx} onClose={() => setStory(null)} />,
      storyRoot.current
    )}

    {/* Hearts overlay */}
    {hearts.length > 0 && (
      <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', zIndex: 999, pointerEvents: 'none' }}>
        {hearts.map(h => (
          <span key={h.id} style={{ position: 'absolute', left: '50%', top: '50%', transform: `translate(-50%,-50%) translate(${h.x}vw, ${h.y}vh) rotate(${h.rot}deg)` }}>
            <span className="heart-burst" style={{ display: 'inline-block', fontSize: h.size, lineHeight: 1 }}>❤️</span>
          </span>
        ))}
      </div>
    )}

    <div style={{ position: 'fixed', inset: 0, zIndex: 101, background: '#fff', overflowY: 'auto' }}>

      {/* Sticky topbar */}
      <div style={{ position: 'sticky', top: 0, zIndex: 20, background: '#fff', borderBottom: '1px solid rgba(17,17,17,0.10)' }}>
        <div style={{ padding: '14px 24px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button onClick={onBack} className="tap"
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, color: ink, fontFamily: "'Martian Mono',monospace", fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', padding: '8px 16px 8px 0' }}>
            <span style={{ fontSize: 18, lineHeight: 1 }}>←</span> BACK
          </button>
          <div style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 600, fontSize: 17, color: ink, letterSpacing: '-0.02em' }}>chaewon_and_haeseong</div>
          <div style={{ width: 80 }} />
        </div>
      </div>

      {/* Profile section */}
      <div style={{ padding: `${variant === 'pc' ? 32 : 24}px ${px}px 0` }}>
        <div className="label-en" style={{ marginBottom: 24 }}>· 우리의 추억</div>

        {/* avatar + stats + bio row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: variant === 'pc' ? 44 : 24, flexWrap: 'wrap', marginBottom: 16 }}>
          <button className="tap" onClick={() => setStory({ groups: [{ images: proposeImages, captions: proposeCaptions }], startGroupIdx: 0 })}
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', borderRadius: '50%', flexShrink: 0 }}>
            <div style={{ padding: variant === 'pc' ? 3 : 2.5, borderRadius: '50%', background: 'linear-gradient(45deg,#fcaf45,#f77737,#f56040,#fd1d1d,#e1306c,#c13584,#833ab4,#5851db)' }}>
              <div style={{ padding: variant === 'pc' ? 3 : 2.5, borderRadius: '50%', background: '#fff' }}>
                <img src="img/couple-main.jpg" alt="채원 ♥ 해성" loading="lazy" decoding="async"
                  className={tweaks.bw ? 'bw' : ''}
                  style={{ width: variant === 'pc' ? 92 : 68, height: variant === 'pc' ? 92 : 68, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center 35%', display: 'block' }} />
              </div>
            </div>
          </button>

          <div style={{ display: 'flex', gap: variant === 'pc' ? 44 : 24 }}>
            {[{ n: posts.length, l: '게시물' }, { n: '∞', l: '함께할 날' }, { n: '1', l: '영원히' }].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 700, fontSize: variant === 'pc' ? 26 : 20, color: ink, lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontFamily: "'Pretendard',sans-serif", fontSize: 13, color: '#666', marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>

          <div style={{ marginLeft: variant === 'pc' ? 24 : 4 }}>
            <div style={{ fontFamily: "'Pretendard',sans-serif", fontWeight: 700, fontSize: 15, color: ink }}>채원 ♡ 해성</div>
            <div style={{ fontFamily: "'Pretendard',sans-serif", fontSize: 13, color: '#444', lineHeight: 1.7, marginTop: 4 }}>
              2026.09.12<br />두 사람의 이야기가 하나가 되는 날
            </div>
          </div>
        </div>

        {/* action buttons */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 20, maxWidth: 480 }}>
          <button className="tap" onClick={() => openSheet && openSheet('following')}
            style={{ flex: 1, padding: '8px 0', background: 'rgba(17,17,17,0.07)', border: '1px solid rgba(17,17,17,0.14)', borderRadius: 9, fontFamily: "'Pretendard',sans-serif", fontWeight: 600, fontSize: 13, color: ink, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
            팔로잉 <span style={{ fontSize: 10 }}>▾</span>
          </button>
          <button className="tap" onClick={() => { setTab('mention'); setGbRefreshKey(k => k + 1); }}
            style={{ flex: 2, padding: '8px 0', background: 'rgba(17,17,17,0.07)', border: '1px solid rgba(17,17,17,0.14)', borderRadius: 9, fontFamily: "'Pretendard',sans-serif", fontWeight: 600, fontSize: 13, color: ink, cursor: 'pointer' }}>
            축하메시지 보내기
          </button>
          <button className="tap" onClick={burstHeart}
            style={{ width: 40, background: 'rgba(17,17,17,0.07)', border: '1px solid rgba(17,17,17,0.14)', borderRadius: 9, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span style={{ fontSize: 10, fontWeight: 700, color: ink, lineHeight: 1, marginBottom: 1 }}>+</span>
          </button>
        </div>

        {/* highlights */}
        <div style={{ display: 'flex', gap: variant === 'pc' ? 20 : 14, overflowX: 'auto', paddingBottom: 16 }}>
          {highlights.map((h, i) => {
            const hasImages = h.images.length > 0;
            return (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, flexShrink: 0 }}>
                <button className="tap" onClick={() => { if (!hasImages) return; setStory({ groups: validHighlights, startGroupIdx: validHighlights.indexOf(h) }); }}
                  style={{ padding: 0, border: 'none', background: 'none', cursor: hasImages ? 'pointer' : 'default' }}>
                  <div style={{
                    width: variant === 'pc' ? 64 : 56, height: variant === 'pc' ? 64 : 56, borderRadius: '50%',
                    border: hasImages ? `2px solid ${ink}` : '1.5px solid rgba(17,17,17,0.14)',
                    overflow: 'hidden', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: hasImages ? 'transparent' : '#F4F2EB',
                  }}>
                    {hasImages
                      ? <img src={h.images[0]} alt={h.label} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      : <span style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 600, fontSize: 22, color: '#888' }}>+</span>
                    }
                  </div>
                </button>
                <div style={{ fontFamily: "'Pretendard',sans-serif", fontSize: 12, color: '#444', whiteSpace: 'nowrap' }}>{h.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tab nav */}
      <div style={{ position: 'sticky', top: 53, zIndex: 10, background: '#fff', display: 'flex', borderTop: '1px solid rgba(17,17,17,0.09)', borderBottom: '1px solid rgba(17,17,17,0.09)' }}>
        {TABS.map(({ key, Icon }) => (
          <button key={key} onClick={() => { setTab(key); if (key === 'mention') setGbRefreshKey(k => k + 1); }} className="tap"
            style={{ flex: 1, padding: '13px 0', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: tab === key ? `2px solid ${ink}` : '2px solid transparent', transition: 'border-color .15s' }}>
            <Icon active={tab === key} ink={ink} />
          </button>
        ))}
      </div>

      {/* GRID — MemoryPost 카드 직접 표시 */}
      {tab === 'grid' && (
        <div style={{ padding: `40px ${px}px 80px`, background: '#FAFAFA' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: variant === 'pc' ? '1fr 1fr 1fr' : '1fr',
            gap: 20, maxWidth: 1200, margin: '0 auto',
          }}>
            {posts.map(p => (
              <div key={p.id} style={{ background: '#fff', border: '1px solid rgba(17,17,17,0.07)', borderRadius: 12, overflow: 'hidden' }}>
                <MemoryPost lime={lime} ink={ink} {...p} />
              </div>
            ))}
          </div>
          <div style={{ background: lime, padding: '48px 0', textAlign: 'center', borderRadius: 12, maxWidth: 1200, margin: '40px auto 0' }}>
            <div style={{ fontFamily: "'Grand Hotel',cursive", fontSize: 52, color: ink, lineHeight: 1 }}>Lovestagram</div>
          </div>
        </div>
      )}

      {/* GUESTBOOK */}
      {tab === 'mention' && (
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px 80px' }}>
          <GuestbookTab key={gbRefreshKey} lime={lime} ink={ink} />
        </div>
      )}
    </div>
    </>
  );
}

/* ─── OUR STORY / Numbers Section ──────────────────────────── */
function PCNumbersSection({ lime, ink, tweaks, variant }) {
  const px = variant === 'pc' ? 80 : 48;
  const py = variant === 'pc' ? 112 : 72;
  const numSize = variant === 'pc' ? 88 : 68;

  const stats = [
    { n: '1914', t: '처음 만난 날부터 결혼하는 날까지', d: ['1,914일을 함께 걸어왔습니다', '그 모든 날이 오늘을 만들었습니다'] },
    { n: '1',    t: '이제, 하나가 됩니다', d: ['각자의 이야기를 써온 두 사람이', '오늘부터 같은 페이지를 씁니다'] },
    { n: '∞',    t: '오늘부터, 영원히', d: ['서로를 완성하기보다,', '함께 무한히 삶을 만들어가려 합니다'] },
  ];

  return (
    <section id="wide-story" style={{ background: lime, padding: `${py}px ${px}px` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="label-en" style={{ marginBottom: variant === 'pc' ? 56 : 36 }}>· OUR STORY</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: variant === 'pc' ? 80 : 48, alignItems: 'start' }}>
          {/* photo */}
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 8 }}>
            <img src="img/couple-main.jpg" alt="couple"
              loading="lazy" decoding="async"
              className={tweaks.bw ? 'bw' : ''}
              style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }} />
            <div style={{
              position: 'absolute', top: 16, left: 16,
              background: lime, color: ink,
              fontFamily: "'Martian Mono', monospace", fontSize: 11, letterSpacing: '0.14em',
              padding: '5px 12px', borderRadius: 2,
            }}>The Two</div>
          </div>
          {/* stats */}
          <div>
            {stats.map((s, i) => (
              <div key={i} style={{
                paddingTop: i === 0 ? 0 : 32,
                paddingBottom: 32,
                borderBottom: i === stats.length - 1 ? 'none' : `1px solid ${ink}`,
              }}>
                <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: numSize, color: ink, lineHeight: 0.9, letterSpacing: '-0.02em', marginBottom: 14 }}>{s.n}</div>
                <div style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 700, fontSize: 17, color: ink, marginBottom: 8, lineHeight: 1.3 }}>{s.t}</div>
                <div style={{ fontFamily: "'Pretendard', sans-serif", fontSize: 14, color: ink, opacity: 0.82, lineHeight: 1.65 }}>
                  {s.d.map((line, j) => <div key={j}>{line}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── GUIDE / MEAL Section ──────────────────────────────────── */
function PCGuideSection({ ink, variant }) {
  const px = variant === 'pc' ? 80 : 48;

  const items = [
    { title: '식사 시간', body: ['오후 1시 ~ 3시까지 식사가 제공됩니다'] },
    { title: '식사 장소', body: ['서초사옥 지하1층에서 이뤄집니다', '양식 · 중식 · 일식 중 선택하실 수 있습니다'] },
    { title: '식당 선택', body: ['식당 선택은 축의대에서 이뤄지오니', '함께 오시는 분이 계시다면 미리 상의하고 오시면 좋습니다'], wide: true },
  ];

  return (
    <section style={{ background: '#F8F6F0', padding: `0 ${px}px ${variant === 'pc' ? 64 : 44}px` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          border: `1px solid ${ink}`, background: '#fff',
          padding: `${variant === 'pc' ? 38 : 26}px 28px`,
          fontFamily: "'Pretendard'",
        }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 28 }}>
            <div className="label-en">MEAL</div>
            <div style={{ fontFamily: "'Pretendard'", fontSize: 12, color: '#666' }}>식사</div>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: variant === 'pc' ? '1fr 1fr 1fr' : '1fr 1fr',
            gap: `${variant === 'pc' ? 0 : 0}px`,
          }}>
            {items.map((item, i) => (
              <div key={i} style={{
                ...(item.wide && variant !== 'pc' ? { gridColumn: '1 / -1' } : {}),
                paddingTop: i === 0 ? 0 : 16,
                paddingBottom: i === items.length - 1 ? 0 : 16,
                borderBottom: variant === 'pc'
                  ? 'none'
                  : (i === items.length - 1 ? 'none' : '1px solid rgba(17,17,17,0.1)'),
                borderRight: variant === 'pc' && i < items.length - 1
                  ? '1px solid rgba(17,17,17,0.1)'
                  : 'none',
                paddingRight: variant === 'pc' && i < items.length - 1 ? 24 : 0,
                paddingLeft: variant === 'pc' && i > 0 ? 24 : 0,
              }}>
                <div style={{ fontFamily: "'Pretendard'", fontWeight: 500, fontSize: variant === 'pc' ? 15 : 14, marginBottom: 8, color: ink }}>{item.title}</div>
                <div style={{ fontFamily: "'Pretendard'", fontSize: variant === 'pc' ? 15 : 14, color: '#555', lineHeight: 1.65 }}>
                  {item.body.map((line, j) => <div key={j}>{line}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── VENUE + ACCOUNT Section ───────────────────────────────── */
function PCVenueSection({ lime, ink, openSheet, variant }) {
  const px = variant === 'pc' ? 80 : 48;
  const py = variant === 'pc' ? 64 : 44;

  const cards = [
    {
      label: 'VENUE', labelSub: '오시는 길 보기',
      title: '삼성전자 서초사옥 5층',
      icon: (
        <svg width="14" height="17" viewBox="0 0 14 17" fill="none">
          <path d="M7 0C4.24 0 2 2.24 2 5c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5zm0 7A2 2 0 1 1 7 3a2 2 0 0 1 0 4z" fill={ink} />
        </svg>
      ),
      action: () => openSheet('map'),
    },
    {
      label: 'ACCOUNT', labelSub: '계좌번호 보기',
      title: '마음 전하실 곳',
      icon: (
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
          <rect x="1" y="1" width="14" height="12" rx="1.5" stroke={ink} strokeWidth="1.5" />
          <path d="M1 4.5h14" stroke={ink} strokeWidth="1.5" />
          <path d="M4 8.5h3M4 10.5h5" stroke={ink} strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      ),
      action: () => openSheet('account-both'),
    },
  ];

  return (
    <section style={{ background: '#F8F6F0', padding: `${py}px ${px}px` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="label-en" style={{ marginBottom: variant === 'pc' ? 24 : 18 }}>· INFORMATION</div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: variant === 'pc' ? '1fr 1fr' : '1fr',
          gap: 14,
        }}>
          {cards.map(card => (
            <button key={card.label} onClick={card.action} className="tap" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              width: '100%', border: `1.5px solid ${ink}`, background: '#fff',
              padding: '20px 20px', cursor: 'pointer', textAlign: 'left',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1 }}>
                <div style={{
                  width: variant === 'pc' ? 48 : 40, height: variant === 'pc' ? 48 : 40,
                  borderRadius: '50%', border: `1.5px solid ${ink}`, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {card.icon}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 4 }}>
                    <div className="label-en">{card.label}</div>
                    <div style={{ fontFamily: "'Pretendard'", fontSize: 12, color: '#888' }}>{card.labelSub}</div>
                  </div>
                  <div style={{ fontFamily: "'Pretendard'", fontWeight: 500, fontSize: variant === 'pc' ? 18 : 16, color: ink }}>{card.title}</div>
                </div>
              </div>
              <div style={{
                width: variant === 'pc' ? 44 : 40, height: variant === 'pc' ? 44 : 40,
                borderRadius: '50%', background: ink, color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18, flexShrink: 0, marginLeft: 12,
              }}>→</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CLOSING Section ───────────────────────────────────────── */
function PCClosingSection({ lime, ink, variant }) {
  const px = variant === 'pc' ? 80 : 48;

  return (
    <section style={{ background: lime, padding: `${variant === 'pc' ? 96 : 64}px ${px}px ${variant === 'pc' ? 80 : 56}px` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          fontSize: variant === 'pc' ? 28 : 20,
          fontFamily: "'Pretendard', sans-serif", fontWeight: 500,
          lineHeight: 1.6, letterSpacing: '-0.2px', color: ink, marginBottom: 40,
        }}>
          보내주시는 따뜻한 축하에 감사하며,<br />함께 잘 살아가겠습니다
        </div>
        <div style={{ height: 1, background: ink, marginBottom: 18 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div style={{ fontFamily: "'Martian Mono', monospace", fontSize: 13, letterSpacing: '0.12em', color: ink, fontWeight: 300 }}>CHAEWON</div>
          <div style={{ fontFamily: "'Martian Mono', monospace", fontSize: 13, letterSpacing: '0.12em', color: ink, fontWeight: 300 }}>HAESEONG</div>
        </div>
      </div>
    </section>
  );
}

/* ─── Root ──────────────────────────────────────────────────── */
function WideApp({ tweaks, openSheet, variant }) {
  const [showMemories, setShowMemories] = React.useState(false);
  const lime = tweaks.lime;
  const ink  = tweaks.ink;

  const openMemories = () => setShowMemories(true);
  const closeMemories = () => setShowMemories(false);

  return (
    <div style={{ minHeight: '100vh', background: '#F8F6F0' }}>
      {showMemories && (
        <PCMemoriesSection lime={lime} ink={ink} tweaks={tweaks} variant={variant} openSheet={openSheet} onBack={closeMemories} />
      )}
      <PCHeader        lime={lime} ink={ink} openSheet={openSheet} variant={variant} onOpenMemories={openMemories} />
      <PCHeroSection   lime={lime} ink={ink} tweaks={tweaks} openSheet={openSheet} variant={variant} onOpenMemories={openMemories} />
      <PCTickerBand    lime={lime} ink={ink} />
      <PCTheDaySection ink={ink} variant={variant} />
      <PCGuideSection  ink={ink} variant={variant} />
      <PCVenueSection  lime={lime} ink={ink} openSheet={openSheet} variant={variant} />
      <PCClosingSection lime={lime} ink={ink} variant={variant} />
    </div>
  );
}

Object.assign(window, { WideApp });
