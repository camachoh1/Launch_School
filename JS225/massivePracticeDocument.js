// let Foo = function() {

// };
// let obj = Foo.prototype;

// let bar = new Foo();
// let baz = new Foo();

// console.log(obj);
// console.log(Foo);

// Object.getPrototypeOf(bar) === obj // true
// Object.getPrototypeOf(baz) === obj // true 

// function Dog(name, breed, weight) {
// 	// deleted Object.setPrototypeOf(this, Dog.myPrototype);
// 	this.name = name;
// 	this.breed = breed;
// 	this.weight = weight;
// }


// let maxi = new Dog('Maxi', 'German Shepherd', 32);

// if (maxi.constructor === Dog) {
//   console.log("It's a dog");
// } else {
//   console.log("It's not a dog");
// }

// let a = 1;
// let foo;
// let obj;

// function Foo() {
//   this.a = 2;
//   this.bar = function() {
//     console.log(this.a);
//   };
//   this.bar();
// }

// foo = new Foo();

// foo.bar();
// Foo();

// obj = {};
// Foo.call(obj);
// obj.bar();

// console.log(this.a);


/* 

   null
    |
{Object.prototype} 
    | 
{Being.prototype}
    |
    |
{Person.prototype}
    |
    | 
{joel}


*/

// class Being {
//   constructor(name) {
//     this.name = name
//   }

//   otherBehavior(something) {
//     console.log(this); // ??
//     console.log(something);
//   } 
  
// }

// class Person extends Being {
//   constructor(name, age) {
//     super(name);
//     this.age = age; 
//   }

//   otherBehavior(something) { // `otherBehavior` is owned by `Person.prototype` object 
//     // super.otherBehavior(something);
//     console.log(this.prototype);
//     console.log(Object.getPrototypeOf(this));
//     console.log('from Person');
//   }
// }

// const joel = new Person('joel', 26); 


// joel.otherBehavior('From Being'); // method 


// execution context: 
// -- an object 

// all functions can access their context object via `this`

// access to what they need to work via this (execution) context object 




// Global {
//   Local {
//     Normal {
//       Arrow {

//       }
//     }
//   }
// }



// Global 

// call stack 

// */

// (function iife () { // iife's this is: global 

//   const obj2 = {
//     normal: function () {
//       console.log(this); // > global

//       return () => {
//         console.log(this); // > global
//       };
//     },
//   }
//   obj2.normal(); // method invocation so exe context is implicitly received from JS
  
//   // context loss here bc we removed the fn from its container!
//   const normal = obj2.normal; // returns a function object, init normal to this obj

//   // invoke the fn obj 
//   const arrow = normal(); // normal's exe context is: global 

//   arrow(); // logs:
// })();


// console.log(typeof Apple, typeof Orange);
// // ReferenceError: Cannot access 'Apple' before initialization

// const Apple = class { // const and let 
//   // everything inside runs in strict mode 

//   constructor(color) {
//     this.color = color 
//   }
// }

// let Orange = function (color) { 
//   this.color = color;
// } 

// let myApple = new Apple('red'); 
// let myOrange = new Orange('orange');


/* 
Specific Concepts of Interest
You should be able to clearly explain and apply the following concepts:

Objects
  Organizing code into appropriate objects
  Object factories

Determining/setting function execution context (this)
  Implicit function execution context
  Explicit function execution context
  Dealing with context loss
  Lexical scope

Scope and Closures
  Higher-order functions
  Creating and using private data
  Garbage collection
  IIFEs
  Partial Function Application

Object creation patterns
  Constructor functions
  Prototype objects
  Behavior delegation
  OLOO and Pseudo-Classical patterns (prototype pattern + constructor pattern)
  class syntax

Modules 

*/


// function myBind(func, context, ...partialArgs) {

//   return function(...args) {
//     const fullArgs = partialArgs.concat(args);
//     return func.apply(context, fullArgs)
//   }
// }


// function myFilter(array, func, thisArg) {
//   const result = [];

//   array.forEach(value => {
//     if (func.call(thisArg, value)) {
//       result.push(value);
//     }
//   });

//   console.log(result);
// }


// const filter = {
//   allowedValues: [5, 6, 9],
// };

// myFilter([2, 1, 3, 4, 5, 6, 12], function(val) {
//   return this.allowedValues.includes(val);
// }, filter); // returns [5, 6]



// factory function
// function newStack() {
//   let stack = [];
//   return {
//     push(val) {
//       stack.push(val)
//     },

//     pop() {
//       stack.pop();
//     },

//     printStack() {
//       console.log(stack);
//     },
//   }
// }

// IIFE
// let newStack = (function() {
//   let stack = [];
//   return {
//     push(val) {
//       stack.push(val)
//     },

//     pop() {
//       stack.pop();
//     },

//     printStack() {
//       console.log(stack);
//     },
//   }
// })();


// constructor function

// function MakeStack() {

// }
// console.log(newStack());

//   Object.prototype.ancestors = function() {
//     let ancestorList = [];
//     let next  = this;

//     while (Object.getPrototypeOf(next)) {
//       next = Object.getPrototypeOf(next);

//       if (next === Object.prototype) {
//         ancestorList.push("Object.prototype");
//       } else {
//         ancestorList.push(next.name);
//       }
//     }
//     return ancestorList;
//   };

// // name property added to make objects easier to identify
// const foo = { name: 'foo'};
// const bar = Object.create(foo);
// bar.name = 'bar';
// const baz = Object.create(bar);
// baz.name = 'baz';
// const qux = Object.create(baz);
// qux.name = 'qux';

// console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
// console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
// console.log(foo.ancestors());  // returns ['Object.prototype']

// function delegate(obj, methodName, ...args) {
//   if (obj[methodName]) {
//     return function() {
//       return obj[methodName].apply(obj, args);
//     };
//   }
// }

// const foo = {
//   name: 'test',
//   bar(greeting) {
//     console.log(`${greeting} ${this.name}`);
//   },
// };

// const baz = {
//   qux: delegate(foo, 'bar', 'hello'),
// };

