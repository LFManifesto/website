/**
 * Reticulum Field Reference - Service Worker
 * Version 2.0 - Complete Rewrite
 */

const CACHE_NAME = 'reticulum-guide-v7';
const ASSETS = [
  '/apps/reticulum-guide/',
  '/apps/reticulum-guide/index.html',
  '/apps/reticulum-guide/app.js',
  '/apps/reticulum-guide/manifest.json',
  '/images/logo.png',
  'https://cdn.jsdelivr.net/npm/fuse.js@7.0.0/dist/fuse.min.js'
];

// Install - cache all assets
self.addEventListener('install', event => {
  console.log('[SW] Installing version', CACHE_NAME);
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Caching assets');
        return cache.addAll(ASSETS);
      })
      .then(() => {
        console.log('[SW] Skip waiting');
        return self.skipWaiting();
      })
  );
});

// Activate - clean old caches and notify clients
self.addEventListener('activate', event => {
  console.log('[SW] Activating version', CACHE_NAME);
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key.startsWith('reticulum-guide-') && key !== CACHE_NAME)
          .map(key => {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          })
      );
    }).then(() => {
      console.log('[SW] Claiming clients');
      return self.clients.claim();
    }).then(() => {
      // Notify all clients of the update
      return self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          console.log('[SW] Notifying client of update');
          client.postMessage({
            type: 'SW_UPDATED',
            version: CACHE_NAME
          });
        });
      });
    })
  );
});

// Fetch - network first for HTML/JS, cache first for static assets
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Network first for HTML and JS (get fresh content)
  if (event.request.destination === 'document' ||
      url.pathname.endsWith('.html') ||
      url.pathname.endsWith('.js')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
    return;
  }

  // Cache first for everything else
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(fetchResponse => {
          if (fetchResponse.ok) {
            const responseClone = fetchResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseClone);
            });
          }
          return fetchResponse;
        });
      })
  );
});
