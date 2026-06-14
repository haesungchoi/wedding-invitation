/* BRIDE DETAIL — /bride */

function BrideScreen({ goTo, openSheet, tweaks }) {
  const lime = tweaks.lime;
  const ink = tweaks.ink;

  return (
    <div className="inv-screen" data-screen-label="03 Bride · 윤채원">
      {/* sticky top bar */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 5,
        padding: '58px 20px 14px',
        background: 'rgba(248,246,240,0.88)',
        backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <button onClick={() => goTo('main')} className="tap"
        style={{
          background: 'transparent', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: 6, padding: 0,
          color: ink, fontFamily: "'Pretendard', sans-serif", fontWeight: 600, fontSize: 11,
          letterSpacing: '0.16em'
        }}>
          <span style={{ fontSize: 18, lineHeight: 1 }}>←</span> MAIN
        </button>
        <div className="label-en">HER STORY</div>
      </div>

      {/* hero */}
      <section style={{ background: '#F8F6F0', padding: '8px 24px 32px', position: 'relative' }}>
        <div className="label-en" style={{ marginBottom: 10 }}>· 02 / 02</div>
        <div className="display" style={{ lineHeight: 0.86, color: ink, fontSize: "60px" }}>
          CHAEWON<br />YUN
        </div>
        <div className="ko-light" style={{ fontSize: 14, color: '#666', marginTop: 10 }}>윤채원 · 1999. 02. 12

        </div>

        <div style={{
          marginTop: 28, position: 'relative',
          overflow: 'hidden',
          aspectRatio: '3/4'
        }}>
          <img src={(window.__resources||{}).img_bride||"img/bride.jpg"} alt="bride"
          className={tweaks.bw ? 'bw kenburns' : 'kenburns'}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            objectPosition: 'center 25%'
          }} />
          <div style={{
            position: 'absolute', left: 10, top: 10,
            background: ink, color: lime,
            fontFamily: "'Pretendard', sans-serif", fontSize: 9, fontWeight: 700,
            padding: '4px 8px', letterSpacing: '0.18em'
          }}>BRIDE</div>
          <div style={{
            position: 'absolute', right: 10, bottom: 10,
            color: '#fff', fontFamily: "'Pretendard', sans-serif", fontWeight: 700,
            fontSize: 10, letterSpacing: '0.18em', textShadow: '0 1px 6px rgba(0,0,0,0.5)'
          }}>SHE / HER</div>
        </div>
      </section>

      {/* story */}
      <section style={{ background: '#F8F6F0', padding: '0 24px 48px' }}>
        <div style={{
          background: ink, color: lime, display: 'inline-block',
          padding: '6px 12px',
          fontFamily: "'Pretendard'", fontSize: 14, fontWeight: 700,
          marginBottom: 18
        }}>
          움직일수록 더 살아나는 채원은
        </div>
        <div className="ko-light" style={{
          fontSize: 16, lineHeight: 1.85, color: '#222',
          textWrap: 'pretty'
        }}>
          이제는 함께 걷는 길 위에서<br />
          삶의 순간들을 더 깊고 넓게 바라보게 되었습니다<br /><br />
          그의 성실함이, 제 <span style={{ background: lime, padding: '0 4px' }}>열정</span>에 의미를 더해줍니다
        </div>
      </section>

      {/* meta — 3 facts */}
      <section style={{ background: lime, padding: '40px 24px' }}>
        <div className="label-en" style={{ marginBottom: 18 }}>· FACTS</div>
        <div style={{ display: 'grid', gap: 22 }}>
          {[
          { k: 'WORKS AS A', v: 'AI 리서처', s: 'AI Researcher' },
          { k: 'LOVES', v: '새로운 길', s: 'New paths' },
          { k: 'A WORD', v: '움직임', s: 'Moves' }].
          map((f, i) =>
          <div key={i} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
            borderBottom: `1px solid ${ink}`, paddingBottom: 14, opacity: 0.95
          }}>
              <div className="label-en" style={{ color: ink, opacity: 0.7 }}>{f.k}</div>
              <div style={{ textAlign: 'right' }}>
                <div className="ko-med" style={{ fontSize: 17, color: ink }}>{f.v}</div>
                <div style={{ fontFamily: "'Pretendard', sans-serif", fontSize: 10, color: ink, opacity: 0.6, marginTop: 2, letterSpacing: '0.05em' }}>{f.s}</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* family + contact */}
      <section style={{ background: '#F8F6F0', padding: '48px 24px 32px' }}>
        <div className="label-en" style={{ marginBottom: 18 }}>· FAMILY</div>

        <div style={{
          border: `1px solid ${ink}`, padding: '22px 20px',
          background: '#fff', marginBottom: 18
        }}>
          <div className="ko-light" style={{ fontSize: 13, color: '#666', marginBottom: 6 }}>
            <span style={{ color: ink }}>윤재경</span>
            <span style={{ margin: '0 6px', opacity: 0.5 }}>·</span>
            <span style={{ color: ink }}>공명아</span>
            <span style={{ marginLeft: 6 }}>의 딸</span>
          </div>
          <div className="display" style={{ lineHeight: 0.9, color: ink, fontSize: "40px" }}>채원</div>
        </div>

        {/* contact rows */}
        <div className="label-en" style={{ marginBottom: 12 }}>· CONTACT</div>
        <ContactRow name="윤채원" role="신부" tel="010-6335-6095" lime={lime} ink={ink} primary />
        <ContactRow name="윤재경" role="아버지" tel="010-6284-9577" lime={lime} ink={ink} />
        <ContactRow name="공명아" role="어머니" tel="010-4780-6095" lime={lime} ink={ink} />
      </section>

      {/* account CTA */}
      <section style={{ background: '#F8F6F0', padding: '12px 24px 56px' }}>
        <button onClick={() => openSheet('account-bride')} className="tap"
        style={{
          width: '100%', border: `1px solid ${ink}`, background: lime,
          padding: '20px 18px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          fontFamily: "'Pretendard'"
        }}>
          <div style={{ textAlign: 'left' }}>
            <div className="label-en" style={{ marginBottom: 4 }}>BRIDE SIDE</div>
            <div className="ko-med" style={{ fontSize: 15, color: ink }}>마음 전하실 곳 (신부측)</div>
          </div>
          <span style={{ fontSize: 22 }}>→</span>
        </button>
      </section>

      {/* bottom band — go to groom */}
      <section style={{
        background: ink, padding: '40px 24px 28px'
      }}>
        <div className="label-en" style={{ marginBottom: 10, color: lime, opacity: 0.7 }}>· HIS STORY</div>
        <button onClick={() => goTo('groom')} className="tap"
        style={{
          background: 'transparent', border: 'none', padding: 0, cursor: 'pointer',
          textAlign: 'left'
        }}>
          <div className="display" style={{
            color: lime, lineHeight: 0.88,
            display: 'flex', alignItems: 'flex-end', gap: 8, fontSize: "40px"
          }}>
            최해성
            <span style={{ fontSize: 20, transform: 'translateY(-8px)', opacity: 0.7 }}>↗</span>
          </div>
          <div className="serif" style={{ fontSize: 18, color: lime, opacity: 0.7, marginTop: 4 }}>
            Read Haeseong's story →
          </div>
        </button>
      </section>

      {/* back to main */}
      <section style={{ background: '#F8F6F0', padding: '36px 24px 80px', textAlign: 'center' }}>
        <button onClick={() => goTo('main')} className="tap"
        style={{
          background: 'transparent', border: `1px solid ${ink}`, color: ink,
          padding: '14px 28px', borderRadius: 99, cursor: 'pointer',
          fontFamily: "'Pretendard', sans-serif", fontWeight: 700, fontSize: 11,
          letterSpacing: '0.18em'
        }}>← 메인으로 돌아가기</button>
      </section>
    </div>);

}

Object.assign(window, { BrideScreen });