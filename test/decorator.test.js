import Espresso from '../src/decorator/espresso';
import DarkRoast from '../src/decorator/dark-roast';
import Mocha from '../src/decorator/mocha';
import Whip from '../src/decorator/whip';
import HouseBlend from '../src/decorator/house-blend';
import Soy from '../src/decorator/soy';

describe('beverage', () => {
  const espresso = new Espresso();

  it('getDescription', () => {
    expect(espresso.getDescription()).toBe('Espresso');
  });

  it('getCost', () => {
    expect(espresso.cost()).toBe(1.99);
  });
});

describe('condiment decorator', () => {
  let darkRoast = new DarkRoast();
  darkRoast = new Mocha(darkRoast);
  darkRoast = new Mocha(darkRoast);
  darkRoast = new Whip(darkRoast);

  it('getDescription', () => {
    expect(darkRoast.getDescription()).toBe('Dark Roast Coffee, Mocha, Mocha, Whip');
  });

  it('getCost', () => {
    expect(darkRoast.cost()).toBe(1.49);
  });


  let houseBlend = new HouseBlend();
  houseBlend = new Soy(houseBlend);
  houseBlend = new Mocha(houseBlend);
  houseBlend = new Whip(houseBlend);
  it('getSize', () => {
    expect(houseBlend.cost()).toBe(1.29);
  });
});
