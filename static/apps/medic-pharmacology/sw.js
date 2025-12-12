const CACHE_NAME = 'lf-medic-pharmacology-v4';
const urlsToCache = [
  './',
  './index.html',
  './app.js',
  './manifest.json'
];

// Install: cache files and take over immediately
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// Activate: delete old caches and claim clients immediately
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name.startsWith('lf-medic-pharmacology-') && name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    }).then(() => self.clients.claim())
      .then(() => {
        // Notify all clients to reload
        self.clients.matchAll().then(clients => {
          clients.forEach(client => client.postMessage({ type: 'SW_UPDATED' }));
        });
      })
  );
});

// Fetch: network-first for HTML/JS, cache-first for other assets
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Network-first for HTML and JS files (always get fresh content)
  if (event.request.destination === 'document' ||
      url.pathname.endsWith('.html') ||
      url.pathname.endsWith('.js')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseToCache));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Cache-first for other assets (images, manifest, etc.)
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) return response;
        return fetch(event.request).then(response => {
          if (!response || response.status !== 200 || response.type !== 'basic') return response;
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseToCache));
          return response;
        });
      })
  );
});
