export default class SimpleRemoteControl {
  constructor() {
    this.slot = null;
  }

  setCommand(command) {
    this.slot = command;
  }

  buttonWasPressed() {
    return this.slot.execute();
  }
}
