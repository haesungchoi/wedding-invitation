/* MEMORIES — 4-tab Instagram-style profile · haeseong_chaewon */

/* ─── Tab Icons ────────────────────────────────────────────── */
function TabIconGrid({ active, ink }) {
  const c = active ? ink : '#AAAAAA';
  const sq = (x, y) => <rect key={`${x}${y}`} x={x} y={y} width="6" height="6" fill={c}/>;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      {sq(1,1)}{sq(9,1)}{sq(17,1)}
      {sq(1,9)}{sq(9,9)}{sq(17,9)}
      {sq(1,17)}{sq(9,17)}{sq(17,17)}
    </svg>
  );
}
function TabIconFeed({ active, ink }) {
  const c = active ? ink : '#AAAAAA';
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="4"/>
      <polygon points="10,8 17,12 10,16" fill={c} stroke="none"/>
    </svg>
  );
}
function TabIconRepost({ active, ink }) {
  const c = active ? ink : '#AAAAAA';
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="1,4 1,10 7,10"/>
      <polyline points="23,20 23,14 17,14"/>
      <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10"/>
      <path d="M3.51 15A9 9 0 0 0 18.36 18.36L23 14"/>
    </svg>
  );
}
function TabIconMention({ active, ink }) {
  const c = active ? ink : '#AAAAAA';
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
      <rect x="15.5" y="15" width="8" height="7" rx="1.5" strokeWidth="1.4"/>
      <circle cx="19.5" cy="18.5" r="1.5" fill={c} stroke="none"/>
    </svg>
  );
}

/* ─── Post Icons ───────────────────────────────────────────── */
function HeartIcon({ filled }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={filled ? '#E0345A' : 'none'}
      stroke={filled ? '#E0345A' : '#111'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  );
}
function CommentIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  );
}
function SendIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  );
}

/* ─── Photo Carousel ────────────────────────────────────────── */
function PhotoCarousel({ postId, photoCount }) {
  const [slide, setSlide] = React.useState(0);
  const stripRef = React.useRef(null);

  const onScroll = () => {
    const el = stripRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    setSlide(idx);
  };

  const goTo = i => {
    const el = stripRef.current;
    if (!el) return;
    el.scrollLeft = i * el.clientWidth;
  };

  return (
    <div style={{ position:'relative' }}>
      {/* ── aspect-ratio anchor ─────────────────────────────
          overflow:hidden here gives the carousel a stable, fixed
          height — no flex/aspectRatio conflicts on the strip itself */}
      <div style={{ position:'relative', width:'100%', aspectRatio:'4/5', overflow:'hidden', background:'#F4F2EB' }}>

        {/* horizontal strip — absolutely fills the anchor */}
        <div ref={stripRef} onScroll={onScroll}
          className="carousel-strip"
          style={{
            position:'absolute', inset:0,
            display:'flex',
            overflowX:'scroll',
            overflowY:'hidden',
            scrollSnapType:'x mandatory',
            scrollBehavior:'smooth',
            WebkitOverflowScrolling:'touch',
            /* pan-x: browser handles ONLY horizontal panning here —
               vertical scroll on parent is unaffected, no more shake */
            touchAction:'pan-x pinch-zoom',
            overscrollBehaviorX:'contain',
            msOverflowStyle:'none',
            scrollbarWidth:'none',
          }}>
          {Array.from({ length: photoCount }, (_, i) => (
            <div key={i} style={{
              minWidth:'100%', height:'100%',
              scrollSnapAlign:'start', flexShrink:0,
              overflow:'hidden',
            }}>
              <image-slot
                id={`${postId}-p${i}`}
                shape="rect" fit="cover"
                placeholder="탭하여 사진 추가"
                style={{ width:'100%', height:'100%', display:'block' }}
              ></image-slot>
            </div>
          ))}
        </div>

        {/* slide counter — stays inside the clipped area */}
        {photoCount > 1 && (
          <div style={{
            position:'absolute', top:10, right:10, zIndex:5,
            background:'rgba(0,0,0,0.55)', color:'#fff',
            padding:'3px 9px', borderRadius:99,
            fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:11, fontWeight:600,
            letterSpacing:'0.04em', pointerEvents:'none',
          }}>{slide+1}/{photoCount}</div>
        )}

        {/* carousel icon */}
        {photoCount > 1 && (
          <div style={{ position:'absolute', top:10, left:10, zIndex:5, pointerEvents:'none' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="13" height="13" rx="2"/>
              <path d="M17 6h3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-3"/>
            </svg>
          </div>
        )}
      </div>

      {/* dot indicators — outside overflow:hidden so they're always visible */}
      {photoCount > 1 && (
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:5, padding:'8px 0 2px', background:'#fff' }}>
          {Array.from({ length: photoCount }, (_, i) => (
            <button key={i} onClick={() => goTo(i)}
              style={{
                width: i===slide ? 7 : 5, height: i===slide ? 7 : 5,
                borderRadius:'50%', border:'none', cursor:'pointer', padding:0,
                background: i===slide ? '#111' : 'rgba(17,17,17,0.28)',
                transition:'all .15s',
              }}/>
          ))}
        </div>
      )}
    </div>
  );
}

