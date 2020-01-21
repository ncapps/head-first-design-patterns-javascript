export default class Hottub {
  constructor() {
    this.temperature = null;
    this.isOn = false;
  }

  on() {
    this.isOn = true;
  }

  off() {
    this.isOn = false;
  }

  circulate() {
    return (this.isOn) ? 'Hottub is bubbling' : 'Hottub is off';
  }

  jetsOn() {
    return (this.isOn) ? 'Hottub jets are on' : 'Hottub is off';
  }

  jetsOff() {
    return (this.isOn) ? 'Hottub jets are off' : 'Hottub is off';
  }

  setTemperature(temperature) {
    let message = `Hottub is cooling to ${temperature} degrees`;
    if (temperature > this.temperature) {
      message = `Hottub is heating to a steaming ${temperature} degrees`;
    }
    this.temperature = temperature;
    return message;
  }
}
