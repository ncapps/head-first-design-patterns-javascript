import Command from './command';

export default class LightOffCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    return this.light.off();
  }

  undo() {
    return this.light.on();
  }
}
