import DinerMenu from '../src/iterator/diner-menu';
import PancakeHouseMenu from '../src/iterator/pancake-house-menu';
import Waitress from '../src/iterator/waitress';

describe('waitress', () => {
  test('printMenus', () => {
    const pancakeHouseMenu = new PancakeHouseMenu();
    const dinerMenu = new DinerMenu();
    const waitress = new Waitress(pancakeHouseMenu, dinerMenu);

    expect(waitress.printMenus()).toBe('MENU\n'
      + '----\n'
      + 'BREAKFAST\n'
      + 'K&B\'s Pancake Breakfast: 2.99\n'
      + 'Regular Pancake Breakfast: 2.99\n'
      + 'Blueberry Pancakes: 3.49\n'
      + 'Waffles: 3.59\n\n'
      + 'LUNCH\n'
      + 'Vegetarian BLT: 2.99\n'
      + 'BLT: 2.99\n'
      + 'Soup of the day: 3.29\n'
      + 'Hotdog: 3.05\n'
      + 'Steamed Veggies and Brown Rice: 3.99\n'
      + 'Pasta: 3.89\n\n');
  });
});
