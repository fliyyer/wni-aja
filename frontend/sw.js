// WNI Simulator Service Worker - Cache-First for 3D Assets & Media
const CACHE_NAME = "wni-assets-v4";

const CACHE_MATCH_PREFIXES = [
  "/models/",
  "/textures/",
  "/fonts/",
  "/audio/",
  "/cards/",
  "/cities/",
  "/pawns/"
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Only intercept GET requests originating from same host
  if (event.request.method !== "GET" || url.origin !== location.origin) {
    return;
  }

  const isGameAsset = CACHE_MATCH_PREFIXES.some((prefix) => url.pathname.startsWith(prefix));
  if (!isGameAsset) {
    return;
  }

  // Cache-First strategy: Return cached version immediately for 0ms latency, otherwise fetch & cache
  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(event.request);
      if (cached) {
        return cached;
      }

      try {
        const response = await fetch(event.request);
        if (response && response.status === 200) {
          cache.put(event.request, response.clone());
        }
        return response;
      } catch (err) {
        return cached || Response.error();
      }
    })
  );
});