// baz.qux();   // logs 'hello test';

// foo.bar = () => { console.log('changed'); };

// baz.qux();          // logs 'changed'

// function Person(firstName, lastName, age, gender) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.gender = gender;
// }

// Person.prototype.fullName = function() {
//   console.log(this.firstName + ' ' + this.lastName);
// }

// Person.prototype.communicate = function() {
//   console.log('jueeepa');
// }

// Person.prototype.eat = function() {
//   console.log('joa cule filo');
// }

// Person.prototype.sleep = function() {
//   console.log('Joa cule sueno');
// }

// function Doctor(firstName, lastName, age, gender, specialization) {
//   this.specialization = this.specialization;
// }

// Doctor.prototype = new Person();
// Doctor.prototype.constructor = Doctor;

// Doctor.prototype.diagnose = function() {
//   console.log('estas barro compa');
// }

// function Profesor(firstName, lastName, age, gender, subject) {
//   this.subject = this.subject;
// }

// Profesor.prototype = new Person();
// Profesor.prototype.constructor = Profesor;

// Profesor.prototype.teach = function() {
//   console.log('aprende careverga!');
// }


// function Student(firstName, lastName, age, gender, degree) {
//   this.degree = this.degree;
// }

// Student.prototype = new Person();
// Student.prototype.constructor = Student;

// Student.prototype.study = function() {
//   console.log('Joa cule pava!');
// }


// function GraduateStudent(firstName, lastName, age, gender, graduateDegree) {
//   this.graduateDegree = this.graduateDegree;
// }

// GraduateStudent.prototype = new Student();
// GraduateStudent.prototype.constructor = GraduateStudent;

// GraduateStudent.prototype.research = function() {
//   console.log('Wikipedia mi llave!');
// }

// class Person {
//   constructor(firstName, lastName, age, gender) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender
//   }

//   fullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   }

//   communicate() {
//     console.log('hablalo');
//   }

//   eat() {
//     console.log('joa cule filo');
//   }

//   sleep() {
//     console.log('joa cule suenio');
//   }
// }

// class Doctor extends Person {
//   constructor(firstName, lastName, age, gender, specialization) {
//     super(firstName, lastName, age, gender, specialization)
//     this.specialization = this.specialization;
//   }

//   diagnose() {
//     console.log('estas barro compae');
//   }
// }


// class Profesor extends Person {
//   constructor(firstName, lastName, age, gender, subject) {
//     super(firstName, lastName, age, gender, subject)
//     this.subject = this.subject;
//   }

//   teach() {
//     console.log('aprende bruto hp!');
//   }
// }

// class Student extends Person {
//   constructor(firstName, lastName, age, gender, degree) {
//     super(firstName, lastName, age, gender, degree)
//     this.degree = this.degree;
//   }

//   study() {
//     console.log('joa cule pava hp!');
//   }
// }

// class GraduateStudent extends Student {
//   constructor(firstName, lastName, age, gender, graduateDegree) {
//     super(firstName, lastName, age, gender, graduateDegree)
//     this.graduateDegree = this.graduateDegree;
//   }

//   research() {
//     console.log('pura wikipedia mi llave!');
//   }
// }

// const Person = {
//   init(firstName, lastName, age, gender) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
//     return this
//   },

//   fullName() {
//     console.log(this.firstName + this.lastName);
//   },

//   communicate() {
//     console.log('Communicating');
//   },

//   eat() {
//     console.log('Eating');
//   },

//   sleep() {
//     console.log('Sleeping');
//   }
// }

// const Doctor = Object.create(Person);
// Doctor.init = function(firstName, lastName, age, gender, specialization) {
//   Person.init.call(this, firstName, lastName, age, gender);
//   this.specialization = specialization;
//   return this;
// };
// Doctor.diagnose = function() {console.log('diagnosed')};

// console.log(Doctor)

// const Professor = Object.create(Person);
// Professor.init = function(firstName, lastName, age, gender, subject) {
//   Person.init.call(this, firstName, lastName, age, gender);
//   this.subject = subject;
//   return this;
// }
// Professor.teach = function() {console.log('Teaching')}

// const Student = Object.create(Person);
// Student.init = function(firstName, lastName, age, gender, degree) {
//   Person.init.call(this, firstName, lastName, age, gender, degree); 
//   this.degree = degree;
// }
// Student.study = function() {console.log('Studying')}

// const GraduateStudent = Object.create(Student);
// GraduateStudent.init = function(firstName, lastName, age, gender, research) {
//   Person.init.call(this, firstName, lastName, age, gender, research); 
//   this.research = research;
// }
// GraduateStudent.research = function() {console.log('Researching')}


// function Ninja() {
//   this.swung = false;
// }

// Ninja.prototype.swing = function() {
//   this.swung = true;
//   return this;
// }

// let ninjaA = new Ninja();
// let ninjaB = new Ninja();

// console.log(ninjaA.swing().swung)
// console.log(ninjaB.swing().swung)


// function Rabbit() {} // define constructor
// Rabbit.prototype = { // add new object with eats prop to prototype
//   eats: true,
// };

// let rabbit = new Rabbit(); // creating a new Rabbit instance

// delete rabbit.eats // trying to delete eats prop from rabbit (instance of Rabbit). This does nothing because rabbit does not have its own eats. It is delegating it from its [[Prototype]] which is Rabbit.prototype

// console.log(rabbit.eats); // logs true


// function Rabbit() {} // define constructor
// Rabbit.prototype = { // add new object with eats prop to prototype
//   eats: true,
// };

// let rabbit = new Rabbit(); // creating a new Rabbit instance


// delete Rabbit.prototype.eats // Deletes `eats` property from Rabbit.prototype.

// console.log(rabbit.eats); // logs undefined. rabbit delegates `eats` to its [[Prototype]] which is Rabbit.prototype since we deleted `eats` from it, rabbit no longer can delegate. JavaScript looks up the prototype chain all the way to Object.prototype and since it can't find an `eats` prop rabbit.eats returns undefined.



