/* eslint class-methods-use-this: ["error", { "exceptMethods": ["createPizza"] }] */

import PizzaStore from './pizza-store';
import ChicagoStyleCheesePizza from './chicago-style-cheese-pizza';
import ChicagoStyleVeggiePizza from './chicago-style-veggie-pizza';
import ChicagoStyleClamPizza from './chicago-style-clam-pizza';
import ChicagoStylePepperoniPizza from './chicago-style-pepperoni-pizza';

export default class ChicagoPizzaStore extends PizzaStore {
  createPizza(item) {
    switch (item) {
      case 'cheese':
        return new ChicagoStyleCheesePizza();
      case 'veggie':
        return new ChicagoStyleVeggiePizza();
      case 'clam':
        return new ChicagoStyleClamPizza();
      case 'pepperoni':
        return new ChicagoStylePepperoniPizza();
      default:
        return null;
    }
  }
}
