// 캐시 버전 — 배포 시 이 값만 올리면 activate 단계에서 구버전 캐시를 전부 비운다.
const VERSION = 'v4-20260630a';
const CACHE = `wedding-${VERSION}`;
const PRECACHE = [
  './',
  './index.html',
  './dist/app.js',
  './dist/screens/Main.js',
  './dist/screens/Memories.js',
  './dist/screens/Sheets.js',
  './dist/screens/Numbers.js',
  './dist/screens/Dove.js',
  './dist/ios-frame.js',
  './dist/pc-layout.js',
  './image-slot.js',
  './img/couple-main.jpg',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// ── 전략 헬퍼 ────────────────────────────────────────────────
// 네트워크 우선: 항상 서버에 재검증(no-cache)해 묵은 HTTP 캐시를 건너뛴다.
//   성공 시 캐시 갱신, 실패(오프라인) 시 캐시 폴백.
function networkFirst(request, fallback) {
  return fetch(request, { cache: 'no-cache' })
    .then(res => {
      const clone = res.clone();
      caches.open(CACHE).then(c => c.put(request, clone));
      return res;
    })
    .catch(() => caches.match(request).then(c => c || (fallback ? caches.match(fallback) : undefined)));
}

// Stale-While-Revalidate: 캐시본을 즉시 반환(빠름)하면서
//   백그라운드로 새 버전을 받아 캐시를 갱신 → 다음 방문 때 자동 반영.
//   같은 파일명으로 사진/CSS를 교체해도 한 번 더 열면 최신본이 보인다.
function staleWhileRevalidate(request) {
  return caches.open(CACHE).then(cache =>
    cache.match(request).then(cached => {
      const networkFetch = fetch(request)
        .then(res => {
          if (res && res.ok) cache.put(request, res.clone());
          return res;
        })
        .catch(() => cached);
      return cached || networkFetch;
    })
  );
}

self.addEventListener('fetch', e => {
  const { request } = e;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);

  // 방명록 API(구글 Apps Script) — 항상 실시간 데이터.
  //   SW가 절대 가로채거나 캐시하지 않도록 통과시킨다(쌓이는 축하메시지 실시간 반영).
  if (/script\.google(usercontent)?\.com$/.test(url.hostname)) {
    return;
  }

  // 외부 CDN(fonts, react) — 네트워크 우선, 캐시 폴백
  if (url.origin !== location.origin) {
    e.respondWith(networkFirst(request));
    return;
  }

  // 이미지 — stale-while-revalidate (즉시 표시 + 백그라운드 갱신)
  if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url.pathname)) {
    e.respondWith(staleWhileRevalidate(request));
    return;
  }

  // JS — 네트워크 우선 (항상 최신 코드 적용, 오프라인 시 캐시 폴백)
  if (/\.js$/i.test(url.pathname)) {
    e.respondWith(networkFirst(request));
    return;
  }

  // CSS/폰트 — stale-while-revalidate (즉시 표시 + 백그라운드 갱신)
  if (/\.(css|ttf|woff2?)$/i.test(url.pathname)) {
    e.respondWith(staleWhileRevalidate(request));
    return;
  }

  // HTML/내비게이션 — 네트워크 우선, 오프라인 폴백
  e.respondWith(networkFirst(request, './index.html'));
});

// 페이지에서 SKIP_WAITING 메시지를 보내면 대기 중인 새 SW를 즉시 활성화
self.addEventListener('message', e => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});
