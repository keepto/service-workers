if ('serviceWorker' in window.navigator) {
  navigator.serviceWorker.register('./sw.js', { scope: './' })
    .then(function (reg) {
      console.log('register success')
      this.addEventListener('fetch', function (event) {
        console.log(event.request.url);
        event.respondWith(
          caches.match(event.request).then(res => {
            return res ||
              fetch(event.request)
                .then(responese => {
                  const responeseClone = responese.clone();
                  caches.open('sw_demo').then(cache => {
                    cache.put(event.request, responeseClone);
                  })
                  return responese;
                })
                .catch(err => {
                  console.log(err);
                });
          })
        )
      });
    })
    .catch((err) => {
      console.log('register fail ',err)
    })
}