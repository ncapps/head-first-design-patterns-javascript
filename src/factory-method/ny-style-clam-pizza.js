import Pizza from './pizza';

export default class NYStyleClamPizza extends Pizza {
  constructor() {
    super();
    this.name = 'NY Style Clam Pizza';
    this.dough = 'Thin Crust Dough';
    this.sauce = 'Marinara Sauce';
    this.toppings.push('Grated Reggiano Cheese', 'Fresh Clams from Long Island Sound');
  }
}