/* carousel icon for grid cells */
function CarouselBadge() {
  return (
    <div style={{ position:'absolute', top:7, right:7 }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.92)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="13" height="13" rx="2"/>
        <path d="M17 6h3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-3"/>
      </svg>
    </div>
  );
}

/* ─── Feed Post ─────────────────────────────────────────────── */
function MemoryPost({ id, date, caption, likes, photoCount = 1, lime, ink }) {
  const [liked, setLiked] = React.useState(false);
  const likeN = parseInt(likes.replace(',',''));
  return (
    <div id={'post-' + id} style={{ background:'#fff', borderBottom:'1px solid rgba(17,17,17,0.08)' }}>
      {/* header */}
      <div style={{ display:'flex', alignItems:'center', gap:10, padding:'10px 14px' }}>
        <div style={{
          width:34, height:34, borderRadius:'50%', flexShrink:0,
          background:lime, color:ink, border:`1.5px solid ${ink}`,
          display:'flex', alignItems:'center', justifyContent:'center',
          fontFamily:"'Bricolage Grotesque',sans-serif", fontWeight:700, fontSize:11,
        }}>H&C</div>
        <div style={{ flex:1 }}>
          <div style={{ fontFamily:"'Pretendard',sans-serif", fontWeight:700, fontSize:13, color:ink }}>haeseong_chaewon</div>
          <div style={{ fontFamily:"'Pretendard',sans-serif", fontSize:11, color:'#888', marginTop:1 }}>{date}</div>
        </div>
        <div style={{ fontSize:18, color:'#888', letterSpacing:'0.08em' }}>···</div>
      </div>

      {/* photo carousel */}
      <PhotoCarousel postId={id} photoCount={photoCount}/>

      {/* actions */}
      <div style={{ display:'flex', alignItems:'center', gap:14, padding:'10px 14px 6px' }}>
        <button onClick={() => setLiked(l=>!l)}
          style={{ background:'none', border:'none', cursor:'pointer', padding:0, display:'flex' }}>
          <HeartIcon filled={liked}/>
        </button>
        <button style={{ background:'none', border:'none', cursor:'pointer', padding:0, display:'flex' }}>
          <CommentIcon/>
        </button>
        <div style={{ marginLeft:'auto', display:'flex' }}><SendIcon/></div>
      </div>
      <div style={{ fontFamily:"'Pretendard',sans-serif", fontWeight:700, fontSize:13, color:ink, padding:'0 14px 4px' }}>
        좋아요 {liked ? (likeN+1).toLocaleString() : likes}개
      </div>
      <div style={{ fontFamily:"'Pretendard',sans-serif", fontSize:13, lineHeight:1.6, color:'#111', padding:'0 14px 16px' }}>
        <span style={{ fontWeight:700, marginRight:6, color:ink }}>haeseong_chaewon</span>{caption}
      </div>
    </div>
  );
}

