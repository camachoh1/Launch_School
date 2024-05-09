let Animal = {
  init(type) {
    this.type = type
  },
  breathe() {
    console.log('respira');
  },
}

let Dog = Object.create(Animal);

let mammal = Object.create(Animal);
mammal.init('mammal');

let reptile = Object.create(Animal);
reptile.init('reptile');

console.log(Object.getPrototypeOf(Dog) === Animal); // true
console.log(Object.setPrototypeOf(Dog, mammal)); // changes the current prototype of dog from Animal to mammal
console.log(Object.getPrototypeOf(Dog) === Animal); // false the prototype was changed
console.log(Object.getPrototypeOf(Dog) === mammal); // true

console.log(Animal.isPrototypeOf(Dog)); // dog is still a prototype of Animal

let taco = Object.create(Dog);
taco.init('dog')
console.log(taco.type) // dog
taco.breathe() // respira
console.log(Dog.type) // mammal

console.log(Animal.isPrototypeOf(taco));

// https://medium.com/launch-school/javascript-design-patterns-building-a-mental-model-68c2d4356538

