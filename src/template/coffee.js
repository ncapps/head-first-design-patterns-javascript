import CaffeineBeverage from './caffeine-beverage';

export default class Coffee extends CaffeineBeverage {
  brew() { return 'Dripping Coffee through filter'; }

  addCondiments() { return 'Adding Sugar and Milk'; }
}
