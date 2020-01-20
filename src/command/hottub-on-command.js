import Command from './command';

export default class HottubOnCommand extends Command {
  constructor(hottub) {
    super();
    this.hottub = hottub;
  }

  execute() {
    this.hottub.on();
    return `${this.hottub.setTemperature(104)}\n`
    + `${this.hottub.circulate()}`;
  }

  undo() {
    return this.hottub.off();
  }
}
