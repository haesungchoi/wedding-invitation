/* MAIN PAGE — Single-screen invitation */

function MainScreen({ goTo, openSheet, tweaks }) {
  const lime = tweaks.lime;
  const ink = tweaks.ink;

  // countdown
  const wedding = new Date('2026-09-12T13:00:00+09:00');
  const now = new Date();
  const days = Math.max(0, Math.ceil((wedding - now) / (86400 * 1000)));

  const scrollToSection = (id, onDone) => {
    const container = document.querySelector('.inv-screen');
    const target = document.getElementById(id);
    if (!container || !target) { if (onDone) onDone(); return; }
    const containerTop = container.getBoundingClientRect().top;
    const targetTop = target.getBoundingClientRect().top;
    const distance = Math.abs(targetTop - containerTop);
    container.scrollBy({ top: targetTop - containerTop, behavior: 'smooth' });
    if (onDone) setTimeout(onDone, Math.max(400, Math.min(800, distance * 0.4)));
  };

  const tickerText = 'Welcome to our wedding';
  const tickerItems = Array.from({ length: 8 }, (_, i) => i);

  const weddingTextRef = React.useRef(null);
  const photoRef = React.useRef(null);

  // 세로 'WEDDING INVITATION' 헤드라인의 높이를 사진 카드 위치에 맞춰 정렬한다.
  // getBoundingClientRect는 fade-up 진입 애니메이션의 transform·스크롤 위치까지
  // 반영해 첫 진입 시 잘못된 값을 읽으므로, transform과 무관한 offset 기반으로 계산하고
  // useLayoutEffect로 첫 페인트 전에 확정한다. 폰트가 늦게 로드되면 위쪽 이름 텍스트의
  // 높이가 바뀌므로 fonts.ready에서 한 번 더 정렬한다.
  React.useLayoutEffect(() => {
    const offsetWithin = (el, ancestor) => {
      let y = 0;
      while (el && el !== ancestor) { y += el.offsetTop; el = el.offsetParent; }
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
    align();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(align);
    const t = setTimeout(align, 700);
    window.addEventListener('resize', align);
    return () => { clearTimeout(t); window.removeEventListener('resize', align); };
  }, []);


  return (
    <div data-screen-label="01 Main" style={{
      position: 'absolute', inset: 0,
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden'
    }}>
      {/* ── HEADER TICKER ──────────────────────────────────── */}
      <div className="ticker-wrap" style={{ background: lime }}>
        <div className="ticker-track">
          {tickerItems.map(i => (
            <span key={`a${i}`} className="ticker-item" style={{ color: ink }}>{tickerText}</span>
          ))}
          {tickerItems.map(i => (
            <span key={`b${i}`} className="ticker-item" style={{ color: ink }}>{tickerText}</span>
          ))}
        </div>
      </div>

      {/* ── SCROLLABLE CONTENT ─────────────────────────────── */}
      <div className="inv-screen" style={{ position: 'relative', flex: 1 }}>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section style={{ ...{
          position: 'relative',
          background: lime,
          minHeight: 'calc(100% - 0px)',
          padding: '48px 24px 56px',
          overflow: 'hidden'
        }, background: "rgb(212, 230, 7)" }}>
        {/* top meta row */}
        <div style={{ marginBottom: 30 }}>
          <div className="label-en" style={{ color: ink, opacity: 0.7 }}>CHAEWON  ·  HAESEONG</div>
        </div>

        {/* big rotated WEDDING INVITATION on right edge */}
        <div ref={weddingTextRef} className="vertical-headline agrandir" style={{
          position: 'absolute', right: -1, top: 70,
          fontSize: 64, color: ink, lineHeight: 0.85, opacity: 0.95, height: "640px", fontFamily: "'Martian Mono', monospace", fontWeight: "400", fontStretch: '100%', letterSpacing: '0em'
        }}>
          WEDDING<br />INVITATION
        </div>

        {/* names + buttons row — aligned at same top */}
        <div style={{ marginTop: 18, position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          {/* names column */}
          <div>
            <div className="fade-up" style={{ marginBottom: 4 }}>
              <div className="display" style={{
                fontSize: 77, color: ink, lineHeight: 0.88, fontWeight: 600, fontFamily: "'Pretendard', sans-serif"
              }}>
                윤채원
              </div>
              <div className="serif agrandir" style={{ fontSize: 22, color: ink, opacity: 0.8, marginTop: 2, marginLeft: 4, fontFamily: "'Martian Mono', monospace", letterSpacing: '0em' }}>
                Chaewon Yun
              </div>
            </div>

            <div className="display fade-up delay-1" style={{
              fontSize: 36, margin: '14px 0 14px 4px', color: ink,
              display: 'flex', alignItems: 'center', gap: 10
            }}>
              <span style={{ display: 'inline-block', width: 28, height: 1, background: ink }} />
              <span style={{ fontSize: 20, fontFamily: "'Martian Mono', monospace", fontWeight: 300, letterSpacing: '0em' }}>and</span>
              <span style={{ display: 'inline-block', width: 28, height: 1, background: ink }} />
            </div>

            <div className="fade-up delay-2">
              <div className="display" style={{
                fontSize: 77, color: ink, lineHeight: 0.88, fontWeight: 600, fontFamily: "'Pretendard', sans-serif"
              }}>
                최해성
              </div>
              <div className="serif agrandir" style={{ fontSize: 22, color: ink, opacity: 0.8, marginTop: 2, marginLeft: 4, fontFamily: "'Martian Mono', monospace", letterSpacing: '0em' }}>
                Haeseong Choi
              </div>
            </div>
          </div>

          {/* buttons column — aligns with 윤채원 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
            <button onClick={() => scrollToSection('section-location', () => openSheet('map'))} className="tap"
            style={{
              border: `1px solid ${ink}`, background: 'transparent',
              padding: '5px 8px', borderRadius: 99, cursor: 'pointer',
              fontFamily: "'Martian Mono', monospace", fontSize: 9, letterSpacing: '0.14em',
              fontWeight: 300
            }}>LOCATION</button>
            <button onClick={() => scrollToSection('section-accounts', () => openSheet('account-both'))} className="tap"
            style={{
              border: `1px solid ${ink}`, background: 'transparent',
              padding: '5px 8px', borderRadius: 99, cursor: 'pointer',
              fontFamily: "'Martian Mono', monospace", fontSize: 9, letterSpacing: '0.14em',
              fontWeight: 300
            }}>ACCOUNTS</button>
          </div>
        </div>
        {/* memories CTA */}
        <button
          onClick={() => goTo('memories')}
          className="tap fade-up delay-3"
          style={{
            marginTop: 28, marginLeft: 4,
            background: 'transparent', border: 'none', cursor: 'pointer',
            padding: 0, display: 'flex', alignItems: 'center', gap: 8
          }}>
          <div style={{
            fontFamily: "'Pretendard', sans-serif", fontSize: 10, letterSpacing: '0.16em',
            fontWeight: 600, color: ink
          }}></div>
        </button>

        {/* photo card overlap — taps to OUR STORY / numbers */}
        <button
          ref={photoRef}
          onClick={() => goTo('memories')}
          className="fade-up delay-3 tap"
          style={{
            marginTop: 38, position: 'relative',
            marginLeft: -4, marginRight: 30,
            display: 'block', width: 'auto',
            padding: 0, border: 'none', background: 'transparent',
            cursor: 'pointer', textAlign: 'left'
          }}>
          <div style={{
            position: 'relative', overflow: 'hidden',
            aspectRatio: '4/5', maxHeight: 280
          }}>
            <img src="img/couple-main.jpg" alt="couple"
            fetchPriority="high" decoding="async"
            className={tweaks.bw ? 'bw kenburns' : 'kenburns'}
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              objectPosition: 'center 35%'
            }} />
            <div style={{
              position: 'absolute', top: 10, left: 10,
              background: lime, color: ink,
              fontFamily: "'Pretendard', sans-serif", fontSize: 9, fontWeight: 700,
              padding: '4px 8px', letterSpacing: '0.18em',
              borderRadius: 2,
              display: 'flex', alignItems: 'center', gap: 6
            }}>우리의 추억 보기 <span style={{ fontSize: 11, opacity: 0.7 }}>↗</span></div>
          </div>
        </button>

        {/* bottom date line */}
        <div style={{
          marginTop: 32, paddingTop: 18,
          borderTop: `1px solid ${ink}`,
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'
        }}>
          <div className="num-mono agrandir" style={{ fontWeight: 300, color: ink, letterSpacing: '-0.02em', fontSize: "16px", fontFamily: "'Martian Mono', monospace", fontStretch: '75%' }}>
            2026.09.12
          </div>
          <button onClick={() => openSheet('map')} className="tap"
          style={{
            fontFamily: "'Pretendard', sans-serif", letterSpacing: '-0.02em',
            fontWeight: 600, color: ink, fontSize: "16px",
            background: 'transparent', border: 'none', cursor: 'pointer', padding: 0
          }}>삼성전자 서초사옥</button>
        </div>
      </section>

      {/* ── THE DAY ───────────────────────────────────────── */}
      <section style={{
        background: '#F8F6F0',
        padding: '64px 24px 71px',
        position: 'relative'
      }}>
        <div className="label-en" style={{ marginBottom: 28, textAlign: "left" }}>· THE DAY</div>

        {/* giant 09 / 12 */}
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          marginBottom: 8, fontWeight: "400", lineHeight: 0.85,
        }}>
          <div className="display" style={{ color: ink, fontSize: "120px", fontFamily: "'Martian Mono', monospace", fontStretch: '112.5%' }}>09</div>
          <div className="display" style={{ color: ink, fontSize: "120px", fontFamily: "'Martian Mono', monospace", fontStretch: '112.5%' }}>12</div>
        </div>

        <div className="ko-med" style={{
          textAlign: 'center', color: ink,
          lineHeight: 1.35, letterSpacing: '-0.01em',
          marginTop: 14, marginBottom: 10, fontFamily: "Pretendard", fontSize: "20px", fontWeight: "400"
        }}>
          2026년 9월 12일<br />
          <span className="ko-light" style={{ fontFamily: "Pretendard", color: "rgb(17, 17, 17)", fontSize: "20px", fontWeight: "400" }}>토요일 오후 1시</span>
        </div>
        <div className="ko-light" style={{ textAlign: 'center', fontSize: 12, color: '#777', marginBottom: 36, fontFamily: "'Pretendard', sans-serif", letterSpacing: '0.18em', fontWeight: 500 }}>
          
        </div>

        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div className="ko-med" style={{ marginBottom: 4, fontSize: "20px", fontWeight: "400" }}>삼성전자 서초사옥</div>
          <div className="ko-light" style={{ color: "rgb(17, 17, 17)", fontSize: "20px", fontWeight: "400" }}>5층 웨딩홀</div>
        </div>

        {/* family lines */}
        <div style={{ marginBottom: 32 }}>
          <div className="label-en" style={{ marginBottom: 14 }}>· FAMILY</div>
          <div style={{
            display: 'grid', gap: 14, fontFamily: "'Pretendard'"
          }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
              <div className="ko-reg" style={{ fontSize: 20, color: '#666', flex: 1 }}>
                <span style={{ color: ink }}>최교선</span>
                <span style={{ margin: '0 6px', opacity: 0.5 }}>·</span>
                <span style={{ color: ink }}>구지영</span>
                <span style={{ marginLeft: 6, fontSize: "16px" }}>의 아들</span>
              </div>
              <div className="display" style={{ fontSize: 20, fontWeight: "400", fontFamily: "'Pretendard', sans-serif" }}>해성</div>
            </div>
            <div className="hr" />
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
              <div className="ko-reg" style={{ fontSize: 20, color: '#666', flex: 1 }}>
                <span style={{ color: ink }}>윤재경</span>
                <span style={{ margin: '0 6px', opacity: 0.5 }}>·</span>
                <span style={{ color: ink }}>공명아</span>
                <span style={{ marginLeft: 6, fontSize: "16px" }}>의 딸</span>
              </div>
              <div className="display" style={{ fontSize: 20, fontWeight: "400", fontFamily: "'Pretendard', sans-serif" }}>채원</div>
            </div>
          </div>
        </div>

        <div className="ko-light" style={{
          textAlign: 'center', fontSize: 14, color: '#555',
          lineHeight: 1.75, padding: '0 4px', fontFamily: "Pretendard"
        }}>
          두 사람의 이야기가 하나가 되는 날,<br />
          함께 축복해 주세요
        </div>

        <div className="serif" style={{ textAlign: 'center', marginTop: 0, fontSize: 22, color: ink }}>

        </div>
      </section>

      {/* ── NUMBERS strip (compact) ──────────────────────── */}
      <section style={{ display: 'none' }}>
        <div className="label-en" style={{ marginBottom: 18, color: ink }}>· NUMBERS</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
          {[
          { n: '1914', t: '함께한 날들' },
          { n: '1', t: '하나가 되는 날' },
          { n: '∞', t: '오늘부터, 영원히' }].
          map((x, i) =>
          <div key={i}>
              <div className="display" style={{ fontSize: 44, color: ink, lineHeight: 0.9 }}>{x.n}</div>
              <div className="ko-light" style={{ fontSize: 11, color: ink, opacity: 0.7, marginTop: 6, lineHeight: 1.4 }}>{x.t}</div>
            </div>
          )}
        </div>
      </section>

      {/* ── GUIDE section ──────────────────────────────────── */}
      <section style={{ background: '#F8F6F0', padding: '24px 24px 0' }}>
        <div style={{
          border: `1px solid ${ink}`, background: '#fff',
          padding: '22px 20px', fontFamily: "'Pretendard'"
        }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 20 }}>
            <div className="label-en">MEAL</div>
            <div className="ko-light" style={{ fontSize: 11, color: '#666' }}>식사</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <div style={{ paddingBottom: 16 }}>
              <div className="ko-med" style={{ fontSize: 14, marginBottom: 6 }}>식사 시간</div>
              <div className="ko-light" style={{ fontSize: 13, color: '#555', lineHeight: 1.65 }}>
                오후 1시 ~ 3시까지 식사가 제공됩니다
              </div>
            </div>
            <div className="hr" style={{ margin: '0 0 16px' }} />
            <div style={{ paddingBottom: 16 }}>
              <div className="ko-med" style={{ fontSize: 14, marginBottom: 6 }}>식사 장소</div>
              <div className="ko-light" style={{ fontSize: 13, color: '#555', lineHeight: 1.65 }}>
                서초사옥 지하1층에서 이뤄집니다<br />
                양식 · 중식 · 일식 중 선택하실 수 있습니다
              </div>
            </div>
            <div className="hr" style={{ margin: '0 0 16px' }} />
            <div>
              <div className="ko-med" style={{ fontSize: 14, marginBottom: 6 }}>식당 선택</div>
              <div className="ko-light" style={{ fontSize: 13, color: '#555', lineHeight: 1.65 }}>
                식당 선택은 축의대에서 이뤄지오니<br />
                함께 오시는 분이 계시다면 미리 상의하고 오시면 좋습니다
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA section ──────────────────────────────────── */}
      <section id="section-location" style={{
        background: '#F8F6F0', padding: '24px 24px 24px'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <button onClick={() => openSheet('map')} className="tap"
          style={{
            display: 'block', width: '100%', border: 'none',
            background: 'transparent', padding: 0, cursor: 'pointer', textAlign: 'left'
          }}>
            <div style={{
              border: `1px solid ${ink}`, background: '#fff',
              padding: '22px 20px', borderRadius: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              fontFamily: "'Pretendard'"
            }}>
              <div style={{ flex: 1, textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 6 }}>
                  <div className="label-en">VENUE</div>
                  <div className="ko-light" style={{ fontSize: 11, color: '#666' }}>오시는 길 보기</div>
                </div>
                <div className="ko-med" style={{ fontSize: 16 }}>삼성전자 서초사옥 5층</div>
              </div>
              <span style={{ fontSize: 22, marginLeft: 12 }}>→</span>
            </div>
          </button>
          <div id="section-accounts">
            <button onClick={() => openSheet('account-both')} className="tap"
            style={{
              display: 'block', width: '100%', border: 'none',
              background: 'transparent', padding: 0, cursor: 'pointer', textAlign: 'left'
            }}>
              <div style={{
                border: `1px solid ${ink}`, background: '#fff',
                padding: '22px 20px', borderRadius: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                fontFamily: "'Pretendard'"
              }}>
                <div style={{ flex: 1, textAlign: 'left' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 6 }}>
                    <div className="label-en">ACCOUNT</div>
                    <div className="ko-light" style={{ fontSize: 11, color: '#666' }}>계좌번호 보기</div>
                  </div>
                  <div className="ko-med" style={{ fontSize: 16 }}>마음 전하실 곳</div>
                </div>
                <span style={{ fontSize: 22, marginLeft: 12 }}>→</span>
              </div>
            </button>
          </div>
        </div>
      </section>


      {/* ── CLOSING ──────────────────────────────────────── */}
      <section style={{ ...{
          background: lime, padding: '12px 24px 12px',
          position: 'relative', overflow: 'hidden'
        }, background: "rgb(212, 230, 7)" }}>
        <div className="label-en" style={{ marginBottom: 24 }}></div>
        <div className="display" style={{
          color: ink,
          fontSize: "20px", fontFamily: "Pretendard", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.2px", margin: "0px"
        }}>
          보내주시는 따뜻한 축하에 감사하며,<br />함께 잘 살아가겠습니다
        </div>
        <div style={{ marginTop: 36 }} className="hr-ink" />
        <div style={{
          marginTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'
        }}>
          <div className="num-mono" style={{ fontSize: 13, color: ink, fontWeight: "300", fontFamily: "'Martian Mono', monospace", fontStretch: '100%' }}>CHAEWON</div>
          <div className="num-mono" style={{ fontSize: 13, color: ink, fontWeight: "300", fontFamily: "'Martian Mono', monospace", fontStretch: '100%' }}>HAESEONG</div>
        </div>

        <div style={{
          marginTop: 2, textAlign: 'center',
          fontFamily: "'Pretendard', sans-serif", fontSize: 10, letterSpacing: '0.2em',
          fontWeight: 500, color: ink, opacity: 0.55
        }}>

        </div>
      </section>
      </div>{/* end scrollable */}
    </div>);

}

Object.assign(window, { MainScreen });