# Main.jsx — 텍스트 목록

모든 텍스트를 섹션별로 정리했습니다. 줄 번호를 참고해 직접 수정하세요.

한국어 폰트 굵기는 `Wedding Invitation.html` `:root` 블록에서 통합 관리합니다:
```css
--ko-light: 300;
--ko-reg:   400;
--ko-med:   500;
--ko-bold:  700;
```

---

## TICKER (상단 흐르는 텍스트)

| 줄 | 텍스트 | 폰트 | 굵기 |
|---|---|---|---|
| 23 | `Welcome to our wedding ✦` | Martian Mono (상속) | — |

---

## HERO 섹션

| 줄 | 텍스트 | 폰트 | 굵기 | 크기 | 비고 |
|---|---|---|---|---|---|
| 58 | `CHAEWON  ·  HAESEONG` | Martian Mono (`.label-en`) | — | — | 상단 좌측 레이블, opacity 0.7 |
| 66 | `WEDDING` / `INVITATION` | Martian Mono | 400 | 64px | 우측 세로 회전, fontStretch 100% |
| 77 | `윤채원` | Pretendard | **600** | 88px | 신부 이름 |
| 80 | `Chaewon Yun` | Martian Mono | — | 22px | 신부 영문 이름 |
| 89 | `and` | Martian Mono (`.serif`) | — | 26px | 이름 사이 구분자 |
| 97 | `최해성` | Pretendard | — | 88px | 신랑 이름 |
| 100 | `Haeseong Choi` | Martian Mono | — | 22px | 신랑 영문 이름 |
| 113 | `LOCATION ↓` | Martian Mono | 600 | 9px | 우측 버튼 |
| 120 | `ACCOUNTS ↓` | Martian Mono | 600 | 9px | 우측 버튼 |
| 166 | `우리의 추억 보기` / `↗` | Pretendard | 700 | 9px | 사진 위 뱃지 |
| 177 | `2026.09.12` | Martian Mono | 300 | 16px | 하단 날짜 (좌), fontStretch 75% |
| 184 | `삼성전자 서초사옥` | Pretendard | 600 | 16px | 하단 장소 버튼 (우) |

---

## THE DAY 섹션

| 줄 | 텍스트 | 폰트 | 굵기 | 크기 | 비고 |
|---|---|---|---|---|---|
| 194 | `· THE DAY` | Martian Mono (`.label-en`) | — | — | 섹션 레이블 |
| 202 | `09` | Martian Mono | — | 120px | 대형 숫자 (좌), fontStretch 112.5% |
| 207 | `12` | Martian Mono | — | 120px | 대형 숫자 (우), fontStretch 112.5% |
| 215 | `2026년 9월 12일` | Pretendard | 400 | 20px | 날짜 |
| 216 | `토요일 오후 1시` | Pretendard | 400 | 20px | 시간 |
| 223 | `삼성전자 서초사옥` | Pretendard (`.ko-med`) | `--ko-med` | 20px | 장소명 |
| 224 | `5층 웨딩홀` | Pretendard (`.ko-light`) | `--ko-light` | 20px | 장소 상세 |
| 229 | `· FAMILY` | Martian Mono (`.label-en`) | — | — | 가족 섹션 레이블 |
| 235 | `최교선` | Pretendard (`.ko-reg`) | `--ko-reg` | 20px | 신랑 부 |
| 237 | `구지영` | Pretendard (`.ko-reg`) | `--ko-reg` | 20px | 신랑 모 |
| 238 | `의 아들` | Pretendard (`.ko-reg`) | `--ko-reg` | 16px | 관계 표기 |
| 240 | `해성` | Pretendard | 400 | 20px | 신랑 이름 (우측) |
| 245 | `윤재경` | Pretendard (`.ko-reg`) | `--ko-reg` | 20px | 신부 부 |
| 247 | `공명아` | Pretendard (`.ko-reg`) | `--ko-reg` | 20px | 신부 모 |
| 248 | `의 딸` | Pretendard (`.ko-reg`) | `--ko-reg` | 16px | 관계 표기 |
| 250 | `채원` | Pretendard | 400 | 20px | 신부 이름 (우측) |
| 259 | `두 사람의 이야기가 하나가 되는 날,` | Pretendard (`.ko-light`) | `--ko-light` | 14px | 하단 문구 |
| 260 | `함께 축복해 주세요` | Pretendard (`.ko-light`) | `--ko-light` | 14px | 하단 문구 |

---

## CTA 섹션 (VENUE / ACCOUNT 박스)

| 줄 | 텍스트 | 폰트 | 굵기 | 크기 | 비고 |
|---|---|---|---|---|---|
| 302 | `VENUE` | Martian Mono (`.label-en`) | — | — | 박스 레이블 |
| 303 | `삼성전자 서초사옥 5층` | Pretendard (`.ko-med`) | `--ko-med` | 16px | 장소명 |
| 304 | `오시는 길 보기` | Pretendard (`.ko-light`) | `--ko-light` | 13px | 안내 문구 |
| 306 | `→` | Pretendard (상속) | — | 22px | 화살표 |
| 322 | `ACCOUNT` | Martian Mono (`.label-en`) | — | — | 박스 레이블 |
| 323 | `마음 전하실 곳` | Pretendard (`.ko-med`) | `--ko-med` | 16px | 계좌 섹션 제목 |
| 324 | `계좌 번호 보기` | Pretendard (`.ko-light`) | `--ko-light` | 13px | 안내 문구 |
| 326 | `→` | Pretendard (상속) | — | 22px | 화살표 |

---

## CLOSING 섹션

| 줄 | 텍스트 | 폰트 | 굵기 | 크기 | 비고 |
|---|---|---|---|---|---|
| 344 | `두 사람의 결혼을` / `축하해주세요` | Pretendard | 500 | 40px | 메인 문구 |
| 350 | `CHAEWON  ·  HAESEONG` | Martian Mono (`.label-en`) | — | — | 하단 좌측 레이블 |
| 351 | `2026.09.12` | Martian Mono | 300 | 13px | 하단 우측 날짜, fontStretch 100% |
