import { createElement } from './utils';

class Timer {
  constructor() {
    this.totalSeconds = 0;
    this.timerElement = createElement('div', 'timer', '00:00');
    this.counter = 0;
  }

  getTimerElement() {
    return this.timerElement;
  }

  getTime() {
    return this.timerElement.textContent;
  }

  startTimer() {
    if (this.counter === 0) {
      this.interval = setInterval(() => {
        this.totalSeconds += 1;
        const minutes = Math.floor(this.totalSeconds / 60);
        const seconds = this.totalSeconds % 60;
        this.timerElement.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      }, 1000);
    }
    this.counter += 1;
  }

  stopTimer() {
    clearInterval(this.interval);
  }

  resetTimer() {
    this.totalSeconds = 0;
    this.timerElement.textContent = '00:00';
    this.counter = 0;
  }
}

const timer = new Timer();
export { timer }
