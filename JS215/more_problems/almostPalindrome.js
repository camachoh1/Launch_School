// write a function that takes an array of integers and returns an array containing the numbers that are either palindromes or almost-palindromes.

// rules: 

// a palindrome is a number that reads the same forwards and backwards 
// an almost palindrome is a number that can be rearanged into a palindrome. 
// if no palindromes or almost palindromes are found in the input array return an empty array
// a single digit is considered a palindrome.

// test cases:

// palindrome([123, 456, 345]) // []
// palindrome([121]) // [121]
// palindrome([123, 444]) // [444]
// palindrome([221, 334, 123]) // [221, 334]
// palindrome([1111, 2323, 11, 2]) // [1111, 2323, 11, 2]
// palindrome([21112, 11122, 12121, 56965]) // [21112, 11122, 12121, 56965]

// data structures: arrays, objects, strings

// algorithm
// GOAL: iterate through the input array, converting each number into strings.

// split the strings into characters and count the frequency of each character in the string using an object.

// if all values in the object are 1, it is not a palindrome.

// if the object only has one key, regardless of its value, it is a palindrome.

// if all values in the object are greater than 1 and are the same ex: 222, 333, 444, the number is a palindrome. 

// if the count of odd values > even values || even > odd is a palindrome. 

// function palindrome(numbers) {
//   let result = numbers.filter(num => {
//     return isAlmostPalindrome(num);
//   });

//   console.log(result);
// }

// function isPalindrome(number) {
//   let numStr = String(number);
  
//   return numStr === numStr.split('').reverse().join('');
// }

// function isAlmostPalindrome(number) {
//   if (isPalindrome(number)) return true;

//   let freqObj  = freqCount(number);
//   let oddsCount = 0;
//   let entries = Object.entries(freqObj);

//   entries.forEach(entry => {
//     if (entry[1] % 2 === 1) {
//       oddsCount += 1;
//     }
//   });

//   return oddsCount > 1 ? false : true;
// }

// function freqCount(number) {
//   let numStr = String(number);
//   let result = {};

//   for (let i = 0; i < numStr.length; i += 1) {
//     let char = numStr[i];

//     if (!result[char]) {
//       result[char] = 0;
//     }

//     result[char] += 1;
//   }

//   return result;
// }

// console.log(palindrome([123, 456, 345])); // []
// console.log(palindrome([121])); // [121]
// console.log(palindrome([123, 444])); // [444]
// console.log(palindrome([221, 334, 123])); // [221, 334]
// console.log(palindrome([1111, 2323, 11, 2])); // [1111, 2323, 11, 2]
// console.log(palindrome([21112, 11122, 12121, 56965])); // [21112, 11122, 12121, 56965]


//morgan's solution

/*Write a function that takes in an array of integers and returns the integers that are either palindromes or almost-palindromes. An almost-palindrome is any integer that can be rearranged to form a palindrome.

For example, the numbers 677 and 338 are both almost-palindromes, since they can be rearranged to form 767 and 383, respectively.

questions:
One argument, always an array
Array will only contain integers greater than or equal to 0
Array may be sparse--ignore empty elements
Empty array returns empty array, same as if there are no valid numbers
Array will not have non-element properties
One return value returns a single element array

algorithm:
Transform the array argument into the values of that argument to remove empty elements
Split each integer into its digits
Initialize an result variable to []
Iterate over each array and tally the elements
If the original number has an odd number of digits
  - Push the number into the result if exactly one digit has a odd number of occurances and every other one has an even
Else if the original number has an even number of digits
  - Push the number into the result if every single digit has an even number of occurances
Return the result array

*/



// var almostPalindromes = function almostPalindromes(array) {
//   array = Object.values(array);
//   array = array.map(int => String(int).split(''));
//   let results = [];
  
//   array.forEach(digits => {
//     let tallies = {};

//     digits.forEach(digit => {
//       tallies[digit] = tallies[digit] + 1 || 1;
//     });

//     if (digits.length % 2 === 0) {
//       if (Object.values(tallies).every(tally => tally % 2 === 0)) {
//         results.push(digits.join(''));
//       };
//     } else {
//       let odds = 0;
//       for (let i = 0; i < Object.values(tallies).length;
//            i += 1) {
//         if (Object.values(tallies)[i] % 2 === 1) odds++;
//       }

//       if (odds === 1) {
//         results.push(digits.join(''));
//       }
//     }
//   });

//   return results.map(str => parseInt(str, 10));
// }

// console.log(almostPalindromes([232])); //[232]
// console.log(almostPalindromes([322])); //[322]
// console.log(almostPalindromes([322, 322])); //[322, 322]
// console.log(almostPalindromes([232, 322])); //[232, 322]
// console.log(almostPalindromes([233, 123])); //[233]
// console.log(almostPalindromes([123])); //[]
// console.log(almostPalindromes([])); //[]

// let test = [133]
// test.length = 2;
// console.log(test);
// console.log(almostPalindromes(test)); //[133]



