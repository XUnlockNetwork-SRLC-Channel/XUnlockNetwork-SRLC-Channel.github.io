navigator.getBattery()
  .then(function(battery) {
    (function init() {;
      updateLevelInfo();


      battery.addEventListener('levelchange', updateLevelInfo);
                          function updateLevelInfo() {
 
      let perc = battery.level * 100;
    document.getElementById("battery").innerHTML = (perc.toFixed(2) + '%');

    }]
