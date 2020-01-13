import singleton from '../src/singleton/singleton';

describe('singleton', () => {
  const singletonA = singleton.getInstance();

  it('public method', () => {
    expect(singletonA.publicMethod()).toBe('The public can see me!');
  });

  it('public property', () => {
    expect(singletonA.publicProperty).toBe('I am also public');
  });

  it('private variable', () => {
    expect(singletonA.privateVariable).toBeUndefined();
  });

  it('private method', () => {
    expect(singletonA.privateMethod).toBeUndefined();
  });

  it('single instance', () => {
    const singletonB = singleton.getInstance();
    expect(singletonA).toEqual(singletonB);
  });
});
