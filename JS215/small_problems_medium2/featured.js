// problem:

//   write a function that takes an integer as an argument and returns the next featured number greater than the integer. Return an error message if there is no next featured number

// rules: 
//   a featured number is an odd number that is a multiple of 7 with all of its digits occurring exactly once for each
//   the largest possible featured number is 9876543201


// input: an integer
// output an integer

// data structures: numbers

// algorithm:
//   initialize a constant variable with the max featured number: 9887654301
//   initialize a variable candidate and initialize it to the input number

//   create a helper function that checks if every digit in the input number is unique:
//       input a number
//       output: a boolean

//     create a frequency counter object
//     if all values are 1 return true 
//     else return false

//   initialize a while loop
//     while the candidate is less than the max featured number
//     increase the candidate by 1
//       if the candidate has unique digits, is odd, and is divisible by 7
//         return the candidate 
//       else return the error message
  



const MAX_FEATURED = 9876543201;

function allUnique(num) {
  let numArr = String(num).split('');
  let countObj = {};

  for (let i = 0; i < numArr.length; i += 1) {
    if (!countObj[numArr[i]]) {
      countObj[numArr[i]] = 0;
    }

    countObj[numArr[i]] += 1;
  }

  return Object.values(countObj).every(count => count === 1);
}

function featured(num) {
  if (num >= MAX_FEATURED) return "error";

  let candidate = num;

  while (candidate < MAX_FEATURED) {
    candidate += 1
    if (allUnique(candidate) && candidate % 7 === 0 && candidate % 2 !== 0) {
      return candidate;
    }
  }
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
