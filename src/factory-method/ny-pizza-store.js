/* eslint class-methods-use-this: ["error", { "exceptMethods": ["createPizza"] }] */

import PizzaStore from './pizza-store';
import NYStyleCheesePizza from './ny-style-cheese-pizza';
import NYStyleVeggiePizza from './ny-style-veggie-pizza';
import NYStyleClamPizza from './ny-style-clam-pizza';
import NYStylePepperoniPizza from './ny-style-pepperoni-pizza';

export default class NYPizzaStore extends PizzaStore {
  createPizza(item) {
    switch (item) {
      case 'cheese':
        return new NYStyleCheesePizza();
      case 'veggie':
        return new NYStyleVeggiePizza();
      case 'clam':
        return new NYStyleClamPizza();
      case 'pepperoni':
        return new NYStylePepperoniPizza();
      default:
        return null;
    }
  }
}
