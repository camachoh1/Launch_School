// write a function that receives a string containing tokens separated by spaces. The function should check if all numeric tokens appear in ascending order. If this is the case, return true, else return false.

// rules: 

// only values >= 0 will be considered valid when checking if the token is in ascending order

// the input string will contain at least two numbers


// data structures: numbers, strings, arrays

// algorithm: 

// extract all numeric strings from the input
// turn all numeric strings into numbers

// initialize a current number variable to -1 (will work if the first value in the numbers is 0)

// iterate through the numbers array

// if num < current number
  // num = current number
// else return false

// if the operation gets to the end return true. 

var areNumbersAscending = function(s) {
  let strArr = s.match(/-?[0-9]+/g).map(Number);
  let num = -1;

  if (strArr.length < 2) return false;

  for (let i = 0; i < strArr.length; i += 1) {
    if (num < strArr[i] ) {
      num = strArr[i];
    } else {
      return false;
    }
  }
  return true
};


// test cases

console.log(areNumbersAscending("sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s")); // false

console.log(areNumbersAscending("-1 box has 3 blue 4 red 6 green and 12 yellow marbles")); // false 

console.log(areNumbersAscending("box has blue red green and 12 yellow marbles")); // false 

console.log(areNumbersAscending("0 box has 3 blue 3 red 6 green and 12 yellow marbles")); // false 

console.log(areNumbersAscending("0 box has 3 blue red green and yellow marbles")); // true 

console.log(areNumbersAscending("0 box has 3 blue 4 red 6 green and 12 yellow marbles")); // true 

console.log(areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles")); // true 