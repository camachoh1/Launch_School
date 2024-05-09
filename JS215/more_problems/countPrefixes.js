// problem: write a function that receives an array of lowerecase english letters `words` and a string `s`. and returns the number of strings in words that are prefix of s

// input: an array of lowercase strings and a string
// output: a number

// rules: 

// the prefixes in `words` could be repeated but each count as an individual prefix.

// the input array may contain no elements in such case return 0
// the input word could be of any length >= 1
// the two inputs will always be an array and a string

// data structures: strings, numbers, arrays

// algorithm: 
// GOALS identify all possible prefix from the input string by generating all substrings starting from the beginning of the string.
// iterate through the array of words and count the strings that appear in the substrings array

// helper function: getAllPrefix
// input a string
// output an array

// create a results array
// iterate through the input string using a for loop (i = 0)
// end = i
// iterate up to the length of the input string
// on each iteration push the substrings from index 0 to end
// return the substrings array

// main function:

// if the input array or the input string have length of 0 return 0

// get all substirngs (helper function)

// initialize a count = 0

// iterate through words
// if substrings contains word
// count += 1
// end iteration 
// return count

function getAllPrefix(string) {
  let result = [];

  for (let end = 1; end <= string.length; end += 1) {
    result.push(string.substring(0, end));
  }

  return result;
}

function countPrefixes(words, string) {
  if (words.length === 0 || string.length === 0) return 0

  let count = 0;
  let substrings = getAllPrefix(string);

  words.forEach(word => {
    if (substrings.includes(word)) {
      count += 1;
    }
  });

  return count;
}

// test cases:

console.log(countPrefixes([], 'apple')) // 0 
console.log(countPrefixes([], '')) // 0 
console.log(countPrefixes(['a'], 'bob')) // 0 
console.log(countPrefixes(['b'], 'ab')) // 0 
console.log(countPrefixes(['ac', 'ad', 'ae'], 'abcde')) // 0 
console.log(countPrefixes(['a', 'a', 'a'], 'ab')) // 3 
console.log(countPrefixes(['a', 'abc'], 'ab')) // 1
console.log(countPrefixes(['a', 'a', 'a', 'ab', 'ab'], 'ab')) // 5 
console.log(countPrefixes(['a', 'ab', 'abc', 'f', 'g'], 'abc')) // 3 
console.log(countPrefixes(['aa', 'aaa'], 'aaaaa')) // 2



