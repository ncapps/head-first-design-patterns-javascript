import QuackBehavior from './quack-behavior';

export default class MuteQuack extends QuackBehavior {
  constructor() {
    super();
  }
  quack() {
    console.log('<< Silence >>');
  }
}
