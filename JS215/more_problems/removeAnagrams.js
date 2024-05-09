// problem: given an array of words containing words, write a function that finds any two contigious strings if they are anagrams, the second string is removed. This process must be repeated until all anagrams are removed from the input array and returns the resulting array where no anagram duplicates exist. 

// if there are no anagrams in the input array return the array as is.

// input: an array of words
// output: an array of words

// data structures: arrays

// initialize two index variables
// first = 0
// second  = 1

// while first < the max length of the array
// if (isAnagram(arr[first], arr[second])) 
//   replace arraysecond = ''
//   second += 1
// else if second === first
//   second += 1
// else first += 1

function isAnagram(word1, word2) {
  if ([word1, word2].some(w => w === '' || w === undefined)) return false;

  return word1.split('').sort().join('') === word2.split('').sort().join('');
}

function removeAnagrams(words) {
  if (words.length < 2) return words;
  let first = 0;
  let second = 1;

  while (first < words.length) {
    if (isAnagram(words[first], words[second]) && first !== second) {
      words[second] = '';
      second += 1
    } else if (second === first) {
      second += 1
    } else {
      first += 1;
    }
  }

  return words.filter(w => w !== '');
}

// test cases:

console.log(removeAnagrams([])) // []
console.log(removeAnagrams(['a'])) // ['a']
console.log(removeAnagrams(['a', 'a'])) // ['a']
console.log(removeAnagrams(['abba', 'baba', 'bbaa', 'cd', 'dc'])) // ['abba', 'cd']
console.log(removeAnagrams(['a', 'b', 'c', 'd'])) // ['a', 'b', 'c', 'd']
