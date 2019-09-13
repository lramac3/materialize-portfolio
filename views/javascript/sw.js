importScripts('/cache-polyfill.js')

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('materialize-portfolio').then(function (cache) {
      return cache.addAll([
        '/',
        '/views/index.html',
        '/views/css/style.css',
        '/views/images/',
        '/views/javascript/app.js',
        '/views/javascript/modernizr-custom.js',
        '/mail.js',
        '/server.js',
         '/package.json',
         '/.env'
      ])
    })
  )
})

self.addEventListener('fetch', function (event) {
  console.log(event.request.url)

  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request)
    })
  )
})

