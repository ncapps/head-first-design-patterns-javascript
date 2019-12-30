import FlyBehavior from './fly-behavior';

export default class FlyNoWay extends FlyBehavior {
  constructor() {
    super();
  }

  fly() {
    console.log("I can't fly");
  }
}
