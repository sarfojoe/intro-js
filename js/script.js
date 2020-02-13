var HOURHAND = document.querySelector("#hour");
var MINUTEHAND = document.querySelector("#minute");
var SECONDHAND = document.querySelector("#second");

function movearms() {
  var now = new Date(),
    hr = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    tick = 360 / 60; // angle of 1 tick

  var secondArmPosition = tick * sec,
    minuteArmPosition = tick * min + (sec / 60) * tick,
    hourArmPosition = tick * 5 * hr + (min / 60) * tick * 5;

  var deltaSec = (360 / 60) * sec, //angle move per second
    deltaMin = (360 / 60) * min,
    deltaHr = (360 / 60) * hr;

  var SECONDHAND = document.querySelector("#second"),
    HOURHAND = document.querySelector("#hour"),
    MINUTEHAND = document.querySelector("#minute");

  function update() {
    secondArmPosition += tick; //second arm moves extra 6/60 deg every sec
    minuteArmPosition += tick / 60; //minute arm moves extra 6/60 deg every sec
    hourArmPosition += tick / 60 / 60; //hour arm moves extra 6/60/60 deg every sec

    SECONDHAND.style.transform = "rotate(" + secondArmPosition + "deg)";
    HOURHAND.style.transform = "rotate(" + minuteArmPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + hourArmPosition + "deg)";
  }
  update();
  setInterval(update, 1000);
}

function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
ready(movearms);
