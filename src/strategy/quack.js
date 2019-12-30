import QuackBehavior from './quack-behavior';

export default class Quack extends QuackBehavior {
  constructor() {
    super();
  }

  quack() {
    console.log('Quack');
  }
}
