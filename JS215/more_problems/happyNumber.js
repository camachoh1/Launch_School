// problem:

// create a function that accepts a number and determine wether the number is a happy number or not.

// input: a number
// output: a boolean value (true if the number is happy, false otherwise).

// rules:
  // a happy number is a number that yields 1 after repeatedly summing up the square of its digits:
  // 139 -> 1 ** 2 + 3 ** 2 + 9 ** 2 -> 91 -> 9 ** 2 + 1 ** 2....-> 1

  // a number is not considered happy if the process results in an endless cycle of numbers containing 4

// data structure: arrays 
// breaking the number into an array of digits will allow me to use transformation to calculate the square of each digit and the reduction to calculate the sum. 

// break the input number into an array of digits
  // transform the number into a string, split it into characters and then turn each character into a number.
  // the result is an array of digits

// calculate the squares: use transformation in order to turn each digit into its squared.

// reduce the array of squares.

// repeat from step 1 until the resulting value is either 1 or 4.

// we need a way to keep track of the current result.
// the current result is passed again into the loop
// the function returns true if the current result is 1

// current = 0

// sumsq = function(current)
// current = sumsq


// function squareSum(num) {
//   let digitsArr = String(num).split('').map(Number);
//   let squares = digitsArr.map(n => n ** 2);
//   let sum = squares.reduce((sum, n) => n += sum);
//   return sum;
// }


// function isHappy(num) {
//   let current = squareSum(num);
//   let sumSq;

//   while (current !== 1 && current !== 4) {
//     sumSq = squareSum(current);
//     current = sumSq;
//   } 

//   return current === 1 ? true : false
// }


// console.log(isHappy(67)); // false
// console.log(isHappy(89)); // false
// console.log(isHappy(139)); // true
// console.log(isHappy(1327)); // false
// console.log(isHappy(2871)); // false
// console.log(isHappy(3970)); // true