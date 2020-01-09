import Pizza from './pizza';

export default class PepperoniPizza extends Pizza {
  constructor(ingredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
  }

  prepare() {
    console.log(`Preparing ${this.name}`);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
    this.veggies = this.ingredientFactory.createVeggies();
    this.pepperoni = this.ingredientFactory.createPepperoni();
  }
}
