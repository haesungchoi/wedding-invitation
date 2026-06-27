const CACHE = 'wedding-v2';
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

  // JS/CSS — 캐시 우선
  if (/\.(js|css|ttf|woff2?)$/i.test(url.pathname)) {
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
