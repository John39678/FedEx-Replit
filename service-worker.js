const CACHE_NAME = "fedex-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icon.png",
  "https://unpkg.com/html2pdf.js@0.9.2/dist/html2pdf.bundle.min.js",
  "https://unpkg.com/@zxing/library@latest"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
