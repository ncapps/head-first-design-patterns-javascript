import Duck from "./duck";
import FlyNoWay from "./fly-no-way";
import Squeak from "./squeak";

export default class ModelDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new Squeak();
  }

  display() {
    console.log("I'm a model duck");
  }
}
