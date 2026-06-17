# 모바일 청첩장 구조

## 파일 구성

```
index.html                ← 브라우저 진입점 (CSS, 폰트, 스크립트 로드)
├── app.jsx               ← App 루트: 뷰포트 분기, 라우팅, 팔레트, Tweaks 상태 관리
├── ios-frame.jsx         ← 폰 외곽 프레임 UI (모바일 전용)
├── tweaks-panel.jsx      ← 개발용 우측 패널 (폰트/팔레트/흑백/화면 전환)
├── pc-layout.jsx         ← PC/태블릿 전용 레이아웃 (≥768px)
├── image-slot.js         ← 사진 자리 커스텀 웹 컴포넌트
└── screens/
    ├── Main.jsx          ← 메인 화면 (항상 배경에 존재, 모바일)
    ├── Memories.jsx      ← 우리의 추억 (Instagram 스타일, 모바일)
    ├── Numbers.jsx       ← OUR STORY (숫자 스탯, 모바일)
    ├── Sheets.jsx        ← 오버레이 팝업들 (Map/RSVP/Account/Share/Calendar)
    ├── Dove.jsx          ← 화면 전환 비둘기 애니메이션
    ├── Groom.jsx         ← 신랑 스토리 (HIS STORY) — 미연동
    ├── Bride.jsx         ← 신부 스토리 (HER STORY) — 미연동
    └── Hero.jsx          ← 플레이스홀더 (Hero 섹션은 Main.jsx에 인라인)
```

---

## 컴포넌트 트리

### 모바일 (< 768px)

```
App (app.jsx)
└── IOSDevice 프레임 (ios-frame.jsx)  [tweaks.showFrame === true 시]
    └── [내부 390×830 캔버스]
        │
        ├── page-root: MainScreen (screens/Main.jsx)   ← 항상 배경에 존재
        │   ├── HEADER TICKER  — 상단 무한 스크롤 텍스트
        │   ├── HERO 섹션      — 이름, 라임 배경, 카운트다운, 커플 사진
        │   ├── THE DAY 섹션   — 09 / 12 날짜 대형 표시, 가족 이름
        │   ├── LOCATION 섹션  — 장소 버튼 → MapSheet 열기
        │   └── CLOSING 섹션   — "두 사람의 결혼을 축하해주세요"
        │
        ├── modal-sheet (Apple 스타일 아래서 슬라이드 업)
        │   ├── 상단 sheet-handle 바 스와이프 다운 → Main으로 복귀
        │   ├── MemoriesScreen (screens/Memories.jsx)
        │   │   ├── StoryViewer — 하이라이트/제안 사진 전체화면 뷰어
        │   │   ├── FollowingSheet — 팔로잉 드롭다운 시트
        │   │   ├── Instagram 프로필 헤더
        │   │   │   ├── 커플 사진 아바타 (인스타 그라데이션 링) → proposeImages 스토리
        │   │   │   ├── 게시물/∞/1 스탯
        │   │   │   ├── bio: 채원 ♡ 해성
        │   │   │   ├── 액션 버튼 (팔로잉 / 축하메시지 / 친구추가)
        │   │   │   └── 연도별 하이라이트 가로 스크롤 (2026~2021)
        │   │   └── 4탭 네비게이션
        │   │       ├── Grid    — 3열 사진 그리드 (실제 사진)
        │   │       ├── Feed    — 인스타 피드 (6개 게시물, PhotoCarousel)
        │   │       ├── Repost  — 관심사 (여행/음악/카페/영화/자연/음식)
        │   │       └── Mention — 방명록 GuestbookTab (이름+메시지+사진+비밀번호)
        │   │
        │   └── NumbersScreen (screens/Numbers.jsx)
        │       ├── 커플 사진 (hero)
        │       └── 숫자 스탯 (1914일 / 1 / ∞)
        │
        └── Overlay Sheets (screens/Sheets.jsx)
            ├── 상단 바 스와이프 다운 → 닫기 (공통)
            ├── MapSheet      — 지도 + 네이버/카카오/티맵 이동
            ├── RSVPSheet     — 참석 의사 전달 폼
            ├── AccountSheet  — 계좌번호 복사 (신랑측/신부측)
            ├── ShareSheet    — 링크/카카오/밴드 공유
            └── CalendarSheet — 결혼식 캘린더 저장
```

### PC / 태블릿 (≥ 768px)

