export const Size = { TALL: 0, GRANDE: 1, VENTI: 2 };

export class Beverage {
  constructor() {
    this.size = Size.TALL;
    this.description = "Unknown Beverage";
  }

  getDescription() {
    return this.description;
  }

  cost() {
    throw new Error("Abstract method");
  }

  setSize(size) {
    this.size = size;
  }

  getSize() {
    return this.size;
  }
}