// const obj = {
// 	a: 1,
// 	b: 2,

// 	method() {
// 		function internalFunc() {
// 			console.log(this.a + this.b);
// 		}
// 		internalFunc()
// 	},
// };

// obj.method() // NaN 

// weird error
// let obj = {
// 	a: 1,
// 	method1() {
//     let self = this
// 		[1,2,3].forEach(function(number) {
// 				console.log(number)
// 		});
// 	},
// }

//   obj.method1()

// let obj = {
//   a: 1,
//   method() {
//     // let self = this;
//     [1,2,3].forEach(function(number) {
//       console.log(number + this.a);
//     });
//   },
// };

// obj.method();


// function mainFunc() {
//   let secretNumber = 1;
//   return function innerFunc() {
//     console.log(secretNumber + 2);
//   }
// }

// let newFunc = mainFunc();
// newFunc() // 3

// console.log(secretNumber); // ReferenceError: secretNumber is not defined

// function add(n1, n2) {
// 	console.log(n1 + n2);
// }

// function multiply(n1, n2) {
// 	console.log(n1 * n2);
// }

// function partial(func, arg1) {
// 	return function(arg2) {
// 			return func(arg1, arg2)
// 	}
// }

// let add1 = partial(add, 1);
// add1(3) // 4
// let multiplyBy2 = partial(multiply, 2);
// multiplyBy2(4); // 8


// let a = 1;
// let foo;
// let obj;

// function Foo() {
//   this.a = 2;
//   this.bar = function() {
//     console.log(this.a);
//   };
//   this.bar();
// }

// foo = new Foo(); // 2



// foo.bar(); // 2
// Foo()

// obj = {};
// Foo.call(obj);
// obj.bar();

// console.log(this.a);

// let ninja;
// function Ninja() {
// 	this.swung = true;
// }

// ninja = new Ninja();

// Ninja.prototype.swingSword = function() {
// 	return this.swung;
// };

// console.log(ninja.hasOwnProperty('swingSword')) // true 

// let ProtoObj = {
// 	init() {
// 		this.a = 1;
// 		this.b = 2;
//     return this;
// 	},
// 	sayHi() {
// 		console.log('hi!');
// 	},
// 	add(num) {
// 		return num + this.a + this.b;
// 	}
// };

// let newObj = Object.create(ProtoObj).init();


// console.log(newObj.__proto__ === ProtoObj); // hi!
// console.log(newObj.add(3)); // 6


// function Animal() {
// 	this.type = "Animal";
// }

// Animal.prototype.exist = function() {
// 	console.log(`I am an ${this.type} and I exist!}`);
// }

// let newAnimal = new Animal();

// console.log(newAnimal instanceof Animal) // true
// console.log(Animal.prototype)
// console.log(Object.getPrototypeOf(newAnimal) === Animal.prototype) // true
// console.log(newAnimal.type) // Animal
// newAnimal.exist() // I am an Animal and I exist!


// 4 Object creation patterns 


// // Factory functions
// let car1 = {
//   color: 'red',
//   year: 1984,
// }


// let car2 = {
//   color: 'Blue',
//   year: 2000,
// }

// function makeCar(color, year) {
//   return {
//     color,
//     year,
//     run() {
//       console.log('running');
//     }
//   }
// }

// // OLOO Object Linking Other Objects

// let mainObj = {
//   init() {
//     this.a =  1;
//     this.b =  2;
//     return this 
//   },
  
//   method() {
//     return this.a + this.b;
//   },
// }

// let newObj = Object.create(mainObj).init(); // [[Prototype]]

// //console.log(newObj) // {a: 1, b: 2, method: f}


// // Pseudo-Classical
//   // prototype pattern
//   // constructor pattern 


// const MainFunction = function() { // constructor pattern
//   // otherInstance's [[Prototype]] === MainFunction.prototype 
//   // what is the ex ctx? and what is relationship between ex ctx and MainFunction 
//   if (!MainFunction.prototype.isPrototypeOf(this)) { // check if this is instanceof MainFunction 
//     const instance = Object.create(MainFunction.prototype);
//     instance.a = 1;
//     instance.b = 2;
//     return instance;
//   }
  
//   this.a = 1;
//   this.b = 2;
// }

// MainFunction.prototype.method = function() { // prototype pattern 
//   return this.a + this.b
// }

// const myInstance = MainFunction(); // creates a and b props on global, returns undefined
// const otherInstance = new MainFunction();

// // "scope safe constructor" RegExp(), 
// // console.log(myInstance instanceof MainFunction && otherInstance instanceof MainFunction); // true

// // instanceof VS Object.prototype.isPrototypeOf(x)

// function A() {
//   this.data = '123';
// }

// const aInstance = new A();

// const b = Object.create(aInstance);

// /* 
//     |
//     |
// Object.prototype
//     |
//     |
// A.prototype.constructor ->  AConstructor  
//     |
//     |
// aInstance
//     |
//     |
//     b 
// */


//             //                   type is function!
// /*
// console.log(aInstance instanceof A,
//   A.prototype.isPrototypeOf(aInstance)); 
//   */


// // Class Syntax ES6 (just syntactic sugar*) (class, let, const)
// /* 
//               null
//                 |
//                 |
// Being      <--  Being.prototype
//                 |
//                 |
// Ancestors  <--  Ancestor.prototype
// */




// class Being {
//   sharedBehavior(arg1) {
//     console.log(arg1);
//   }
// }

// class InnerBeing extends Being { 
//   sharedBehavior() {
//     'absd;flkj'
//   }
// }

// class Ancestor extends InnerBeing {
//   sharedBehavior(arg1, arg2) { 
//     super.sharedBehavior(arg1);
//     console.log(arg2);
//   }
// }

// const grandpa = new Ancestor(); // create instance of Ancestor

// grandpa.sharedBehavior(1, 2); // method overriding



// const MainClass = class extends Ancestor {
//   constructor(c) { // configures instance state
//     super();
//     this.c = c;
//   }

//   method() { // instance method 
//     return this.a + this.b;
//   }
  
