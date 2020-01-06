/* eslint class-methods-use-this: ["error", { "exceptMethods": ["fly"] }] */

import FlyBehavior from './fly-behavior';

export default class FlyWithWings extends FlyBehavior {
  fly() {
    console.log("I'm flying!");
  }
}
