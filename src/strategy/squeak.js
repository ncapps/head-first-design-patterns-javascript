import QuackBehavior from './quack-behavior';

export default class Squeak extends QuackBehavior {
  constructor() {
    super();
  }

  quack() {
    console.log('Squeak');
  }
}
