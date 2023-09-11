export abstract class Vehicle {
  abstract getNumberOfSeals(): number;
}

export class Tesla extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeals() {
    return this.numberOfSeats;
  }
}

export class Audi extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeals() {
    return this.numberOfSeats;
  }
}

export class Toyota extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeals() {
    return this.numberOfSeats;
  }
}

export class Honda extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeals() {
    return this.numberOfSeats;
  }
}
