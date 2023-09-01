var dataCacheName = 'LHBOSOfflineCache-1';
var cacheName = 'LHBOSOfflineCache-1';
var filesToCache = [
  '/',
  '/LHBOS-icon (1).png',
  '/index.html',
  '/404.html',
  '/dummy-sw.js',
  '/offline.html',
  '/style.css',
  '/app.js',
  '/app.webmanifest',
'action.yml',
  'CacheSW.js',
  '/LHBOS',
  '/LHBOS/index.html',
  '/LHBOS/browser.html',
  '/LHBOS/app.js',
  '/LHBOS/app.webmanifest',
  '/LHBOS/PWAPASSER.js',
  '/LHBOS/js',
   '/LHBOS/js/LHBOS.js',
   '/LHBOS/js/Notification.js',
   '/LHBOS/js/FirmwareUpdated.js',
    '/LHBOS/css',
  '/LHBOS/css/appstyle.css',
  '/LHBOS/css/clockstyle.css',
];

// for offline mode
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});
