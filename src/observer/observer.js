export default class Observer {
  update(subject, arg) {
    throw new Error('Abstract method');
  }
  display() {
    throw new Error('Abstract method');
  }
}
