export default class Command {
  execute() {
    throw new Error('Abstract method');
  }

  undo() {
    throw new Error('Abstract method');
  }
}
