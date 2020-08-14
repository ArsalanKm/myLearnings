class Timer {
  constructor(durationInput, startButoon, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButoon = startButoon;
    this.pauseButton = pauseButton;
    this.startButoon.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);

    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }
  }

  start = () => {
    if (this.onStart) this.onStart(this.timeRemaining);
    this.tick();
    this.intervalId = setInterval(this.tick, 50);
  };

  pause = () => {
    clearInterval(this.intervalId);
  };

  tick = () => {
    if (this.timeRemaining === 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 0.05;
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }
  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
}
