if ('serviceWorker' in window.navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(function (reg) {
      console.log('register success')
    
    })
    .catch((err) => {
      console.log('register fail ',err)
    })
}