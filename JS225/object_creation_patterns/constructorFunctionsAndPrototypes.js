// // Setting shape as the prototype of Triangle using Object.setPrototypeOf. Adding the getPerimeter on the shape object which is the prototype of Triangle. 

// // let shape = {
// //   getType() {
// //     return this.type;
// //   },
// //   getPerimeter() {
// //     return this.a + this.b + this.c;
// //   }
// // }

// // const Triangle = function(a,b,c) {
// //   Object.setPrototypeOf(this, shape);
// //   this.a = a;
// //   this.b = b;
// //   this.c = c;
// //   this.type = "triangle";
// // }

// // solution setting shape as prototype directly in the [[Prototype]] property of the Triangle function rathen than using Object.setPrototypeOf

// // by writing the code this way our intentions of showing how shape is now the prototype of Triangle become more clear. 

// let shape = {
//   getType() {
//     return this.type;
//   },
// };

// const Triangle = function(a,b,c) {
//   this.a = a;
//   this.b = b;
//   this.c = c;
//   this.type = "triangle";
// }

// Triangle.prototype = shape // reassigning the [[Prototype]] property to shape

// Triangle.prototype.getPerimeter = function() {
//   return this.a + this.b + this.c;
// };

// Triangle.prototype.constructor = Triangle; // manually setting the constuructor back to the Triangle function. Since we pointed the triangle function's prototype to shape. The constructor reference was lost. 

// let t = new Triangle(3, 4, 5);
// console.log(t.constructor);                 // Triangle(a, b, c)
// console.log(shape.isPrototypeOf(t));        // true
// console.log(t.getPerimeter());              // 12
// console.log(t.getType());                   // "triangle"


// // exercise 2

// function User(first, last) {
//   if (this instanceof User) {
//     this.first = first;
//     this.last = last; 
//     this.name = first + ' ' + last;
//   }

//   return {name: first + ' ' + last};
// }

// // in the scenario where the function is called with new, two objects effectively get created: one because of the new keyword, and one explicitly returned from the function. The one created by the new keyword is discarded in favor of the explicitly returned object. This is a bit wasteful in terms of resources.

// // soltution 2:

// function User(first, last){
//   if (!(this instanceof User)) {
//     return new User(first, last);
//   }

//   this.name = first + ' ' + last;
// }

// // this uses a recursive approach in which a single object is created when the function is called with new. 

// let name = 'Jane Doe';
// let user1 = new User('John', 'Doe');
// let user2 = User('John', 'Doe');

// console.log(name);         // => Jane Doe
// console.log(user1.name);   // => John Doe
// console.log(user2.name);   // => John Doe


// exercise 3

// const createObject = function(obj) {
//   let newObj = {};
//   Object.setPrototypeOf(newObj, obj);
//   return newObj;
// }

// // Object.setPrototypeOf can be a slow operation in browsers. 

// // solution 2

// function createObject(obj) {
//   function F() {}
//   F.prototype = obj;
//   return new F();
// }

// // this solution creates a temporary constructor and set the argument object to the prototype of the constructor.
// // returns a new instance of the temporary constructor. 

// let foo = {
//   a: 1
// };

// let bar = createObject(foo);
// console.log(foo.isPrototypeOf(bar));

// exercise 4

// Object.prototype.begetObject = function() {
//   function F() {}
//   F.prototype = this;
//   return new F();
// }

// // Object.prototype allow us to create behaviours that will be vailable to any calling method. This is because Object.prototype is the prototype which all objects inherit from. Here the same pattern of a temporary constructor was used in order to assign the current calling object as prototype to the newly created object.

// let foo = {
//   a: 1,
// };

// let bar = foo.begetObject();
// foo.isPrototypeOf(bar);         // true

// exercise 5

// function neww(constructor, args) {
//   let object = Object.create(constructor.prototype);
//   let result = constructor.apply(object, args);

//   return typeof result === 'object' ? result : object
// }

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.greeting = function() {
//   console.log('Hello, ' + this.firstName + ' ' + this.lastName);
// };

// let john = neww(Person, ['John', 'Doe']);
// john.greeting();          // => Hello, John Doe
// john.constructor;         // Person(firstName, lastName) {...}

var animal = {
  type: 'mammal',
  breathe: function() { 
  console.log("I'm breathing");
 },
}

var dog = Object.create(animal);
var terrier = Object.create(dog);

dog.speak = function() { 
  console.log("Woof Woof"); 
};

terrier.speak(); // "Woof Woof"