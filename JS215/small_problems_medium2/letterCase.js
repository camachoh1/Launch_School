// problem: Write a function that receives a string and returns an object containing:

// the percentage of characters in the string that are lowercase
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither.

// The string will always contain at least one character.

// input: a string
// output: an object

// input strings can have spaces, numbers and special characters.

// examples

// abCdef 123

// lowercase: a,b,d,e,f = 5 characters
// uppercase: C = 1 character
// neither: ' ', 1,2,3 = 4 characters

// total characters = 10

// lowercase / total characters * 100 = 50 (same formula applies to all of the other characters)

// AbCd +Ef

// lowercase: b,d,f = 3

// uppercase = A,C,E = 3

// neither = ' ', +  = 2

// notice that the output requires string numbers with decimal points 50.00

// data structures: strings and objects

// algorithm

// declare a variable to a result object with the keys: lowercase, uppercase, neither and values of 0 for each.

// iterate through the string with a for loop

// create an if conditional:
  // if the character is lowercase increment its value by 1.
  // repeat the same process for each type of characters

// iterate through the resulting object and format the values properly.


function calculatePercentage(num1, num2) {
  let percentage = Number.parseFloat((num1 / num2) * 100).toFixed(2);

  return percentage;
}


// function letterPercentages(string) {
//   let result = {lowercase: 0, uppercase: 0, neither: 0};

//   for (let i = 0; i < string.length; i += 1) {
//     if (string[i].match(/[a-z]/)) {
//       result['lowercase'] += 1
//     } else if (string[i].match(/[A-Z]/)) {
//       result['uppercase'] += 1
//     } else {
//       result['neither'] += 1
//     }
//   }

//   for (prop in result) {
//     result[prop] = calculatePercentage(result[prop], string.length);
//   }

//   return result;
// }


function letterPercentages(string) {
  let lowerCase = (string.match(/[a-z]/g) || []).length;
  let upperCase = (string.match(/[A-Z]/g) || []).length;
  let neither = (string.match(/[^a-zA-Z]/g) || []).length;

  let result = {lowercase: lowerCase, uppercase: upperCase, neither: neither};

  for (prop in result) {
    result[prop] = calculatePercentage(result[prop], string.length);
  }

  return result;
}


console.log(letterPercentages('abCdef 123'));
console.log(letterPercentages('AbCd +Ef'));
console.log(letterPercentages('123'));
