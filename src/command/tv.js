export default class TV {
  constructor(location) {
    this.location = location;
    this.channel = 1;
  }

  on() {
    return `${this.location} TV is on`;
  }

  off() {
    return `${this.location} TV is off`;
  }

  setInputChannel() {
    this.channel = 3;
    return `${this.location} TV channel is set for DVD`;
  }
}
