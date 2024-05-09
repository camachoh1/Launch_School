// problem: Given a string, write a function that rearranges the characters so that any two adjacen characters are not the same. 

// input: a string
// output: a string with rearanged chars

// rules:
// the input string will always be lowercased.
// if there is no possible rearrangement that meets the conditions return ""
// if the input string is "" return ""
// if the input is other than a string return ""

// test cases:

// reorganizeString() // ''
// reorganizeString('a') // ''
// reorganizeString('ab') // ''
// reorganizeString('aaa') // ''
// reorganizeString('bbab') // ''
// reorganizeString('aabaab') // ''
// reorganizeString('abc') // 'abc'
// reorganizeString('a  b') // 'a b'
// reorganizeString('  ab') // a '' b ''
// reorganizeString('aab') // 'aba'
// reorganizeString('aabbacc') // abacabac
// reorganizeString('aabb') // 'abab'
// reorganizeString('cbc aa bc') // 'cbc a bca'

// data structures: strings 

// algorithm: 
// GOAL: create two separate strings to form the final return value

// iterate through the input string
// if the current character is not the same as the last character in the first result string
  // concatenate the current character to the result string1
// else if the current character is the same as the last character in the result string,  
  // concatenate character to the second result string
// iterate through each result string if no adjecent characters are the same concatenate and return 
// else return ''

const reorganizeString = function (str) {
  if (typeof str !== 'string' || str.length < 3) return '';
  
  if (str.length >= 3 && str.split('').every(c => c === str[0])) {
    return '';
  }

  let result1 = [];
  let result2 = [];

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== result1[result1.length - 1]) {
      result1.push(str[i]);
    } else {
      result2.push(str[i]);
    }
  }

  console.log(result1)
  console.log(result2)
  
  if (!allDistinct(result2) || result2[0] === result1[result1.length -1]) {
    return '';
  }

  return [...result1, ...result2].join('');
}

const allDistinct = function (arr) {
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i - 1] === arr[i]) return false;
  }

  return true;
}

// console.log(reorganizeString()); // ''
// console.log(reorganizeString('a')); // ''
// console.log(reorganizeString('ab')); // ''
// console.log(reorganizeString('aaa')); // ''
// console.log(reorganizeString('bbab')); // ''
// console.log(reorganizeString('aabaab')); // ''
// console.log(reorganizeString('aabaab')); // ''

// console.log(reorganizeString('abc')); // 'abc'
// console.log(reorganizeString('a  b')); // 'a b'
// console.log(reorganizeString('  ab')); // ''ab''
// console.log(reorganizeString('aab')); // 'aba'
// console.log(reorganizeString('aabbacc')); // abacabc
// console.log(reorganizeString('aabb')); // 'abab'
// console.log(reorganizeString('cbc aa bc')); // 'cbc a bca'

console.log(reorganizeString("vvvlo"));