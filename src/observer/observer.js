/* eslint class-methods-use-this: ["error", { "exceptMethods": ["update", "display"] }] */
/* eslint no-unused-vars: ["error", { "args": "none" }] */
export default class Observer {
  update(subject, args) {
    throw new Error('Abstract method');
  }

  display() {
    throw new Error('Abstract method');
  }
}
