/**
 * Service Worker for LFM Field Guide
 * Enables offline functionality by caching app shell and data
 */

const CACHE_NAME = 'lfm-field-guide-v1';

// Files to cache on install
const PRECACHE_URLS = [
  '/apps/field-guide/',
  '/apps/field-guide/index.html',
  '/apps/field-guide/app.js',
  '/apps/field-guide/manifest.json',
  '/apps/field-guide/data/drones.json',
  '/apps/field-guide/data/communications.json',
  '/apps/field-guide/data/sigint.json',
  '/apps/field-guide/data/marksmanship.json',
  '/images/logo.png'
];

// External resources to cache
const EXTERNAL_URLS = [
  'https://cdn.jsdelivr.net/npm/fuse.js@7.0.0/dist/fuse.min.js'
];

// Install event - precache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Precaching app shell');
        // Cache local files
        const localPromise = cache.addAll(PRECACHE_URLS);
        // Cache external files (may fail if offline during install)
        const externalPromise = Promise.all(
          EXTERNAL_URLS.map(url =>
            fetch(url)
              .then(response => cache.put(url, response))
              .catch(() => console.log('[SW] Could not cache external:', url))
          )
        );
        return Promise.all([localPromise, externalPromise]);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(name => name !== CACHE_NAME)
            .map(name => {
              console.log('[SW] Deleting old cache:', name);
              return caches.delete(name);
            })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle GET requests
  if (request.method !== 'GET') return;

  // Handle same-origin and CDN requests
  if (url.origin === self.location.origin || url.hostname === 'cdn.jsdelivr.net') {
    event.respondWith(
      caches.match(request)
        .then(cachedResponse => {
          if (cachedResponse) {
            // Return cached response, but also fetch and update cache in background
            if (url.origin === self.location.origin) {
              event.waitUntil(
                fetch(request)
                  .then(response => {
                    if (response.ok) {
                      caches.open(CACHE_NAME)
                        .then(cache => cache.put(request, response));
                    }
                  })
                  .catch(() => {}) // Ignore network errors
              );
            }
            return cachedResponse;
          }

          // Not in cache, fetch from network
          return fetch(request)
            .then(response => {
              if (!response.ok) {
                return response;
              }

              // Clone response for cache
              const responseToCache = response.clone();
              caches.open(CACHE_NAME)
                .then(cache => cache.put(request, responseToCache));

              return response;
            })
            .catch(() => {
              // Network failed and not in cache
              // Return offline page for navigation requests
              if (request.mode === 'navigate') {
                return caches.match('/apps/field-guide/');
              }
              return new Response('Offline', { status: 503 });
            });
        })
    );
  }
});

// Handle messages from clients
self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});
