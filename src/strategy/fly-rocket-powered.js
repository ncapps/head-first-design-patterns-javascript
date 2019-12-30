import FlyBehavior from './fly-behavior';

export default class FlyRocketPowered extends FlyBehavior {
  constructor() {
    super();
  }

  fly() {
    console.log("I'm flying with a rocket!");
  }
}
