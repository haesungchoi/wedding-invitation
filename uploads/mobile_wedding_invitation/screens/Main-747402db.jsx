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
      <section style={{
        position: 'relative',
        background: lime,
        minHeight: 'calc(100% - 0px)',
        padding: '78px 24px 56px',
        overflow: 'hidden',
      }}>
        {/* top meta row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: 30,
        }}>
          <div className="label-en" style={{ color: ink, opacity: 0.7 }}>HAESEONG &nbsp;·&nbsp; CHAEWON</div>
          <button onClick={() => openSheet('share')} className="tap"
            style={{
              border: `1px solid ${ink}`, background: 'transparent',
              padding: '6px 10px', borderRadius: 99, cursor: 'pointer',
              fontFamily: "'Spoqa Han Sans Neo', sans-serif", fontSize: 10, letterSpacing: '0.14em',
              fontWeight: 600,
            }}>SHARE ↗</button>
        </div>

        {/* big rotated WEDDING INVITATION on right edge */}
        <div className="vertical-headline" style={{
          position: 'absolute', right: -6, top: 70, bottom: 100,
          fontSize: 64, color: ink, lineHeight: 0.85, opacity: 0.95,
        }}>
          WEDDING<br/>INVITATION
        </div>

        {/* names — clickable */}
        <div style={{ marginTop: 18, position: 'relative', zIndex: 2 }}>
          <button
            onClick={() => goTo('groom')}
            className="tap fade-up"
            style={{
              border: 'none', background: 'transparent', cursor: 'pointer',
              padding: 0, textAlign: 'left', display: 'block', marginBottom: 4,
            }}>
            <div className="display" style={{
              fontSize: 88, color: ink, lineHeight: 0.88,
              display: 'flex', alignItems: 'flex-end', gap: 8,
            }}>
              최해성
              <span style={{ fontSize: 22, transform: 'translateY(-12px)', opacity: 0.55 }}>↗</span>
            </div>
            <div className="serif" style={{ fontSize: 22, color: ink, opacity: 0.8, marginTop: 2, marginLeft: 4 }}>
              Haeseong Choi
            </div>
          </button>

          <div className="display fade-up delay-1" style={{
            fontSize: 36, margin: '14px 0 14px 4px', color: ink,
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ display: 'inline-block', width: 28, height: 1, background: ink }} />
            <span className="serif" style={{ fontSize: 26 }}>and</span>
            <span style={{ display: 'inline-block', width: 28, height: 1, background: ink }} />
          </div>

          <button
            onClick={() => goTo('bride')}
            className="tap fade-up delay-2"
            style={{
              border: 'none', background: 'transparent', cursor: 'pointer',
              padding: 0, textAlign: 'left', display: 'block',
            }}>
            <div className="display" style={{
              fontSize: 88, color: ink, lineHeight: 0.88,
              display: 'flex', alignItems: 'flex-end', gap: 8,
            }}>
              윤채원
              <span style={{ fontSize: 22, transform: 'translateY(-12px)', opacity: 0.55 }}>↗</span>
            </div>
            <div className="serif" style={{ fontSize: 22, color: ink, opacity: 0.8, marginTop: 2, marginLeft: 4 }}>
              Chaewon Yun
            </div>
          </button>
        </div>

        {/* tap-name hint */}
        <div className="fade-up delay-3" style={{
          marginTop: 28, marginLeft: 4,
          fontFamily: "'Spoqa Han Sans Neo', sans-serif", fontSize: 10, letterSpacing: '0.16em',
          fontWeight: 500, color: ink, opacity: 0.55,
        }}>
          TAP NAME TO READ MORE →
        </div>

        {/* photo card overlap */}
        <div className="fade-up delay-3" style={{
          marginTop: 38, position: 'relative',
          marginLeft: -4, marginRight: 30,
        }}>
          <div style={{
            position: 'relative', overflow: 'hidden',
            border: `1px solid ${ink}`,
            aspectRatio: '4/5', maxHeight: 280,
          }}>
            <img src="img/couple-main.jpg" alt="couple"
              className={tweaks.bw ? 'bw kenburns' : 'kenburns'}
              style={{
                width: '100%', height: '100%', objectFit: 'cover',
                objectPosition: 'center 35%',
              }} />
            <div style={{
              position: 'absolute', top: 10, left: 10,
              background: lime, color: ink,
              fontFamily: "'Spoqa Han Sans Neo', sans-serif", fontSize: 9, fontWeight: 700,
              padding: '4px 8px', letterSpacing: '0.18em',
              borderRadius: 2,
            }}>THE TWO</div>
          </div>
        </div>

        {/* bottom date line */}
        <div style={{
          marginTop: 32, paddingTop: 18,
          borderTop: `1px solid ${ink}`,
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        }}>
          <div className="num-mono" style={{ fontSize: 26, fontWeight: 800, color: ink, letterSpacing: '-0.02em' }}>
            2026.09.12
          </div>
          <div style={{
            fontFamily: "'Spoqa Han Sans Neo', sans-serif", fontSize: 10, letterSpacing: '0.18em',
            fontWeight: 600, color: ink, opacity: 0.7,
          }}>SAT · 13:00 KST</div>
        </div>
      </section>

      {/* ── THE DAY ───────────────────────────────────────── */}
      <section style={{
        background: '#F8F6F0',
        padding: '64px 24px 56px',
        position: 'relative',
      }}>
        <div className="label-en" style={{ marginBottom: 28 }}>· THE DAY</div>

        {/* giant 09 / 12 */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 12, marginBottom: 8,
        }}>
          <div className="display" style={{ fontSize: 200, color: ink, lineHeight: 0.85 }}>09</div>
          <div style={{
            width: 1, height: 120, background: ink,
            transform: 'rotate(8deg)', alignSelf: 'center',
          }} />
          <div className="display" style={{ fontSize: 200, color: ink, lineHeight: 0.85 }}>12</div>
        </div>

        <div className="ko-med" style={{
          textAlign: 'center', fontSize: 26, color: ink,
          lineHeight: 1.35, letterSpacing: '-0.01em',
          marginTop: 14, marginBottom: 10,
        }}>
          2026년 9월 12일<br/>
          <span className="ko-light" style={{ fontSize: 22, color: '#333' }}>토요일 오후 1시</span>
        </div>
        <div className="ko-light" style={{ textAlign: 'center', fontSize: 12, color: '#777', marginBottom: 36, fontFamily: "'Spoqa Han Sans Neo', sans-serif", letterSpacing: '0.18em', fontWeight: 500 }}>
          D − {days}
        </div>

        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div className="ko-med" style={{ fontSize: 17, marginBottom: 4 }}>삼성전자 서초사옥</div>
          <div className="ko-light" style={{ fontSize: 14, color: '#666' }}>5층 웨딩홀</div>
        </div>

        {/* family lines */}
        <div style={{ marginBottom: 32 }}>
          <div className="label-en" style={{ marginBottom: 14 }}>· FAMILY</div>
          <div style={{
            display: 'grid', gap: 14, fontFamily: "'Pretendard'",
          }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
              <div className="ko-reg" style={{ fontSize: 13, color: '#666', flex: 1 }}>
                <span style={{ color: ink }}>최교선</span>
                <span style={{ margin: '0 6px', opacity: 0.5 }}>·</span>
                <span style={{ color: ink }}>구지영</span>
                <span style={{ marginLeft: 6 }}>의 아들</span>
              </div>
              <div className="display" style={{ fontSize: 28 }}>해성</div>
            </div>
            <div className="hr" />
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
              <div className="ko-reg" style={{ fontSize: 13, color: '#666', flex: 1 }}>
                <span style={{ color: ink }}>윤재경</span>
                <span style={{ margin: '0 6px', opacity: 0.5 }}>·</span>
                <span style={{ color: ink }}>공명아</span>
                <span style={{ marginLeft: 6 }}>의 딸</span>
              </div>
              <div className="display" style={{ fontSize: 28 }}>채원</div>
            </div>
          </div>
        </div>

        <div className="ko-light" style={{
          textAlign: 'center', fontSize: 14, color: '#555',
          lineHeight: 1.75, padding: '0 4px',
        }}>
          두 사람의 이야기가 하나가 되는 날,<br/>
          함께 축복해 주세요.
        </div>

        <div className="serif" style={{ textAlign: 'center', marginTop: 24, fontSize: 22, color: ink }}>
          We're getting Married!
        </div>
      </section>

      {/* ── NUMBERS strip (compact) ──────────────────────── */}
      <section style={{
        background: lime, padding: '40px 24px 44px',
      }}>
        <div className="label-en" style={{ marginBottom: 18, color: ink }}>· NUMBERS</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
          {[
            { n: '1914', t: '함께한 날들' },
            { n: '1',    t: '하나가 되는 날' },
            { n: '∞',    t: '오늘부터, 영원히' },
          ].map((x, i) => (
            <div key={i}>
              <div className="display" style={{ fontSize: 44, color: ink, lineHeight: 0.9 }}>{x.n}</div>
              <div className="ko-light" style={{ fontSize: 11, color: ink, opacity: 0.7, marginTop: 6, lineHeight: 1.4 }}>{x.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA section ──────────────────────────────────── */}
      <section style={{
        background: '#F8F6F0', padding: '48px 24px 40px',
      }}>
        <div className="label-en" style={{ marginBottom: 18 }}>· LOCATION</div>

        <button onClick={() => openSheet('map')} className="tap"
          style={{
            width: '100%',
            border: `1px solid ${ink}`, background: '#fff',
            padding: '22px 20px', borderRadius: 0, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            fontFamily: "'Pretendard'",
          }}>
          <div style={{ textAlign: 'left' }}>
            <div className="label-en" style={{ marginBottom: 6 }}>VENUE</div>
            <div className="ko-med" style={{ fontSize: 16, marginBottom: 2 }}>삼성전자 서초사옥</div>
            <div className="ko-light" style={{ fontSize: 13, color: '#666' }}>오시는 길 보기</div>
          </div>
          <span style={{ fontSize: 22 }}>→</span>
        </button>
      </section>

      {/* ── CLOSING ──────────────────────────────────────── */}
      <section style={{
        background: lime, padding: '64px 24px 80px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="label-en" style={{ marginBottom: 28 }}>· CLOSING</div>
        <div className="display" style={{
          fontSize: 132, color: ink, lineHeight: 0.85, fontWeight: 400,
          letterSpacing: '-0.01em',
        }}>
          THANK<br/>YOU.
        </div>
        <div style={{ marginTop: 36 }} className="hr-ink" />
        <div style={{
          marginTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        }}>
          <div className="label-en" style={{ color: ink }}>HAESEONG &nbsp;·&nbsp; CHAEWON</div>
          <div className="num-mono" style={{ fontSize: 13, fontWeight: 700, color: ink }}>2026.09.12</div>
        </div>

        <div style={{
          marginTop: 60, textAlign: 'center',
          fontFamily: "'Spoqa Han Sans Neo', sans-serif", fontSize: 10, letterSpacing: '0.2em',
          fontWeight: 500, color: ink, opacity: 0.55,
        }}>
          MADE WITH ♡ FOR OUR PEOPLE
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { MainScreen });
