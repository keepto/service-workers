if ('serviceWorker' in window.navigator) {
  navigator.serviceWorker.register('./js/sw.js')
    .then(function (reg) {
      const messageChannel = new MessageChannel();
      console.log(messageChannel)
      messageChannel.port1.onmessage = e => {
        console.log(e.data); // this message is from sw.js, to page
      }
      reg.active.postMessage("this message is from page, to sw", [messageChannel.por2]);
    })
    .catch(() => {
      console.log('register error')
    })
}