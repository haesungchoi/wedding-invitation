// pc-layout.jsx — Wide layout for PC (≥1200px) and Tablet (768–1199px)
// Usage: <WideApp tweaks={...} openSheet={fn} variant="pc"|"tablet" />

/* ─── Header ────────────────────────────────────────────────── */
function PCHeader({ lime, ink, openSheet, variant }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const H  = variant === 'pc' ? 64 : 56;
  const px = variant === 'pc' ? 64 : 32;

  const navItems = [
    { label: 'THE DAY',   id: 'wide-day' },
    { label: '우리의 추억', id: 'wide-memories' },
  ];

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
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
        fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', color: ink,
      }}>CHAEWON · HAESEONG</div>

      <nav style={{ display: 'flex', alignItems: 'center', gap: variant === 'pc' ? 28 : 16 }}>
        {navItems.map(item => (
          <button key={item.label}
            onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: "'Martian Mono', monospace",
              fontSize: 9, letterSpacing: '0.16em', fontWeight: 600, color: ink, padding: 0,
            }}>
            {item.label}
          </button>
        ))}
        <button onClick={() => openSheet('share')} style={{
          background: ink, color: lime,
          border: 'none', padding: '8px 18px', borderRadius: 99, cursor: 'pointer',
          fontFamily: "'Martian Mono', monospace",
          fontSize: 9, letterSpacing: '0.14em', fontWeight: 700,
        }}>SHARE ↗</button>
      </nav>
    </header>
  );
}

