import Command from './command';

export default class HottubOffCommand extends Command {
  constructor(hottub) {
    super();
    this.hottub = hottub;
  }

  execute() {
    this.hottub.off();
    return this.hottub.setTemperature(98);
  }

  undo() {
    this.hottub.on();
    return `${this.hottub.setTemperature(104)}\n`
    + `${this.hottub.circulate()}\n`;
  }
}
