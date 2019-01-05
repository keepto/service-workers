// 注册
this.addEventListener('install', function (event) {
  console.log('Service Worker install');
  event.waitUntil(
    caches.open('img_storage').then(function (cache) {
      return cache.addAll([
        '/service-workers/img/1.jpg',
        '/service-workers/img/2.jpg'
      ])
    }));
})

// 激活
this.addEventListener('activate', function (event) {
  console.log('Service Worker activate');
})

this.addEventListener('message', function (event) {
  console.log(event.data); // this message is from page, to sw
  event.ports[0].postMessage('this message is from sw.js, to page');
});