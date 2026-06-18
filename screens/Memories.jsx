/* MEMORIES — 4-tab Instagram-style profile · chaewon_and_haeseong */

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
      <rect x="2" y="2" width="20" height="20" rx="3"/>
      <line x1="2" y1="8" x2="22" y2="8"/>
      <line x1="8" y1="2" x2="8" y2="8"/>
      <line x1="16" y1="2" x2="16" y2="8"/>
      <polygon points="9.5,12 9.5,18.5 17,15.5" fill={c} stroke="none"/>
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
function PhotoCarousel({ postId, photoCount, images = [] }) {
  const [slide, setSlide] = React.useState(0);
  const [dragDx, setDragDx] = React.useState(0);
  const trackRef = React.useRef(null);
  const startX = React.useRef(0);
  const startY = React.useRef(0);
  const dir = React.useRef(null);   // 'x' | 'y' | null — 첫 제스처 방향 잠금
  const widthRef = React.useRef(0);

  const goTo = i => setSlide(Math.max(0, Math.min(photoCount - 1, i)));

  // 세로 스와이프는 touch-action:pan-y 로 브라우저가 페이지 스크롤을 처리하고,
  // 가로 스와이프만 JS가 처리해 슬라이드를 넘긴다. (네이티브 가로 스크롤 컨테이너가
  // iOS에서 세로 스크롤을 가로채던 문제를 근본적으로 제거)
  const onTouchStart = e => {
    if (photoCount < 2) return;
    const t = e.touches[0];
    startX.current = t.clientX;
    startY.current = t.clientY;
    dir.current = null;
    widthRef.current = trackRef.current ? trackRef.current.clientWidth : 0;
  };
  const onTouchMove = e => {
    if (photoCount < 2) return;
    const t = e.touches[0];
    const dx = t.clientX - startX.current;
    const dy = t.clientY - startY.current;
    if (dir.current === null && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
      dir.current = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
    }
    if (dir.current === 'x') {
      // 양 끝에서는 저항감을 주어 더 못 넘어가게 함
      let d = dx;
      if ((slide === 0 && dx > 0) || (slide === photoCount - 1 && dx < 0)) d = dx * 0.35;
      setDragDx(d);
    }
    // dir === 'y' 이면 손대지 않음 → 브라우저가 세로 페이지 스크롤을 그대로 처리
  };
  const onTouchEnd = () => {
    if (photoCount < 2) return;
    if (dir.current === 'x') {
      const w = widthRef.current || 1;
      const threshold = Math.max(40, w * 0.2);
      if (dragDx <= -threshold) goTo(slide + 1);
      else if (dragDx >= threshold) goTo(slide - 1);
    }
    dir.current = null;
    setDragDx(0);
  };

  // 마우스 드래그 (PC) — touch 이벤트와 중복 방지를 위해 pointerType 체크
  const onPointerDown = e => {
    if (e.pointerType === 'touch' || photoCount < 2) return;
    startX.current = e.clientX;
    dir.current = 'x';
    widthRef.current = e.currentTarget.clientWidth;
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = e => {
    if (e.pointerType === 'touch' || dir.current !== 'x') return;
    const dx = e.clientX - startX.current;
    let d = dx;
    if ((slide === 0 && dx > 0) || (slide === photoCount - 1 && dx < 0)) d = dx * 0.35;
    setDragDx(d);
  };
  const onPointerUp = e => {
    if (e.pointerType === 'touch' || dir.current !== 'x') return;
    dir.current = null;
    const dx = e.clientX - startX.current;
    const w = widthRef.current || 1;
    const threshold = Math.max(40, w * 0.2);
    if (dx <= -threshold) goTo(slide + 1);
    else if (dx >= threshold) goTo(slide - 1);
    setDragDx(0);
  };

  // 이미지가 있으면 원본 비율, 없으면 4:5 플레이스홀더
  const hasPreset = images.length > 0 && images.some(Boolean);

  return (
    <div style={{ position:'relative' }}>
      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={{
          position:'relative', width:'100%',
          ...(hasPreset ? {} : { aspectRatio:'4/5' }),
          overflow:'hidden', background:'#F4F2EB',
          cursor: photoCount > 1 ? 'grab' : 'default',
        }}>
        <div ref={trackRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onTouchCancel={onTouchEnd}
          className="carousel-strip"
          style={{
            ...(hasPreset
              ? { position:'relative', width:'100%' }
              : { position:'absolute', inset:0 }),
            display:'flex',
            touchAction:'pan-y',
            transform:`translateX(calc(${-slide * 100}% + ${dragDx}px))`,
            transition: dragDx === 0 ? 'transform .35s cubic-bezier(.32,.72,0,1)' : 'none',
            willChange:'transform',
          }}>
          {Array.from({ length: photoCount }, (_, i) => (
            <div key={i} style={{
              ...(hasPreset
                ? { flex:'0 0 100%', minWidth:0 }
                : { minWidth:'100%', height:'100%' }),
              flexShrink:0,
              overflow:'hidden',
            }}>
              {images[i] ? (
                <img src={images[i]} alt="" loading="lazy" decoding="async"
                  draggable={false}
                  style={{ width:'100%', height:'auto', display:'block' }} />
              ) : (
                <image-slot
                  id={`${postId}-p${i}`}
                  shape="rect" fit="cover"
                  placeholder="탭하여 사진 추가"
                  style={{ width:'100%', height:'100%', display:'block' }}
                ></image-slot>
              )}
            </div>
          ))}
        </div>

        {photoCount > 1 && (
          <div style={{
            position:'absolute', top:10, right:10, zIndex:5,
            background:'rgba(0,0,0,0.55)', color:'#fff',
            padding:'3px 9px', borderRadius:99,
            fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:11, fontWeight:600,
            letterSpacing:'0.04em', pointerEvents:'none',
          }}>{slide+1}/{photoCount}</div>
        )}

        {photoCount > 1 && (
          <div style={{ position:'absolute', top:10, left:10, zIndex:5, pointerEvents:'none' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="13" height="13" rx="2"/>
              <path d="M17 6h3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-3"/>
            </svg>
          </div>
        )}
      </div>

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
function MemoryPost({ id, date, caption, likes, photoCount = 1, images = [], lime, ink }) {
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
          <div style={{ fontFamily:"'Pretendard',sans-serif", fontWeight:700, fontSize:13, color:ink }}>chaewon_and_haeseong</div>
          <div style={{ fontFamily:"'Pretendard',sans-serif", fontSize:11, color:'#888', marginTop:1 }}>{date}</div>
        </div>
        <div style={{ fontSize:18, color:'#888', letterSpacing:'0.08em' }}>···</div>
      </div>

      {/* photo carousel */}
      <PhotoCarousel postId={id} photoCount={photoCount} images={images}/>

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
        <span style={{ fontWeight:700, marginRight:6, color:ink }}>chaewon_and_haeseong</span>{caption}
      </div>
    </div>
  );
}

/* ─── Following Sheet ──────────────────────────────────────── */
function FollowingSheet({ open, onClose, lime, ink, onOpenMap, onOpenAccount, onOpenCalendar }) {
  const [dragY, setDragY] = React.useState(0);
  const [closing, setClosing] = React.useState(false);
  const [toast, setToast] = React.useState('');
  const drag = React.useRef({ active: false, startY: 0, startTime: 0, delta: 0 });

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 2200);
  };

  const startDrag = (y) => {
    drag.current = { active: true, startY: y, startTime: Date.now(), delta: 0 };
  };
  const updateDrag = (y) => {
    if (!drag.current.active) return;
    const delta = y - drag.current.startY;
    if (delta > 0) { drag.current.delta = delta; setDragY(delta); }
  };
  const commitDrag = () => {
    if (!drag.current.active) return;
    drag.current.active = false;
    const elapsed = Math.max(1, Date.now() - drag.current.startTime);
    const delta = drag.current.delta;
    drag.current.delta = 0;
    if (delta > 80 || delta / elapsed > 0.45) {
      setClosing(true);
      setDragY(700);
      setTimeout(() => { setDragY(0); setClosing(false); onClose(); }, 300);
    } else {
      setDragY(0);
    }
  };
  const attachMouse = (e) => {
    startDrag(e.clientY);
    const mm = ev => updateDrag(ev.clientY);
    const mu = () => { commitDrag(); window.removeEventListener('mousemove', mm); window.removeEventListener('mouseup', mu); };
    window.addEventListener('mousemove', mm);
    window.addEventListener('mouseup', mu);
  };

  if (!open) return null;

  const items = [
    { label: '친한 친구 리스트에 추가', icon: 'star-filled', action: () => showToast('이미 친한 친구잖아요 😄') },
    { label: '결혼식 캘린더에 저장',    icon: 'star-empty',  action: () => onOpenCalendar() },
    { label: '오시는 길 보기',          icon: 'chevron',     action: () => onOpenMap() },
    { label: '팔로우 취소',             red: true,           action: () => showToast('그럴 수는 없어요 💍') },
  ];

  return (
    <>
      <div className="scrim" onClick={onClose}
        style={{ display: 'flex', alignItems: 'flex-end', zIndex: 110 }}>
        <div
          onClick={e => e.stopPropagation()}
          style={{
            width: '100%',
            background: '#fff',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            animation: 'sheet-in 280ms cubic-bezier(.32,.72,0,1) both',
            transform: `translateY(${dragY}px)`,
            transition: (!closing && dragY > 0) ? 'none' : 'transform 300ms cubic-bezier(.32,.72,0,1)',
          }}>
          {/* drag handle */}
          <div
            onTouchStart={e => startDrag(e.touches[0].clientY)}
            onTouchMove={e => updateDrag(e.touches[0].clientY)}
            onTouchEnd={commitDrag}
            onTouchCancel={commitDrag}
            onMouseDown={attachMouse}
            style={{ padding: '12px 0 22px', display: 'flex', justifyContent: 'center', cursor: 'grab', touchAction: 'none', userSelect: 'none' }}>
            <div style={{ width: 36, height: 4, borderRadius: 99, background: 'rgba(0,0,0,0.18)' }}/>
          </div>
          {/* username */}
          <div style={{
            textAlign: 'center', padding: '10px 0 16px',
            fontFamily: "'Pretendard', sans-serif", fontWeight: 700, fontSize: 15, color: '#111',
          }}>
            chaewon_and_haeseong
          </div>
          {/* items */}
          {items.map((item, i) => (
            <React.Fragment key={i}>
              <button onClick={item.action} className="tap" style={{
                width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '16px 20px',
                fontFamily: "'Pretendard', sans-serif", fontSize: 16,
                color: item.red ? '#E0345A' : '#111', textAlign: 'left',
              }}>
                <span>{item.label}</span>
                {item.icon === 'star-filled' && (
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(17,17,17,0.09)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="#111" stroke="none">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                    </svg>
                  </div>
                )}
                {item.icon === 'star-empty' && (
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(17,17,17,0.09)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.8" strokeLinejoin="round">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                    </svg>
                  </div>
                )}
                {item.icon === 'chevron' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0C0C0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9,18 15,12 9,6"/>
                  </svg>
                )}
              </button>
              {i < items.length - 1 && (
                <div style={{ height: 1, background: 'rgba(17,17,17,0.09)' }}/>
              )}
            </React.Fragment>
          ))}
          <div style={{ height: 28 }}/>
        </div>
      </div>
      {toast && (
        <div style={{
          position: 'absolute', bottom: 90, left: '50%', transform: 'translateX(-50%)',
          background: 'rgba(17,17,17,0.88)', color: '#fff',
          padding: '10px 20px', borderRadius: 99,
          fontFamily: "'Pretendard', sans-serif", fontSize: 13, fontWeight: 500,
          whiteSpace: 'nowrap', zIndex: 200, pointerEvents: 'none',
        }}>{toast}</div>
      )}
    </>
  );
}

/* ─── Guestbook ─────────────────────────────────────────────── */
const GB_KEY         = 'hc-guestbook-2026';
const GB_DELETED_KEY = 'hc-guestbook-deleted-2026';
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxFJvwTmwBzxQLx9CUYMQABj3Ivj2HBzpvj8c-uQl38amKC6qf79rqkxdAv4XdHyLsq/exec';
function gbLoad() {
  try { return JSON.parse(localStorage.getItem(GB_KEY)) || []; }
  catch { return []; }
}
function gbSave(msgs) {
  try { localStorage.setItem(GB_KEY, JSON.stringify(msgs)); } catch {}
}
function getDeletedIds() {
  try { return new Set(JSON.parse(localStorage.getItem(GB_DELETED_KEY)) || []); }
  catch { return new Set(); }
}
function addDeletedId(id) {
  try {
    const ids = getDeletedIds();
    ids.add(id);
    localStorage.setItem(GB_DELETED_KEY, JSON.stringify([...ids]));
  } catch {}
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
  const [name, setName]         = React.useState('');
  const [text, setText]         = React.useState('');
  const [pw, setPw]             = React.useState('');
  const [photo, setPhoto]       = React.useState(null);
  const [sending, setSending]   = React.useState(false);
  const [done, setDone]         = React.useState(false);
  const [managingId, setManagingId]   = React.useState(null);
  const [manageInput, setManageInput] = React.useState('');
  const [manageError, setManageError] = React.useState(false);
  const [editingId, setEditingId]     = React.useState(null);
  const [editText, setEditText]       = React.useState('');
  const fileRef = React.useRef(null);

  React.useEffect(() => {
    fetch(`${SCRIPT_URL}?action=list`)
      .then(r => r.json())
      .then(sheetsData => {
        const localData = gbLoad();
        const localMap  = Object.fromEntries(localData.map(m => [Number(m.id), m]));
        const deleted   = getDeletedIds();
        const merged = sheetsData
          .filter(sm => !deleted.has(sm.id))
          .map(sm => ({
            ...sm,
            pw:    localMap[sm.id]?.pw    || '',
            photo: localMap[sm.id]?.photo || null,
          }));
        setMessages(merged);
        gbSave(merged);
      })
      .catch(() => {});
  }, []);

  const handlePhoto = e => {
    const f = e.target.files[0];
    if (!f) return;
    compressImage(f, url => setPhoto(url));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    setSending(true);
    const ts = new Date().toLocaleDateString('ko-KR', { year:'numeric', month:'long', day:'numeric' });
    const newMsg = { id: Date.now(), name: name.trim(), text: text.trim(), pw: pw.trim(), photo, ts };
    const params = new URLSearchParams({ id: newMsg.id, name: newMsg.name, text: newMsg.text, ts, hasPhoto: !!photo });
    fetch(`${SCRIPT_URL}?${params}`, { mode: 'no-cors' }).catch(() => {});
    const updated = [newMsg, ...messages];
    setMessages(updated);
    gbSave(updated);
    setName(''); setText(''); setPw(''); setPhoto(null);
    setSending(false);
    setDone(true);
    setTimeout(() => setDone(false), 2500);
  };

  const closeManage = () => { setManagingId(null); setManageInput(''); setManageError(false); };

  const handleManageConfirm = (msg) => {
    if (manageInput === msg.pw) {
      setManageError(false);
      setEditingId(msg.id);
      setEditText(msg.text);
      setManagingId(null);
      setManageInput('');
    } else {
      setManageError(true);
    }
  };

  const handleEditSave = (msg) => {
    if (!editText.trim()) return;
    const updated = messages.map(m => m.id === msg.id ? { ...m, text: editText.trim() } : m);
    setMessages(updated);
    gbSave(updated);
    setEditingId(null);
    setEditText('');
  };

  const handleDelete = (msg) => {
    addDeletedId(msg.id);
    const updated = messages.filter(m => m.id !== msg.id);
    setMessages(updated);
    gbSave(updated);
    setEditingId(null);
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
            placeholder="김서연"
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
                <img src={photo} alt="preview" loading="lazy" decoding="async" style={{ width:90, height:90, objectFit:'cover', borderRadius:12, border:'1px solid rgba(17,17,17,0.10)' }}/>
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

        <div style={{ marginBottom:18 }}>
          <div style={{ fontFamily:"'Pretendard',sans-serif", fontSize:11, fontWeight:600, letterSpacing:'0.12em', color:'#888', marginBottom:6, textTransform:'uppercase' }}>비밀번호</div>
          <input value={pw} onChange={e=>setPw(e.target.value)}
            type="password" placeholder="삭제·수정할 때 사용해요" required
            style={{
              width:'100%', padding:'12px 14px', border:'1px solid rgba(17,17,17,0.18)',
              borderRadius:10, fontFamily:"'Pretendard',sans-serif", fontSize:15,
              outline:'none', background:'#FAFAFA',
            }}/>
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
                  <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:4 }}>
                    <span style={{ fontFamily:"'Pretendard',sans-serif", fontWeight:700, fontSize:14, color:ink }}>{msg.name}</span>
                    <span style={{ fontFamily:"'Pretendard',sans-serif", fontSize:11, color:'#aaa' }}>{msg.ts}</span>
                    <button onClick={() => { setManagingId(msg.id); setManageInput(''); setManageError(false); setEditingId(null); }}
                      style={{ marginLeft:'auto', background:'none', border:'none', cursor:'pointer', color:'#ccc', fontFamily:"'Pretendard',sans-serif", fontSize:12, padding:0, flexShrink:0 }}>
                      수정·삭제
                    </button>
                  </div>

                  {/* 비밀번호 확인 */}
                  {managingId === msg.id && (
                    <div style={{ marginBottom:10 }}>
                      <div style={{ display:'flex', gap:6, alignItems:'center' }}>
                        <input value={manageInput}
                          onChange={e => { setManageInput(e.target.value); setManageError(false); }}
                          onKeyDown={e => e.key === 'Enter' && handleManageConfirm(msg)}
                          type="password" placeholder="비밀번호 입력"
                          autoFocus
                          style={{ flex:1, padding:'8px 12px', border:`1px solid ${manageError ? '#E0345A' : 'rgba(17,17,17,0.18)'}`, borderRadius:8, fontFamily:"'Pretendard',sans-serif", fontSize:13, outline:'none' }}/>
                        <button onClick={() => handleManageConfirm(msg)}
                          style={{ padding:'8px 12px', background:ink, color:lime, border:'none', borderRadius:8, fontFamily:"'Pretendard',sans-serif", fontSize:12, fontWeight:700, cursor:'pointer', whiteSpace:'nowrap' }}>확인</button>
                        <button onClick={closeManage}
                          style={{ padding:'8px 10px', background:'none', border:'1px solid rgba(17,17,17,0.18)', borderRadius:8, fontFamily:"'Pretendard',sans-serif", fontSize:12, cursor:'pointer', color:'#666' }}>취소</button>
                      </div>
                      {manageError && <div style={{ marginTop:5, fontFamily:"'Pretendard',sans-serif", fontSize:12, color:'#E0345A' }}>비밀번호가 맞지 않아요</div>}
                    </div>
                  )}

                  {/* 수정 모드 */}
                  {editingId === msg.id ? (
                    <div>
                      <textarea value={editText} onChange={e => setEditText(e.target.value)}
                        rows={3}
                        style={{ width:'100%', padding:'10px 12px', border:'1px solid rgba(17,17,17,0.18)', borderRadius:8, fontFamily:"'Pretendard',sans-serif", fontSize:14, outline:'none', resize:'none', lineHeight:1.6 }}/>
                      <div style={{ display:'flex', gap:6, marginTop:6 }}>
                        <button onClick={() => handleEditSave(msg)}
                          style={{ flex:1, padding:'9px 0', background:ink, color:lime, border:'none', borderRadius:8, fontFamily:"'Pretendard',sans-serif", fontSize:12, fontWeight:700, cursor:'pointer' }}>저장</button>
                        <button onClick={() => handleDelete(msg)}
                          style={{ padding:'9px 14px', background:'none', border:'1px solid #E0345A', borderRadius:8, fontFamily:"'Pretendard',sans-serif", fontSize:12, color:'#E0345A', cursor:'pointer' }}>삭제</button>
                        <button onClick={() => setEditingId(null)}
                          style={{ padding:'9px 14px', background:'none', border:'1px solid rgba(17,17,17,0.18)', borderRadius:8, fontFamily:"'Pretendard',sans-serif", fontSize:12, color:'#666', cursor:'pointer' }}>취소</button>
                      </div>
                    </div>
                  ) : (
                    <div style={{ fontFamily:"'Pretendard',sans-serif", fontSize:14, color:'#222', lineHeight:1.65 }}>{msg.text}</div>
                  )}

                  {msg.photo && (
                    <img src={msg.photo} alt="" loading="lazy" decoding="async" style={{ marginTop:10, width:120, height:120, objectFit:'cover', borderRadius:8, border:'1px solid rgba(17,17,17,0.08)' }}/>
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

/* ─── Story Viewer ─────────────────────────────────────────── */
function StoryViewer({ groups, startGroupIdx = 0, onClose }) {
  const [groupIdx, setGroupIdx] = React.useState(startGroupIdx);
  const [idx, setIdx] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const [dir, setDir] = React.useState(1);
  const timerRef = React.useRef(null);
  const touchRef = React.useRef(null);
  const DURATION = 4000;

  const images = groups[groupIdx]?.images || [];

  const goPrev = () => {
    if (idx === 0 && groupIdx === 0) return;
    cancelAnimationFrame(timerRef.current);
    setDir(-1);
    setProgress(0);
    if (idx > 0) {
      setIdx(idx - 1);
    } else {
      const prevImgs = groups[groupIdx - 1].images;
      setGroupIdx(groupIdx - 1);
      setIdx(prevImgs.length - 1);
    }
  };

  const goNext = React.useCallback(() => {
    cancelAnimationFrame(timerRef.current);
    setDir(1);
    setProgress(0);
    if (idx + 1 < images.length) {
      setIdx(idx + 1);
    } else if (groupIdx + 1 < groups.length) {
      setGroupIdx(groupIdx + 1);
      setIdx(0);
    } else {
      onClose();
    }
  }, [idx, images.length, groupIdx, groups.length, onClose]);

  React.useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, (elapsed / DURATION) * 100);
      setProgress(pct);
      if (pct < 100) { timerRef.current = requestAnimationFrame(tick); }
      else { goNext(); }
    };
    timerRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(timerRef.current);
  }, [idx, goNext]);

  const onTouchStart = (e) => {
    e.stopPropagation();
    const t = e.touches[0];
    touchRef.current = { x: t.clientX, y: t.clientY, t: Date.now() };
  };

  const onTouchMove = (e) => { e.stopPropagation(); };

  const onTouchEnd = (e) => {
    e.stopPropagation();
    if (!touchRef.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchRef.current.x;
    const dy = t.clientY - touchRef.current.y;
    const dt = Date.now() - touchRef.current.t;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    touchRef.current = null;

    // 아래로 스와이프 (세로가 가로보다 우세) → 닫기
    if (dy > 50 && absDy > absDx) {
      onClose();
      return;
    }

    // 수평 스와이프 (가로가 세로보다 우세, 40px 이상) → 그룹(하이라이트) 간 이동
    if (absDx > 40 && absDx > absDy) {
      cancelAnimationFrame(timerRef.current);
      setProgress(0);
      if (dx < 0) {
        if (groupIdx + 1 < groups.length) { setDir(1); setGroupIdx(groupIdx + 1); setIdx(0); }
        else { onClose(); }
      } else {
        if (groupIdx > 0) { setDir(-1); setGroupIdx(groupIdx - 1); setIdx(0); }
      }
      return;
    }

    // 빠른 탭 → 현재 그룹 내 이전/다음 사진
    if (absDx < 12 && absDy < 12 && dt < 280) {
      const w = e.currentTarget.getBoundingClientRect().width;
      if (t.clientX < w * 0.38) goPrev();
      else goNext();
    }
  };

  // 마우스 클릭 (PC) — 좌 38% 클릭 → 이전, 우 62% 클릭 → 다음
  const onPointerUp = e => {
    if (e.pointerType !== 'mouse') return;
    const w = e.currentTarget.getBoundingClientRect().width;
    if (e.clientX < w * 0.38) goPrev();
    else goNext();
  };

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onPointerUp={onPointerUp}
      style={{
        position:'absolute', inset:0, background:'#000', zIndex:300,
        display:'flex', flexDirection:'column', userSelect:'none',
        cursor: 'pointer', touchAction: 'none',
      }}>

      {/* progress bars */}
      <div style={{ display:'flex', gap:3, padding:'14px 10px 8px', zIndex:2 }}>
        {images.map((_, i) => (
          <div key={i} style={{ flex:1, height:2, background:'rgba(255,255,255,0.3)', borderRadius:99, overflow:'hidden' }}>
            <div style={{
              height:'100%', borderRadius:99, background:'#fff',
              width: i < idx ? '100%' : i === idx ? `${progress}%` : '0%',
              transition: i === idx ? 'none' : undefined,
            }}/>
          </div>
        ))}
      </div>

      {/* X 닫기 버튼 — touch/pointer/click 모두 상위 네비게이션 이벤트 차단 */}
      <button
        onPointerUp={e => { e.stopPropagation(); onClose(); }}
        onTouchEnd={e => { e.stopPropagation(); onClose(); }}
        onClick={e => { e.stopPropagation(); onClose(); }}
        style={{
          position:'absolute', top:14, right:12,
          width:36, height:36, borderRadius:'50%',
          background:'rgba(0,0,0,0.35)', border:'none', cursor:'pointer',
          color:'#fff', fontSize:20, zIndex:3,
          display:'flex', alignItems:'center', justifyContent:'center',
          WebkitTapHighlightColor:'transparent',
        }}>×</button>

      {/* 좌/우 탭 힌트 오버레이 (시각적 가이드, pointer-events 없음) */}
      <div style={{
        position:'absolute', top:'50%', left:16, transform:'translateY(-50%)',
        color:'rgba(255,255,255,0.25)', fontSize:22, zIndex:2, pointerEvents:'none', lineHeight:1,
      }}>‹</div>
      <div style={{
        position:'absolute', top:'50%', right:16, transform:'translateY(-50%)',
        color:'rgba(255,255,255,0.25)', fontSize:22, zIndex:2, pointerEvents:'none', lineHeight:1,
      }}>›</div>

      {/* 이미지 */}
      <div style={{ flex:1, overflow:'hidden', display:'flex', alignItems:'center' }}>
        <img key={idx} src={images[idx]} alt="" loading="lazy" decoding="async" style={{
          width:'100%', height:'100%', objectFit:'contain',
          animation: `${dir > 0 ? 'story-enter-right' : 'story-enter-left'} 220ms cubic-bezier(.25,.46,.45,.94) both`,
          pointerEvents:'none',
        }}/>
      </div>

      {/* 하단 스와이프 힌트 */}
      <div style={{
        textAlign:'center', padding:'10px 0 16px',
        color:'rgba(255,255,255,0.3)',
        fontFamily:"'Pretendard',sans-serif", fontSize:11, letterSpacing:'0.1em',
        pointerEvents:'none',
      }}>아래로 스와이프하여 닫기</div>
    </div>
  );
}

