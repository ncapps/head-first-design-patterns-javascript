import MallardDuck from './mallard-duck';
import ModelDuck from './model-duck';
import FlyRocketPowered from './fly-rocket-powered';

let mallard = new MallardDuck();
mallard.performQuack();
mallard.performQuack();
mallard.performFly();

let model = new ModelDuck();
model.performFly();
model.setFlyBehavior(new FlyRocketPowered());
model.performFly();
