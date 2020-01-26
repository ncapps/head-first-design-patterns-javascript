import Duck from './duck';

export default class TurkeyAdapter extends Duck {
  constructor(turkey) {
    super();
    this.turkey = turkey;
  }

  quack() { return this.turkey.gobble(); }

  fly() {
    let result = '';
    for (let i = 0; i < 5; i += 1) {
      result += `${this.turkey.fly()}\n`;
    }
    return result;
  }
}
