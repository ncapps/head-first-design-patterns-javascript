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
    this.undoCommand = noCommand;
  }

  setCommand(slot, onCommand, offCommand) {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  onButtonWasPushed(slot) {
    this.undoCommand = this.onCommands[slot];
    return this.onCommands[slot].execute();
  }

  offButtonWasPushed(slot) {
    this.undoCommand = this.offCommands[slot];
    return this.offCommands[slot].execute();
  }

  undoButtonWasPushed() {
    return this.undoCommand.undo();
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
