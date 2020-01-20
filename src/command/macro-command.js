import Command from './command';

export default class MacroCommand extends Command {
  constructor(commands) {
    super();
    this.commands = commands;
  }

  execute() {
    let result = '';
    this.commands.forEach((element) => {
      result += `${element.execute()}\n`;
    });
    return result;
  }

  undo() {
    let result = '';
    for (let i = this.commands.length - 1; i >= 0; i -= 1) {
      result += `${this.commands[i].undo()}\n`;
    }
    return result;
  }
}
