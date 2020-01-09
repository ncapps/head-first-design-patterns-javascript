/* eslint class-methods-use-this: ["error", { "exceptMethods": ["cut"] }] */

import Pizza from './pizza';

export default class ChicagoStylePepperoniPizza extends Pizza {
  constructor() {
    super();
    this.name = 'Chicago Style Pepperoni Pizza';
    this.dough = 'Extra Thick Crust Dough';
    this.sauce = 'Plum Tomato Sauce';

    this.toppings.push('Shredded Mozzarella Cheese',
      'Black Olives',
      'Spinach',
      'Eggplant',
      'Sliced Pepperoni');
  }

  cut() {
    console.log('Cutting the pizza into square slices');
  }
}
