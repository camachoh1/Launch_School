// problem: given a string of numbers representing a large integer. Write a function that finds and return the maximum good integer as a string. If no good integer is found return ''

// rules: 
// a good integer is a number that is a substring of the input string whose length is 3 and is composed of a single digit value. example: '333', '111'.

// the function must return the max good number meaning '333' > '222' 

// if no good numbers are found in the input string return ''

// '000' is a valid good integer

// assume the string will only contain string number values. 
// these values will be integers. 

// in this case a valid substring is a contiguous sequence of chars 


// data structures: arrays strings

// algorithm: 
// GOALS: find all substrings length of 3. 
// find all good numbers from the substrings
// sort the good numbers by value and return the greatest one.

// main function: largestGoodInteger

// if the input string has length < 3 return ''

// collect all substrings length of 3 from the input string. (helper function)

// helper function: findSubstrings
// input a string of numbers
// output: an array of substrings 

// CREATE results = [];
// INITIALIZE max = str.length / 2 floor

// ITERATE (for loop start = 0) through the input string
// initialize end = start + 3
// PUSH slice of input (start, end) into result
// max += 3
// END ITERATION if start === max

// RETURN result

// search the substrings whose values are a unique number (filter)
  // this can be done using sets. if the set has a length of 1 it is a number made of a single value. (helper function)

  // validGoodNumber
  // input: a string
  // output a boolean

  // split the input string into an array of chars.
  // create a set with the chars array
  // turn the set into an array (destructuring)
  // if the resulting array length is 1 return true else return false

// sort them in descending order. 
// return the first value from the sorted array


// function findSubstrings(num) {
//   let result = [];

//   for (let start = 0; start <= num.length; start += 1) {
//     let end = start + 3;
//     result.push(num.slice(start, end));
//     end += 1
//   }

//   return result.filter(s => s.length === 3);
// }

// function validGoodNumber(num) {
//   length = new Set(num).size;
//   return length === 1 ? true : false;
// }

// function largestGoodInteger(num) {
//   if (num.length < 3) return '';

//   let substrings = findSubstrings(num);
//   let goodNumbers = substrings.filter(substr => {
//     return validGoodNumber(substr);
//   });

//   if (goodNumbers.length === 0) return '';

//   return goodNumbers.sort((a,b) => b - a)[0];
// }


// more efficient soultion:

function largestGoodInteger(num) {
  let maxGoodInt = ''

  for (let i = 2; i < num.length; i += 1) {
    if (num[i] === num[i - 1] && num[i] === num[i - 2]) {
      let substr = num[i].repeat(3);
      if (substr > maxGoodInt) maxGoodInt = substr;
    }

    
  }

  return maxGoodInt
}
// test cases:

console.log(largestGoodInteger('')) // ''
console.log(largestGoodInteger('1')) // ''
console.log(largestGoodInteger('12')) // ''
console.log(largestGoodInteger('12345')) // ''
console.log(largestGoodInteger('333')) // '333
console.log(largestGoodInteger('1233345333')) // '333' 
console.log(largestGoodInteger('0123000')) // // '000' 
console.log(largestGoodInteger('000000')) // '000' 
console.log(largestGoodInteger('111987555')) // '555' 
console.log(largestGoodInteger('5481112000')) // '111'