/**
 * Reticulum Field Reference - Service Worker
 * Version 1.0
 */

const CACHE_NAME = 'reticulum-guide-v1';
const ASSETS = [
  '/apps/reticulum-guide/',
  '/apps/reticulum-guide/index.html',
  '/apps/reticulum-guide/app.js',
  '/apps/reticulum-guide/data/overview.json',
  '/apps/reticulum-guide/data/interfaces.json',
  '/apps/reticulum-guide/data/hardware.json',
  '/apps/reticulum-guide/data/nomadnet.json',
  '/apps/reticulum-guide/data/lxmf.json',
  '/apps/reticulum-guide/data/utilities.json',
  '/apps/reticulum-guide/data/troubleshooting.json',
  '/images/logo.png'
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
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    }).then(() => {
      self.clients.claim();
      // Notify clients of update
      self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({ type: 'SW_UPDATED' });
        });
      });
    })
  );
});

// Fetch - cache first, then network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          // Return cached version, but update in background
          fetch(event.request).then(freshResponse => {
            if (freshResponse.ok) {
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, freshResponse);
              });
            }
          }).catch(() => {});
          return response;
        }
        return fetch(event.request);
      })
  );
});
