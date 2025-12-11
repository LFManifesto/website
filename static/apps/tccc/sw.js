/**
 * TCCC App Service Worker
 * Provides offline support for emergency medical reference
 */

const CACHE_NAME = 'tccc-v2';
const ASSETS = [
  '/apps/tccc/',
  '/apps/tccc/index.html',
  '/apps/tccc/app.js',
  '/apps/tccc/manifest.json'
];

// Install - cache all assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate - clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch - cache first, then network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) {
          // Return cached version and update in background
          event.waitUntil(
            fetch(event.request)
              .then(response => {
                if (response.ok) {
                  caches.open(CACHE_NAME)
                    .then(cache => cache.put(event.request, response));
                }
              })
              .catch(() => {})
          );
          return cached;
        }

        // Not cached - fetch from network
        return fetch(event.request)
          .then(response => {
            if (response.ok && event.request.method === 'GET') {
              const clone = response.clone();
              caches.open(CACHE_NAME)
                .then(cache => cache.put(event.request, clone));
            }
            return response;
          });
      })
  );
});

// Handle messages from client
self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});
