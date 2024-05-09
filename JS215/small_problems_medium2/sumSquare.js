// problem: Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers. 

// the input number represents the range of numbers that will be used during operations:

// 3 = 123 = 1 +2 + 3 = 6**2 = 36
// 3 = 123 = 1**2 + 2**2 + 3**2 = 14
// 10 = 12345678910 = 1 + 2 + 3....+ 10

// rules:
 //only the first n positive integers are calculated
 // return 0 if the input integer is 1

 // input: a number
 // output: a number representing the difference between the squares of the sum of the first n positive integers and the sum of the squares of the first n positive integers

 // examples:

 // 3 = 123 = 1 +2 + 3 = 6**2 = 36
// 3 = 123 = 1**2 + 2**2 + 3**2 = 14
// 36 - 14 = 22

// 1 = 1 = 1
// 1 = 1**1 = 1
// 1 -1 = 0

// should I account for negative values?

// data structures: numbers
// I can use simple loops and variables to perform the mathematical operations

// algorithm:

// create helper functions for both the square of the sum of n digits and the sum of the squares

 // square of sum:
    // declare a variable sum and initialize it to 0.
    // initialize a for loop and loop until i (current number) is equal to n.
    // add the sum plus i
    // square the sum
    //return the sum

 // sum of square digits:
 // declare an sum and init to 0
 // initialize a for loop and loop until i === n
 // add the sum plus i squared
 // return the sum 

 // main function invokes both helper functions subtract and return their return values.

  function sumSquare(n) {
    let sum = 0;

    for(let num = 1; num <= n; num += 1) {
      sum += num;
    }

    return sum**2;
  }

  function squareSum(n) {
    let sum = 0;
    let sumOfSquares = 0;

    for(let num = 1; num <= n; num += 1) {
      sum += num;
      sumOfSquares += num**2;
    }

    return sum ** 2 - sumOfSquares;
  }

  function sumSquareDifference(n) {
    return sumSquare(n) - squareSum(n);
  }



  // refactored:

  function sumSquareDifference(n) {
    let sum = 0;
    let sumOfSquares = 0;

    for(let num = 1; num <= n; num += 1) {
      sum += num;
      sumOfSquares += num**2;
    }

    return sum ** 2 - sumOfSquares;
  }
console.log(sumSquareDifference(3));      // 22
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150