function notifyUpdted() {
  var audio = new Audio('https://xunlocknetwork-srlc-channel.github.io/LHBOS/charge.mp3');

  if (!("Notification" in window)) {
    // Check if the browser supports notifications
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    // Check whether notification permissions have already been granted;
    // if so, create a notification
  const options = {
    body: "welcome To LHBOS Thank you for using",
    icon: "https://xunlocknetwork-srlc-channel.github.io/LHBOS-icon%20(1).png",
  };
  const n = new Notification("LHBOS Pre Release Canidiate", options);;
    audio.play();
    window.location.replace("http://xunlocknetwork-srlc-channel.github.io/LHBOS/mait.html);
    // …
  } else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
          const options = {
    body: "welcome To LHBOS Thank you for using",
    icon: "https://xunlocknetwork-srlc-channel.github.io/LHBOS-icon%20(1).png",
  };
  const n = new Notification("LHBOS Pre Release Canidiate", options);;
        // …
        audio.play();
           window.location.replace("http://xunlocknetwork-srlc-channel.github.io/LHBOS/mait.html);
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them anymore.
}
document.onload = notifyUpdted()
