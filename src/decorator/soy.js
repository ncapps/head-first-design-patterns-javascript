import CondimentDecorator from './condiment-decorator';
import { Size } from './beverage';

export default class Soy extends CondimentDecorator {
  constructor(beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription() {
    return `${this.beverage.getDescription()}, Soy`;
  }

  cost() {
    let cost = this.beverage.cost();
    if (this.beverage.getSize() === Size.TALL) {
      cost += 0.1;
    } else if (this.beverage.getSize() === Size.GRANDE) {
      cost += 0.15;
    } else if (this.beverage.getSize() === Size.VENTI) {
      cost += 0.2;
    }
    return cost;
  }
}
