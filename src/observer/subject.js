export default class Subject {
  registerObserver(observer) {
    throw new Error('Abstract method');
  }
  removeObserver(observer) {
    throw new Error('Abstract method');
  }
  notifyObservers() {
    throw new Error('Abstract method');
  }
  setChanged() {
    throw new Error('Abstract method');
  }
}
