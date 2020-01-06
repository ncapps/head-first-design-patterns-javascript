/* eslint class-methods-use-this: ["error", { "exceptMethods": ["fly"] }] */

export default class FlyBehavior {
  fly() {
    throw new Error('Abstract method');
  }
}
