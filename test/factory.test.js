import Pizza from '../src/factory/pizza';
import NYPizzaStore from '../src/factory/ny-pizza-store';

let logs = '';
const storeLog = (log) => {
  logs += log;
  return logs;
};
console.log = jest.fn(storeLog);

describe('pizza', () => {
  const pizza = new Pizza();
  pizza.name = 'Margherita';
  pizza.dough = 'Flour';
  pizza.sauce = 'Marinara';
  pizza.toppings.push('Onion', 'Garlic');

  it('prepare', () => {
    logs = '';
    pizza.prepare();
    expect(logs).toContain('Prepare Margherita');
    expect(logs).toContain('Tossing dough...');
    expect(logs).toContain('Adding sauce...');
    expect(logs).toContain('Adding toppings:');
    expect(logs).toContain('Onion');
    expect(logs).toContain('Garlic');
  });

  it('bake', () => {
    logs = '';
    pizza.bake();
    expect(logs).toBe('Bake for 25 minutes at 350');
  });

  it('cut', () => {
    logs = '';
    pizza.cut();
    expect(logs).toBe('Cut the pizza into diagonal slices');
  });

  it('box', () => {
    logs = '';
    pizza.box();
    expect(logs).toBe('Place pizza in official PizzaStore box');
  });

  it('getName', () => {
    expect(pizza.getName()).toBe('Margherita');
  });

  it('toString', () => {
    expect(pizza.toString()).toBe(`---- Margherita ----
Flour
Marinara
Onion
Garlic
`);
  });
});

describe('NY pizza store', () => {
  const nyStore = new NYPizzaStore();

  it('cheese', () => {
    const pizza = nyStore.orderPizza('cheese');
    expect(pizza.getName()).toBe('NY Style Sauce and Cheese Pizza');
  });

  it('veggie', () => {
    const pizza = nyStore.orderPizza('veggie');
    expect(pizza.getName()).toBe('NY Style Veggie Pizza');
  });

  it('clam', () => {
    const pizza = nyStore.orderPizza('clam');
    expect(pizza.getName()).toBe('NY Style Clam Pizza');
  });

  it('pepperoni', () => {
    const pizza = nyStore.orderPizza('pepperoni');
    expect(pizza.getName()).toBe('NY Style Pepperonie Pizza');
  });
});
