if ('serviceWorker' in window.navigator) {
  navigator.serviceWorker.register('./sw.js', { scope: './' })
    .then(function (reg) {
      const messageChannel = new MessageChannel();
      console.log(messageChannel)
      messageChannel.port1.onmessage = e => {
        console.log(e.data); // this message is from sw.js, to page
      }
      reg.active.postMessage("this message is from page, to sw", [messageChannel.port2]);
    })
    .catch((err) => {
      console.log('register fail ',err)
    })
}