const Vehicle = {
  init(make, model) {
    this.make = make;
    this.model = model;
    return this;
  },

  start() {
    console.log('starting');
  },

  stop() {
    console.log('stopping');
  }
}

const Car = Object.create(Vehicle).init('honda', 'civic');
Car.numberOfDoors = 4;
Car.honk = function() {console.log('Beep beep!')};

const Motorcycle = Object.create(Vehicle).init('moto', 'taxi');
Motorcycle.helmetIncluded = false;
Motorcycle.revEngine = function() {console.log('revving')};

console.log(Car)
console.log(Vehicle.isPrototypeOf(Car)); // true
console.log(Car.hasOwnProperty('init')) // false
console.log(Car.hasOwnProperty('start')) // false
console.log(Car.hasOwnProperty('stop')) // false
Car.start() // starting
Car.stop() // stopping
Car.honk() // beep beep


console.log(Motorcycle)
console.log(Vehicle.isPrototypeOf(Motorcycle)); // true
console.log(Motorcycle.hasOwnProperty('init')) // false
console.log(Motorcycle.hasOwnProperty('start')) // false
console.log(Motorcycle.hasOwnProperty('stop')) // false
Motorcycle.start() // starting
Motorcycle.stop() // stopping
Motorcycle.revEngine() // revving
