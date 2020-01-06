import { Beverage } from "./beverage";

export default class CondimentDecorator extends Beverage {
  getDescription() {
    throw new Error("Abstract method");
  }

  getSize() {
    return this.beverage.getSize();
  }
}
