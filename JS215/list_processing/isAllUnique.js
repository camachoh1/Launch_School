// // my solution using higher level abstraction: it breaks the string into an array of characters, creates an object that keeps track of each character and returns false if any of the key value pairs has a value greater than 1. 

// function isAllUnique(string) {
//   let charCount = {};
//   let strArr = string.toLowerCase().split('')
//   strArr.forEach(char => {
//     if (!charCount[char]) {
//       charCount[char] = 0;
//     }

//     charCount[char] += 1
//   });

//   return Object.values(charCount).every(count => count === 1);
// }

// console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
// console.log(isAllUnique('123,456,789'));                                 // false
// console.log(isAllUnique('The big apple'));                               // false
// console.log(isAllUnique('The big apPlE'));                               // false
// console.log(isAllUnique('!@#$%^&*()'));                                  // true
// console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true


// LS solution using lower level abstraction: They use a similar approach to mine (using an object to keep track of the characters), but instead of using a higher level `forEach`, they use a lower level `for` loop. Instead of counting the characters, they simply assign the value `true` to indicate the character has been seen. If at any point of the iteration a 'seen' character is found the loop breaks and returns false. Otherwise, if the iteration reacher the end of the string, `true` is returned. 

function isAllUnique(string) {
  let seen = {};
  let lowerCasedString = string.toLowerCase();

  for (let i = 0; i < lowerCasedString.length; i += 1) {
    if (lowerCasedString[i] === ' ') {
      continue;
    }

    if (seen[lowerCasedString[i]]) {
      return false;
    } else {
      seen[lowerCasedString[i]] = true;
    }
  }

  return true;
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true