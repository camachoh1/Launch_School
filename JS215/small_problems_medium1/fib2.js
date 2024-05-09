// function sum(n) {
//   if (n === 1) {
//     return 1;
//   } else {
//     return n + sum(n - 1);
//   }
// }


// // 5 !== 1
// // 5 + sum(4) => 4 !== 1 
// // -> 4 + sum(3) -> 3 !== 1 
// // -> 3 + sum(2) -> 2 !== 1 
// // -> 2 + sum(1) = 
// // -> 1 === 1 -> 1

// console.log(sum(5))

// problem: write a function that computes the nth Fibonacci number, where nth is an argument passed to the function. 

// input: a number

// output: the nth fibonacci number. 

// The function is recursive:

// a good recursive function calls itself at least once.
// has an ending condition 
// the results of each recursion are used in each step 

// examples:

// fib(3) -> 2 // 1 1 2

// fib(7) -> 13 // 1 1 2 3 5 8 13 

// fib(1) -> 1 

// fib(2) -> 1


// first = 1, second = 1
// fib  = first + second
// first = second
// second = fib

// data structures: numbers

// algorithm: 

// function returns fib when 

// create an in conditional that returns 1 if n <= 2

// declare three variables: first, second and fib
// first and second are initialized to 1, fib is left uninitialized.

//  

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765