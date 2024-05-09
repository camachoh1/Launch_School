// // Problem 1: what will the following code output?
// let a = 'outer';

// function testScope() {
//   let a = 'inner';
//   console.log(a);
// }

// console.log(a); // inner
// testScope(); // outer
// console.log(a); // inner


//Problem 2: what will the following code output?

// let a = 'outer';

// function testScope() {
//   a = 'inner';
//   console.log(a);
// }

// console.log(a); // outer
// testScope(); // inner
// console.log(a); // inner


// Problem 3: What will the following code output?

// let basket = 'empty'

// function goShopping() {
//   function shop1() {
//     basket = 'tv'
//   }

//   console.log(`1 ${basket}`);

//   let shop2 = function() {
//     basket = 'computer';
//   };

//   const shop3 = () => {
//     let basket = 'play station';
//     console.log(basket);
//   };

//   shop1();
//   shop2();
//   shop3();

//   console.log(basket);
// }

// goShopping(); //empty, play station, computer

// Problem 4

// function hello() {
//   a = 'hi';
// }

// hello();
// console.log(a); //hi | the hello function is called so the value of hi is assigned to `a` which at this point is a global variable since it was declared without `let`, const, var, or function. 

// Problem 6

// function hello() {
//   let a = 'hello';
// }

// hello();
// console.log(a); // ReferenceError a is not defined

// problem 7

// console.log(a); // ReferenceError cannot access 'a' before initialization. variables declared with let are hoisted but placed in the TDZ (Temporal Dead Zone). It is unset and cannot be accessed. 

// let a = 1;

// Problem 8

// console.log(a);

// function hello() {
//   a = 1;
// }

// after hoisting, this program is equivalent to:

// function hello() {
//   a = 1;
// }

// console.log(a);

// we define hello but never call it, so we never assign a value to a.