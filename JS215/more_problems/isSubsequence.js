// problem: given two strings write a function that returns true if string 1 is a subsequence of string 2. false otherwise. 

// data structures: 

// algorithm:

function isSubsequence(str1, str2) {
  if (arguments.length === 0 || [str1, str2].some(el => typeof el !== 'string')) return null;

  if ([str1, str2].some(s => s === '')) return false;

  let sub = [];
  for (let i = 0; i < str1.length; i += 1) {
    let char = str1[i];

    for (let b = 0; b < str2.length; b += 1) {
      if (char === str2[b]) {
        sub.push(str2[b])
      }
    }
  }
  return sub;
}

// test cases:

console.log(isSubsequence()); // null
console.log(isSubsequence(1)); // null
console.log(isSubsequence('s')); // null
console.log(isSubsequence('a', 0)); // null


console.log(isSubsequence('', '')); // false
console.log(isSubsequence('', 'abc')) // false

console.log(isSubsequence('a', 'a')); // true
console.log(isSubsequence('ba', 'aba')); // true
console.log(isSubsequence('aec', 'abcde')); // false
console.log(isSubsequence('ace', 'abcde')); // true
console.log(isSubsequence('abc', 'exajbjc')) // true

