if ('serviceWorker' in window.navigator) {
  navigator.serviceWorker.register('./sw.js', { scope: './' })
    .then(function (reg) {
      console.log('register success')
      this.addEventListener('install', function (event) {
        console.log('install');
        event.waitUntil(
          caches.open('img_storage').then(function (cache) {
            return cache.addAll([
              './img/1.jpg',
              './img/2.jpg'
            ])
          }
          ));
      });
    
    })
    .catch((err) => {
      console.log('register fail ',err)
    })
}