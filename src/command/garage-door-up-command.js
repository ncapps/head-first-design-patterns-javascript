import Command from './command';

export default class GarageDoorUpCommand extends Command {
  constructor(garageDoor) {
    super();
    this.garageDoor = garageDoor;
  }

  execute() {
    return this.garageDoor.up();
  }
}
