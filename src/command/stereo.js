export default class Stereo {
  constructor(location) {
    this.location = location;
  }

  on() {
    return `${this.location} stereo is on`;
  }

  off() {
    return `${this.location} stereo is off`;
  }

  setCD() {
    return `${this.location} stereo is set for CD input`;
  }

  setDVD() {
    return `${this.location} stereo is set for DVD input`;
  }

  setRadio() {
    return `${this.location} stereo is set for Radio`;
  }

  setVolume(volume) {
    return `${this.location} stereo volume set to ${volume}`;
  }
}
