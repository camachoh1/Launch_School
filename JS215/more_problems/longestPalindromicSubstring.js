// problem: given a string, write a function that finds and return the longest palindromic substring. 

// input: a string
// output: a string


// test cases: 
// longestPalindrome() // ''
// longestPalindrome('') // ''
// longestPalindrome('a') // 'a'
// longestPalindrome('aa') // 'aa'
// longestPalindrome('A') // 'A'
// longestPalindrome('AA') // 'AA'
// longestPalindrome('Aa') // 'Aa'
// longestPalindrome('ababab') // 'ababa'
// longestPalindrome('AbabAb') // 'AbabA'
// longestPalindrome('a aaa') // // 'a a'
// longestPalindrome(' a a') // ' a '
// longestPalindrome('A aaa') //  'A a'
// longestPalindrome('1') // '1'
// longestPalindrome('11') // '11'
// longestPalindrome('1a1') // '1a1'
// longestPalindrome('1 1') // '1 1'

// data structures: arrays, strings

// algorithm:
// GOAL: extract all possible substrings from the input string.
// filter the substrings array based on whether or not they are palindromes.
// sort the palindrome substrings by length in descending order
// return the longest one at index 0

// create a helper function to check wether a string is a palindrome. 

function isPalindrome(str) {
  return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}

function getSubstrings(str) {
  let result = [];

  for (let start = 0; start <= str.length; start += 1) {
    for (let end = 0; end <= str.length; end += 1) {
      result.push(str.slice(start, end));
    }
  }

  return result.filter(s => s !== '');
}

function longestPalindrome(str) {
  if (typeof str !== 'string') return '';

  let substringsArr = getSubstrings(str);
  
  if (substringsArr.length === 0 ) return '';

  let palindromes = substringsArr.filter(isPalindrome);
  return palindromes.sort((a, b) => b.length - a.length)[0];
}

// // test cases: 
console.log(longestPalindrome()); // ''
console.log(longestPalindrome('')); // ''
console.log(longestPalindrome('a')); // 'a'
console.log(longestPalindrome('aa')); // 'aa'
console.log(longestPalindrome('A')); // 'A'
console.log(longestPalindrome('AA')); // 'AA'
console.log(longestPalindrome('Aa')); // 'Aa'
console.log(longestPalindrome('ababab')); // 'ababa'
console.log(longestPalindrome('AbabAb')); // 'AbabA'
console.log(longestPalindrome('a aaa')); // // 'a a'
console.log(longestPalindrome(' a a')); // ' a '
console.log(longestPalindrome('A aaa')); //  'A a'
console.log(longestPalindrome('1')); // '1'
console.log(longestPalindrome('11')); // '11'
console.log(longestPalindrome('1a1')); // '1a1'
console.log(longestPalindrome('1 1')); // '1 1'