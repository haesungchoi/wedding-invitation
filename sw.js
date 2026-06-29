const CACHE = 'wedding-v3';
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

self.addEventListener('fetch', e => {
  const { request } = e;
  const url = new URL(request.url);

  // 외부 CDN(fonts, react) — 네트워크 우선, 캐시 폴백
  if (url.origin !== location.origin) {
    e.respondWith(
      fetch(request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(request, clone));
        return res;
      }).catch(() => caches.match(request))
    );
    return;
  }

  // 이미지 — 캐시 우선 (bandwidth 절감 핵심)
  if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url.pathname)) {
    e.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached;
        return fetch(request).then(res => {
          caches.open(CACHE).then(c => c.put(request, res.clone()));
          return res;
        });
      })
    );
    return;
  }

  // JS — 네트워크 우선 (항상 최신 코드 적용, 오프라인 시 캐시 폴백)
  //   캐시 우선이면 한 번 받은 옛 JS(pc-layout.js 등)가 계속 물려서
  //   수정 사항이 일부 기기(특히 PC)에 반영되지 않는 문제가 생긴다.
  if (/\.js$/i.test(url.pathname)) {
    e.respondWith(
      fetch(request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(request, clone));
        return res;
      }).catch(() => caches.match(request))
    );
    return;
  }

  // CSS/폰트 — 캐시 우선 (거의 변하지 않음)
  if (/\.(css|ttf|woff2?)$/i.test(url.pathname)) {
    e.respondWith(
      caches.match(request).then(cached => cached || fetch(request).then(res => {
        caches.open(CACHE).then(c => c.put(request, res.clone()));
        return res;
      }))
    );
    return;
  }

  // HTML — 네트워크 우선, 오프라인 폴백
  e.respondWith(
    fetch(request).then(res => {
      caches.open(CACHE).then(c => c.put(request, res.clone()));
      return res;
    }).catch(() => caches.match('./index.html'))
  );
});
