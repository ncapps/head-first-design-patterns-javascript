export default class GarageDoor {
  constructor(location) {
    this.location = location;
  }

  up() {
    return (this.location) ? `${this.location} garage door is open` : 'Garage door is open';
  }

  down() {
    return `${this.location} garage door is closed`;
  }

  stop() {
    return `${this.location} garage door is stopped`;
  }

  lightOn() {
    return `${this.location} garage light is on`;
  }

  lightOff() {
    return `${this.location} garage light is off`;
  }
}
