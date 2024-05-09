// memoization is an approach that involves saving a computed answer for futre reuse, instead of computing it from scratch every time it is needed. 

// the solution below calculates the nth fibonacci number recursively. 

// it saves each computed fibonacci value into the memo object.

// it then checks if n is <= 2 if it is, it returns 1.

//otherwise it checks if the nth fibonacci number has been computed and saved in memo.

// if it has been computed and saved in memo, the nth number is pulled from memo and returned

// otherwise, the fibonacci number is calculated recurisvely and saved as a value to the memo object and then it is returned.

// notice that the memo object is declared on the global scope. So it will be keeping track of any operation calculated by the function. 



let memo = {};

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  } else {
    if (memo[n]) {
      return memo[n];
    } else {
      memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
      return memo[n];
    }
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765