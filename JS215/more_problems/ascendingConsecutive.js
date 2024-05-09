// problem: Write a function that returns true if a string consit of ascending or ascending and consecurive numbers.

// rules: a number can consist of any number of digits, so long as the numbers are adjacent to each other, and the string has a least two of them. 

// data structures: arrays strings

// algorithm:
// goal: split the string into different number lengths
// the max number of digits for each substring is the length of the string / 2 if the string length is even.
// if its odd divide the string by single chars.

// find the length of the string
// if the length is odd
  // split the string into chars.
  // check that every char in the string is in ascending order.
    // current char < next char
  // return true if all chars in the array meet the condition

  // if the string length is even: 
  // helper function: 
  // find maxSubstringLength = str.length / 2 floor
  // 

console.log(ascending('10')) // false
console.log(ascending('111')) // false 
console.log(ascending('12745')) // false
console.log(ascending('01023')) // false
console.log(ascending('232220')) // false 

console.log(ascending('01')) // true
console.log(ascending('123')) // true
console.log(ascending('1112')) // true
console.log(ascending('232425')) // true
console.log(ascending('10111213'))

