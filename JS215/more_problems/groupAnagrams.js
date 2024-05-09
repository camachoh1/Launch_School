// problem: given an array of strings, write a function that finds and group all the anagrams together. The outpu could be in any order.

// input: an array of strings
// output: a 2d array containing groups of anagrams.

// test cases: 
// groupAnagrams() // null
// groupAnagrams({}) // null
// groupAnagrams([]) // []
// groupAnagrams(['']) // [['']]
// groupAnagrams(['a']) // [['a']]
// groupAnagrams(['aba', 'aab', 'baa']) // [['aba','aab', 'baa']]
// groupAnagrams(['aba','cdc', 'baa', 'ccd', 'up']) // [['up'], ['aba', 'baa'], ['cdc', 'ccd]]
// groupAnagrams(['aba',,'bcc']) // [['aba'], ['bcc']]
// groupAnagrams(['131', '311', 'a31']) // [['131', '311'], ['a31']]
// groupAnagrams(['Aba', 'baa', 'AAB']) // [['Aba', 'baa', 'AAB']]
// groupAanagrams(['Aba',null, 'baa', 'AAB', 1]) // [['Aba', 'baa', 'AAB']]

// data structures: arrays 
// ['aba','cdc', 'baa', 'ccd', 'up']

// algorithm: 
// create a helper function that checks if two strings are anagrams of each other.
  // breaks the both strings into characters, sort them join them and if they are equal they are anagrams

// create a results array
// iterate through the input array using nested iteration
// index 1 will define the candidate
// index 2 will define the current string.
// if the current string is an anagram of the candidate
  // add both the candidate and the current string to the anagrams array
  // turn the candidate into an ''
// else 
  // if the candidate does not have any anagrams 
    // add to an array and push into results. 


function isAnagram(str1, str2) {
  if ([str1, str2].some(s => typeof s !== 'string')) return false;

  if (str1.length <= 1 && str2.length <= 1) {
    return str1 === str2;
  } else {
    let sorted1 = str1.toLowerCase().split('').sort().join('');
    let sorted2 = str2.toLowerCase().split('').sort().join('');

  return sorted1 === sorted2;
  }
}

function groupAnagrams(arr) {
  if (!Array.isArray(arr)) return null;
  if (arr.length === 0) return [];
  if (arr.length === 1) return [arr];

  let results = [];
  let seen = [];
  for(let idx1 = 0; idx1 < arr.length; idx1 += 1) {
    let anagram = [];
    
    let candidate = arr[idx1];

    for (let idx2 = 0; idx2 < arr.length; idx2 += 1) {
      let current = arr[idx2];

      if (isAnagram(candidate, current) && seen.indexOf(current) === -1) {
        anagram.push(current);
        seen.push(current)
      }
      
    }
    if (anagram.length > 0) {
      results.push(anagram);
    }
  }

  return results;
}

console.log(groupAnagrams()); // null
console.log(groupAnagrams({})); // null
console.log(groupAnagrams([])); // []
console.log(groupAnagrams([''])); // [['']]
console.log(groupAnagrams(['a'])); // [['a']]
console.log(groupAnagrams(['aba', 'aab', 'baa'])); // [['aba','aab', 'baa']]

console.log(groupAnagrams(['aba','cdc', 'baa', 'ccd', 'up'])) // [['up'], ['aba', 'baa'], ['cdc', 'ccd]]
console.log(groupAnagrams(['aba',,'bcc'])); // [['aba'], ['bcc']]
console.log(groupAnagrams(['131', '311', 'a31'])); // [['131', '311'], ['a31']]
console.log(groupAnagrams(['Aba', 'baa', 'AAB'])); // [['Aba', 'baa', 'AAB']]
console.log(groupAnagrams(['Aba',null, 'baa', 'AAB', 1])); // [['Aba', 'baa', 'AAB']]
console.log(groupAnagrams(["",""])); 