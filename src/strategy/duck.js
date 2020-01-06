/* eslint class-methods-use-this: ["error", { "exceptMethods": ["display", "swim"] }] */

import FlyBehavior from './fly-behavior';
import QuackBehavior from './quack-behavior';

export default class Duck {
  constructor() {
    this.flyBehavior = new FlyBehavior();
    this.quackBehavior = new QuackBehavior();
  }

  display() {
    throw new Error('Abstract method');
  }

  performFly() {
    this.flyBehavior.fly();
  }

  performQuack() {
    this.quackBehavior.quack();
  }

  swim() {
    console.log('All ducks float, even decoys!');
  }

  setFlyBehavior(fb) {
    this.flyBehavior = fb;
  }

  setQuackBehavior(qb) {
    this.quackBehavior = qb;
  }
}
