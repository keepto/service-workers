if ('serviceWorker' in window.navigator) {
  navigator.serviceWorker.register('/service-workers/sw.js', { scope: '/service-workers/' })
    .then(function (reg) {
      console.log('register success')
    
    })
    .catch((err) => {
      console.log('register fail ',err)
    })
}