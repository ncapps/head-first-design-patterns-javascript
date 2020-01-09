import Pizza from './pizza';

export default class NYStylePepperoniPizza extends Pizza {
  constructor() {
    super();
    this.name = 'NY Style Pepperoni Pizza';
    this.dough = 'Thin Crust Dough';
    this.sauce = 'Marinara Sauce';
    this.toppings.push('Grated Reggiano Cheese',
      'Sliced Pepperoni',
      'Garlic',
      'Onion',
      'Mushrooms',
      'Red Pepper');
  }
}
