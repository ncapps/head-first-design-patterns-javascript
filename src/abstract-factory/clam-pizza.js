import Pizza from './pizza';

export default class ClamPizza extends Pizza {
  constructor(ingredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
  }

  prepare() {
    console.log(`Preparing ${this.name}`);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
    this.clams = this.ingredientFactory.createClam();
  }
}
