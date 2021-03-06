// 注册
this.addEventListener('install', function (event) {
  console.log('Service Worker install');
})


// 动态缓存静态资源
this.addEventListener('fetch', function (event) {
  event.respondWith(caches.match(event.request).then(function (response) {
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();
        console.log('caches:',caches)
        caches.open('v2').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('./img/star-wars-logo.jpg');
      });
    }
  }));
});

// 激活
this.addEventListener('activate', function (event) {
  console.log('Service Worker activate');
})

this.addEventListener('message', function (event) {
  console.log(event.data); // this message is from page, to sw
  event.ports[0].postMessage('this message is from sw.js, to page');
});