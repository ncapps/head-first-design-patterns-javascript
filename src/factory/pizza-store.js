/* eslint class-methods-use-this: ["error", { "exceptMethods": ["createPizza"] }] */
/* eslint no-unused-vars: ["error", { "args": "none" }] */

export default class PizzaStore {
  createPizza(item) {
    throw new Error('Abstract factory method');
  }

  orderPizza(type) {
    const pizza = this.createPizza(type);
    console.log(`--- Making a ${pizza.getName()} ---`);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }
}
