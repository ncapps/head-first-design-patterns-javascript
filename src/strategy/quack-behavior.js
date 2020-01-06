/* eslint class-methods-use-this: ["error", { "exceptMethods": ["quack"] }] */

export default class QuackBehavior {
  quack() {
    throw new Error('Abstract method');
  }
}