//   static classMethod() {
//     console.log('I am a class method');
//   }
// }

// /* let newInstance = new MainClass(3) // must be invoked via constructor invocation (`new`)
// console.log(newInstance.a) // 1
// console.log(newInstance.b) // 2
// console.log(newInstance.c) // 3 */

// Object.prototype.ancestors = function() {
//   let ancestorList = [];
//   let proto = this;

//   while (proto.hasOwnProperty('name')) {
//     proto = Object.getPrototypeOf(proto);
//     if (proto === Object.prototype) {
//       ancestorList.push("Object.prototype");
//     } else {
//       ancestorList.push(proto.name);
//     }
//   }

//   return ancestorList
// }

// const foo = {name: 'foo'};
// const bar = Object.create(foo);
// bar.name = 'bar';
// const baz = Object.create(bar);
// baz.name = 'baz';
// const qux = Object.create(baz);
// qux.name = 'qux';

// console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
// console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
// console.log(foo.ancestors());  // returns ['Object.prototype']

// function delegate(obj, method, ...args) {
//   return function() { obj[method].apply(obj, args)}
// }

// const foo = {
//   name: 'test',
//   bar(greeting) {
//     console.log(`${greeting} ${this.name}`);
//   },
// };

// const baz = {
//   qux: delegate(foo, 'bar', 'hello'),
// };

// baz.qux();   // logs 'hello test';

// foo.bar = () => { console.log('changed'); };

// baz.qux();          // logs 'changed'

// const Account = (function() {
//   let userFirstName;
//   let userLastName;
//   let userEmail;
//   let userPassword;

  
//   function validPassword(password) {
//     return password === userPassword;
//   }

//   function randomChar() {
//     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let randomIndex = Math.floor(Math.random() * chars.length);
    
//     return chars[randomIndex];
//   }

//   function anonymize() {
//     let resultStr = '';

//     while (resultStr.length < 16) {
//       resultStr += randomChar();
//     }

//     return resultStr;
//   }
  
//   return {
//     init(email, password, firstName, lastName) {
//       userEmail = email;
//       userPassword = password;
//       userFirstName = firstName;
//       userLastName = lastName;
//       this.displayName = anonymize();
//       return this;
//     },

//     reanonymize(password) {
//       if (validPassword(password)) {
//         this.displayName = anonymize();
//         return true;
//       } else {
//         return 'Invalid Password';
//       }
      
//     },

//     resetPassword(oldPassword, newPassword) {
//       if (validPassword(oldPassword)) {
//         userPassword = newPassword;
//         return true
//       } else {
//         return 'Invalid Password';
//       }
//     },

//     firstName(password) {
//       if (validPassword(password)) {
//         return userFirstName;
//       } else {
//         return 'Invalid Password';
//       }
//     },

//     lastName(password) {
//       if (validPassword(password)) {
//         return userLastName;
//       } else {
//         return 'Invalid Password'
//       }
//     },

//     email(password) {
//       if (validPassword(password)) {
//         return userEmail;
//       } else {
//         return 'Invalid Password'
//       }
//     },

//     displayName() {
//       return this.displayName;
//     },
//   } 
// })();

// let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');

// console.log(fooBar.firstName);                     // returns the firstName function
// console.log(fooBar.email);                         // returns the email function
// console.log(fooBar.firstName('123456'));           // logs 'foo'
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
// console.log(fooBar.resetPassword('123456', 'abc')) // logs true

// let displayName = fooBar.displayName;
// console.log(fooBar.reanonymize('abc'));                         // returns true
// console.log(displayName === fooBar.displayName);   // logs false

// let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.email('abc'));   


// console.log(fooBar.firstName);                     // returns the firstName function
// console.log(fooBar.email);                         // returns the email function
// console.log(fooBar.firstName('123456'));           // logs 'foo'
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
// console.log(fooBar.resetPassword('123456', 'abc')) // logs true

// let displayName = fooBar.displayName;
// console.log(fooBar.reanonymize('abc'));                         // returns true
// console.log(displayName === fooBar.displayName);   // logs false

// let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.email('abc'));   


// let Stack; 

// function makeStack() {
//   Stack = (function() {
//     let data = [];
//       return {
//       push(value) {
//         data.push(value);
//         return this
//       },
  
//       pop() {
//         return data.pop();
//       },
  
//       print() {
//         console.log(data);
//       }
//     }
//   })();
// }

// makeStack();
// let stackInstance = Object.create(Stack);
// console.log(Stack.isPrototypeOf(stackInstance))

// stackInstance.print(); // []
// stackInstance.push(3);
// stackInstance.push(20);
// stackInstance.push(1);
// stackInstance.pop();
// stackInstance.print() // [3, 20]
// console.log(stackInstance.data) // undefined

// makeStack();
// let stackInstance2 = Object.create(Stack);
// console.log(Stack.isPrototypeOf(stackInstance2))
// stackInstance2.print()

// function createInvoice(services = {}) {
//   return {
//     phone: services.phone || 3000,
//     internet: services.internet || 5500,
//     payments: [],
//     total() {
//       return this.phone + this.internet;
//     },
//     addPayment(payments) {
//       this.payments.push(payments)
//     },

//     paymentTotal() {
//       let totalPaid = 0;

//       for (let i = 0; i < this.payments.length; i += 1) {
//         totalPaid += invoiceTotal.payments[i].total();
//       }

//       return totalPaid
//     },

//     amountDue() {
//       return this.total();
//     }
//   }
// }

// function createPayment(services = {}) {
//   return {
//     internet: services.internet || 0,
//     phone: services.phone || 0,
//     amount: services.amount || 0,
//     total() {
//       if (this.amount) {
//         return this.amount;
//       } else {
//         return this.phone + this.internet;
//       }
//     }
//   }
// }

// function invoiceTotal(invoices) {
//   let total = 0;
//   let i;

//   for (i = 0; i < invoices.length; i += 1) {
//     total += invoices[i].total();
//   }

//   return total;
// }

// function paymentTotal(payments) {
//   let total = 0;
//   let i;

