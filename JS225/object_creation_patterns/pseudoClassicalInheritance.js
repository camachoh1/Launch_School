function Animal(type) {
  this.type = type;
};

Animal.prototype.breathe = function() {
  console.log('breathing');
}

let mammal = new Animal('mammal');
console.log(mammal.constructor); // animal
mammal.breathe(); // breathing

function Dog() {
  this.legs = 4
}

console.log(Dog.prototype.constructor); // Dog

// let dog1 = new Dog;

// console.log(dog1.type) // undefined
// dog1.breathe(); // TypeError: dog1.breathe is not a function

// the above shows that since there is no connection to Animal, the Dog instances do not have a type property or a breathe method. 

Dog.prototype = new Animal("Dog"); // connecting Dog with Animal through Dog's prototype property. By reassigning the current value of the prototype property of dog with an Animal instance. 

// this connection means that Dog.prototype will now point to a new instance of animal that has access to all of the Animal behaviours defined in Animal.prototype. Thus creating a relationship between Animal and Dog

console.log(Dog.prototype.constructor) // Animal

// Since we just redirected Dog.prototype to point to a new object. The old object that contained the constructor property is now no longer referenced so will be garbage collected. Dog.prototype now points to Animal.prototype and its constructor

// We want our constructor to point ar Dog not Animal. In order to solve this, we need to manually add a constructor property to Dog.prototype

Dog.prototype.constructor = Dog;

console.log(Dog.prototype.constructor); // Dog

let dog2 = new Dog;

console.log(Object.getPrototypeOf(dog2)) // Animal {type: "Dog", constructor: [Function Dog]}
// dog2 should now have access to the type and breathe properties


console.log(dog2.type) // Dog
dog2.breathe(); // breathing


function Taco() {}

// here we are establishing the relationship between Dog and taco using a different method. In this case, we are using Object.create and passing Dog.prototype as prototype to Taco.prototype.

// Using Object.create(Dog.prototype) to create the relationship between Taco and Dog means that we're simply creating the link without executing the code in the constructor's function. This is why the object taquito does not have access to the legs property. 
// The code within Dog was never executed, only the link to the prototype chain was inherited. 
// Taco.prototype = Object.create(Dog.prototype);
// Taco.prototype.constructor = Taco;

// let taquito = new Taco();

// console.log(taquito.constructor); // Taco
// console.log(taquito.type); // Dog
// taquito.breathe(); // breathing
// console.log(taquito.legs); // undefined

// if we wanted taquito to have access to the legs property, establishing the relationship using the new keyword. This will run the code in the constructor function as well as create a link with the prototype chain. 

Taco.prototype = new Dog();
Taco.prototype.constructor = Taco;

let taquito = new Taco();

console.log(taquito.constructor); // Taco
console.log(taquito.type); // Dog
taquito.breathe(); // breathing
console.log(taquito.legs); // 4
