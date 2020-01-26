import CaffeineBeverage from './caffeine-beverage';

export default class Tea extends CaffeineBeverage {
  brew() { return 'Steeping the tea'; }

  addCondiments() { return 'Adding Lemon'; }
}
