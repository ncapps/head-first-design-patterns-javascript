import Command from './command';

export default class StereoOnWithCDCommand extends Command {
  constructor(stereo) {
    super();
    this.stereo = stereo;
  }

  execute() {
    return `${this.stereo.on()}\n`
    + `${this.stereo.setCD()}\n`
    + `${this.stereo.setVolume(11)}`;
  }
}
