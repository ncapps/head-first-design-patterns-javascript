import Pizza from '../src/abstract-factory/pizza';
import NYPizzaStore from '../src/abstract-factory/ny-pizza-store';
import ChicagoPizzaStore from '../src/abstract-factory/chicago-pizza-store';

let logs = '';
const storeLog = (log) => {
  logs += log;
  return logs;
};
console.log = jest.fn(storeLog);

describe('pizza', () => {
  const pizza = new Pizza();
  pizza.dough = 'Thin crust';
  pizza.sauce = 'Marinara';
  pizza.veggies.push('Onion', 'Garlic');
  pizza.cheese = 'Mozzarella';
  pizza.pepperoni = 'Sliced pepperoni';
  pizza.clams = 'Fresh clams';

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

  it('setName', () => {
    pizza.setName('Cheese');
    expect(pizza.getName()).toBe('Cheese');
  });

  it('getName', () => {
    pizza.name = 'Margherita';
    expect(pizza.getName()).toBe('Margherita');
  });

  it('toString', () => {
    expect(pizza.toString()).toBe(`---- Margherita ----
Thin crust
Marinara
Mozzarella
Onion, Garlic
Sliced pepperoni
`);
  });
});

describe('NY pizza store', () => {
  const nyStore = new NYPizzaStore();

  it('cheese', () => {
    const pizza = nyStore.orderPizza('cheese');
    expect(pizza.toString()).toBe(`---- New York Style Cheese Pizza ----
Thin crust dough
Marinara Sauce
Reggiano Cheese
`);
  });

  it('veggie', () => {
    const pizza = nyStore.orderPizza('veggie');
    expect(pizza.toString()).toBe(`---- New York Style Veggie Pizza ----
Thin crust dough
Marinara Sauce
Reggiano Cheese
Garlic, Onion, Mushroom, Red pepper
`);
  });

  it('clam', () => {
    const pizza = nyStore.orderPizza('clam');
    expect(pizza.toString()).toBe(`---- New York Style Clam Pizza ----
Thin crust dough
Marinara Sauce
Reggiano Cheese
`);
  });

  it('pepperoni', () => {
    const pizza = nyStore.orderPizza('pepperoni');
    expect(pizza.toString()).toBe(`---- New York Style Pepperoni Pizza ----
Thin crust dough
Marinara Sauce
Reggiano Cheese
Garlic, Onion, Mushroom, Red pepper
Sliced Pepperoni
`);
  });
});

describe('Chicago pizza store', () => {
  const chicagoStore = new ChicagoPizzaStore();

  it('cheese', () => {
    const pizza = chicagoStore.orderPizza('cheese');
    expect(pizza.toString()).toBe(`---- Chicago Style Cheese Pizza ----
ThickCrust style extra thick crust dough
Tomato sauce with plum tomatoes
Shredded Mozzarella
`);

    logs = '';
    pizza.cut();
    expect(logs).toBe('Cutting the pizza into square slices');
  });

  it('veggie', () => {
    const pizza = chicagoStore.orderPizza('veggie');
    expect(pizza.toString()).toBe(`---- Chicago Style Veggie Pizza ----
ThickCrust style extra thick crust dough
Tomato sauce with plum tomatoes
Shredded Mozzarella
Black olives, Spinach, Eggplant
`);

    logs = '';
    pizza.cut();
    expect(logs).toBe('Cutting the pizza into square slices');
  });

  it('clam', () => {
    const pizza = chicagoStore.orderPizza('clam');
    expect(pizza.toString()).toBe(`---- Chicago Style Clam Pizza ----
ThickCrust style extra thick crust dough
Tomato sauce with plum tomatoes
Shredded Mozzarella
`);

    logs = '';
    pizza.cut();
    expect(logs).toBe('Cutting the pizza into square slices');
  });

  it('pepperoni', () => {
    const pizza = chicagoStore.orderPizza('pepperoni');
    expect(pizza.toString()).toBe(`---- Chicago Style Pepperoni Pizza ----
ThickCrust style extra thick crust dough
Tomato sauce with plum tomatoes
Shredded Mozzarella
Black olives, Spinach, Eggplant
Sliced Pepperoni
`);

    logs = '';
    pizza.cut();
    expect(logs).toBe('Cutting the pizza into square slices');
  });
});
