import PizzaStore from './pizza-store';
import NYPizzaIngredientFactory from './ny-pizza-ingredient-factory';
import CheesePizza from './cheese-pizza';
import VeggiePizza from './veggie-pizza';
import ClamPizza from './clam-pizza';
import PepperoniPizza from './pepperoni-pizza';

export default class NYPizzaStore extends PizzaStore {
  createPizza(item) {
    let pizza = null;
    const ingredientFactory = new NYPizzaIngredientFactory();

    if (item === 'cheese') {
      pizza = new CheesePizza(ingredientFactory);
      pizza.setName('New York Style Cheese Pizza');
    } else if (item === 'veggie') {
      pizza = new VeggiePizza(ingredientFactory);
      pizza.setName('New York Style Veggie Pizza');
    } else if (item === 'clam') {
      pizza = new ClamPizza(ingredientFactory);
      pizza.setName('New York Style Clam Pizza');
    } else if (item === 'pepperoni') {
      pizza = new PepperoniPizza(ingredientFactory);
      pizza.setName('New York Style Pepperoni Pizza');
    }
    return pizza;
  }
}
