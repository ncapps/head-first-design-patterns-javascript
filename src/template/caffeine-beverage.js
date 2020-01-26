export default class CaffeineBeverage {
  prepareRecipe() {
    let string = '';
    string += `${this.boilWater()}\n`
      + `${this.brew()}\n`
      + `${this.pourInCup()}\n`
      + `${this.addCondiments()}\n`;
    return string;
  }

  brew() { }

  addCondiments() { }

  boilWater() { return 'Boiling water'; }

  pourInCup() { return 'Pouring into cup'; }
}
