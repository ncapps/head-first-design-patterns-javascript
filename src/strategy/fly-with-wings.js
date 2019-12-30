import FlyBehavior from './fly-behavior';

export default class FlyWithWings extends FlyBehavior {
  constructor() {
    super();
  }

  fly() {
    console.log("I'm flying!");
  }
}