/* ─── Hero Section ──────────────────────────────────────────── */
function PCHeroSection({ lime, ink, tweaks, openSheet, variant }) {
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
          fontSize: 9, letterSpacing: '0.2em', fontWeight: 600, color: ink, opacity: 0.6,
        }}>WEDDING INVITATION 2026</div>

        {/* names */}
        <div>
          <div style={{ marginBottom: 8 }}>
            <div style={{
              fontFamily: "'Pretendard', sans-serif",
              fontSize: nameSize, fontWeight: 600, lineHeight: 0.88, color: ink,
            }}>윤채원</div>
            <div style={{
              fontFamily: "'Martian Mono', monospace",
              fontSize: variant === 'pc' ? 15 : 12, color: ink, opacity: 0.65,
              marginTop: 5, marginLeft: 3,
            }}>Chaewon Yun</div>
          </div>

          <div style={{
            display: 'flex', alignItems: 'center', gap: 14,
            margin: `${variant === 'pc' ? 22 : 14}px 0`, marginLeft: 3,
          }}>
            <span style={{ display: 'inline-block', width: 36, height: 1, background: ink }} />
            <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: variant === 'pc' ? 22 : 17, color: ink }}>and</span>
            <span style={{ display: 'inline-block', width: 36, height: 1, background: ink }} />
          </div>

          <div>
            <div style={{
              fontFamily: "'Pretendard', sans-serif",
              fontSize: nameSize, fontWeight: 600, lineHeight: 0.88, color: ink,
            }}>최해성</div>
            <div style={{
              fontFamily: "'Martian Mono', monospace",
              fontSize: variant === 'pc' ? 15 : 12, color: ink, opacity: 0.65,
              marginTop: 5, marginLeft: 3,
            }}>Haeseong Choi</div>
          </div>
        </div>

        {/* date + CTAs */}
        <div style={{ borderTop: `1px solid ${ink}`, paddingTop: 22 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
            <div style={{
              fontFamily: "'Martian Mono', monospace",
              fontSize: variant === 'pc' ? 17 : 13, color: ink, fontWeight: 300,
            }}>2026.09.12</div>
            <div style={{ fontFamily: "'Pretendard', sans-serif", fontSize: 12, color: ink, opacity: 0.55 }}>
              D-{days}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[
              { label: 'LOCATION →', action: () => openSheet('map') },
              { label: 'ACCOUNTS →', action: () => openSheet('account-both') },
              { label: 'RSVP →',     action: () => openSheet('rsvp'), dark: true },
            ].map(b => (
              <button key={b.label} onClick={b.action} style={{
                background: b.dark ? ink : 'transparent',
                color: b.dark ? lime : ink,
                border: b.dark ? 'none' : `1px solid ${ink}`,
                padding: '9px 18px', borderRadius: 99, cursor: 'pointer',
                fontFamily: "'Martian Mono', monospace",
                fontSize: 9, letterSpacing: '0.14em', fontWeight: 700,
              }}>{b.label}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Right: full-bleed photo — click to jump to memories */}
      <button
        onClick={() => document.getElementById('wide-memories')?.scrollIntoView({ behavior: 'smooth' })}
        className="tap"
        style={{ position: 'relative', overflow: 'hidden', padding: 0, border: 'none', cursor: 'pointer', display: 'block', width: '100%', height: '100%' }}>
        <img src="img/couple-main.jpg" alt="couple"
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
          fontSize: 9, fontWeight: 700, letterSpacing: '0.18em',
          padding: '5px 10px', borderRadius: 2,
        }}>우리의 추억 보기 ↗</div>
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
function PCTickerBand() {
  const items = Array.from({ length: 10 }, (_, i) => i);
  return (
    <div className="ticker-wrap" style={{ height: 44, padding: '12px 0' }}>
      <div className="ticker-track">
        {items.map(i => <span key={'a' + i} className="ticker-item" style={{ fontSize: 12 }}>Welcome to our wedding ✦</span>)}
        {items.map(i => <span key={'b' + i} className="ticker-item" style={{ fontSize: 12 }}>Welcome to our wedding ✦</span>)}
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
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
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
              body: <div style={{ fontFamily: "'Pretendard'", fontSize: variant === 'pc' ? 21 : 17, fontWeight: 400, lineHeight: 1.55, color: ink }}>
                2026년 9월 12일<br /><span style={{ color: '#555', fontSize: variant === 'pc' ? 17 : 14 }}>토요일 오후 1시</span>
              </div>,
            },
            {
              label: '· VENUE',
              body: <div style={{ fontFamily: "'Pretendard'", fontSize: variant === 'pc' ? 21 : 17, fontWeight: 400, lineHeight: 1.55, color: ink }}>
                삼성전자 서초사옥<br /><span style={{ color: '#555', fontSize: variant === 'pc' ? 17 : 14 }}>5층 웨딩홀</span>
              </div>,
            },
            {
              label: '· FAMILY',
              style: { gridColumn: variant === 'pc' ? 'auto' : '1 / -1' },
              body: <div style={{ fontFamily: "'Pretendard'", fontSize: 15, lineHeight: 1.95, color: '#444' }}>
                <div><span style={{ color: ink, fontWeight: 600 }}>최교선 · 구지영</span>의 아들 해성</div>
                <div style={{ height: 1, background: 'rgba(17,17,17,0.1)', margin: '8px 0' }} />
                <div><span style={{ color: ink, fontWeight: 600 }}>윤재경 · 공명아</span>의 딸 채원</div>
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
            fontFamily: "'Pretendard'", fontSize: variant === 'pc' ? 18 : 15,
            color: '#555', lineHeight: 1.9,
          }}>두 사람의 이야기가 하나가 되는 날,<br />함께 축복해 주세요</div>
        </div>
      </div>
    </section>
  );
}

