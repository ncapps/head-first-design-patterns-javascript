import MallardDuck from '../src/adapter/mallard-duck';
import WildTurkey from '../src/adapter/wild-turkey';
import TurkeyAdapter from '../src/adapter/turkey-adapter';

describe('turkey adapater', () => {
  const duck = new MallardDuck();
  const turkey = new WildTurkey();
  const turkeyAdapter = new TurkeyAdapter(turkey);

  test('turkey behavior', () => {
    expect(turkey.fly()).toBe('I\'m flying a short distance');
    expect(turkey.gobble()).toBe('Gobble gobble');
  });

  test('duck behavior', () => {
    expect(duck.fly()).toBe('I\'m flying');
    expect(duck.quack()).toBe('Quack');
  });

  test('turkey adapter behavior', () => {
    expect(turkeyAdapter.fly()).toBe('I\'m flying a short distance\n'
      + 'I\'m flying a short distance\n'
      + 'I\'m flying a short distance\n'
      + 'I\'m flying a short distance\n'
      + 'I\'m flying a short distance\n');
    expect(turkeyAdapter.quack()).toBe('Gobble gobble');
  });
});
