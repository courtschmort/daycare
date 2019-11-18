export class Baby {

  constructor(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 100;
    this.hygiene = 100;
    this.status = "alive";
  }

  startHunger() {
    setInterval( () => {
      this.hunger--;
      if (this.hunger <= 0) this.status = "dead";
    }, 1000);
  }

  startHygiene() {
    setInterval( () => {
      this.hygiene--;
      if (this.hygiene <= 0) this.status = "dead";
    }, 5000);
  }

}
