if ('serviceWorker' in window.navigator) {
  navigator.serviceWorker.register('/service-workers/sw.js', { scope: '/service-workers/' })
    .then(function (reg) {
      console.log('register success')
      this.addEventListener('install', function (event) {
        console.log('install');
        event.waitUntil(
          caches.open('img_storage').then(function (cache) {
            return cache.addAll([
              '/service-workers/img/1.jpg',
              '/service-workers/img/2.jpg'
            ])
          }
          ));
      });
    
    })
    .catch((err) => {
      console.log('register fail ',err)
    })
}