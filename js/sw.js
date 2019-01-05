// 注册
this.addEventListener('install', function (event) {
  console.log('Service Worker install');
})

// 激活
this.addEventListener('activate', function (event) {
  console.log('Service Worker activate');
})

this.addEventListener('message', function (event) {
  console.log(event.data); // this message is from page, to sw
  event.ports[0].postMessage('this message is from sw.js, to page');
});