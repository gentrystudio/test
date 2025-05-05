self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('project-terminal').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/styles.css',
        '/manifest.json',
        '/pages/log-042.html',
        '/pages/archive.html'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
