// problem: a word chain is an array of words, where the next word is formed by either: 
  // changing exactly one letter from the previous word
  // adding or subtracting one letter.

// input: an array of words
// output: a boolean. true if the input is a word chain, false otherwise. 

// rules 
// you can only do one of the expected word changes per word. 
// meaning you can only either add/subtract a char or change one character from the words. 
// words will always be lowercase

// data structures: arrays

// algorithm: 
// GOALS: 
  // create helper functions that validate each of the conditions necessary to check whether each word in the chain is valid

  // iterate through the words array and pass each pair of words into the helper functions. 
  // if any of the helper functions return false, break the iteration and return false.
  // otherwise continue until the end of the iteration and return true

  // helper function: changedLetter
  // input: two strings
  // output: a boolean

  // initialize counter.

  // break both strings into characters.
  // iterate through string 2
  // check if each char is included in string 1
  // if a char is not included, increment counter by 1.
  // if counter is !== 1 return return false else return true

  // helper function: addedOrSubtractedChar
  // input: two strings
  // output: a boolean

  // return true if string 2 length is === string1 + 1 || string1 - 1 
  // else return false

  // main function: isWordChain

  // if the input array length <= 1, return false
  // if the input contains any spaces return false
  
  // initialize wordChain = true

  // iterate through the input array (for loop i = 1)
  // initialize current = i
  // previous = i - 1

  // if !changedLetter(prev, current) || !addedOrSubtractedChar(prev, current)
    // return false
  // end if
  // end iteration

  // return wordChain



function addedOrSubtractedChar(word1, word2) {
  return word2.length === (word1.length + 1) || word2.length === (word1.length - 1);
}

function changedLetter(word1, word2) {
  if (word1.length !== word2.length) return false;
  let counter = 0;

  let word1Arr = word1.split('');
  let word2Arr = word2.split('');

  for (let i = 0; i < word1.length; i += 1) {
    if (word1[i] !== word2[i]) counter += 1;
    if (counter > 1) return false;
  }

  return counter === 1
}

function isWordChain(words) {
  if (words.length <= 1) return false;
  if (words.some(word => word === '')) return false;

  for (let i = 1; i < words.length; i += 1) {
    let next = words[i];
    let current = words[i - 1];

    if (!changedLetter(current, next) && !addedOrSubtractedChar(current, next)) {
      return false
    }
  }

  return true;

}

console.log(isWordChain([])); // false 

console.log(isWordChain([""])); // false 
console.log(isWordChain(["", "a"])); // false
console.log(isWordChain(["a", ""])); // false

console.log(isWordChain(["a"])); // false
console.log(isWordChain(["a", "a"])); // false
console.log(isWordChain(["a", "a", "ab"])); // false


console.log(isWordChain(["a", "ab"])) // true
console.log(isWordChain(["ab", "a"])) // true
console.log(isWordChain(["ab", "cb"])) // true 
console.log(isWordChain(["a", "ab", "cb", "c"])); // true 
console.log(isWordChain(["a", "c", "cb"])); // true
console.log(isWordChain(["row", "crow", "crown", "brown", "brawn"])); // true

console.log(isWordChain(["a", "abc"])) // false
console.log(isWordChain(["abc", "b"])) // false
console.log(isWordChain(["run", "runny", "bunny"])) // false
console.log(isWordChain(["meek", "meet", "meat", "teal"])) // false
console.log(isWordChain(["a", "cb"])) // false

