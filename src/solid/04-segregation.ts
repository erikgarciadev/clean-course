interface Bird {
  eat(): void;
}

interface FlyinBird {
  fly(): void;
}

interface RunningBird {
  run(): void;
}

interface SwimmerBird {
  swim(): void;
}

class Tucan implements Bird, FlyinBird {
  public fly() {}
  public eat() {}
}

class HumminBird implements Bird, FlyinBird {
  public fly() {}
  public eat() {}
}

class Ostrich implements Bird, RunningBird {
  eat(): void {
    throw new Error("Method not implemented.");
  }
  run(): void {
    throw new Error("Method not implemented.");
  }
}

class Penguin implements Bird, SwimmerBird {
  eat(): void {
    throw new Error("Method not implemented.");
  }

  public swim() {}
}
