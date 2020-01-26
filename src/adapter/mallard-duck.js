import Duck from './duck';

export default class MallardDuck extends Duck {
  quack() {
    return 'Quack';
  }

  fly() {
    return "I'm flying";
  }
}
