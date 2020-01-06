import CondimentDecorator from "./condiment-decorator";

export default class Mocha extends CondimentDecorator {
  constructor(beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription() {
    return this.beverage.getDescription() + ", Mocha";
  }

  cost() {
    return this.beverage.cost() + 0.2;
  }
}
