import { Child } from './../src/child.js';
import { getRandomName } from './../src/getRandomName.js';

describe('Child', () => {
  jest.useFakeTimers();
  let child;
  const name = getRandomName();

  beforeEach( () => {
    child = new Child(name);
  });

  afterEach(() => {jest.clearAllTimers()});

  test('should have a name, age, hunger, hygiene and a status when it is created', () => {
    expect(child.name).toEqual(name);
    expect(child.age).toEqual(0);
    expect(child.hunger).toEqual(100);
    expect(child.hygiene).toEqual(100);
    expect(child.status).toEqual('alive');
  });
  test(".checkHunger() should reduce hunger by 1 per half-second and check status for 'dead'", () => {
    jest.advanceTimersByTime(1001);
    expect(child.hunger).toEqual(98);
  });
  test(".checkHygiene() should reduce hunger by 1 per second and check status for 'dead'", () => {
    jest.advanceTimersByTime(2001);
    expect(child.hygiene).toEqual(98);
  });
  test(".checkStatus() should do something if the status is 'dead'", () => {
    child.status = 'dead';
    expect(child.checkStatus()).toEqual(`${child.name} is dead.`);
  });
  test('.feed() should replenish hunger back to 100', () => {
    jest.advanceTimersByTime(1001);
    child.feed();
    expect(child.hunger).toEqual(100);
  });
  test('.feed() should replenish hunger back to 100', () => {
    jest.advanceTimersByTime(5001);
    child.clean();
    expect(child.hygiene).toEqual(100);
  });
  test(".addAge() should increase by 1 per minute and check school for 'yes'", () => {
    jest.advanceTimersByTime(9001);
    child.addAge();
    expect(child.age).toEqual(3);
  });
});
