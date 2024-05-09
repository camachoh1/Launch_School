// problem:

// The program cleans up a phone number (removes non digit characters) and returns the clean number. 

// The number may contain special characters which should be ingnored.


// rules: 

// a valid number has 10 digits or 11 digits (if the first digit is a 1). in such a case, ignore the 1 and work with the 10 digits. 

// invalid phone numbers:

  // has less than 10 digits
  // has more than 11 digits
  // has 11 digits but the first digit is not one
  
// input: a string of digits and special characters.
// output: a string of 10 digits: if a valid number return the valid number else return a string of 10 0s.

// examples/test cases:

// cleanPhoneNumber((416)-834-5597) -> 4168345597
// cleanPhoneNumber(1(334)-090-8899) -> 3340908899
// cleanPhoneNumber(3(334)-090-8899) -> 0000000000
// cleanPhoneNumber((324).445) -> 000000000
// cleanPhoneNumber((232)(334).(34450)) -> 000000000
// cleanPhoneNumber(()-()) -> 000000000


// data structures:

// arrays: split the input string into an array of characters then filter the non digit characters.

// if all characters in the array are digits with a total length of 10, join the numbers and return them as a string.

// if total length is 11 check if the character at index 0 is equal to one. if so, slice the array from index one, join and return. Else return 0000000000

// if total length of the array is greater than 11 or less than 10 return 000000000

// 


// function cleanPhoneNumber(num) {
//   let arr = num.match(/[0-9]/g);
//   let digitsArr = arr ? arr.map(Number) : [];

//   let isNumber = function (n) { return typeof n === 'number'};

  
//   if (digitsArr.length === 10 && digitsArr.every(isNumber)) {
//     return digitsArr.join('');
//   } else if (digitsArr.length === 11 && digitsArr.every(isNumber) && digitsArr[0] === 1) {
//     return digitsArr.join('').slice(1);
//   } else {
//     return '0000000000';
//   }
// }


function cleanPhoneNumber(num) {
  let cleanNum = num.replace(/[^0-9]/g, '');

  if (cleanNum.length === 10) {
    return cleanNum;
  } else if (cleanNum.length === 11 && cleanNum[0] === '1') {
    return cleanNum.slice(1);
  } else {
    return '0000000000';
  }
}

console.log(cleanPhoneNumber('(416)-834-5597')) // 4168345597
console.log(cleanPhoneNumber('1(334)-090-8899')) // 3340908899
console.log(cleanPhoneNumber('3(334)-090-8899')) // 0000000000
console.log(cleanPhoneNumber('(324).445')) // 000000000
console.log(cleanPhoneNumber('(232)(334).(34450)')) // 000000000
console.log(cleanPhoneNumber('()-()')) // 000000000