class Base {
  constructor() {
    this.events = {};
  }
  on(event, callback) {
    if (!Array.isArray(this.events[event])) {
      this.events[event] = [];
    }
    this.events[event].push(callback.bind(this));
  }
  trigger(event, ...args) {
    if (Array.isArray(this.events[event])) {
      this.events[event].forEach((callback) => callback(...args));
    }
  }
}

module.exports = Base