//   for (i = 0; i < payments.length; i += 1) {
//     total += payments[i].total();
//   }

//   return total;
// }

// let payments = [];
// payments.push(createPayment());
// payments.push(createPayment({
//   internet: 6500,
// }));

// payments.push(createPayment({
//   phone: 2000,
// }));

// payments.push(createPayment({
//   phone: 1000,
//   internet: 4500,
// }));

// payments.push(createPayment({
//   amount: 10000,
// }));

// console.log(paymentTotal(payments));      // => 24000

// const shape = {
//   getType() {
//     return this.type;
//   }
// }


// function Triangle(a,b,c) {
//   this.a = a;
//   this.b = b;
//   this.c = c;
//   this.type = 'triangle';
// }

// Triangle.prototype = shape;
// Triangle.prototype.constructor = Triangle;
// Triangle.prototype.getPerimeter = function() {return this.a + this.b + this.c};

// let t = new Triangle(3, 4, 5);
// console.log(t.constructor);                 // Triangle(a, b, c)
// console.log(shape.isPrototypeOf(t));        // true
// console.log(t.getPerimeter());              // 12
// console.log(t.getType());                   // "triangle"

// function User(first, last) {
//   if (!(this instanceof User)) {
//     return new User(first, last);
//   }
//     this.name = first + ' ' + last;
// }



// let name = 'Jane Doe';
// let user1 = new User('John','Doe');
// let user2 = User('John', 'Doe');


// console.log(name);         // => Jane Doe
// console.log(user1.name);   // => John Doe
// console.log(user2.name);   // => John Doe


// function createObject(obj) {
//   let newObj = {};
//   Object.setPrototypeOf(newObj, obj);
//   return newObj
// }

// function createObject(obj) {
//   function F() {}
//   F.prototype = obj;
//   return new F();
// }

// let foo = {
//   a: 1
// };

// let bar = createObject(foo);
// console.log(foo.isPrototypeOf(bar)); // true


// function neww(constructor, args) {
//   let object = Object.create(constructor.prototype);
//   let result = constructor.apply(object, args);
  
