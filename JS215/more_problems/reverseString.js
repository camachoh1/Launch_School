// problem: Given a string s and an integer k, reverse the first k characters, continue to reverse the k characters every other group of k chars. 

// example if the string is 'abcdef' and k = 2
// invert the first k chars in this case 'ab' -> 'ba'
// the next k chars 'cd' remain unchanged
// the following k chars 'ef' are inverted 'ef' -> 'fe'
// resulting in 'bacdfe'

// input: a string and a number
// output a string

// rules: 
// the input will consist of any type of non-space chars.
// k will be >= 0


// data structures: arrays, strings

// algorithm: 

// check if the input string is empty, if so return an empty string.
// if k === 0 return the original string.

// if the string length is < than k, reverse the entire string.

// break the string into a 2d array of k length.
  // get every substring k length
  // split every substring into an array of chars.
  // starting from the beginning of the 2d array, reverse every other sub array located on index 0, 2, 4 etc... and join


function getSubstirngs(string, k) {
  let strArr = string.split('');
  let result = [];

  while (strArr.length > 0) {
    result.push(strArr.splice(0, k));
  }

  return result;
}

function reverseStr(string, k) {
  if (string.length === 0) return '';
  if (k < 2) return string;
  if (k > string.length) return string.split('').reverse().join('');

  let subStringsArr = getSubstirngs(string, k);

  if (subStringsArr.length === 1) {
    return subStringsArr.map(subarr => subarr.reverse().join('')).join('')
  }

  return subStringsArr.map((subArr, index) => {
    if (index % 2 === 0) {
      return subArr.reverse().join('')
    } else {
      return subArr.join('');
    }
  }).join('');
}
// test cases:

console.log(reverseStr('', 2)) // '' 
console.log(reverseStr('a', 0)) // 'a'
console.log(reverseStr('ab', 1)) // 'ab'
console.log(reverseStr('abcd', 5)) // 'dcba'

console.log(reverseStr('abc', 2)) // 'bac' 
console.log(reverseStr('abcdefg', 2)) // 'bacdfeg' 
console.log(reverseStr('abcdefg', 3)) // 'cbadefg'  
console.log(reverseStr('abcd', 3)) // 'cbad'
console.log(reverseStr('leetcode', 2)) // 'eletocde' 
console.log(reverseStr('leetcode', 4)) // 'teelcode' 
console.log(reverseStr('abcd', 4)) // 'dcba'
