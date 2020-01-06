/* eslint class-methods-use-this: ["error", { "exceptMethods": ["quack"] }] */

import QuackBehavior from './quack-behavior';

export default class MuteQuack extends QuackBehavior {
  quack() {
    console.log('<< Silence >>');
  }
}
