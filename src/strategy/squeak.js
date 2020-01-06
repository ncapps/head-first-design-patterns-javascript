/* eslint class-methods-use-this: ["error", { "exceptMethods": ["quack"] }] */

import QuackBehavior from './quack-behavior';

export default class Squeak extends QuackBehavior {
  quack() {
    console.log('Squeak');
  }
}
