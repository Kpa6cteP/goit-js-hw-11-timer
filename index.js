import buildCountdownTimer from "./template.js";

class CountdownTimer {
  constructor({selector, targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate;
    buildCountdownTimer(this.selector);
    this.days = document.querySelector('[data-value="days"]'),
    this.hours = document.querySelector('[data-value="hours"]'),
    this.mins = document.querySelector('[data-value="mins"]'),
    this.secs = document.querySelector('[data-value="secs"]')
  }

  onTimer() {
    this.updateClockface(this.targetDate - Date.now());
    setInterval(() => {
      this.updateClockface(this.targetDate - Date.now());
    }, 1000);
  }

  updateClockface(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    this.days.textContent = days;
    this.hours.textContent = hours;
    this.mins.textContent = minutes;
    this.secs.textContent = seconds;
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

let timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 06, 2020'),
});
timer.onTimer();