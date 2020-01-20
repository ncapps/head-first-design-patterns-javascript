import Command from './command';

export default class TVOffCommand extends Command {
  constructor(tv) {
    super();
    this.tv = tv;
  }

  execute() {
    return this.tv.off();
  }

  undo() {
    return `${this.tv.on()}`
    + ` ${this.tv.setInputChannel()}`;
  }
}
