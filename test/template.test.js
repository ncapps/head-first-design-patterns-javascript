import Coffee from '../src/template/coffee';
import Tea from '../src/template/tea';

describe('caffeine beverage', () => {
  test('coffee', () => {
    const coffee = new Coffee();

    expect(coffee.prepareRecipe()).toBe('Boiling water\n'
    + 'Dripping Coffee through filter\n'
    + 'Pouring into cup\n'
    + 'Adding Sugar and Milk\n');
  });

  test('tea', () => {
    const tea = new Tea();

    expect(tea.prepareRecipe()).toBe('Boiling water\n'
    + 'Steeping the tea\n'
    + 'Pouring into cup\n'
    + 'Adding Lemon\n');
  });
});
