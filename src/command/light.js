export default class Light {
  constructor(location) {
    this.location = location;
  }

  on() {
    return (this.location) ? `${this.location} light is on` : 'Light is on';
  }

  off() {
    return (this.location) ? `${this.location} light is off` : 'Light is off';
  }
}
