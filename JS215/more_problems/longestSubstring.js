// problem: 

// write a function that returns the longest non-repeating substring for a string input.

// input: a string
// output: a string (longest non-repeating substring)

// rules: a 'longest non-repeating substring' is a substring where no characters repeat.
// if the input is an empty string, return an empty string. 

// data structures: arrays, strings, object

// algorithm:
// GOAL: create an array with all substrings from the input string.
// create a frequency counter that checks the number of times characters appear in a string
// filter the substring array from the strings that have a character count that goes beyond 1.
// return the longest of the remaining strings

// helper function: getSubstrings
// input: a string
// output: an array

// CREATE a results array
// ITERATE through the input string (for loop start = 0)
  // ITERATE (for loop end = 0)
    // SLICE input string at start, end index
    // PUSH sliced string into result
  // END FOR
// END FOR

// RETURN result

// helper function: charCount
// input: a string
// output: an object


// CREATE a results object
// ITERATE through the string
  // INITIALIZE char = string[i]
  // IF !resultObj[char]
    // resultObj[char] = 0;
  // END IF

  // resultObj[char] += 1
// END FOR

// RETURN resultObj

// helper function: isUniqueString
// input: a string
// output: a boolean

// CREATE frequencyCount object (helper function)
// EXTRACT values
// IF all values === 1 
  // RETURN true
// ELSE 
  // RETURN false
// END IF


// main function: longestNonRepeatingSubstring
// input: string
// output: a string

// INITIALIZE subStringsArr (helper function)
// FILTER substringsArr
  // IF isUniqueString(substring)
    // SELECT substring
  // END IF
// END FILTER

// SORT filteredSubstrings by length (descending order)
// RETURN the first string (longest one)

function lengthOfLongestSubstring(string) {
  if (string === '') return '';
  
  let subStringsArr = getSubStrings(string);
  let filteredSubstrings = subStringsArr.filter(subStr => {
    return isUniqueString(subStr);
  });

  return filteredSubstrings.sort((a,b) => b.length - a.length)[0].length;
}


function getSubStrings(string) {
  let result = [];

  for (let start = 0; start <= string.length; start += 1) {
    for (let end = 0; end <= string.length; end += 1) {
      result.push(string.slice(start, end));
    }
  }
  return result.filter(substr => substr !== '');
}

function charCount(string) {
  let resultObj = {};

  for (let i = 0; i < string.length; i += 1) {
    let char = string[i];

    if (!resultObj[char]) {
      resultObj[char] = 0;
    }

    resultObj[char] += 1;
  }

  return resultObj;
}

function isUniqueString(string) {
  let count = charCount(string);
  let values = Object.values(count);

  return values.every(value => value === 1) ? true : false
}
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("aaaaaa")); // "a"
console.log(lengthOfLongestSubstring("abcde")); // "abcde"
console.log(lengthOfLongestSubstring("abcda")); // "abcd"
console.log(lengthOfLongestSubstring("pwwkew")); // "abcd"