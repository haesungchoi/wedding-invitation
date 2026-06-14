/* GROOM DETAIL — /groom */

function GroomScreen({ goTo, openSheet, tweaks }) {
  const lime = tweaks.lime;
  const ink = tweaks.ink;

  return (
    <div className="inv-screen" data-screen-label="02 Groom · 최해성">
      {/* sticky top bar */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 5,
        padding: '58px 20px 14px',
        background: 'rgba(248,246,240,0.88)',
        backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <button onClick={() => goTo('main')} className="tap"
          style={{
            background: 'transparent', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 6, padding: 0,
            color: ink, fontFamily: "'Spoqa Han Sans Neo', sans-serif", fontWeight: 600, fontSize: 11,
            letterSpacing: '0.16em',
          }}>
          <span style={{ fontSize: 18, lineHeight: 1 }}>←</span> MAIN
        </button>
        <div className="label-en">HIS STORY</div>
      </div>

      {/* hero */}
      <section style={{ background: '#F8F6F0', padding: '8px 24px 32px', position: 'relative' }}>
        <div className="label-en" style={{ marginBottom: 10 }}>· 01 / 02</div>
        <div className="display" style={{ fontSize: 76, lineHeight: 0.86, color: ink }}>
          HAESEONG<br/>CHOI.
        </div>
        <div className="ko-light" style={{ fontSize: 14, color: '#666', marginTop: 10 }}>
          최해성 · 1995. 03. 18.
        </div>

        <div style={{
          marginTop: 28, position: 'relative',
          overflow: 'hidden', border: `1px solid ${ink}`,
          aspectRatio: '3/4',
        }}>
          <img src="img/groom.jpg" alt="groom"
            className={tweaks.bw ? 'bw kenburns' : 'kenburns'}
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              objectPosition: 'center 30%',
            }}/>
          <div style={{
            position: 'absolute', left: 10, top: 10,
            background: lime, color: ink,
            fontFamily: "'Spoqa Han Sans Neo', sans-serif", fontSize: 9, fontWeight: 700,
            padding: '4px 8px', letterSpacing: '0.18em',
          }}>GROOM</div>
          <div style={{
            position: 'absolute', right: 10, bottom: 10,
            color: '#fff', fontFamily: "'Spoqa Han Sans Neo', sans-serif", fontWeight: 700,
            fontSize: 10, letterSpacing: '0.18em', textShadow: '0 1px 6px rgba(0,0,0,0.5)',
          }}>HE / HIM</div>
        </div>
      </section>

      {/* story */}
      <section style={{ background: '#F8F6F0', padding: '0 24px 48px' }}>
        <div style={{
          background: lime, display: 'inline-block',
          padding: '6px 12px',
          fontFamily: "'Pretendard'", fontSize: 14, fontWeight: 700, color: ink,
          marginBottom: 18,
        }}>
          좋은 것을 깊이 들여다보는 해성은
        </div>
        <div className="ko-light" style={{
          fontSize: 16, lineHeight: 1.85, color: '#222',
          textWrap: 'pretty',
        }}>
          마음 속에 오래 머물던 생각들을<br/>
          하나의 경험으로 이어가게 되었습니다.<br/><br/>
          그녀의 에너지가, 제 생각을 <span style={{ background: lime, padding: '0 4px' }}>움직임</span>으로 바꿉니다.
        </div>

        {/* signature */}
        <div className="serif" style={{
          marginTop: 36, fontSize: 36, color: ink,
          transform: 'rotate(-3deg) translateX(8px)',
          display: 'inline-block',
        }}>
          Haeseong
        </div>
      </section>

      {/* meta — 3 facts */}
      <section style={{ background: ink, color: lime, padding: '40px 24px' }}>
        <div className="label-en" style={{ color: lime, opacity: 0.7, marginBottom: 18 }}>· FACTS</div>
        <div style={{ display: 'grid', gap: 22 }}>
          {[
            { k: 'PROFESSION', v: '제품 디자이너', s: 'Product Designer' },
            { k: 'LOVES',      v: '오래 보는 것들', s: 'Things that age well' },
            { k: 'A WORD',     v: '깊이', s: 'Depth' },
          ].map((f, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
              borderBottom: '1px solid rgba(216,242,58,0.2)', paddingBottom: 14,
            }}>
              <div className="label-en" style={{ color: lime, opacity: 0.6 }}>{f.k}</div>
              <div style={{ textAlign: 'right' }}>
                <div className="ko-med" style={{ fontSize: 17, color: lime }}>{f.v}</div>
                <div style={{ fontFamily: "'Spoqa Han Sans Neo', sans-serif", fontSize: 10, color: lime, opacity: 0.5, marginTop: 2, letterSpacing: '0.05em' }}>{f.s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* family + contact */}
      <section style={{ background: '#F8F6F0', padding: '48px 24px 32px' }}>
        <div className="label-en" style={{ marginBottom: 18 }}>· FAMILY</div>

        <div style={{
          border: `1px solid ${ink}`, padding: '22px 20px',
          background: '#fff', marginBottom: 18,
        }}>
          <div className="ko-light" style={{ fontSize: 13, color: '#666', marginBottom: 6 }}>
            <span style={{ color: ink }}>최교선</span>
            <span style={{ margin: '0 6px', opacity: 0.5 }}>·</span>
            <span style={{ color: ink }}>구지영</span>
            <span style={{ marginLeft: 6 }}>의 아들</span>
          </div>
          <div className="display" style={{ fontSize: 56, lineHeight: 0.9, color: ink }}>해성</div>
        </div>

        {/* contact rows */}
        <div className="label-en" style={{ marginBottom: 12 }}>· CONTACT</div>
        <ContactRow name="최해성" role="신랑" tel="010-1234-5678" lime={lime} ink={ink} primary />
        <ContactRow name="최교선" role="아버지" tel="010-2345-6789" lime={lime} ink={ink} />
        <ContactRow name="구지영" role="어머니" tel="010-3456-7890" lime={lime} ink={ink} />
      </section>

      {/* account CTA */}
      <section style={{ background: '#F8F6F0', padding: '12px 24px 56px' }}>
        <button onClick={() => openSheet('account-groom')} className="tap"
          style={{
            width: '100%', border: 'none', background: ink, color: lime,
            padding: '20px 18px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            fontFamily: "'Pretendard'",
          }}>
          <div style={{ textAlign: 'left' }}>
            <div className="label-en" style={{ color: lime, opacity: 0.6, marginBottom: 4 }}>GROOM SIDE</div>
            <div className="ko-med" style={{ fontSize: 15, color: lime }}>마음 전하실 곳 (신랑측)</div>
          </div>
          <span style={{ fontSize: 22 }}>→</span>
        </button>
      </section>

      {/* bottom band — go to bride */}
      <section style={{
        background: lime, padding: '40px 24px 28px',
      }}>
        <div className="label-en" style={{ marginBottom: 10, color: ink }}>· HER STORY</div>
        <button onClick={() => goTo('bride')} className="tap"
          style={{
            background: 'transparent', border: 'none', padding: 0, cursor: 'pointer',
            textAlign: 'left',
          }}>
          <div className="display" style={{
            fontSize: 64, color: ink, lineHeight: 0.88,
            display: 'flex', alignItems: 'flex-end', gap: 8,
          }}>
            윤채원
            <span style={{ fontSize: 20, transform: 'translateY(-8px)', opacity: 0.6 }}>↗</span>
          </div>
          <div className="serif" style={{ fontSize: 18, color: ink, opacity: 0.75, marginTop: 4 }}>
            Read Chaewon's story →
          </div>
        </button>
      </section>

      {/* back to main */}
      <section style={{ background: '#F8F6F0', padding: '36px 24px 80px', textAlign: 'center' }}>
        <button onClick={() => goTo('main')} className="tap"
          style={{
            background: 'transparent', border: `1px solid ${ink}`, color: ink,
            padding: '14px 28px', borderRadius: 99, cursor: 'pointer',
            fontFamily: "'Spoqa Han Sans Neo', sans-serif", fontWeight: 700, fontSize: 11,
            letterSpacing: '0.18em',
          }}>← 메인으로 돌아가기</button>
      </section>
    </div>
  );
}

