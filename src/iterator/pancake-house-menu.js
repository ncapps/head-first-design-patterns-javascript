import MenuItem from './menu-item';

export default class PancakeHouseMenu {
  constructor() {
    this.menuItems = {};
    this.addItem('K&B\'s Pancake Breakfast',
      'Pancakes with scrambled eggs, and toast',
      true,
      2.99);

    this.addItem('Regular Pancake Breakfast',
      'Pancakes with fried eggs, sausage',
      false,
      2.99);

    this.addItem('Blueberry Pancakes',
      'Pancakes made with fresh blueberries',
      true,
      3.49);

    this.addItem('Waffles',
      'Waffles, with your choice of blueberries or strawberries',
      true,
      3.59);
  }

  addItem(name, description, vegetarian, price) {
    const menuItem = new MenuItem(name, description, vegetarian, price);
    this.menuItems[name] = menuItem;
  }

  createIterator() {
    return Object.values(this.menuItems)[Symbol.iterator]();
  }
}
