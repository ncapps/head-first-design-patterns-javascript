import Command from './command';

export default class LightOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    return this.light.on();
  }

  undo() {
    return this.light.off();
  }
}
