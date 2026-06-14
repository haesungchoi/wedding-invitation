# 모바일 청첩장 구조

## 파일 구성

```
Wedding Invitation.html   ← 브라우저 진입점 (CSS, 폰트, 스크립트 로드)
├── app.jsx               ← App 루트: 라우팅, 팔레트, Tweaks 상태 관리
├── ios-frame.jsx         ← 폰 외곽 프레임 UI
├── tweaks-panel.jsx      ← 개발용 우측 패널 (폰트/팔레트/흑백/화면 전환)
├── image-slot.js         ← 사진 자리 커스텀 웹 컴포넌트
└── screens/
    ├── Main.jsx          ← 메인 화면 (항상 배경에 존재)
    ├── Memories.jsx      ← 우리의 추억 (Instagram 스타일)
    ├── Numbers.jsx       ← OUR STORY (숫자 스탯)
    ├── Sheets.jsx        ← 오버레이 팝업들
    ├── Dove.jsx          ← 화면 전환 비둘기 애니메이션
    ├── Groom.jsx         ← 신랑 스토리 (HIS STORY) — 미연동, HTML 미로드
    ├── Bride.jsx         ← 신부 스토리 (HER STORY) — 미연동, HTML 미로드
    └── Hero.jsx          ← 플레이스홀더 (Hero 섹션은 Main.jsx에 인라인)
```

---

## 컴포넌트 트리

```
App (app.jsx)
├── IOSDevice 프레임 (ios-frame.jsx)
│   └── [내부 390×830 캔버스]
│       │
│       ├── page-root: MainScreen (screens/Main.jsx)   ← 항상 배경에 존재
│       │   ├── HEADER TICKER  — 상단 무한 스크롤 텍스트
│       │   ├── HERO 섹션      — 이름, 라임 배경, 카운트다운, 커플 사진
│       │   ├── THE DAY 섹션   — 09 / 12 날짜 대형 표시, 가족 이름
│       │   ├── LOCATION 섹션  — 장소 버튼 → MapSheet 열기
│       │   └── CLOSING 섹션   — "두 사람의 결혼을 축하해주세요"
│       │
│       ├── modal-sheet (Apple 스타일 아래서 슬라이드 업)
│       │   ├── 상단 sheet-handle 바 스와이프 다운 → Main으로 복귀
│       │   ├── MemoriesScreen (screens/Memories.jsx)
│       │   │   ├── Instagram 프로필 헤더 (아바타, 게시물 수, 하이라이트)
│       │   │   └── 4탭 네비게이션
│       │   │       ├── Grid    — 3열 사진 그리드
│       │   │       ├── Feed    — 인스타 피드 형식 (6개 게시물)
│       │   │       ├── Repost  — 관심사 (여행/음악/카페 등 6개)
│       │   │       └── Mention — 방명록 (이름+메시지+사진 입력)
│       │   │
│       │   └── NumbersScreen (screens/Numbers.jsx)
│       │       ├── 커플 사진 (hero)
│       │       └── 숫자 스탯 (1914일 / 1 / ∞)
│       │
│       └── Overlay Sheets (screens/Sheets.jsx)
│           ├── 상단 바 스와이프 다운 → 닫기 (공통)
│           ├── MapSheet      — 지도 + 네이버/카카오/티맵 이동
│           ├── RSVPSheet     — 참석 의사 전달 폼
│           ├── AccountSheet  — 계좌번호 복사 (신랑측/신부측)
│           └── ShareSheet    — 링크/카카오/밴드 공유
│
├── TweaksPanel (tweaks-panel.jsx)
│   ├── 영문 폰트 선택 (Bricolage / Gravitas / Limelight)
│   ├── 컬러 팔레트 (Lime / Butter / Cobalt / Blossom)
│   ├── 흑백 처리 토글
│   ├── iPhone 프레임 토글
│   └── 화면 점프 (Main / 추억 / Story)
│
└── DoveTransition (screens/Dove.jsx)
```

---

## 화면 전환 흐름

```
Main ──[커플 사진 탭]──▶ Memories   (아래서 슬라이드 업)

Main ──[LOCATION]───────▶ MapSheet   (스크림 오버레이)
어디서든 ──[SHARE]──────▶ ShareSheet
TweaksPanel ────────────▶ Numbers    (직접 점프 전용)

modal-sheet 상단 바 스와이프 다운 ──▶ Main (뒤로)
Overlay Sheet 상단 바 스와이프 다운 ──▶ 닫기
```

---

## 디자인 시스템

### CSS 변수 (Wedding Invitation.html :root)

| 변수 | 기본값 | 설명 |
|------|--------|------|
| `--display-font` | Bricolage Grotesque | 영문 디스플레이 폰트 |
| `--lime` | #D4E607 | 포인트 컬러 (TweaksPanel에서 변경 가능) |
| `--lime-deep` | #BCC926 | 포인트 컬러 진한 버전 |
| `--surface` | #F8F6F0 | 밝은 배경 |
| `--ink` | #111111 | 기본 텍스트/아이콘 색 |
| `--gray` | #767676 | 보조 텍스트 색 |
| `--line` | rgba(17,17,17,0.18) | 구분선 색 |

### 팔레트 옵션 (app.jsx PALETTES)

| 이름 | 포인트 컬러 | 잉크 |
|------|------------|------|
| Neon Lime | #D4E607 | #111111 |
| Butter Yellow | #F5E64B | #1E1A12 |
| Cobalt Pop | #3B6CFF | #0A0A1A |
| Blossom Pink | #FFB7C5 | #1A0F12 |

### 폰트

| 폰트 | 용도 |
|------|------|
| Bricolage Grotesque | 영문 디스플레이 (기본) |
| Gravitas One | 영문 디스플레이 (옵션) |
| Limelight | 영문 디스플레이 (옵션) |
| Pretendard | 한글 본문 |
| Michroma | 보조 영문 (라틴 전용) |
