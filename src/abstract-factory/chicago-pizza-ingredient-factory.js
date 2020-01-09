import PizzaIngredientFactory from './pizza-ingredient-factory';
import ThickCrustDough from './thick-crust-dough';
import PlumTomatoSauce from './plum-tomato-sauce';
import MozzarellaCheese from './mozzarella-cheese';
import BlackOlives from './black-olives';
import Spinach from './spinach';
import Eggplant from './eggplant';
import SlicedPepperoni from './sliced-pepperoni';
import FrozenClams from './frozen-clams';


export default class ChicagoPizzaIngredientFactory extends PizzaIngredientFactory {
  createDough() {
    return new ThickCrustDough();
  }

  createSauce() {
    return new PlumTomatoSauce();
  }

  createCheese() {
    return new MozzarellaCheese();
  }

  createVeggies() {
    return [new BlackOlives(), new Spinach(), new Eggplant()];
  }

  createPepperoni() {
    return new SlicedPepperoni();
  }

  createClam() {
    return new FrozenClams();
  }
}
