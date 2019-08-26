var PRECACHE = 'simple-user-list';
var RUNTIME = 'runtime'
var PRECACHE_URLS = [
  'index.html',
  './',
  'bundle.js'
];
var _self: any =  self
_self.addEventListener('install', (event: any) => {
    console.log(PRECACHE_URLS)
    event.waitUntil(
        caches.open(PRECACHE)
        .then(cache => cache.addAll(PRECACHE_URLS))
        .then(_self.skipWaiting())
    );
  }); 
  // The fetch handler serves responses for same-origin resources from a cache.
  // If no response is found, it populates the runtime cache with the response
  // from the network before returning it to the page.
_self.addEventListener('fetch', (event: any) => {
    // Skip cross-origin requests, like those for Google Analytics.
    if (event.request.url.startsWith(_self.location.origin)) {
      event.respondWith(
        caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
  
          return caches.open(RUNTIME).then(cache => {
            return fetch(event.request).then(response => {
              // Put a copy of the response in the runtime cache.
              return cache.put(event.request, response.clone()).then(() => {
                return response;
              });
            });
          });
        })
      );
    }
});