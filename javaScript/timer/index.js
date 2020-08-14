const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");

const priemeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", priemeter);

let duration = 0;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (priemeter * timeRemaining) / duration - priemeter
    );
  },
  onComplete() {
    alert("time is up")
  },
});
