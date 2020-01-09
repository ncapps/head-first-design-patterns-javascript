import PizzaIngredientFactory from './pizza-ingredient-factory';
import ThinCrustDough from './thin-crust-dough';
import MarinaraSauce from './marinara-sauce';
import ReggianoCheese from './reggiano-cheese';
import Garlic from './garlic';
import Onion from './onion';
import Mushroom from './mushroom';
import RedPepper from './red-pepper';
import SlicedPepperoni from './sliced-pepperoni';
import FreshClams from './fresh-clams';


export default class NYPizzaIngredientFactory extends PizzaIngredientFactory {
  createDough() {
    return new ThinCrustDough();
  }

  createSauce() {
    return new MarinaraSauce();
  }

  createCheese() {
    return new ReggianoCheese();
  }

  createVeggies() {
    return [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
  }

  createPepperoni() {
    return new SlicedPepperoni();
  }

  createClam() {
    return new FreshClams();
  }
}
