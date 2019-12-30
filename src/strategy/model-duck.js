import Duck from './duck';
import FlyNoWay from './fly-no-way';
import Quack from './quack';

export default class ModelDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new Quack();
  }

  display() {
    console.log("I'm a model duck");
  }
}
