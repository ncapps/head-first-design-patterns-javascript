import Espresso from './espresso';
import DarkRoast from './dark-roast';
import Mocha from './mocha';
import Whip from './whip';
import HouseBlend from './house-blend';
import Soy from './soy';

const espresso = new Espresso();
console.log(`${espresso.getDescription()} $${espresso.cost()}`);

let darkRoast = new DarkRoast();
darkRoast = new Mocha(darkRoast);
darkRoast = new Mocha(darkRoast);
darkRoast = new Whip(darkRoast);
console.log(`${darkRoast.getDescription()} $${darkRoast.cost()}`);

let houseBlend = new HouseBlend();
houseBlend = new Soy(houseBlend);
houseBlend = new Mocha(houseBlend);
houseBlend = new Whip(houseBlend);
console.log(`${houseBlend.getDescription()} $${houseBlend.cost()}`);
