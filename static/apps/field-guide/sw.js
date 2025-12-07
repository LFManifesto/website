/**
 * Service Worker for LFM Field Guide
 * Enables offline functionality by caching app shell and data
 * Auto-updates and reloads clients when new version is available
 */

const CACHE_NAME = 'lfm-field-guide-v5';

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

// Install event - precache resources and skip waiting immediately
self.addEventListener('install', event => {
  console.log('[SW] Installing new version:', CACHE_NAME);
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Precaching app shell');
        const localPromise = cache.addAll(PRECACHE_URLS);
        const externalPromise = Promise.all(
          EXTERNAL_URLS.map(url =>
            fetch(url)
              .then(response => cache.put(url, response))
              .catch(() => console.log('[SW] Could not cache external:', url))
          )
        );
        return Promise.all([localPromise, externalPromise]);
      })
      .then(() => {
        console.log('[SW] Skip waiting - activating immediately');
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches and take control
self.addEventListener('activate', event => {
  console.log('[SW] Activating new version:', CACHE_NAME);
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(name => name.startsWith('lfm-field-guide-') && name !== CACHE_NAME)
            .map(name => {
              console.log('[SW] Deleting old cache:', name);
              return caches.delete(name);
            })
        );
      })
      .then(() => {
        console.log('[SW] Claiming all clients');
        return self.clients.claim();
      })
      .then(() => {
        // Notify all clients to reload
        return self.clients.matchAll({ type: 'window' });
      })
      .then(clients => {
        clients.forEach(client => {
          console.log('[SW] Notifying client to reload:', client.id);
          client.postMessage({ type: 'SW_UPDATED', version: CACHE_NAME });
        });
      })
  );
});

// Fetch event - network first for HTML, cache first for assets
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET') return;

  // Navigation requests (HTML) - network first
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.ok) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, responseToCache));
          }
          return response;
        })
        .catch(() => caches.match('/apps/field-guide/'))
    );
    return;
  }

  // Static assets - cache first with background update
  if (url.origin === self.location.origin || url.hostname === 'cdn.jsdelivr.net') {
    event.respondWith(
      caches.match(request)
        .then(cachedResponse => {
          const fetchPromise = fetch(request)
            .then(response => {
              if (response.ok) {
                caches.open(CACHE_NAME).then(cache => cache.put(request, response.clone()));
              }
              return response;
            })
            .catch(() => cachedResponse);

          return cachedResponse || fetchPromise;
        })
    );
  }
});

// Handle messages from clients
self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
  if (event.data === 'checkUpdate') {
    self.registration.update();
  }
});