```
App (app.jsx)
└── WideApp (pc-layout.jsx)   variant="pc"(≥1200) | "tablet"(768~1199)
    ├── PCHeader       — 고정 상단 내비 (CHAEWON·HAESEONG / 메뉴 / SHARE)
    ├── PCHeroSection  — 좌: 이름+날짜+CTA, 우: 커플 사진 (클릭 → 추억 섹션)
    ├── PCTickerBand   — 무한 스크롤 텍스트 띠
    ├── PCTheDaySection   — 09/12 대형 표시, 날짜/장소/가족 3열 그리드
    ├── PCMemoriesSection — Instagram 스타일 추억 섹션 (모바일과 동기화)
    │   ├── StoryViewer (fixed 오버레이) — 하이라이트 클릭 시 전체화면
    │   ├── 프로필 헤더
    │   │   ├── 커플 사진 아바타 (인스타 그라데이션 링) → proposeImages 스토리
    │   │   ├── 게시물/∞/1 스탯
    │   │   ├── bio: 채원 ♡ 해성
    │   │   ├── 액션 버튼 (팔로잉 / 축하메시지 / 친구추가)
    │   │   └── 연도별 하이라이트 가로 스크롤 (2026~2021)
    │   └── 4탭 네비게이션
    │       ├── Grid    — 4열(PC)/3열(태블릿) 사진 그리드 (실제 사진)
    │       ├── Feed    — 2열(PC)/1열(태블릿) 카드형 피드
    │       ├── Repost  — 6열 관심사 그리드
    │       └── Guestbook — 최대 720px 폼 (GuestbookTab 공용)
    ├── PCNumbersSection  — OUR STORY: 사진 + 1914/1/∞ 스탯
    ├── PCVenueSection    — VENUE / ACCOUNT / RSVP 카드
    └── PCClosingSection  — "두 사람의 결혼을 축하해주세요" + SHARE/RSVP

    [Overlay Sheets — 모바일과 공용 컴포넌트]
    ├── MapSheet / RSVPSheet / ShareSheet / AccountSheet / CalendarSheet
    └── FollowingSheet  — 팔로잉 드롭다운 (오시는 길/캘린더/계좌 연결)

TweaksPanel (tweaks-panel.jsx)
├── 영문 폰트 선택 (Bricolage / Gravitas / Limelight)
├── 컬러 팔레트 (Lime / Butter / Cobalt / Blossom)
└── 흑백 처리 토글

DoveTransition (screens/Dove.jsx)   — 모바일 화면 전환 비둘기 애니메이션
```

---

## 화면 전환 흐름 (모바일)

```
Main ──[커플 사진 탭]──▶ Memories   (아래서 슬라이드 업)

Main ──[LOCATION]───────▶ MapSheet   (스크림 오버레이)
어디서든 ──[SHARE]──────▶ ShareSheet
TweaksPanel ────────────▶ Numbers    (직접 점프 전용)

modal-sheet 상단 바 스와이프 다운 ──▶ Main (뒤로)
Overlay Sheet 상단 바 스와이프 다운 ──▶ 닫기
```

---

## 뷰포트 분기 (app.jsx)

| 조건 | variant | 레이아웃 |
|------|---------|---------|
| `window.innerWidth >= 1200` | `"pc"` | WideApp (pc-layout.jsx) |
| `768 ≤ width < 1200` | `"tablet"` | WideApp (pc-layout.jsx) |
| `width < 768` | `"mobile"` | IOSDevice 프레임 + Modal Sheet |

---

## Memories 게시물 데이터 (모바일/PC 공용)

| id | 날짜 | 사진 수 | 경로 |
|----|------|---------|------|
| mem-1 | 2026.09.12 | 4 | img/memories/studio-couple/ |
| mem-2 | 2026.09.12 | 1 | img/memories/studio-groom/ |
| mem-3 | 2026.09.12 | 6 | img/memories/studio-bride/ |
| mem-4 | 2025.11.08 | 1 | img/memories/snap-shanghai/ |
| mem-5 | 2025.10.18 | 5 | img/memories/snap-gyeongju/ |
| mem-6 | 2026.09.12 | 2 | img/memories/wedding-ng/ |

하이라이트: `img/highlights/{year}/{n}.jpg` (2021~2025, 각 10~17장)
제안 스토리: `img/memories/propose-newyork/newyork-{n}.jpg` (14장)

---

## 디자인 시스템

### CSS 변수 (index.html :root)

| 변수 | 기본값 | 설명 |
|------|--------|------|
| `--display-font` | Martian Mono | 영문 디스플레이 폰트 |
| `--lime` | #D4E607 | 포인트 컬러 (TweaksPanel에서 변경 가능) |
| `--lime-deep` | #BCC906 | 포인트 컬러 진한 버전 |
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
| Martian Mono | 영문 모노스페이스 (레이블/코드) |
| Michroma | 보조 영문 (라틴 전용) |

---

## window 전역 exports

Memories.jsx와 pc-layout.jsx가 개별 `<script>` 태그로 로드되므로 컴포넌트를 `window`에 등록해 공유한다.

**screens/Memories.jsx:**
`MemoriesScreen`, `FollowingSheet`, `MemoryPost`, `PhotoCarousel`, `CarouselBadge`, `GuestbookTab`, `HeartIcon`, `CommentIcon`, `SendIcon`, `StoryViewer`, `TabIconGrid`, `TabIconFeed`, `TabIconRepost`, `TabIconMention`

**screens/Main.jsx, Numbers.jsx, Sheets.jsx 등:**
각 파일에서 필요한 컴포넌트를 `Object.assign(window, {...})` 방식으로 등록.
