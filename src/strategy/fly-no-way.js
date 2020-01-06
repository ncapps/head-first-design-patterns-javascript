/* eslint class-methods-use-this: ["error", { "exceptMethods": ["fly"] }] */

import FlyBehavior from './fly-behavior';

export default class FlyNoWay extends FlyBehavior {
  fly() {
    console.log("I can't fly");
  }
}
