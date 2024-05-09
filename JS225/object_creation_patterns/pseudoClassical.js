function Animal(type) {
  this.type = type;
};

// Our constructor will create a `type` property on all of its instances. Every time a new instance of Animal is creadted, the code within the body of the function will execute, with the newly created object taking the place of `this`.

console.log(Animal.prototype) // Functions are objects and they have a prototype property

console.log(Animal.prototype.constructor) // [Function: Animal] The value of the prototype property is an object containing a constructor property that points back to the constructor Function in this case, Animal

Animal.prototype.breathe = function() { // adding the breathe behaviour into the constructor's prototype.
  console.log("I'm breathing");
};

// all instances of Animal will be able to delegate the breathe behaviour to the Animal's prototype property which acts as the prototype for the new object

let dog = new Animal('dog'); // creating a new instance of Animal.

console.log(Object.getPrototypeOf(dog) === Animal.prototype) // true
//The prototype of the new dog object is the prototype property of the constructor Animal.prototype

console.log(dog.hasOwnProperty('breathe')) // false
dog.breathe() // im breathing

// the above shows that dog does not have its own breathe function. it is delegating the breathe behaviour from its prototype: Animal.prototype
