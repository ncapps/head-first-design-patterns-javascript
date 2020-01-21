import Command from './command';

export default class GarageDoorOpenCommand extends Command {
  constructor(garageDoor) {
    super();
    this.garageDoor = garageDoor;
  }

  execute() {
    return this.garageDoor.up();
  }
}
