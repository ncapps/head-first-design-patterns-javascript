/* eslint class-methods-use-this: ["error", { "exceptMethods": ["cost"] }] */

import { Beverage } from './beverage';

export default class Espresso extends Beverage {
  constructor() {
    super();
    this.description = 'Espresso';
  }

  cost() {
    return 1.99;
  }
}
