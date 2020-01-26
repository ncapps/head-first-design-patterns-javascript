import Turkey from './turkey';

export default class DuckAdapter extends Turkey {
  constructor(duck) {
    super();
    this.duck = duck;
  }

  gobble() { return this.duck.quack(); }

  fly() {
    return this.duck.fly();
  }
}
