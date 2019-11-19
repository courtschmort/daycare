export class Child {

  constructor(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 100;
    this.hygiene = 100;
    this.status = 'alive';
    this.personality = null;
    this.friends = [];
    this.enemies = [];
    this.school = null;

    this.checkHunger();
    this.checkHygiene();
    this.addAge();
  }

  addAge() {
    setInterval( () => {
      this.age++;
      if (this.age === 100) this.school = 'yes';
    }, 3000);
  }

  checkHunger() {
    setInterval( () => {
      this.hunger--;
      if (this.hunger <= 0) this.status = 'dead';
    }, 500);
  }

  checkHygiene() {
    setInterval( () => {
      this.hygiene--;
      if (this.hygiene <= 0) this.status = 'dead';
    }, 1000);
  }

  checkStatus() {
    if (this.status === 'dead') {
      return `${this.name} is dead.`;
    }
  }

  feed() {
    this.hunger = 100;
  }
  clean() {
    this.hygiene = 100;
  }

  makeFriend(friend) {
    this.friends.push(friend);
  }
  makeEnemy(enemy) {
    this.enemies.push(enemy);
  }
}
