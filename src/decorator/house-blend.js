import { Beverage } from "./beverage";

export default class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = "House Blend Coffee";
  }

  cost() {
    return 0.89;
  }
}
