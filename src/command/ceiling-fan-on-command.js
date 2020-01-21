import Command from './command';

export default class CeilingFanOnCommand extends Command {
  constructor(ceilingFan) {
    super();
    this.ceilingFan = ceilingFan;
  }

  execute() {
    return this.ceilingFan.high();
  }
}
