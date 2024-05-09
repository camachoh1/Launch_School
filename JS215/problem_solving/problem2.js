// problem:

// input: a string of digits

// output: boolean 

// the function receives a string of digits non digit characters are included in the number (ignore them). Those digits must meet the following requirements in order to be considered valid per the luhn formula:

// starting from the right, double every other digit in the number.

// if the doubled digit is > 10, subtract 9 from it.

// repeat the process until completing the number.

// perform a checksum (add every digit of the resulting number)

// if the checksum of the number % 10 === 0 then it is a valid number per the Luhn formula. 

// in such case return true else return false. 

// console.log(validLuhn('1111')) // false
// console.log(validLuhn('8763')) // true 
// console.log(validLuhn("2323 2005 7766 3554")) // true

// arrays: we can take advantage of reduce, map and iteration

// split the input string into an array of digits. (using match with regex in order to ignore non digit chars)

// reverse the array, iterate though the array and double every other character (transformation) 
  // if the doubled number >= 10 subtract 9 (this can be done in a helper function)

// reduce the transformed array

// if the reduced value % 10 === 0 return true else false. 


function double(num) {
  let doubleNum = Number(num) * 2;

  if (doubleNum >= 10) {
    return doubleNum -= 9;
  }

  return doubleNum;
}

function transformNums(arr) {
  return arr.reverse().map((n2, index) => {
    if (index % 2 !== 0) {
      return double(n2);
    } else {
      return Number(n2);
    }
    });
}

function validLuhn(num) {
  let numArr = num.match(/[0-9]+/g).join('').split('');
  
  let transformedNums = transformNums(numArr);
  
  let sum = transformedNums.reduce((sum, num) => sum += num);

  return sum % 10 === 0;
}

function completeLuhn(num) {
  if (validLuhn(num)) {
    return num.split(/[\D]/).join(' ');
  }
  
  let numStr;
  let extraDigit = 0;

  while (extraDigit < 10) {
    if (validLuhn(num + String(extraDigit))) {
      numStr =  num + String(extraDigit);
      break;
    }
    extraDigit += 1;
  }
  return numStr.split(/[\D]/).join(' ');
}

// console.log(validLuhn('1111')) // false
// console.log(validLuhn('8763')) // true 
// console.log(validLuhn("2323 2005 7766 3554")) // true
// console.log(validLuhn("2323-2005-7766-3554")) // true
// console.log(validLuhn("2323-2005-7767-3554")) // false 


// console.log(completeLuhn("2323-2005-7766-355"));
console.log(completeLuhn("2323-2005-7766-3554"));
console.log(completeLuhn("1111"));
console.log(completeLuhn("2324"));