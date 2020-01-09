import PizzaStore from './pizza-store';
import ChicagoPizzaIngredientFactory from './chicago-pizza-ingredient-factory';
import CheesePizza from './cheese-pizza';
import VeggiePizza from './veggie-pizza';
import ClamPizza from './clam-pizza';
import PepperoniPizza from './pepperoni-pizza';

export default class ChicagoPizzaStore extends PizzaStore {
  createPizza(item) {
    let pizza = null;
    const ingredientFactory = new ChicagoPizzaIngredientFactory();

    if (item === 'cheese') {
      pizza = new CheesePizza(ingredientFactory);
      pizza.setName('Chicago Style Cheese Pizza');
    } else if (item === 'veggie') {
      pizza = new VeggiePizza(ingredientFactory);
      pizza.setName('Chicago Style Veggie Pizza');
    } else if (item === 'clam') {
      pizza = new ClamPizza(ingredientFactory);
      pizza.setName('Chicago Style Clam Pizza');
    } else if (item === 'pepperoni') {
      pizza = new PepperoniPizza(ingredientFactory);
      pizza.setName('Chicago Style Pepperoni Pizza');
    }

    pizza.cut = function cut() { console.log('Cutting the pizza into square slices'); };
    return pizza;
  }
}
