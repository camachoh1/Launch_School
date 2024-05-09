function Animal(name, species, age) {
  this.name = name;
  this.species = species;
  this.age = age;
  Animal.count += 1;
}

Animal.count = 0
Animal.animalCount = function() {return Animal.count;}

Animal.prototype.eat = function() {console.log('eating')};
Animal.prototype.sleep = function() {console.log('sleeping')};
Animal.prototype.getDetails = function() {
  console.log(`${this.name} ${this.species} ${this.age}`);
}

function Bird(name, species, age, wingSpan) {
  Animal.call(this, name, species, age);
  this.wingSpan = wingSpan;
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Bird.prototype.fly = function() {console.log('flying')};

function Mammal(name, species, age, furColor) {
  Animal.call(this, name, species, age);
  this.furColor = furColor;
}
Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;
Mammal.prototype.run = function() {console.log('running')}


let coco = new Animal('coco', 'dog', 1);
console.log(Animal.animalCount()) // 1

let larry = new Bird('larry', 'parrot', 3, 4);
console.log(Animal.animalCount()) // 2
larry.fly() // flying
larry.eat() // eating
larry.sleep() // sleeping
larry.getDetails() // larry parrot 3

let boo = new Mammal('boo', 'bear', 5, 'black');
console.log(Animal.animalCount()) // 3
boo.run() // flying
boo.eat() // eating
boo.sleep() // sleeping
boo.getDetails() // boo bear 5