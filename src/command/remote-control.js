import NoCommand from './no-command';

export default class RemoteControl {
  constructor() {
    this.onCommands = [];
    this.offCommands = [];
    const noCommand = new NoCommand();
    for (let i = 0; i < 7; i += 1) {
      this.onCommands[i] = noCommand;
      this.offCommands[i] = noCommand;
    }
  }

  setCommand(slot, onCommand, offCommand) {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  onButtonWasPushed(slot) {
    return this.onCommands[slot].execute();
  }

  offButtonWasPushed(slot) {
    return this.offCommands[slot].execute();
  }

  toString() {
    let string = '\n------ Remote Control ------\n';
    this.onCommands.forEach((value, index) => {
      string += `[slot ${index}] `
        + `${this.onCommands[index].constructor.name} `
        + `${this.offCommands[index].constructor.name}\n`;
    });
    return string;
  }
}
