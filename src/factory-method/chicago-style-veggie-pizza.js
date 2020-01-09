/* eslint class-methods-use-this: ["error", { "exceptMethods": ["cut"] }] */

import Pizza from './pizza';

export default class ChicagoStyleVeggiePizza extends Pizza {
  constructor() {
    super();
    this.name = 'Chicago Deep Dish Veggie Pizza';
    this.dough = 'Extra Thick Crust Dough';
    this.sauce = 'Plum Tomato Sauce';

    this.toppings.push('Shredded Mozzarella Cheese',
      'Black Olives',
      'Spinach',
      'Eggplant');
  }

  cut() {
    console.log('Cutting the pizza into square slices');
  }
}
