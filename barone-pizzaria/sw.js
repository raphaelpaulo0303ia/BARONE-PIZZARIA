self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('barone-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/src/main.jsx',
        '/src/App.jsx',
        '/favicon.png',
        '/manifest.webmanifest'
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== 'barone-cache') {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
