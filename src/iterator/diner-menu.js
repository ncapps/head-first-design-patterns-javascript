import MenuItem from './menu-item';

export default class DinerMenu {
  constructor() {
    this.menuItems = [];
    this.addItem('Vegetarian BLT', '(Fakin\') Bacon with lettuce & tomato on whole wheat', true, 2.99);
    this.addItem('BLT', 'Bacon with lettuce & tomato on whole wheat', false, 2.99);
    this.addItem('Soup of the day', 'Soup of the day, with a side of potato salad', false, 3.29);
    this.addItem('Hotdog', 'A hot dog, with saurkraut, relish, onions, topped with cheese', false, 3.05);
    this.addItem('Steamed Veggies and Brown Rice', 'Steamed vegetables over brown rice', true, 3.99);
    this.addItem('Pasta', 'Spaghetti with Marinara Sauce, and a slice of sourdough bread', true, 3.89);
  }

  get numberOfItems() {
    return this.menuItems.length;
  }

  addItem(name, description, vegetarian, price) {
    const menuItem = new MenuItem(name, description, vegetarian, price);
    this.menuItems.push(menuItem);
  }

  createIterator() {
    return this.menuItems[Symbol.iterator]();
  }
}