/* ─── Main Screen ───────────────────────────────────────────── */
function MemoriesScreen({ goTo, tweaks, openSheet }) {
  const lime = tweaks.lime;
  const ink  = tweaks.ink;
  const [tab, setTab] = React.useState('grid');
  const [feedActive, setFeedActive] = React.useState(false);
  const [feedScrollTo, setFeedScrollTo] = React.useState(null);
  const [story, setStory] = React.useState(null);
  const screenRef = React.useRef(null);
  const topbarRef = React.useRef(null);
  const [topbarH, setTopbarH] = React.useState(52);

  const proposeImages = Array.from({length:14}, (_,i) => `img/memories/propose-newyork/newyork-${i+1}.jpg`);

  const highlights = [
    { label: '2026', images: [] },
    { label: '2025', images: Array.from({length:11}, (_,i) => `img/highlights/2025/${i+1}.jpg`) },
    { label: '2024', images: Array.from({length:10}, (_,i) => `img/highlights/2024/${i+1}.jpg`) },
    { label: '2023', images: Array.from({length:17}, (_,i) => `img/highlights/2023/${i+1}.jpg`) },
    { label: '2022', images: Array.from({length:11}, (_,i) => `img/highlights/2022/${i+1}.jpg`) },
    {
      label: '2021',
      images: Array.from({length:11}, (_,i) => `img/highlights/2021/${i+1}.jpg`),
    },
  ];
  const validHighlights = highlights.filter(h => h.images.length > 0);

  React.useEffect(() => {
    if (topbarRef.current) setTopbarH(topbarRef.current.offsetHeight);
  }, [feedActive]);

  const posts = [
    {
      id:'mem-1', date:'2026. 09. 12', likes:'9,126', photoCount:4,
      images:[
        'img/memories/studio-couple/couple-1.jpg',
        'img/memories/studio-couple/couple-2.jpg',
        'img/memories/studio-couple/couple-3.jpg',
        'img/memories/studio-couple/couple-4.jpg',
      ],
      caption:'드디어 이 날이 왔다. 서로를 바라보는 그 눈빛만으로도, 오늘이 평생 기억될 하루라는 걸 알았어. 💍',
    },
    {
      id:'mem-2', date:'2026. 09. 12', likes:'3,862', photoCount:1, images:['img/memories/studio-groom/groom-1.jpg'],
      caption:'인생에서 가장 멋진 정장을 입은 날. 어깨에 힘 좀 줬다. 이 설렘, 절대 잊지 못할 거야. 🤵',
    },
    {
      id:'mem-3', date:'2026. 09. 12', likes:'5,204', photoCount:6,
      images:[
        'img/memories/studio-bride/bride-0.jpg',
        'img/memories/studio-bride/bride-1.jpg',
        'img/memories/studio-bride/bride-2.jpg',
        'img/memories/studio-bride/bride-3.jpg',
        'img/memories/studio-bride/bride-4.jpg',
        'img/memories/studio-bride/bride-5.jpg',
      ],
      caption:'평생 이렇게 예쁠 수 있을까. 드레스보다 눈이 더 빛났던 그 순간, 시간이 멈췄으면 했어. 👰',
    },
    {
      id:'mem-4', date:'2025. 11. 08', likes:'4,477', photoCount:1,
      images:[
        'img/memories/snap-shanghai/shanghai-1.jpg',
      ],
      caption:'상하이의 빛 아래, 너와 함께라면 어디든 영화였어. 바람도 우릴 축하해 주는 것 같았던 날. 🌆',
    },
    {
      id:'mem-5', date:'2025. 10. 18', likes:'3,991', photoCount:5,
      images:[
        'img/memories/snap-gyeongju/gyeongju-1.jpg',
        'img/memories/snap-gyeongju/gyeongju-2.jpg',
        'img/memories/snap-gyeongju/gyeongju-3.jpg',
        'img/memories/snap-gyeongju/gyeongju-4.jpg',
        'img/memories/snap-gyeongju/gyeongju-5.jpg',
      ],
      caption:'경주의 가을 빛이 우릴 감쌌던 날. 천년의 고요 속에서, 우리만의 이야기를 새겼어. 🍂',
    },
    {
      id:'mem-6', date:'2026. 09. 12', likes:'6,012', photoCount:2,
      images:[
        'img/memories/wedding-ng/ng-1.jpg',
        'img/memories/wedding-ng/ng-2.jpg',
      ],
      caption:'1. 경호원인지 신랑인지 본인도 모르는 표정으로 서 있었음 🕶️  2. 눈을 희번떡 — 작가님이 제일 많이 웃었던 컷 👁️👁️  공개 못 할 줄 알았는데 이게 더 우리답다.',
    },
  ];

  const interests = [
    { id:'int-1', label:'여행',   sub:'Travel'   },
    { id:'int-2', label:'음악',   sub:'Music'    },
    { id:'int-3', label:'카페',   sub:'Café',    src:'img/memories/repost-cafe/cafe-1.jpg'  },
    { id:'int-4', label:'영화',   sub:'Film'     },
    { id:'int-5', label:'자연',   sub:'Nature'   },
    { id:'int-6', label:'음식',   sub:'Food',    src:'img/memories/repost-food/food-1.jpg'  },
  ];

  const openPostInFeed = id => {
    setFeedScrollTo(id);
    setFeedActive(true);
    if (screenRef.current) screenRef.current.scrollTop = 0;
    setTimeout(() => {
      const screen = screenRef.current;
      const el = document.getElementById('post-' + id);
      if (screen && el) screen.scrollTop = el.offsetTop - topbarH;
    }, 60);
  };

  const backFromFeed = () => {
    setFeedActive(false);
    setFeedScrollTo(null);
    if (screenRef.current) screenRef.current.scrollTop = 0;
  };

  const TABS = [
    { key:'grid',    Icon: TabIconGrid    },
    { key:'repost',  Icon: TabIconRepost  },
    { key:'mention', Icon: TabIconMention },
  ];

  return (
    <div className="inv-screen" data-screen-label="02 Memories · 우리의 추억" data-feed-active={feedActive ? 'true' : undefined} ref={screenRef} style={{ background: '#fff' }}>
      {story && <StoryViewer groups={story.groups} startGroupIdx={story.startGroupIdx} onClose={() => setStory(null)} />}

      {/* ── topbar (grabber pill 포함) ──────────────────── */}
      <div ref={topbarRef} style={{
        position:'sticky', top:0, zIndex:20,
        background:'#fff', borderBottom:'1px solid rgba(17,17,17,0.10)',
      }}>
        {/* grabber pill — 스티키 헤더에 통합해서 스크롤 시 사진이 절대 비치지 않음 */}
        <div style={{ padding:'10px 0 4px', display:'flex', justifyContent:'center' }}>
          <div style={{ width:36, height:5, borderRadius:99, background:'rgba(17,17,17,0.28)' }}/>
        </div>
        {/* nav row */}
        {feedActive ? (
          <div style={{ padding:'4px 16px 12px', display:'flex', alignItems:'center' }}>
            <button onClick={backFromFeed} className="tap"
              style={{ background:'transparent', border:'none', cursor:'pointer', display:'flex', alignItems:'center', padding:'8px 12px 8px 4px', margin:'-8px -12px -8px -4px', color:ink }}>
              <span style={{ fontSize:24, lineHeight:1 }}>‹</span>
            </button>
            <div style={{ flex:1, textAlign:'center' }}>
              <div style={{ fontFamily:"'Pretendard',sans-serif", fontWeight:700, fontSize:15, color:ink, lineHeight:1.2 }}>게시물</div>
              <div style={{ fontFamily:"'Pretendard',sans-serif", fontSize:12, color:'#888', marginTop:1 }}>chaewon_and_haeseong</div>
            </div>
            <div style={{ width:44 }}/>
          </div>
        ) : (
          <div style={{ padding:'4px 16px 12px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <button onClick={() => goTo('main')} className="tap"
              style={{ background:'transparent', border:'none', cursor:'pointer', display:'flex', alignItems:'center', gap:6, padding:'8px 16px 8px 4px', margin:'-8px -16px -8px -4px', color:ink, fontFamily:"'Pretendard',sans-serif", fontWeight:600, fontSize:11, letterSpacing:'0.16em' }}>
              <span style={{ fontSize:18, lineHeight:1 }}>←</span> MAIN
            </button>
            <div style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontWeight:600, fontSize:17, color:ink, letterSpacing:'-0.02em' }}>chaewon_and_haeseong</div>
            <div style={{ width:48 }}/>
          </div>
        )}
      </div>

      {!feedActive && (<>
      {/* ── profile header ─────────────────────────────── */}
      <div style={{ background:'#fff', padding:'20px 16px 0' }}>
        <div style={{ display:'flex', alignItems:'center', gap:20 }}>
          {/* avatar ring — Instagram gradient story ring */}
          <button className="tap" onClick={() => setStory({ groups: [{ images: proposeImages }], startGroupIdx: 0 })} style={{ background:'none', border:'none', padding:0, cursor:'pointer', borderRadius:'50%', flexShrink:0 }}>
            <div style={{ padding:2.5, borderRadius:'50%', background:'linear-gradient(45deg,#fcaf45,#f77737,#f56040,#fd1d1d,#e1306c,#c13584,#833ab4,#5851db)' }}>
              <div style={{ padding:2.5, borderRadius:'50%', background:'#fff' }}>
                <img src="img/couple-main.jpg" alt="채원 ♥ 해성" loading="lazy" decoding="async" draggable={false}
                  className={tweaks.bw ? 'bw' : ''}
                  style={{ width:72, height:72, borderRadius:'50%', objectFit:'cover', objectPosition:'center 35%', display:'block' }} />
              </div>
            </div>
          </button>
          {/* stats */}
          <div style={{ display:'flex', flex:1, justifyContent:'space-around' }}>
            {[{ n:posts.length, l:'게시물' }, { n:'∞', l:'함께할 날' }, { n:'1', l:'영원히' }].map((s,i) => (
              <div key={i} style={{ textAlign:'center' }}>
                <div style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontWeight:700, fontSize:19, color:ink, lineHeight:1 }}>{s.n}</div>
                <div style={{ fontFamily:"'Pretendard',sans-serif", fontSize:11, color:'#666', marginTop:3 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        {/* bio */}
        <div style={{ marginTop:14, marginBottom:14 }}>
          <div style={{ fontFamily:"'Pretendard',sans-serif", fontWeight:700, fontSize:14, color:ink }}>채원 ♡ 해성</div>
          <div style={{ fontFamily:"'Pretendard',sans-serif", fontSize:13, color:'#333', lineHeight:1.6, marginTop:2 }}>
            2026.09.12<br/>두 사람의 이야기가 하나가 되는 날
          </div>
        </div>
        {/* action buttons */}
        <div style={{ display:'flex', gap:6, marginBottom:14 }}>
          <button className="tap" onClick={() => openSheet && openSheet('following')} style={{ flex:1, padding:'7px 0', background:'rgba(17,17,17,0.07)', border:'1px solid rgba(17,17,17,0.14)', borderRadius:9, fontFamily:"'Pretendard',sans-serif", fontWeight:600, fontSize:13, color:ink, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:3 }}>
            팔로잉 <span style={{ fontSize:10 }}>▾</span>
          </button>
          <button className="tap" onClick={() => setTab('mention')} style={{ flex:1, padding:'7px 0', background:'rgba(17,17,17,0.07)', border:'1px solid rgba(17,17,17,0.14)', borderRadius:9, fontFamily:"'Pretendard',sans-serif", fontWeight:600, fontSize:13, color:ink, cursor:'pointer' }}>
            축하메시지 보내기
          </button>
          <button className="tap" style={{ width:40, background:'rgba(17,17,17,0.07)', border:'1px solid rgba(17,17,17,0.14)', borderRadius:9, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <line x1="19" y1="8" x2="19" y2="14"/>
              <line x1="22" y1="11" x2="16" y2="11"/>
            </svg>
          </button>
        </div>
        {/* highlights */}
        <div style={{ display:'flex', gap:12, overflowX:'auto', paddingBottom:14 }}>
          {highlights.map((h, i) => {
            const hasImages = h.images.length > 0;
            return (
              <div key={i} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:5, flexShrink:0 }}>
                <button className="tap" onClick={() => { if (!hasImages) return; setStory({ groups: validHighlights, startGroupIdx: validHighlights.indexOf(h) }); }}
                  style={{ padding:0, border:'none', background:'none', cursor: hasImages ? 'pointer' : 'default' }}>
                  <div style={{
                    width:56, height:56, borderRadius:'50%',
                    border: hasImages ? `2px solid ${ink}` : '1.5px solid rgba(17,17,17,0.14)',
                    overflow:'hidden', flexShrink:0,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    background: hasImages ? 'transparent' : '#F4F2EB',
                  }}>
                    {hasImages
                      ? <img src={h.images[0]} alt={h.label} loading="lazy" decoding="async" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
                      : <span style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontWeight:600, fontSize:20, color:'#888' }}>+</span>
                    }
                  </div>
                </button>
                <div style={{ fontFamily:"'Pretendard',sans-serif", fontSize:10, color:'#444', whiteSpace:'nowrap' }}>{h.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── 4-tab nav ──────────────────────────────────── */}
      <div style={{ position:'sticky', top:topbarH, zIndex:10, background:'#fff', display:'flex', borderTop:'1px solid rgba(17,17,17,0.09)', borderBottom:'1px solid rgba(17,17,17,0.09)' }}>
        {TABS.map(({ key, Icon }) => (
          <button key={key} onClick={() => setTab(key)} className="tap"
            style={{ flex:1, padding:'12px 0', background:'none', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', borderBottom: tab===key ? `2px solid ${ink}` : '2px solid transparent', transition:'border-color .15s' }}>
            <Icon active={tab===key} ink={ink}/>
          </button>
        ))}
      </div>
      </>)}

      {/* ── GRID (4:5) ─────────────────────────────────── */}
      {!feedActive && tab === 'grid' && (
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:2, background:'#ddd' }}>
          {posts.map((p, i) => (
            <button key={p.id} onClick={() => openPostInFeed(p.id)} className="tap"
              style={{ padding:0, border:'none', cursor:'pointer', aspectRatio:'4/5', background:'#F4F2EB', position:'relative', overflow:'hidden' }}>
              <img src={p.images && p.images[0]} alt="" loading="lazy" decoding="async" draggable={false}
                style={{ width:'100%', height:'100%', objectFit:'cover', display:'block', pointerEvents:'none' }} />
              {p.photoCount > 1 && <CarouselBadge/>}
              <div style={{ position:'absolute', bottom:5, right:6, fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:9, fontWeight:700, color:'rgba(255,255,255,0.9)', textShadow:'0 1px 3px rgba(0,0,0,0.5)' }}>
                {String(i+1).padStart(2,'0')}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* ── FEED ───────────────────────────────────────── */}
      {feedActive && (
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
                  src={it.src}
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

Object.assign(window, { MemoriesScreen, FollowingSheet, MemoryPost, PhotoCarousel, CarouselBadge, GuestbookTab,
  HeartIcon, CommentIcon, SendIcon, StoryViewer,
  TabIconGrid, TabIconFeed, TabIconRepost, TabIconMention });
