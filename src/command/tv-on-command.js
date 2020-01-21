import Command from './command';

export default class TVOnCommand extends Command {
  constructor(tv) {
    super();
    this.tv = tv;
  }

  execute() {
    return `${this.tv.on()}\n`
    + `${this.tv.setInputChannel()}`;
  }

  undo() {
    return this.tv.off();
  }
}
