import MallardDuck from "../src/strategy/mallard-duck";
import ModelDuck from "../src/strategy/model-duck";
import FlyRocketPowered from "../src/strategy/fly-rocket-powered";

let logs = "";
const storeLog = log => (logs += log);
console["log"] = jest.fn(storeLog);

describe("mallard duck", () => {
  const mallard = new MallardDuck();

  it("quacks", () => {
    logs = "";
    mallard.performQuack();
    expect(logs).toBe("Quack");
  });

  it("flys", () => {
    logs = "";
    mallard.performFly();
    expect(logs).toBe("I'm flying!");
  });

  it("displays", () => {
    logs = "";
    mallard.display();
    expect(logs).toBe("I'm a real Mallard duck");
  });
});

describe("model duck", () => {
  const model = new ModelDuck();

  it("quacks", () => {
    logs = "";
    model.performQuack();
    expect(logs).toBe("Squeak");
  });

  it("flys", () => {
    logs = "";
    model.performFly();
    expect(logs).toBe("I can't fly");
  });

  it("displays", () => {
    logs = "";
    model.display();
    expect(logs).toBe("I'm a model duck");
  });

  it("sets rocket powered flight", () => {
    logs = "";
    model.setFlyBehavior(new FlyRocketPowered());
    model.performFly();
    expect(logs).toBe("I'm flying with a rocket!");
  });
});
