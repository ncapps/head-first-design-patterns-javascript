import Command from './command';

export default class GarageDoorDownCommand extends Command {
  constructor(garageDoor) {
    super();
    this.garageDoor = garageDoor;
  }

  execute() {
    return this.garageDoor.down();
  }
}
