import { Baby } from "./../src/baby.js";
import { getRandomName } from "./../src/getRandomName.js";

describe("Baby", () => {
  jest.useFakeTimers();
  let baby;
  const name = getRandomName();

  beforeEach( () => {
    baby = new Baby(name);
    baby.startHunger();
    baby.startHygiene();
  });

  afterEach(() => {jest.clearAllTimers()});

  test("should have a name, age, hunger, hygiene and a status when it is created", () => {
    expect(baby.name).toEqual(name);
    expect(baby.age).toEqual(0);
    expect(baby.hunger).toEqual(100);
    expect(baby.hygiene).toEqual(100);
    expect(baby.status).toEqual("alive");
  });

  test(".startHunger() should reduce hunger by 1 per second", () => {
    jest.advanceTimersByTime(5001);
    expect(baby.hunger).toEqual(95);
  });
  test(".startHygiene() should reduce hunger by 1 per second", () => {
    jest.advanceTimersByTime(10001);
    expect(baby.hygiene).toEqual(98);
  });

});
