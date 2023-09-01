function notifyUpdted() {
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
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them anymore.
}
document.onload = notifyUpdted()
