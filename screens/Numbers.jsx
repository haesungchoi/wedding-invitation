/* NUMBERS DETAIL — opened from "THE TWO" photo on Main */

function NumbersScreen({ goTo, openSheet, tweaks }) {
  const lime = tweaks.lime;
  const ink = tweaks.ink;

  const stats = [
    {
      n: '1914',
      t: '처음 만난 날부터 결혼하는 날까지',
      d: ['1,914일을 함께 걸어왔습니다', '그 모든 날이 오늘을 만들었습니다']
    },
    {
      n: '1',
      t: '이제, 하나가 됩니다',
      d: ['각자의 이야기를 써온 두 사람이', '오늘부터 같은 페이지를 씁니다']
    },
    {
      n: '∞',
      t: '오늘부터, 영원히',
      d: ['서로를 완성하기보다,', '함께 무한히 삶을 만들어가려 합니다']
    }
  ];

  return (
    <div className="inv-screen" data-screen-label="04 Numbers · 함께한 시간">
      {/* sticky top bar */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 5,
        padding: '58px 20px 14px',
        background: 'rgba(212, 230, 7,0.92)',
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
        <div className="label-en">OUR STORY</div>
      </div>

      {/* hero photo */}
      <section style={{ background: lime, padding: '8px 24px 32px' }}>
        <div className="label-en" style={{ marginBottom: 10 }}>· NUMBERS</div>
        <div className="display agrandir" style={{
          lineHeight: 0.86, color: ink, fontSize: 56,
          marginBottom: 22, letterSpacing: '-0.02em'
        }}>
          The Two
        </div>

        <div style={{
          position: 'relative', overflow: 'hidden',
          aspectRatio: '4/5'
        }}>
          <img src="img/couple-main.jpg" alt="couple"
            className={tweaks.bw ? 'bw kenburns' : 'kenburns'}
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              objectPosition: 'center 35%'
            }} />
        </div>
      </section>

      {/* stats */}
      <section style={{ background: lime, padding: '24px 24px 56px' }}>
        <div style={{ display: 'grid', gap: 0 }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              paddingTop: i === 0 ? 0 : 28,
              paddingBottom: 28,
              borderBottom: i === stats.length - 1 ? 'none' : `1px solid ${ink}`
            }}>
              <div className="display agrandir" style={{
                fontSize: 88, color: ink, lineHeight: 0.95,
                letterSpacing: '-0.02em', marginBottom: 14
              }}>
                {s.n}
              </div>
              <div className="ko-bold" style={{
                fontSize: 18, color: ink, marginBottom: 10,
                lineHeight: 1.3
              }}>
                {s.t}
              </div>
              <div className="ko-light" style={{
                fontSize: 14, color: ink, opacity: 0.85,
                lineHeight: 1.65
              }}>
                {s.d.map((line, j) => (
                  <div key={j}>{line}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
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
    </div>
  );
}

Object.assign(window, { NumbersScreen });
