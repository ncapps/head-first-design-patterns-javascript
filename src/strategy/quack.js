/* eslint class-methods-use-this: ["error", { "exceptMethods": ["quack"] }] */

import QuackBehavior from './quack-behavior';

export default class Quack extends QuackBehavior {
  quack() {
    console.log('Quack');
  }
}
