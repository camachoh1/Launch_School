// // Problem 1

// function say() {
//   if (false) {
//     var a = 'hello from inside a block'; 
//   }

//   console.log(a); 
// }

// say(); // undefined 

//Problem 2

// function say() {
//   if (false) {
//     let a  = 'hello from inside a block';
//   }

//   console.log(a) //error
// }

// say();

// Problem 3

// function hello() {
//   a = 'hello';
//   console.log(a);

//   if (false) {
//     var a = 'hello again';
//   }
// }

// hello();
// console.log(a); // hello, error

// Problem 4

// function hello() {
//   a = 'hello';
//   console.log(a);

//   if (false) {
//     let a = 'hello again'
//   }
// }

// hello();
// console.log(a); // hello, hello. The `a inside the if block is confined to the block since it was defined using let. `a` on line 2 is declared without `let`, `const`, or `var` so it is declared as a global variable that is why it is available on the last line. The first `hello` output is from the console.log on the second line of the function's body. 

// Problem 5

// var a = 'hello';

// for (var index = 0; index < 5; index += 1) {
//   var a = index;
// }

// console.log(a); // 4 the variable declaration on line 4 is hoisted to the top of the global scope. Since a global variable named `a` exists, the hoist has no direct effect on the operation. Inside the loop, `a` gets assigned five times; at the end of the loop, it has a value of 4. 

// Problem 6

// let a = 'hello';

// for (let index = 0; index < 5; index += 1) {
//   let a = index;
// }

// console.log(a); // hello | for loops create an inner scope, we have two different `a` variables one initialized in the global scope and one initialized in the inner scope of the for loop. The output we see is the output coming from the variable defined on line 1. 

// Problem 7

// let a = 1;

// function foo() {
//   a = 2;

//   let bar = function() {
//     a = 3;
//     return 4;
//   };

//   return bar();
// }

// console.log(foo()); // 4
// console.log(a); // 3

// // Problem 8

// var a = 'global';

// function checkScope() {
//   var a = 'local';
//   const nested = function() {
//     var a = 'nested';
//     let superNested = () => {
//       a = 'superNested';
//       return a
//     };

//     return superNested();
//   }

//   return nested();
// }

// console.log(checkScope()); // superNested `var` variables are declared with function-scope so each change that happens within the nested or superNested functions are taking place only in their own individual scope. The global variable on line one is never manipulated. 
// console.log(a); // global

// Problem 9 

// let a = 'outer';
// let b = 'outer';

// console.log(a); // outer
// console.log(b); // outer
// setScope(a);
// console.log(a); // outer
// console.log(b); // inner | `foo` has local scope. So the re-assignment does not affect `a`. b is a global variable defined on line 2 and so it is available everywhere in the program. So it's value is affected by the reassignment taking place in setScope.

// function setScope(foo) {
//   foo = 'inner';
//   b = 'inner';
// }

// Problem 10

// let total = 50;
// let increment = 15;

// function incrementBy(increment) {
//   total += increment;
// }

// console.log(total); // 50
// incrementBy(10);
// console.log(total); // 60
// console.log(increment); // 15 | += is short for total = total + increment. This is an assignment, since total is a global variable it is available in the function incrementBy(). Notice that the argument received by incrementBy, `increment` is a local variable only available to the body of the function. the global variable `increment` is different than the parameter `increment` and not affected by the operations taking place inside the function. This is why the last line returns 15. 


// Problem 11

// let a = 'outer';

// console.log(a);
// setScope();
// console.log(a);

// var setScope = function () {
//   a = inner;
// };

// with hoisting the above code is equivalent to:

// var setScope;

// let a = 'outer';

// console.log(a);
// setScope();
// console.log(a);

// setScope = function () {
//   a = 'innner';
// };

// line 6 tries to call setScope as a function. However, setScope is just a declared global variable whose value is undefined Note that unlike function declarations, with function expressions using `var`, the name of the function is hoisted, but not the function body. 

let obj1 = { a: 1, b: 2 }
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;


console.log(obj2);

// for (let prop in obj2) {
//   console.log(obj2[prop]);
// }         // => 3
//           //    4
//           //    1
//           //    2