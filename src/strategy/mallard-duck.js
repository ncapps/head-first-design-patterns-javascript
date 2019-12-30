import Duck from './duck';
import FlyWithWings from './fly-with-wings';
import Quack from './quack';

export default class MallardDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
  }

  display() {
    console.log("I'm a real Mallard duck");
  }
}
