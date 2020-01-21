import Command from './command';

export default class CeilingFanHighCommand extends Command {
  constructor(ceilingFan) {
    super();
    this.ceilingFan = ceilingFan;
    this.prevLevel = null;
  }

  execute() {
    this.prevLevel = this.ceilingFan.getSpeed();
    return this.ceilingFan.high();
  }

  undo() {
    switch (this.prevLevel) {
      case (this.ceilingFan.SPEED.HIGH):
        return this.ceilingFan.high();
      case (this.ceilingFan.SPEED.MEDIUM):
        return this.ceilingFan.medium();
      case (this.ceilingFan.SPEED.LOW):
        return this.ceilingFan.low();
      default:
        return this.ceilingFan.off();
    }
  }
}
