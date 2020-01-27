export default class Waitress {
  constructor(pancakeHouseMenu, dinerMenu) {
    this.pancakeHouseMenu = pancakeHouseMenu;
    this.dinerMenu = dinerMenu;
  }

  printMenus() {
    const pancakeIterator = this.pancakeHouseMenu.createIterator();
    const dinerIterator = this.dinerMenu.createIterator();
    const result = 'MENU\n'
      + '----\n'
      + 'BREAKFAST\n'
      + `${this.print(pancakeIterator)}\n`
      + 'LUNCH\n'
      + `${this.print(dinerIterator)}\n`;
    return result;
  }

  print(iterator) {
    let menu = '';
    for (const item of iterator) {
      menu += `${item.getName()}: ${item.getPrice()}\n`;
    }
    return menu;
  }
}
