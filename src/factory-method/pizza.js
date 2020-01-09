/* eslint class-methods-use-this: ["error", { "exceptMethods": ["cut", "box", "bake"] }] */

export default class Pizza {
  constructor() {
    this.name = null;
    this.dough = null;
    this.sauce = null;
    this.toppings = [];
  }

  prepare() {
    console.log(`Prepare ${this.name}\n`);
    console.log('Tossing dough...\n');
    console.log('Adding sauce...\n');
    console.log('Adding toppings:\n');
    this.toppings.forEach((topping) => console.log(`${topping}\n`));
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

  getName() {
    return this.name;
  }

  toString() {
    let display = `---- ${this.name} ----\n`;
    display += `${this.dough}\n`;
    display += `${this.sauce}\n`;
    this.toppings.forEach((topping) => {
      display += `${topping}\n`;
    });
    return display;
  }
}