function ContactRow({ name, role, tel, lime, ink, primary }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 0', borderBottom: '1px solid rgba(0,0,0,0.08)',
    }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span className="ko-med" style={{ fontSize: 15, color: ink }}>{name}</span>
          <span className="label-en" style={{ fontSize: 10 }}>{role}</span>
          {primary && <span style={{
            background: lime, color: ink,
            fontFamily: "'Spoqa Han Sans Neo', sans-serif", fontSize: 9, fontWeight: 700,
            padding: '2px 6px', letterSpacing: '0.14em', borderRadius: 2,
          }}>PRIMARY</span>}
        </div>
        <div className="num-mono" style={{ fontSize: 12, color: '#666', marginTop: 2 }}>{tel}</div>
      </div>
      <div style={{ display: 'flex', gap: 6 }}>
        <a href={`sms:${tel.replace(/-/g, '')}`} className="tap"
          style={{
            width: 36, height: 36, borderRadius: 99,
            border: `1px solid ${ink}`, background: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            textDecoration: 'none', color: ink, fontSize: 14,
          }}>💬</a>
        <a href={`tel:${tel.replace(/-/g, '')}`} className="tap"
          style={{
            width: 36, height: 36, borderRadius: 99,
            background: ink, color: lime,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            textDecoration: 'none', fontSize: 14,
          }}>📞</a>
      </div>
    </div>
  );
}

Object.assign(window, { GroomScreen, ContactRow });
