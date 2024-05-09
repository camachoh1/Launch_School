// problem: given two strings, that may or may not be of the same length, determine the minimum number of character deletions required to make an anagram any characters can be deleter from either of the strings. 

// input: two strings
// output: a number

// rules: 
// if the two input strings are already anagrams return 0
// "" is considered an anagram
// a single character is considered an anagram
// if any of the strings is "" return the length of the non empty string
// the input strings can be of any length. 
// the final output is the count for deletions on both strings. 


// test cases: 
// makeAnagram("a", "a") // 0
// makeAnagram("", "") // 0
// makeAnagram("aabv", "bvaa") // 0
// makeAnagram("a", "b") // 2
// makeAnagram("", "abc") // 3
// makeAnagram("aabv", "bxcaaa") // 4
// makeAnagram("")


// data structures: arrays objects

// algorithm:
// GOAL: create frequency counters for both objects.
// if the char exist in both strings then calculate the difference in values.
// else add the frequency of the character in the result


function frequencyCounter(str){
  let resultObj = {};

  for (let i = 0; i < str.length; i += 1) {
    resultObj[str[i]] = (resultObj[str[i]] || 0) + 1;
  }

  return resultObj;
}

function alreadyAnagram(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

function oneEmpty(str1, str2) {
  return str1 === "" ? str2.length : str1.length;
}

function makeAnagram(str1, str2) {
  if (alreadyAnagram(str1, str2)) return 0;
  if ([str1, str2].every(s => s === "")) return 0;
  
  return oneEmpty(str1, str2);

  let freq1 = frequencyCounter(str1);
  let freq2 = frequencyCounter(str2);
  let deleted = 0;

  for (let char in freq1) {
    if (freq2[char]) {
      deleted += Math.abs(freq1[char] - freq2[char]);
    } else {
      deleted += freq1[char];
    }
  }

  for (let char in freq2) {
    if (!freq1[char]) {
      deleted += freq2[char];
    }
  }

  return deleted;
}

console.log(makeAnagram("a", "a")); // 0
console.log(makeAnagram("", "")); // 0
console.log(makeAnagram("aabv", "bvaa")); // 0
console.log(makeAnagram("", "abc")); // 3
console.log(makeAnagram("abc", "")); // 3
console.log(makeAnagram("aabv", "bxcaaa")); // 4
console.log(makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke")); // 30
console.log(makeAnagram("showman", "woman")); // 2