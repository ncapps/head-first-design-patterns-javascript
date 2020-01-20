export default class CeilingFan {
  constructor(location) {
    this.SPEED = {
      HIGH: 3,
      MEDIUM: 2,
      LOW: 1,
      OFF: 0,
    };
    this.location = location;
    this.level = this.SPEED.MEDIUM;
  }

  high() {
    this.level = this.SPEED.HIGH;
    return `${this.location} ceiling fan is on high`;
  }

  medium() {
    this.level = this.SPEED.MEDIUM;
    return `${this.location} ceiling fan is on medium`;
  }

  low() {
    this.level = this.SPEED.LOW;
    return `${this.location} ceiling fan is on low`;
  }

  off() {
    this.level = this.SPEED.OFF;
    return `${this.location} ceiling fan is off`;
  }

  getSpeed() {
    return this.level;
  }
}
