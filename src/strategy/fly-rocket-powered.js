/* eslint class-methods-use-this: ["error", { "exceptMethods": ["fly"] }] */

import FlyBehavior from './fly-behavior';

export default class FlyRocketPowered extends FlyBehavior {
  fly() {
    console.log("I'm flying with a rocket!");
  }
}
