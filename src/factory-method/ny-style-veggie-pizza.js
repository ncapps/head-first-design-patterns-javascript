import Pizza from './pizza';

export default class NYStyleCheesePizza extends Pizza {
  constructor() {
    super();
    this.name = 'NY Style Veggie Pizza';
    this.dough = 'Thin Crust Dough';
    this.sauce = 'Marinara Sauce';
    this.toppings.push('Grated Reggiano Cheese',
      'Garlic',
      'Onion',
      'Mushrooms',
      'Red Pepper');
  }
}
