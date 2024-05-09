let separator = '-'.repeat(100);
// Using the following constructor and instance to demonstrate the prototypal structure and relationship between objects and constructor functions in JavaScript:

function Foo() {}; // constructor 

let newFoo = new Foo(); // constructed object

//------------------------------------------------------
console.log(separator);
console.log('This is newFoo: constructed object');
console.log('type:', typeof newFoo); // object
console.log(`Is [[Prototype]] Foo.prototype?: ${Object.getPrototypeOf(newFoo) === Foo.prototype}`); // true
console.log(`Has own prototype property?: ${newFoo.hasOwnProperty('prototype')}`); // false 
console.log(`Has own constructor?: ${newFoo.hasOwnProperty('constructor')}`); // false
//------------------------------------------------------
console.log(separator);
console.log('This is Foo.prototype: Prototype object');
console.log('type:', typeof Foo.prototype); // object

console.log(`Is [[Prototype]] Object.prototype?: ${Object.getPrototypeOf(Foo.prototype) === Object.prototype}`); // true 

console.log(`Has own prototype property?: ${Foo.prototype.hasOwnProperty('prototype')}`); // false

console.log(`Has own constructor?: ${Foo.prototype.hasOwnProperty('constructor')}`); // true
console.log(`is constructor Foo?: ${Foo.prototype.constructor === Foo}`) // true. The constructor property points back to the constructor function. 
//------------------------------------------------------
console.log(separator);
console.log('This is Object.prototype: Prototype object');
console.log('type:', typeof Object.prototype); // object

console.log(`Is [[Prototype]] null?: ${Object.getPrototypeOf(Object.prototype) === null}`); // true. This is the end of the prototype chain. 

console.log(`Has own prototype property?: ${Object.prototype.hasOwnProperty('prototype')}`); // false

console.log(`Has own constructor?: ${Object.prototype.hasOwnProperty('constructor')}`); // true 

console.log(`is constructor Object?: ${Object.prototype.constructor === Object}`) // true. Constructor property points back at the constructor function. 

//------------------------------------------------------
console.log(separator);
console.log('This is Foo: Constructor Function');
console.log('type:', typeof Foo); // function

console.log(`Is [[Prototype]] Function.prototype?: ${Object.getPrototypeOf(Foo) === Function.prototype}`); // true 

console.log(`Has own prototype property?: ${Foo.hasOwnProperty('prototype')}`); // true 

console.log(`This is Foo.prototype: ${Foo.prototype}`) // [object Object]

console.log(`Has own constructor?: ${Object.prototype.hasOwnProperty('constructor')}`); // true
console.log(`is constructor Function.prototype.constructor?: ${Foo.constructor === Function.prototype.constructor}`); // true

//------------------------------------------------------
console.log(separator);
console.log('This is Function.prototype: Function object');
console.log('type:', typeof Function.prototype); // function

console.log(`Is [[Prototype]] Object.prototype?: ${Object.getPrototypeOf(Function.prototype) === Object.prototype}`); // true

console.log(`Has own prototype property?: ${Function.prototype.hasOwnProperty('prototype')}`); // false

console.log(`Has own constructor?: ${Object.prototype.hasOwnProperty('constructor')}`); // true
console.log(`is constructor Function?: ${Function.constructor === Function}`); // true

//------------------------------------------------------
console.log(separator);
console.log('This is Function: Constructor Function');
console.log('type:', typeof Function); // function

console.log(`Is [[Prototype]] Function.prototype?: ${Object.getPrototypeOf(Function) === Function.prototype}`); // true

console.log(`Has own prototype property?: ${Function.prototype.hasOwnProperty('prototype')}`); // false

console.log(`This is Function.prototype: ${Function.prototype}`) // function () {}

console.log(`Has own constructor?: ${Function.hasOwnProperty('constructor')}`); // false
console.log(`is constructor Function?: ${Function.constructor === Function}`); // true

//------------------------------------------------------
console.log(separator);
console.log('This is Object: Constructor Function');
console.log('type:', typeof Object); // function

console.log(`Is [[Prototype]] Function.prototype?: ${Object.getPrototypeOf(Object) === Function.prototype}`); // true

console.log(`Has own prototype property?: ${Object.hasOwnProperty('prototype')}`); // true

console.log(`This is Object.prototype: ${Object.prototype}`); //[object Object]

console.log(`Has own constructor?: ${Function.hasOwnProperty('constructor')}`); // false

console.log(`is constructor Function?: ${Function.constructor === Function}`); // true 
//------------------------------------------------------