/* ─── MEMORIES Section ──────────────────────────────────────── */
function PCMemoriesSection({ lime, ink, tweaks, variant }) {
  const [tab, setTab] = React.useState('grid');
  const px = variant === 'pc' ? 80 : 48;
  const gridCols = variant === 'pc' ? 4 : 3;

  const posts = [
    { id: 'wm-1', date: '2019. 09. 14', likes: '1,914', photoCount: 2, images: ['img/memories/photo-1.jpg', 'img/memories/photo-2.jpg'], caption: '처음 만난 날. 그 날의 설렘이 오늘까지 이어졌어.' },
    { id: 'wm-2', date: '2020. 02. 14', likes: '2,048', photoCount: 3, caption: '첫 발렌타인. 작은 초콜릿 하나에도 두근거렸던 날.' },
    { id: 'wm-3', date: '2021. 07. 24', likes: '3,201', photoCount: 2, caption: '처음으로 떠난 여행. 바다보다 네가 더 빛났어.' },
    { id: 'wm-4', date: '2022. 12. 31', likes: '4,096', photoCount: 1, caption: '연말, 우리만의 자정. 새해가 되어도 계속 이 손 잡을게.' },
    { id: 'wm-5', date: '2024. 03. 22', likes: '5,120', photoCount: 4, caption: '벚꽃 아래 함께한 오후. 매년 이 자리에 오자.' },
    { id: 'wm-6', date: '2026. 09. 12', likes: '9,126', photoCount: 3, caption: '오늘, 드디어 하나가 됩니다. 앞으로의 모든 날도 함께.' },
  ];

  const interests = [
    { id: 'wi-1', label: '여행', sub: 'Travel' }, { id: 'wi-2', label: '음악', sub: 'Music' },
    { id: 'wi-3', label: '카페', sub: 'Café' },   { id: 'wi-4', label: '영화', sub: 'Film' },
    { id: 'wi-5', label: '자연', sub: 'Nature' }, { id: 'wi-6', label: '음식', sub: 'Food' },
  ];

  const TABS = [
    { key: 'grid',    Icon: TabIconGrid,    label: 'GRID' },
    { key: 'feed',    Icon: TabIconFeed,    label: 'FEED' },
    { key: 'repost',  Icon: TabIconRepost,  label: 'REPOST' },
    { key: 'mention', Icon: TabIconMention, label: 'GUESTBOOK' },
  ];

  return (
    <section id="wide-memories" style={{ background: '#fff', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
      {/* Profile header */}
      <div style={{ padding: `${variant === 'pc' ? 52 : 36}px ${px}px 28px`, borderBottom: '1px solid rgba(17,17,17,0.08)' }}>
        <div className="label-en" style={{ marginBottom: 28 }}>· 우리의 추억</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: variant === 'pc' ? 44 : 24, flexWrap: 'wrap' }}>
          {/* avatar */}
          <div style={{ padding: 3, borderRadius: '50%', background: `linear-gradient(135deg,${lime},${ink})`, flexShrink: 0 }}>
            <div style={{ width: variant === 'pc' ? 92 : 68, height: variant === 'pc' ? 92 : 68, borderRadius: '50%', background: lime, color: ink, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 700, fontSize: variant === 'pc' ? 20 : 16, border: '4px solid #fff' }}>H&C</div>
          </div>
          {/* stats */}
          <div style={{ display: 'flex', gap: variant === 'pc' ? 44 : 24 }}>
            {[{ n: posts.length, l: '게시물' }, { n: '1914', l: '함께한 날' }, { n: '1', l: '하나가 됩니다' }].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 700, fontSize: variant === 'pc' ? 26 : 20, color: ink, lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontFamily: "'Pretendard',sans-serif", fontSize: 11, color: '#666', marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
          {/* bio */}
          <div style={{ marginLeft: variant === 'pc' ? 24 : 4 }}>
            <div style={{ fontFamily: "'Pretendard',sans-serif", fontWeight: 700, fontSize: 15, color: ink }}>해성 ♡ 채원</div>
            <div style={{ fontFamily: "'Pretendard',sans-serif", fontSize: 13, color: '#444', lineHeight: 1.7, marginTop: 4 }}>
              2019.09.14 — 2026.09.12<br />두 사람의 이야기가 하나가 되는 날
            </div>
          </div>
        </div>
      </div>

      {/* Tab nav */}
      <div style={{ display: 'flex', justifyContent: 'center', borderBottom: '1px solid rgba(17,17,17,0.08)' }}>
        {TABS.map(({ key, Icon, label }) => (
          <button key={key} onClick={() => setTab(key)} className="tap"
            style={{ padding: `14px ${variant === 'pc' ? 32 : 20}px`, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, borderBottom: tab === key ? `2px solid ${ink}` : '2px solid transparent', transition: 'border-color .15s' }}>
            <Icon active={tab === key} ink={ink} />
            <span style={{ fontFamily: "'Martian Mono', monospace", fontSize: 9, letterSpacing: '0.14em', fontWeight: 600, color: tab === key ? ink : '#aaa' }}>{label}</span>
          </button>
        ))}
      </div>

      {/* GRID */}
      {tab === 'grid' && (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${gridCols}, 1fr)`, gap: 2, background: '#ddd' }}>
          {posts.map((p, i) => (
            <button key={p.id} onClick={() => setTab('feed')} className="tap"
              style={{ padding: 0, border: 'none', cursor: 'pointer', aspectRatio: '4/5', background: '#F4F2EB', position: 'relative', overflow: 'hidden' }}>
              <image-slot id={p.id + '-g'} shape="rect" fit="cover" placeholder="탭하여 추가"
                src={p.images && p.images[0]}
                style={{ width: '100%', height: '100%', display: 'block', pointerEvents: 'none' }}></image-slot>
              {p.photoCount > 1 && <CarouselBadge />}
              <div style={{ position: 'absolute', bottom: 6, right: 8, fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.9)', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                {String(i + 1).padStart(2, '0')}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* FEED */}
      {tab === 'feed' && (
        <div style={{ padding: `40px ${px}px 80px`, background: '#FAFAFA' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: variant === 'pc' ? '1fr 1fr' : '1fr',
            gap: 20, maxWidth: 1200, margin: '0 auto',
          }}>
            {posts.map(p => (
              <div key={p.id} style={{ background: '#fff', border: '1px solid rgba(17,17,17,0.07)', borderRadius: 12, overflow: 'hidden' }}>
                <MemoryPost lime={lime} ink={ink} {...p} />
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40, background: lime, padding: '48px 0', textAlign: 'center', borderRadius: 12, maxWidth: 1200, margin: '40px auto 0' }}>
            <div style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 30, fontWeight: 400, color: ink, lineHeight: 1 }}>TO BE CONTINUED</div>
          </div>
        </div>
      )}

      {/* REPOST */}
      {tab === 'repost' && (
        <div>
          <div style={{ padding: `24px ${px}px 16px`, borderBottom: '1px solid rgba(17,17,17,0.07)' }}>
            <div style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 22, fontWeight: 400, color: ink }}>우리의 관심사</div>
            <div style={{ fontFamily: "'Pretendard',sans-serif", fontSize: 13, color: '#666', marginTop: 4 }}>두 사람이 함께 좋아하는 것들</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 2, background: '#ddd' }}>
            {interests.map(it => (
              <div key={it.id} style={{ aspectRatio: '4/5', background: '#F4F2EB', position: 'relative', overflow: 'hidden' }}>
                <image-slot id={it.id} shape="rect" fit="cover" placeholder="탭하여 추가"
                  style={{ width: '100%', height: '100%', display: 'block' }}></image-slot>
                <div style={{ position: 'absolute', top: 6, right: 6, width: 18, height: 18, borderRadius: '50%', background: 'rgba(255,255,255,0.88)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="1,4 1,10 7,10" /><polyline points="23,20 23,14 17,14" />
                    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10" /><path d="M3.51 15A9 9 0 0 0 18.36 18.36L23 14" />
                  </svg>
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 8px 8px', background: 'linear-gradient(transparent,rgba(0,0,0,0.52))', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Pretendard',sans-serif", fontWeight: 700, fontSize: 13, color: '#fff' }}>{it.label}</div>
                  <div style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 9, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{it.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ height: 60 }} />
        </div>
      )}

      {/* GUESTBOOK */}
      {tab === 'mention' && (
        <div style={{ maxWidth: 720, margin: '0 auto', padding: `48px ${px}px 80px` }}>
          <GuestbookTab lime={lime} ink={ink} />
        </div>
      )}
    </section>
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
              className={tweaks.bw ? 'bw' : ''}
              style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }} />
            <div style={{
              position: 'absolute', top: 16, left: 16,
              background: lime, color: ink,
              fontFamily: "'Martian Mono', monospace", fontSize: 9, letterSpacing: '0.14em',
              padding: '4px 10px', borderRadius: 2,
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

/* ─── VENUE + ACCOUNT Section ───────────────────────────────── */
function PCVenueSection({ lime, ink, openSheet, variant }) {
  const px = variant === 'pc' ? 80 : 48;
  const py = variant === 'pc' ? 96 : 64;

  return (
    <section style={{ background: '#F8F6F0', padding: `${py}px ${px}px` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="label-en" style={{ marginBottom: variant === 'pc' ? 44 : 28 }}>· INFORMATION</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
          {[
            { label: 'VENUE',   title: '삼성전자 서초사옥', sub: '5층 웨딩홀',  cta: '오시는 길 보기 →', action: () => openSheet('map') },
            { label: 'ACCOUNT', title: '마음 전하실 곳',    sub: '계좌 번호 안내', cta: '계좌 번호 보기 →', action: () => openSheet('account-both') },
          ].map(card => (
            <button key={card.label} onClick={card.action} className="tap" style={{
              display: 'block', width: '100%', border: `1px solid ${ink}`, background: '#fff',
              padding: `${variant === 'pc' ? 38 : 26}px 28px`, textAlign: 'left', cursor: 'pointer',
            }}>
              <div className="label-en" style={{ marginBottom: 12 }}>{card.label}</div>
              <div style={{ fontFamily: "'Pretendard'", fontSize: variant === 'pc' ? 24 : 19, fontWeight: 500, marginBottom: 6, color: ink }}>{card.title}</div>
              <div style={{ fontFamily: "'Pretendard'", fontSize: 14, color: '#666', marginBottom: 22 }}>{card.sub}</div>
              <div style={{ fontFamily: "'Martian Mono'", fontSize: 10, color: ink, letterSpacing: '0.14em', fontWeight: 600 }}>{card.cta}</div>
            </button>
          ))}
        </div>
        <button onClick={() => openSheet('rsvp')} className="tap" style={{
          display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between',
          border: 'none', background: ink,
          padding: `${variant === 'pc' ? 26 : 20}px 28px`, cursor: 'pointer',
        }}>
          <div>
            <div className="label-en" style={{ marginBottom: 8, color: lime }}>RSVP</div>
            <div style={{ fontFamily: "'Pretendard'", fontSize: variant === 'pc' ? 22 : 17, fontWeight: 500, color: lime }}>참석 의사 전달</div>
          </div>
          <div style={{ fontFamily: "'Martian Mono'", fontSize: 10, color: lime, letterSpacing: '0.14em', fontWeight: 700 }}>SEND RSVP →</div>
        </button>
      </div>
    </section>
  );
}

/* ─── CLOSING Section ───────────────────────────────────────── */
function PCClosingSection({ lime, ink, openSheet, variant }) {
  const px = variant === 'pc' ? 80 : 48;

  return (
    <section style={{ background: lime, padding: `${variant === 'pc' ? 112 : 72}px ${px}px` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          fontSize: variant === 'pc' ? 54 : 38,
          fontFamily: "'Pretendard', sans-serif", fontWeight: 500,
          lineHeight: 1.1, letterSpacing: '-0.4px', color: ink, marginBottom: 48,
        }}>
          두 사람의 결혼을<br />축하해주세요
        </div>
        <div style={{ height: 1, background: ink, marginBottom: 22 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 52 }}>
          <div style={{ fontFamily: "'Martian Mono', monospace", fontSize: 10, letterSpacing: '0.18em', color: ink, fontWeight: 600 }}>CHAEWON · HAESEONG</div>
          <div style={{ fontFamily: "'Martian Mono', monospace", fontSize: 13, color: ink, fontWeight: 300 }}>2026.09.12</div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={() => openSheet('share')} style={{
            background: ink, color: lime, border: 'none',
            padding: '12px 28px', borderRadius: 99, cursor: 'pointer',
            fontFamily: "'Martian Mono', monospace", fontSize: 9, letterSpacing: '0.14em', fontWeight: 700,
          }}>SHARE ↗</button>
          <button onClick={() => openSheet('rsvp')} style={{
            background: 'transparent', color: ink, border: `1px solid ${ink}`,
            padding: '12px 28px', borderRadius: 99, cursor: 'pointer',
            fontFamily: "'Martian Mono', monospace", fontSize: 9, letterSpacing: '0.14em', fontWeight: 700,
          }}>RSVP →</button>
        </div>
      </div>
    </section>
  );
}

/* ─── Root ──────────────────────────────────────────────────── */
function WideApp({ tweaks, openSheet, variant }) {
  const lime = tweaks.lime;
  const ink  = tweaks.ink;

  return (
    <div style={{ minHeight: '100vh', background: '#F8F6F0' }}>
      <PCHeader       lime={lime} ink={ink} openSheet={openSheet} variant={variant} />
      <PCHeroSection  lime={lime} ink={ink} tweaks={tweaks} openSheet={openSheet} variant={variant} />
      <PCTickerBand />
      <PCTheDaySection  ink={ink} variant={variant} />
      <PCMemoriesSection lime={lime} ink={ink} tweaks={tweaks} variant={variant} />
      <PCNumbersSection  lime={lime} ink={ink} tweaks={tweaks} variant={variant} />
      <PCVenueSection    lime={lime} ink={ink} openSheet={openSheet} variant={variant} />
      <PCClosingSection  lime={lime} ink={ink} openSheet={openSheet} variant={variant} />
    </div>
  );
}

Object.assign(window, { WideApp });
