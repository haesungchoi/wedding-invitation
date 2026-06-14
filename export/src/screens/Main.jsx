/* MAIN PAGE — Single-screen invitation */

function MainScreen({ goTo, openSheet, tweaks }) {
  const lime = tweaks.lime;
  const ink = tweaks.ink;

  // countdown
  const wedding = new Date('2026-09-12T13:00:00+09:00');
  const now = new Date();
  const days = Math.max(0, Math.ceil((wedding - now) / (86400 * 1000)));

  return (
    <div className="inv-screen" data-screen-label="01 Main">
      {/* ── HERO ───────────────────────────────────────────── */}
      <section style={{ ...{
          position: 'relative',
          background: lime,
          minHeight: 'calc(100% - 0px)',
          padding: '78px 24px 56px',
          overflow: 'hidden'
        }, background: "rgb(212, 230, 7)" }}>
        {/* top meta row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: 30
        }}>
          <div className="label-en" style={{ color: ink, opacity: 0.7 }}>CHAEWON  ·  HAESEONG</div>
          <button onClick={() => openSheet('share')} className="tap"
          style={{
            border: `1px solid ${ink}`, background: 'transparent',
            padding: '6px 10px', borderRadius: 99, cursor: 'pointer',
            fontFamily: "'Pretendard', sans-serif", fontSize: 10, letterSpacing: '0.14em',
            fontWeight: 600
          }}>SHARE ↗</button>
        </div>

        {/* big rotated WEDDING INVITATION on right edge */}
        <div className="vertical-headline agrandir" style={{
          position: 'absolute', right: -6, top: 70, bottom: 100,
          fontSize: 64, color: ink, lineHeight: 0.85, opacity: 0.95, height: "690px", fontFamily: "var(--display-font), 'Pretendard', sans-serif", fontWeight: "400"
        }}>
          WEDDING<br />INVITATION
        </div>

        {/* names — display only */}
        <div style={{ marginTop: 18, position: 'relative', zIndex: 2 }}>
          <div className="fade-up" style={{ marginBottom: 4 }}>
            <div className="display" style={{
              fontSize: 88, color: ink, lineHeight: 0.88
            }}>
              윤채원
            </div>
            <div className="serif agrandir" style={{ fontSize: 22, color: ink, opacity: 0.8, marginTop: 2, marginLeft: 4, fontFamily: "var(--display-font), 'Pretendard', sans-serif" }}>
              Chaewon Yun
            </div>
          </div>

          <div className="display fade-up delay-1" style={{
            fontSize: 36, margin: '14px 0 14px 4px', color: ink,
            display: 'flex', alignItems: 'center', gap: 10
          }}>
            <span style={{ display: 'inline-block', width: 28, height: 1, background: ink }} />
            <span className="serif" style={{ fontSize: 26 }}>and</span>
            <span style={{ display: 'inline-block', width: 28, height: 1, background: ink }} />
          </div>

          <div className="fade-up delay-2">
            <div className="display" style={{
              fontSize: 88, color: ink, lineHeight: 0.88
            }}>
              최해성
            </div>
            <div className="serif agrandir" style={{ fontSize: 22, color: ink, opacity: 0.8, marginTop: 2, marginLeft: 4 }}>
              Haeseong Choi
            </div>
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
          <div className="num-mono agrandir" style={{ fontWeight: 800, color: ink, letterSpacing: '-0.02em', fontSize: "16px" }}>
            2026.09.12
          </div>
          <div style={{
            fontFamily: "'Pretendard', sans-serif", letterSpacing: '-0.02em',
            fontWeight: 800, color: ink, fontSize: "16px"
          }}>삼성전자 서초사옥</div>
        </div>
      </section>

      {/* ── THE DAY ───────────────────────────────────────── */}
      <section style={{
        background: '#F8F6F0',
        padding: '64px 24px 56px',
        position: 'relative'
      }}>
        <div className="label-en" style={{ marginBottom: 28, textAlign: "left" }}>· THE DAY</div>

        {/* giant 09 / 12 */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 0, marginBottom: 8, fontWeight: "400"
        }}>
          <div className="display" style={{ color: ink, lineHeight: 0.85, fontSize: "120px", width: 150, textAlign: 'center' }}>09</div>
          <div style={{
            width: 1, height: 100, background: ink,
            transform: 'rotate(8deg)', alignSelf: 'center', flexShrink: 0
          }} />
          <div className="display" style={{ color: ink, lineHeight: 0.85, fontSize: "120px", width: 150, textAlign: "center" }}>12</div>
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
              <div className="display" style={{ fontSize: 20, fontWeight: "400" }}>해성</div>
            </div>
            <div className="hr" />
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
              <div className="ko-reg" style={{ fontSize: 20, color: '#666', flex: 1 }}>
                <span style={{ color: ink }}>윤재경</span>
                <span style={{ margin: '0 6px', opacity: 0.5 }}>·</span>
                <span style={{ color: ink }}>공명아</span>
                <span style={{ marginLeft: 6, fontSize: "16px" }}>의 딸</span>
              </div>
              <div className="display" style={{ fontSize: 20, fontWeight: "400" }}>채원</div>
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

        <div className="serif" style={{ textAlign: 'center', marginTop: 24, fontSize: 22, color: ink }}>

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

      {/* ── CTA section ──────────────────────────────────── */}
      <section style={{
        background: '#F8F6F0', padding: '48px 24px 40px'
      }}>
        <div className="label-en" style={{ marginBottom: 18 }}>· LOCATION</div>

        <button onClick={() => openSheet('map')} className="tap"
        style={{
          width: '100%',
          border: `1px solid ${ink}`, background: '#fff',
          padding: '22px 20px', borderRadius: 0, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          fontFamily: "'Pretendard'"
        }}>
          <div style={{ textAlign: 'left' }}>
            <div className="label-en" style={{ marginBottom: 6 }}>VENUE</div>
            <div className="ko-med" style={{ fontSize: 16, marginBottom: 2 }}>삼성전자 서초사옥 5층  </div>
            <div className="ko-light" style={{ fontSize: 13, color: '#666' }}>오시는 길 보기</div>
          </div>
          <span style={{ fontSize: 22 }}>→</span>
        </button>
      </section>

      {/* ── CLOSING ──────────────────────────────────────── */}
      <section style={{ ...{
          background: lime, padding: '64px 24px 80px',
          position: 'relative', overflow: 'hidden'
        }, background: "rgb(212, 230, 7)" }}>
        <div className="label-en" style={{ marginBottom: 28 }}></div>
        <div className="display" style={{
          color: ink,
          fontSize: "40px", fontFamily: "Pretendard", fontWeight: "500", lineHeight: "1", letterSpacing: "-0.4px", margin: "0px"
        }}>
          두 사람의 결혼을<br />축하해주세요
        </div>
        <div style={{ marginTop: 36 }} className="hr-ink" />
        <div style={{
          marginTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'
        }}>
          <div className="label-en" style={{ color: ink }}>CHAEWON  ·  HAESEONG</div>
          <div className="num-mono" style={{ fontSize: 13, color: ink, fontWeight: "500" }}>2026.09.12</div>
        </div>

        <div style={{
          marginTop: 60, textAlign: 'center',
          fontFamily: "'Pretendard', sans-serif", fontSize: 10, letterSpacing: '0.2em',
          fontWeight: 500, color: ink, opacity: 0.55
        }}>

        </div>
      </section>
    </div>);

}

Object.assign(window, { MainScreen });