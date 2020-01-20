import Command from './command';

export default class StereoOffCommand extends Command {
  constructor(stereo) {
    super();
    this.stereo = stereo;
  }

  execute() {
    return this.stereo.off();
  }
}
