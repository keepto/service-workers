// 注册
this.addEventListener('install', function (event) {
  console.log('Service Worker install');
})

// 激活
this.addEventListener('activate', function (event) {
  console.log('Service Worker activate');
})