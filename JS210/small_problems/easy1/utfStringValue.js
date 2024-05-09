// using built in string and array methods:

// function utf16Value(str) {
//   if (str.length === 0) {
//     return str.length
//   }

//   let strArr = str.split('');
//   let numArr = strArr.map(char => charToNum(char));

//   if (numArr.length === 1) {
//     return numArr[0];
//   }
  
//   let sum =  numArr.reduce((accumulator, currentVal) => accumulator + currentVal);

//   return sum;
// }


// using a for loop
function utf16Value(str) {
  let sum = 0;

  for(let idx = 0; idx < str.length; idx += 1) {
    sum += str.charCodeAt(idx);
  }

  return sum
}


console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// // The next three lines demonstrate that the code
// // works with non-ASCII characters from the UTF-16
// // character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811