/* ─── Guestbook ─────────────────────────────────────────────── */
const GB_KEY = 'hc-guestbook-2026';
function gbLoad() {
  try { return JSON.parse(localStorage.getItem(GB_KEY)) || []; }
  catch { return []; }
}
function gbSave(msgs) {
  try { localStorage.setItem(GB_KEY, JSON.stringify(msgs)); } catch {}
}

function compressImage(file, cb) {
  const reader = new FileReader();
  reader.onload = e => {
    const img = new Image();
    img.onload = () => {
      // 고화질: 최대 3000px, JPEG 95% 품질
      const MAX = 3000;
      const ratio = Math.min(MAX/img.width, MAX/img.height, 1);
      const canvas = document.createElement('canvas');
      canvas.width  = Math.round(img.width  * ratio);
      canvas.height = Math.round(img.height * ratio);
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      cb(canvas.toDataURL('image/jpeg', 0.95));
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function GuestbookTab({ lime, ink }) {
  const [messages, setMessages] = React.useState(gbLoad);
  const [name, setName]       = React.useState('');
  const [text, setText]       = React.useState('');
  const [photo, setPhoto]     = React.useState(null);
  const [sending, setSending] = React.useState(false);
  const [done, setDone]       = React.useState(false);
  const fileRef = React.useRef(null);

  const handlePhoto = e => {
    const f = e.target.files[0];
    if (!f) return;
    compressImage(f, url => setPhoto(url));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    setSending(true);
    setTimeout(() => {
      const newMsg = {
        id: Date.now(),
        name: name.trim(),
        text: text.trim(),
        photo,
        ts: new Date().toLocaleDateString('ko-KR', { year:'numeric', month:'long', day:'numeric' }),
      };
      const updated = [newMsg, ...messages];
      setMessages(updated);
      gbSave(updated);
      setName(''); setText(''); setPhoto(null);
      setSending(false);
      setDone(true);
      setTimeout(() => setDone(false), 2500);
    }, 600);
  };

  const initials = n => n.trim().slice(0,1).toUpperCase() || '?';
  const colors = ['#D4E607','#111','#FFB7C5','#3B6CFF','#F5E64B','#1F8A5B'];

  return (
    <div style={{ background:'#FAFAFA' }}>
      {/* hero */}
      <div style={{ background:'#fff', padding:'28px 20px 20px', textAlign:'center', borderBottom:'1px solid rgba(17,17,17,0.08)' }}>
        <div style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:28, fontWeight:400, color:ink, lineHeight:1, marginBottom:8 }}>
          축하 메시지를<br/>남겨주세요
        </div>
        <div style={{ fontFamily:"'Pretendard',sans-serif", fontSize:13, color:'#666', lineHeight:1.6 }}>
          해성과 채원에게 전하고 싶은 말,<br/>사진과 함께 남겨주세요.
        </div>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit} style={{ background:'#fff', margin:'8px 0', padding:'20px' }}>
        <div style={{ marginBottom:14 }}>
          <div style={{ fontFamily:"'Pretendard',sans-serif", fontSize:11, fontWeight:600, letterSpacing:'0.12em', color:'#888', marginBottom:6, textTransform:'uppercase' }}>이름</div>
          <input value={name} onChange={e=>setName(e.target.value)}
            placeholder="홍길동"
            required
            style={{
              width:'100%', padding:'12px 14px', border:'1px solid rgba(17,17,17,0.18)',
              borderRadius:10, fontFamily:"'Pretendard',sans-serif", fontSize:15,
              outline:'none', background:'#FAFAFA',
            }}/>
        </div>
        <div style={{ marginBottom:14 }}>
          <div style={{ fontFamily:"'Pretendard',sans-serif", fontSize:11, fontWeight:600, letterSpacing:'0.12em', color:'#888', marginBottom:6, textTransform:'uppercase' }}>메시지</div>
          <textarea value={text} onChange={e=>setText(e.target.value)}
            placeholder="두 분의 행복한 앞날을 응원합니다!"
            required rows={4}
            style={{
              width:'100%', padding:'12px 14px', border:'1px solid rgba(17,17,17,0.18)',
              borderRadius:10, fontFamily:"'Pretendard',sans-serif", fontSize:14,
              outline:'none', resize:'none', background:'#FAFAFA', lineHeight:1.6,
            }}/>
        </div>

        {/* photo upload */}
        <div style={{ marginBottom:18 }}>
          <div style={{ fontFamily:"'Pretendard',sans-serif", fontSize:11, fontWeight:600, letterSpacing:'0.12em', color:'#888', marginBottom:8, textTransform:'uppercase' }}>사진 (선택)</div>
          <input ref={fileRef} type="file" accept="image/*" capture="environment" onChange={handlePhoto} style={{ display:'none' }}/>
          {photo ? (
            <div style={{ display:'flex', gap:8, alignItems:'flex-start' }}>
              <div style={{ position:'relative' }}>
                <img src={photo} alt="preview" style={{ width:90, height:90, objectFit:'cover', borderRadius:12, border:'1px solid rgba(17,17,17,0.10)' }}/>
                <button type="button" onClick={() => setPhoto(null)}
                  style={{ position:'absolute', top:-6, right:-6, width:22, height:22, borderRadius:'50%', background:ink, color:'#fff', border:'none', cursor:'pointer', fontSize:13, display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, lineHeight:1 }}>×</button>
              </div>
              <button type="button" onClick={() => fileRef.current?.click()}
                style={{ padding:'8px 14px', border:`1.5px solid rgba(17,17,17,0.18)`, borderRadius:10, background:'none', cursor:'pointer', fontFamily:"'Pretendard',sans-serif", fontSize:12, color:'#555', alignSelf:'center' }}>
                변경
              </button>
            </div>
          ) : (
            <button type="button" onClick={() => fileRef.current?.click()}
              style={{ width:'100%', padding:'16px', border:`1.5px dashed rgba(17,17,17,0.20)`, borderRadius:12, background:'#FAFAFA', cursor:'pointer', fontFamily:"'Pretendard',sans-serif", fontSize:13, color:'#666', display:'flex', flexDirection:'column', alignItems:'center', gap:8 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <path d="m21 15-5-5L5 21"/>
              </svg>
              <span>사진 선택하기</span>
              <span style={{ fontSize:11, color:'#aaa' }}>갤러리 또는 카메라</span>
            </button>
          )}
        </div>

        <button type="submit" disabled={sending}
          style={{
            width:'100%', padding:'15px 0', borderRadius:99, border:'none',
            background: done ? '#1F8A5B' : ink, color: done ? '#fff' : lime,
            fontFamily:"'Pretendard',sans-serif", fontWeight:700, fontSize:13,
            letterSpacing:'0.15em', cursor: sending ? 'not-allowed' : 'pointer',
            transition:'all .3s',
          }}>
          {done ? '전달되었습니다 ✓' : sending ? '전송 중...' : '메시지 보내기 →'}
        </button>
      </form>

      {/* message list */}
      {messages.length > 0 && (
        <div>
          <div style={{ padding:'16px 20px 8px', fontFamily:"'Pretendard',sans-serif", fontSize:11, fontWeight:600, letterSpacing:'0.14em', color:'#999', textTransform:'uppercase' }}>
            {messages.length}개의 메시지
          </div>
          {messages.map((msg, i) => (
            <div key={msg.id} style={{ background:'#fff', margin:'0 0 2px', padding:'16px 20px', borderBottom:'1px solid rgba(17,17,17,0.06)' }}>
              <div style={{ display:'flex', alignItems:'flex-start', gap:12 }}>
                <div style={{
                  width:38, height:38, borderRadius:'50%', flexShrink:0,
                  background: colors[i % colors.length], color: [1].includes(i % colors.length) ? lime : ink,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontFamily:"'Bricolage Grotesque',sans-serif", fontWeight:700, fontSize:16,
                }}>{initials(msg.name)}</div>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ display:'flex', alignItems:'baseline', gap:8, marginBottom:4 }}>
                    <span style={{ fontFamily:"'Pretendard',sans-serif", fontWeight:700, fontSize:14, color:ink }}>{msg.name}</span>
                    <span style={{ fontFamily:"'Pretendard',sans-serif", fontSize:11, color:'#aaa' }}>{msg.ts}</span>
                  </div>
                  <div style={{ fontFamily:"'Pretendard',sans-serif", fontSize:14, color:'#222', lineHeight:1.65 }}>{msg.text}</div>
                  {msg.photo && (
                    <img src={msg.photo} alt="" style={{ marginTop:10, width:120, height:120, objectFit:'cover', borderRadius:8, border:'1px solid rgba(17,17,17,0.08)' }}/>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {messages.length === 0 && (
        <div style={{ padding:'48px 20px', textAlign:'center', color:'#bbb', fontFamily:"'Pretendard',sans-serif", fontSize:14 }}>
          아직 메시지가 없어요.<br/>첫 번째로 남겨주세요!
        </div>
      )}

      <div style={{ height:80 }}/>
    </div>
  );
}

/* ─── Main Screen ───────────────────────────────────────────── */
function MemoriesScreen({ goTo, tweaks }) {
  const lime = tweaks.lime;
  const ink  = tweaks.ink;
  const [tab, setTab] = React.useState('grid');
  const screenRef = React.useRef(null);

  const posts = [
    { id:'mem-1', date:'2019. 09. 14', likes:'1,914', photoCount:1, caption:'처음 만난 날. 그 날의 설렘이 오늘까지 이어졌어.' },
    { id:'mem-2', date:'2020. 02. 14', likes:'2,048', photoCount:3, caption:'첫 발렌타인. 작은 초콜릿 하나에도 두근거렸던 날.' },
    { id:'mem-3', date:'2021. 07. 24', likes:'3,201', photoCount:2, caption:'처음으로 떠난 여행. 바다보다 네가 더 빛났어.' },
    { id:'mem-4', date:'2022. 12. 31', likes:'4,096', photoCount:1, caption:'연말, 우리만의 자정. 새해가 되어도 계속 이 손 잡을게.' },
    { id:'mem-5', date:'2024. 03. 22', likes:'5,120', photoCount:4, caption:'벚꽃 아래 함께한 오후. 매년 이 자리에 오자.' },
    { id:'mem-6', date:'2026. 09. 12', likes:'9,126', photoCount:3, caption:'오늘, 드디어 하나가 됩니다. 앞으로의 모든 날도 함께.' },
  ];

  const interests = [
    { id:'int-1', label:'여행',   sub:'Travel'   },
    { id:'int-2', label:'음악',   sub:'Music'    },
    { id:'int-3', label:'카페',   sub:'Café'     },
    { id:'int-4', label:'영화',   sub:'Film'     },
    { id:'int-5', label:'자연',   sub:'Nature'   },
    { id:'int-6', label:'음식',   sub:'Food'     },
  ];

  const openPostInFeed = id => {
    setTab('feed');
    setTimeout(() => {
      const screen = screenRef.current;
      const el = document.getElementById('post-' + id);
      if (screen && el) screen.scrollTop = el.offsetTop - 60;
    }, 80);
  };

  const TABS = [
    { key:'grid',    Icon: TabIconGrid    },
    { key:'feed',    Icon: TabIconFeed    },
    { key:'repost',  Icon: TabIconRepost  },
    { key:'mention', Icon: TabIconMention },
  ];

  return (
    <div className="inv-screen" data-screen-label="02 Memories · 우리의 추억" ref={screenRef}>

      {/* ── topbar ─────────────────────────────────────── */}
      <div style={{
        position:'sticky', top:0, zIndex:20,
        background:'#fff', borderBottom:'1px solid rgba(17,17,17,0.10)',
        padding:'14px 16px 12px',
        display:'flex', alignItems:'center', justifyContent:'space-between',
      }}>
        <button onClick={() => goTo('main')} className="tap"
          style={{ background:'transparent', border:'none', cursor:'pointer', display:'flex', alignItems:'center', gap:6, padding:0, color:ink, fontFamily:"'Pretendard',sans-serif", fontWeight:600, fontSize:11, letterSpacing:'0.16em' }}>
          <span style={{ fontSize:18, lineHeight:1 }}>←</span> MAIN
        </button>
        <div style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontWeight:600, fontSize:17, color:ink, letterSpacing:'-0.02em' }}>haeseong_chaewon</div>
        <div style={{ width:48 }}/>
      </div>

      {/* ── profile header ─────────────────────────────── */}
      <div style={{ background:'#fff', padding:'20px 16px 0' }}>
        <div style={{ display:'flex', alignItems:'center', gap:20 }}>
          {/* avatar ring */}
          <div style={{ padding:2.5, borderRadius:'50%', background:`linear-gradient(135deg,${lime},${ink})`, flexShrink:0 }}>
            <div style={{ width:72, height:72, borderRadius:'50%', background:lime, color:ink, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:"'Bricolage Grotesque',sans-serif", fontWeight:700, fontSize:18, border:'3px solid #fff' }}>H&C</div>
          </div>
          {/* stats */}
          <div style={{ display:'flex', flex:1, justifyContent:'space-around' }}>
            {[{ n:posts.length, l:'게시물' }, { n:'∞', l:'함께한 날' }, { n:'1', l:'영원히' }].map((s,i) => (
              <div key={i} style={{ textAlign:'center' }}>
                <div style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontWeight:700, fontSize:19, color:ink, lineHeight:1 }}>{s.n}</div>
                <div style={{ fontFamily:"'Pretendard',sans-serif", fontSize:11, color:'#666', marginTop:3 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        {/* bio */}
        <div style={{ marginTop:14, marginBottom:14 }}>
          <div style={{ fontFamily:"'Pretendard',sans-serif", fontWeight:700, fontSize:14, color:ink }}>해성 ♡ 채원</div>
          <div style={{ fontFamily:"'Pretendard',sans-serif", fontSize:13, color:'#333', lineHeight:1.6, marginTop:2 }}>
            2019.09.14 — 2026.09.12<br/>두 사람의 이야기가 하나가 되는 날
          </div>
        </div>
        {/* highlights */}
        <div style={{ display:'flex', gap:12, overflowX:'auto', paddingBottom:14 }}>
          {['첫 만남','여행','일상','특별한 날'].map((label, i) => (
            <div key={i} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:5, flexShrink:0 }}>
              <div style={{ width:56, height:56, borderRadius:'50%', background: i===0 ? lime : '#F4F2EB', border: i===0 ? `2px solid ${ink}` : '1.5px solid rgba(17,17,17,0.14)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:"'Bricolage Grotesque',sans-serif", fontWeight:600, fontSize:20, color: i===0 ? ink : '#888' }}>+</div>
              <div style={{ fontFamily:"'Pretendard',sans-serif", fontSize:10, color:'#444', whiteSpace:'nowrap' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 4-tab nav ──────────────────────────────────── */}
      <div style={{ position:'sticky', top:52, zIndex:10, background:'#fff', display:'flex', borderTop:'1px solid rgba(17,17,17,0.09)', borderBottom:'1px solid rgba(17,17,17,0.09)' }}>
        {TABS.map(({ key, Icon }) => (
          <button key={key} onClick={() => setTab(key)} className="tap"
            style={{ flex:1, padding:'12px 0', background:'none', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', borderBottom: tab===key ? `2px solid ${ink}` : '2px solid transparent', transition:'border-color .15s' }}>
            <Icon active={tab===key} ink={ink}/>
          </button>
        ))}
      </div>

      {/* ── GRID (4:5) ─────────────────────────────────── */}
      {tab === 'grid' && (
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:2, background:'#ddd' }}>
          {posts.map((p, i) => (
            <button key={p.id} onClick={() => openPostInFeed(p.id)} className="tap"
              style={{ padding:0, border:'none', cursor:'pointer', aspectRatio:'4/5', background:'#F4F2EB', position:'relative', overflow:'hidden' }}>
              <image-slot id={`${p.id}-p0`} shape="rect" fit="cover" placeholder="탭하여 추가"
                style={{ width:'100%', height:'100%', display:'block', pointerEvents:'none' }}></image-slot>
              {p.photoCount > 1 && <CarouselBadge/>}
              <div style={{ position:'absolute', bottom:5, right:6, fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:9, fontWeight:700, color:'rgba(255,255,255,0.9)', textShadow:'0 1px 3px rgba(0,0,0,0.5)' }}>
                {String(i+1).padStart(2,'0')}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* ── FEED ───────────────────────────────────────── */}
      {tab === 'feed' && (
        <div style={{ background:'#FAFAFA' }}>
          {posts.map(p => <MemoryPost key={p.id} lime={lime} ink={ink} {...p}/>)}
          <div style={{ background:lime, padding:'40px 24px 80px', textAlign:'center' }}>
            <div style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:28, fontWeight:400, color:ink, lineHeight:1, marginBottom:16 }}>TO BE<br/>CONTINUED</div>
          </div>
        </div>
      )}

      {/* ── REPOST / 관심사 ────────────────────────────── */}
      {tab === 'repost' && (
        <div>
          <div style={{ background:'#fff', padding:'18px 16px 12px', borderBottom:'1px solid rgba(17,17,17,0.08)' }}>
            <div style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:22, fontWeight:400, color:ink, letterSpacing:'-0.01em' }}>우리의 관심사</div>
            <div style={{ fontFamily:"'Pretendard',sans-serif", fontSize:13, color:'#666', marginTop:4 }}>두 사람이 함께 좋아하는 것들</div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:2, background:'#ddd' }}>
            {interests.map((it, i) => (
              <div key={it.id} style={{ aspectRatio:'4/5', background:'#F4F2EB', position:'relative', overflow:'hidden' }}>
                <image-slot id={it.id} shape="rect" fit="cover" placeholder="탭하여 추가"
                  style={{ width:'100%', height:'100%', display:'block' }}></image-slot>
                {/* repost badge */}
                <div style={{ position:'absolute', top:6, right:6, width:18, height:18, borderRadius:'50%', background:'rgba(255,255,255,0.88)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="1,4 1,10 7,10"/>
                    <polyline points="23,20 23,14 17,14"/>
                    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10"/>
                    <path d="M3.51 15A9 9 0 0 0 18.36 18.36L23 14"/>
                  </svg>
                </div>
                {/* label */}
                <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'20px 8px 8px', background:'linear-gradient(transparent, rgba(0,0,0,0.52))', textAlign:'center' }}>
                  <div style={{ fontFamily:"'Pretendard',sans-serif", fontWeight:700, fontSize:13, color:'#fff' }}>{it.label}</div>
                  <div style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:9, color:'rgba(255,255,255,0.7)', letterSpacing:'0.1em', textTransform:'uppercase' }}>{it.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ height:60 }}/>
        </div>
      )}

      {/* ── MENTION / 게스트북 ─────────────────────────── */}
      {tab === 'mention' && <GuestbookTab lime={lime} ink={ink}/>}

    </div>
  );
}

Object.assign(window, { MemoriesScreen, MemoryPost, PhotoCarousel, CarouselBadge, GuestbookTab,
  HeartIcon, CommentIcon, SendIcon,
  TabIconGrid, TabIconFeed, TabIconRepost, TabIconMention });
