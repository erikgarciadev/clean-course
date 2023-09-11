//https://gist.github.com/Klerith/f691b27c2a1d799e304fbae9a8ebc12b
import { Tesla, Audi, Toyota, Honda, Vehicle } from "./03-liskov-b";

(() => {
  const printCarSeats = (cars: Vehicle[]) => {
    cars.forEach((car) => {
      console.log(car.constructor.name, car.getNumberOfSeals());
    });
    // for (const car of cars) {
    //   if (car instanceof Tesla) {
    //     console.log("Tesla", car.getNumberOfSeals());
    //     continue;
    //   }
    //   if (car instanceof Audi) {
    //     console.log("Audi", car.getNumberOfSeals());
    //     continue;
    //   }
    //   if (car instanceof Toyota) {
    //     console.log("Toyota", car.getNumberOfSeals());
    //     continue;
    //   }
    //   if (car instanceof Honda) {
    //     console.log("Honda", car.getNumberOfSeals());
    //     continue;
    //   }
    // }
  };

  const cars = [new Tesla(7), new Audi(2), new Toyota(5), new Honda(5)];

  printCarSeats(cars);
})();