//   return typeof result === 'object' ? result : object;
// }

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.greeting = function() {
//   console.log(`Hello, ${this.firstName} ${this.lastName}`);
// }

// let john = neww(Person, ['John', 'Doe']);
// john.greeting();   // Hello, John Doe
// console.log(john.constructor);  // Person(firstName, lastName) {...}


// function makeMultipleLister(number) {
//   return function() {
//     for(let i = number; i < 100; i += 1) {
//       if (i % number === 0) {
//         console.log(i);
//       } 
//     };
//   };
// };

// let lister = makeMultipleLister(13);
// lister();

// let num = 0;

// function add(num2) {
//   return num += num2
// }

// function subtract(num2) {
//   return num -= num2;
// }


// console.log(add(1));
// console.log(add(42));
// console.log(subtract(39));
// console.log(add(6));

// let numbers = [1,2,3,4];
// function makeCheckEven() {
//   return function(number) {
//     return number % 2 === 0
//   }
// }

// let checkEven = makeCheckEven();

// console.log(numbers.filter(checkEven))

// function execute(func, operand) {
//   console.log(func(operand));
// }

// execute(function(number) {
//   return number * 2;
// },10 );

// execute(function(string) {
//   return string.toUpperCase();
// }, 'hey there');


// function makeListTransformer(func) {
//   return function(numbers) {
//     return numbers.map(func);
//   }
// } 

// let timestwo = makeListTransformer(function(number) {
//   return number * 2;
// });

// console.log(timestwo([1,2,3,4]));

// function makeAccount(number) {
//     let accountBalance = 0;
//     let accountTransactions = [];
//   return {
//     balance() {
//       return accountBalance;
//     },

//     transactions() {
//       return accountTransactions;
//     },

//     number() {
//       return number;
//     },

//     deposit(amount) {
//       accountBalance += amount;
//       accountTransactions.push({type: "deposit", amount: amount});
//       return amount;
//     },
//     withdraw(amount) {
//       if (accountBalance < amount) {
//         amount = accountBalance;
//       } 
      
//       accountBalance -= amount;
//       accountTransactions.push({type: "withdraw", amount: amount});
//       return amount;
//     }, 
//   }
// }

// function makeBank() {
//   let accounts = [];
//   return {
//     openAccount() {
//       let number = accounts.length + 101;
//       let newAccount = makeAccount(number);
//       accounts.push(newAccount);
//       return newAccount
//     }, 
//     transfer(source, destination, amount) {
//       destination.deposit(source.withdraw(amount));
//       return amount;
//     }
//   };
// }



// let bank = makeBank();
// console.log(bank.accounts);
// // undefined

// let countdown = (function() {
//   return function(num) {
//     for (let i = num; i >= 0; i -= 1) {
//       console.log(i);
//     }
//     console.log('Done!');
//   };
// })();

// countdown(7);

// solution 1
// let TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames() {
//     let self = this
//     this.titles.forEach(function(title) {
//       console.log(self.seriesTitle + ' ' + title);
//     });
//   }
// };

// solution 2
// let TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ' ' + title);
//     }, this);
//   }
// };

// solution 3
// let TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames() {
//     this.titles.forEach((title) => {
//       console.log(this.seriesTitle + ' ' + title);
//     });
//   }
// };

// solution 4
// let TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ' ' + title);
//     }.bind(this));
//   }
// };

// TESgames.listGames();


// solution 1
// let foo = {
//   a: 0,
//   incrementA() {
//     function increment() {
//       this.a += 1;
//     }

//     increment.call(this);
//   }
// }

// solution 2
// let foo = {
//   a: 0,
//   incrementA() {
//     function increment() {
//       this.a += 1;
//     }

//     increment.apply(this);
//   }
// }


// solution 3
// let foo = {
//   a: 0,
//   incrementA() {
//     let increment =  function() {
//       this.a += 1;
//     }.bind(this);

//     increment();
//   }
// }

// solution 4
// let foo = {
//   a: 0,
//   incrementA() {
//     let self = this;
//     function increment() {
//       self.a += 1;
//     }

//     increment();
//   }
// }


// solution 5
// let foo = {
//   a: 0,
//   incrementA() {
//     let increment = () => {
//       this.a += 1;
//     }

//     increment();
//   }
// }



// let foo = {
//   a: 0,
//   incrementA() {
//     let increment = function() {
//       this.a += 1;
//     }.bind(this);

//     increment();
//     increment();
//     increment();
//   }
// }

// foo.incrementA()
// console.log(foo.a)

// const invoices = {
//   unpaid: [],
//   paid: [],
//   add(clientName, amountOwed) {
//     let newObj =  {
//       clientName,
//       amountOwed,
//     };

//     this.unpaid.push(newObj);
//   }, 

//   totalDue() {
//     let total = 0;

//     this.unpaid.forEach(invoice => {
//       total += invoice.amountOwed;
//     });

//     return total;
//   },

//   payInvoice(clientName) {
//     let newClient = [];
//     this.unpaid.forEach(invoice => {
//       if (invoice.clientName === clientName) {
//         this.paid.push(invoice);
//       } else {
//         newClient.push(invoice);
//       }

//       this.unpaid = newClient;
//     });
//   },

//   totalPaid() {
//     let total = 0;

//     this.paid.forEach(invoice => {
//       total += invoice.amountOwed;
//     });

//     return total;
//   },
// }

// invoices.add('Due north', 250);
// invoices.add('Moonbeam', 187.50);
// invoices.add('slough', 300);


// invoices.payInvoice('Due north');
// invoices.payInvoice('slough');
// console.log(invoices.paid)
// console.log(invoices.totalPaid());
// console.log(invoices.totalDue());



// function makeCountry(name, continent, visited=false) {
//   return {
//     name,
//     continent,
//     visited,
//     getDescription() {
//       return `${this.name} is located in ${this.continent}. ${this.visitedCountry()}`;
//     },
//     visitCountry() {
//       this.visited = true;
//     },

//     visitedCountry() {
//       let message = '';
//       if (this.visited) {
//         message = `I have visited ${this.country}.`
//       } else {
//         message = `I have not visited ${this.country}.`
//       }

//       return message;
//     }
//   }
// }

// let canada = makeCountry('Canada', 'North America');

// console.log(canada.getDescription()); // "Canada is located in North America. I haven't visited Canada."
// console.log(canada.visitCountry());
// console.log(canada.getDescription()); // "Canada is located in North America. I have visited Canada."

// function createProduct(id, name, price, stock) {
 

//   return {
//     id,
//     name,
//     price,
//     stock,
//     setPrice(price) {
//       if (price < 0) {
//         alert('invalid price')
//       } else {
//         this.price = price;
//       }
//     },

//     describe() {
//       console.log(`Name: ${this.name}`);
//       console.log(`ID: ${this.id}`);
//       console.log(`price: ${this.price}`);
//       console.log(`stock: ${this.stock}`);
//     },
//   }
// }

// let scissors = createProduct(0, 'Scissors', 10, 8);
// let drill = createProduct(1, 'Cordless Drill', 15, 45);
// let saw = createProduct(2, 'Circular Saw', 12, 95);
// let hammer = createProduct(3, 'Sledge Hammer', 78, 45);
// let boxCutter = createProduct(4, 'Box Cutter', 41, 15);

// console.log(scissors);


// const item = {
//   name: 'Foo',
//   description: 'bla bla bla',
//   price: 50,
//   quantity: 100,
//   discount(percent) {
//     const discount = this.price * percent / 100;
//     let totalDiscount = this.price - discount;
//     return totalDiscount;
//   }
// }

// console.log(item.discount(20));
// console.log(item.discount(50));
// console.log(item.discount(25));


// const objectsEqual = function(obj1, obj2) {
//   for(let prop in obj1) {
//     if (obj2[prop] !== undefined) {
//       return true
//     } else {
//       return false
//     }
//   }
// }

// console.log(objectsEqual({a: 'foo', b: [1,2,3]}, {a: 'foo', b: [1,2,3]}));                      // true
// console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
// console.log(objectsEqual({}, {}));                                      // true
// // console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

// const createStudent = function(name, year) {
//   return {
//     name, 
//     year,
//     courses: [],
//     info() {
//       console.log(`${name} is a ${year} year student`);
//     },
//     addCourse(course) {
//       this.courses.push(course);
//     },
//     listCourses() {
//       console.log(this.courses);
//     },
//     addNote(courseCode, note) {
//       let course = this.courses.filter(course => course.code === courseCode)[0];
      
//       if (course) {
//         if (course.note) {
//           course.note += `; ${note}`;
//         } else {
//           course.note = note;
//         }
//       }
//     },
//     viewNotes() {
//       this.courses.forEach(course => {
//         if (course.note) {
//           console.log(`${course.name}: ${course.note}`);
//         }
//       });
//     },
//     updateNote(courseCode, note) {
//       let course = this.courses.filter(course => course.code === courseCode)[0];

//       if (course) {
//         course.note = note;
//       }
//     }
//   }
// }

// const school = (function() {
//   const VALIDYEARS = ['1st', '2nd', '3rd', '4th', '5th'];
//   let students = [];
//   let invalidYear = function() {
//     if (!VALIDYEARS.includes(year)) {
//       console.log('Invalid Year');
//       return
//     }
    
//   }
//   return {
//     addStudent(name, year) {
//       invalidYear(year);
  
//       let newStudent = createStudent(name, year);
//       students.push(newStudent);
//       return newStudent;
//     },
  
//     enrollStudent(studentName, courseName, courseCode) {
//       let student = students.filter(student => student.name === studentName)[0];
  
//       if (student) {
//         student.addCourse({name: courseName, code: courseCode});
//       };
//     },
  
//     addGrade(studentName, courseCode, grade) {
//       let student = students.filter(student => student.name === studentName)[0];
      
//       let course = student.courses.filter(course => course.code === courseCode)[0];
  
//       course.grade = grade;
//     },
//     getReportCard(studentName) {
//       let student = students.filter(student => student.name === studentName)[0];
    
//       if (student) {
//         student.courses.forEach(course => {
//           if (course.grade) {
//             console.log(`${course.name}: ${course.grade}`);
//           } else {
//             console.log('In Progress');
//           }
//         });
//       }
//     },
  
//     courseReport(courseName) {
  
//       let courseStudents = students.map(student => {
//         let courses = student.courses.filter(course => {
//           return course.name === courseName && course.grade;
//         });
  
//         if (courses.length > 0) {
//           return [student.name,courses[0]];
//         }
//       }).filter(students => students);
      
      
//       if (courseStudents.length === 0) {
//         console.log('undefined');
//         return
//       } else {
//         let grades = [];
//         console.log(`=${courseName} grades=`);
//         courseStudents.forEach(student => {
//           grades.push(student[1].grade);
//           console.log(`${student[0]}: ${student[1].grade}`);
//         });
  
//         console.log('---');
//         let sum = grades.reduce((num, sum) => num += sum, 0);
//         console.log(`Course Average: ${sum / grades.length}`);
//       }
      
//     },
//   }
// })();
  
// // foo
// school.addStudent('foo', '3rd');
// school.enrollStudent('foo', 'math', 101)
// school.enrollStudent('foo', 'advanced math', 102)
// school.enrollStudent('foo', 'physics', 202)

// school.addGrade('foo', 101, 95);
// school.addGrade('foo', 102, 90);


// // bar
// school.addStudent('bar', '1st');
// school.enrollStudent('bar', 'math', 101);

// school.addGrade('bar', 101, 91);


// // qux
// school.addStudent('qux', '2nd');
// school.enrollStudent('qux', 'math', 101);
// school.enrollStudent('qux', 'advanced math', 102);

// school.addGrade('qux', 101, 93);
// school.addGrade('qux', 102, 90);

// // console.log(school.getReportCard('foo'));
// // console.log(school.getReportCard('bar'));
// // console.log(school.getReportCard('qux'));

// school.courseReport('physics');

// const myBind = function(func, context, ...args) {
//   return function(...moreArgs) {
//     let fullArgs = args.concat(moreArgs)
//     func.apply(context, fullArgs);
//   }
// }

// function myFilter(array, func, thisArg) {
//   const result = [];

//   array.forEach(value => {
//     if (func.call(thisArg, value))
//     result.push(value);
//   });

//   return result;
// }

// const filter = {
//   allowedValues: [5, 6, 9],
// };

// console.log(myFilter([2, 1, 3, 4, 5, 6, 12], function(val) {
//   return this.allowedValues.includes(val);
// }, filter)); // returns [5, 6]


// Objects

// const pete = {
//   name: "pete",
//   age: 34,
//   country: 'cuba',
//   greet() {
//     console.log('hello');
//   }
// }

// const josh = {
//   name: 'josh',
//   age: 22,
//   country: 'france',
//   greet() {
//     console.log('hello');
//   }
// }

// const eva = {
//   name: 'eva',
//   age: 45,
//   country: 'brazil',
//   greet() {
//     console.log('hello');
//   }
// }

// const makePerson = function(name, age, country) {
//   return {
//     name,
//     age,
//     country,
//     greet() {
//       console.log('hello');
//     }
//   }
// }

// let pete = makePerson('pete', 34, 'cuba');

// console.log(pete);

// determining/setting function execution context (this)

// this

// execution context 
// is the current environment in which our code is being evaluated and executed. this refers to the current execution context. 

// implicit execution context for functions
// global object (window in browser).

// const func = function() {
//   console.log(`hello from ${this}`);
// }

// func(); // hello from [object global]

// implicit execution context for methods 
// the calling object or the object that currently contains the method. 

// const obj = {
//   greeting: 'hello',
//   method() {
//     console.log(`${this.greeting} from ${this}`);
//   }
// }

// obj.method(); // hello from [object Object]

// const Constructor = function() {
//   this.greeting = 'hello';
// }

// let newInstance = new Constructor(); // this === newInstance
// let secondInstance = Constructor(); // this === global or window

// console.log(global.greeting)

// arrow functions

// ES6 

// the execution context for an arrow function is not determined by the execution of the arrow function. Instead they inherit their execution context from their surrounding function at the time of their definition during execution.

// const obj1 = {
//   greeting: 'hello',
//   method() {
//     return () => {
//       console.log(`${this.greeting} from ${this}`)
//     };
//   }
// }

// let method1 = obj1.method;
// let arrowFunc = method1();
// arrowFunc();

// explicit execution context

// call, apply and bind

// call and apply

// let obj3 = {
//   secretNumber: 4,
//   add(num) {
//     return num + this.secretNumber;
//   },
// }

// console.log(obj3.add(4)); // 8

// let sum = obj3.add;

// console.log(sum(4)); // NaN

// console.log(sum.call(obj3, 4)); // 8

// bind 

// let obj3 = {
//   secretNumber: 4,
//   add(num) {
//     return num + this.secretNumber;
//   },
// }

// let obj4 = {}

// let sum = obj3.add;

// console.log(sum(4)) // NaN

// let sum2 = obj3.add.bind(obj3);

// console.log(sum2(4)) // 8

// console.log(sum2.call(obj4, 4));

// dealing with context loss

// functions are first-class objects.

// first-class citizen or object
// assign as value to variable
// pass as an argument to another function
// returned from another function
// stored in data structures such as array or objects.

// context loss

// when a function is executed with a different execution context than the originally intended. 

// methods being removed from their containing object. 

// const obj = {
//   number: 10,
//   method(num) {
//     return num + this.number
//   }
// }

// let add = obj.method;

// console.log(add.call(obj, 2)); // NaN



// internal functions losing their containing method execution context.

// const obj = {
//   number: 10,
//   method() {
//     return func = function(num) {
//       return num + this.number;
//     }.bind(this)
//   }
// }

// let add = obj.method();

// console.log(add(2)); // 12


// functions as arguments losing context. 

// const obj = {
//   number: 10,
//   method() {
//       let arr = [1,2,3];
//       let self = this;
//       return arr.map(function(num1) {
//         return num1 + self.number;
//       });
//     }
// }

// console.log(obj.method()); // 

// closures 

// let name1 = 'steve'

// function mainFunction() {
//   let message = 'hello world'
//   return function() {
//     return message;
//   }
// }

// function secondary(func) {
//   message = 'hello universe';
//   return function() {
//     console.log(`${func()} ${name1}`);
//   }
// }

// let messageFunc = mainFunction();

// console.log(messageFunc());

// let finalMessage = secondary(messageFunc);

// finalMessage();

// higher-order functions

// 1. receive functions as arguments
// 2. return functions
// 3. or both. 

// function secondary(func) {
//   message = 'hello universe';
//   return function() {
//     console.log(`${func()} ${name1}`);
//   }
// }

// creating private data:

// function generateId() {
//   let id = 0;
//   return function() {
//     return id += 1;
//   }
// }

// let newId = generateId();
// let user1 = newId()
// let user2 = newId()
// let user3 = newId()
// let user4 = newId()

// console.log(user1)
// console.log(user2)
// console.log(user3)
// console.log(user4)

// IIFE

// functions that are defined and immediately invoked. 

// let immediately = function(name) {
//   console.log(`hello ${name}`);
// }('coco');

// let object = (function() {
//   let id = 1;

//   return {
//     id() {
//       return id;
//     },

//     publicMethod() {
//       console.log(`hello I am a new object and my private id is: ${this.id()}`);
//     }
//   }
// })();

// console.log(object.publicMethod());

// garbage collection: 

// JavaScript's ability to "automatically" dealocate memory during execution. 

// const testFunc = function() {
//   let arr = [1,2,3];
//   return function() {
//     arr.forEach(num => {
//       console.log(num);
//     })
//   }
// }

// let func = testFunc()

// func = null;

// func

// partial function application

// higher-order function, closures and private data.

// create a function (generator) to return a function (applicator) which calls a third function (the primary) with some arguments fixed.

// bundle data and functionality together. 

// const add = function(a, b) { // primary
//   return a + b;
// }

// const generator = function(a) {
//   return function(b) { // applicator
//     return add(a, b);
//   }
// }

// const multiply = function(a, b) {
//   return a * b;
// }

// const generator = function(func, firstArg) {
//   return function(secondArg) {
//     return func(firstArg, secondArg);
//   }
// }

// const multiplyBy2 = generator(multiply, 2);
// const add4 = generator(add, 4);

// console.log(multiplyBy2(3));
// console.log(add4(3));

// function extend(destination) {
//   let objects = arguments;

//   for(let i = 1; i < arguments.length; i += 1) {
//     let obj = arguments[i];
//     for(let prop in obj) {
//       if (obj.hasOwnProperty(prop)) {
//         destination[prop] = obj[prop];
//       }
//     }
//   }

//   return destination;
// }



// let foo = {
//   a: 0,
//   b: {
//     x: 1,
//     y: 2,
//   },
// };

// let joe = {
//   name: 'Joe'
// };

// let funcs = {
//   sayHello() {
//     console.log('Hello, ' + this.name);
//   },

//   sayGoodBye() {
//     console.log('Goodbye, ' + this.name);
//   },
// };

// let object = extend({}, foo, joe, funcs);

// console.log(object.b.x);          // => 1
// object.sayHello();                // => Hello, Joe

// function newPerson(name) {
//   let obj = {name: name};

//   return Object.defineProperties(obj, {
//     log: {
//       value() {
//         console.log(this.name);
//       },
//       writable: false,
//     }
//   });
// }

// let me = newPerson('tu mae');
// me.log();
// me.log = function() {console.log('chupala')};
// me.log();

// prototypes
// prototype refers to 2 different things:
// 1. it also refers to the object from which other objects inherit their states and behaviours. 
// 2. it refers to the prototype property of constructor functions


// Prototypal inheritance 
// objects directly inheriting states and behaviours from other objects. 
// top down object at the bottom inherit from the objects at the top
// bottom up objects delegate their states and behaviours from the objects at the top. 


// 1. it also refers to the object from which other objects inherit their states and behaviours. 

// let Animal = {
//   alive: true,
//   breathe() {
//     console.log('breathing')
//   }
// }

// let dog = Object.create(Animal);
// let cat = Object.create(Animal);
// // [[Prototype]] -> Animal

// console.log(dog.alive);
// dog.breathe()

// console.log(cat.alive);
// cat.breathe();


// 2. it refers to the prototype property of constructor functions

// functions are objects. 
// all functions have a special property prototype. 
// only becomes relevant when functions are invoked as constructors
// invked with new

// 1. new object is created
// 2. the prototype property of the constructor becomes the prototype for the newly created object. That is the [[Prototype]] of the new object points at the constructor's prototype property.
// 3. this now points to the new object
// 4. the code in the constructor is executed giving the new instance its properties.
// 5. a new instance of the constructor is returned unless we explicitly return a new object.

// function makeList() {
//   let list = [];

//   function printList() {
//     if (list.length === 0) {
//       console.log('the list is empty');
//     }

//     list.forEach(todo => {
//       console.log(todo);
//     });
//   }

//   function removeTodo(todo) {
//     let index = list.indexOf(todo);
//     list.splice(index, 1);
//     return `${todo} removed!`
//   }

//   function addTodo(todo) {
//     if (!list.includes(todo)) {
//       list.push(todo);
//     }

//     return `${todo} added!`;
//   }
  
//   return function(todo) {
//     if (!todo) {
//       printList()
//     } else {
//       if (list.includes(todo)) {
//         return removeTodo(todo);
//       } else {
//         return addTodo(todo)
//       }
//     }
//   }
// }

// let list = makeList();

// console.log(list());
// console.log(list('make breakfast'))
// console.log(list('read book'));
// list();
// console.log(list('make breakfast'))
// list()

