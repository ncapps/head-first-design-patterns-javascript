export default class Pizza {
  constructor() {
    this.name = null;
    this.dough = null;
    this.sauce = null;
    this.veggies = [];
    this.cheese = null;
    this.pepperoni = null;
    this.clams = null;
  }

  prepare() {
    throw new Error('Abstract method');
  }

  bake() {
    console.log('Bake for 25 minutes at 350');
  }

  cut() {
    console.log('Cut the pizza into diagonal slices');
  }

  box() {
    console.log('Place pizza in official PizzaStore box');
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  toString() {
    let display = `---- ${this.name} ----\n`;
    if (this.dough) display += `${this.dough}\n`;
    if (this.sauce) display += `${this.sauce}\n`;
    if (this.cheese) display += `${this.cheese}\n`;
    this.veggies.forEach((veggie, i) => {
      display += `${veggie}`;
      display += (i < this.veggies.length - 1) ? ', ' : '\n';
    });
    if (this.clam) display += `${this.clam}\n`;
    if (this.pepperoni) display += `${this.pepperoni}\n`;
    return display;
  }
}
