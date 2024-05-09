// problem:

// given an array containing strings. Write a function that selects all the words in the array that have the same vowels as the first word in the array.

// rules: 
// the vowels can be in any number and order
// as long as the word contains exactly the same vowels as the first word it can be selected
// all words will be lowercase and may contain spaces

// example halo -> vowels = [a,o] | hola valid (vowels o and a) helo not valid( vowels e o).

// test cases:
  // sameVowelGroup(['halo', 'hola', 'helo']) // ['halo', 'hola']
  // sameVowelGroup(['halo', 'hilu', 'hulu']) // ['halo']
  // sameVowelGroup(['running', 'falling', 'uuuiii']) // ['running', 'uuuiii]
  // sameVowelGroup([]) // []

// data structures: arrays

// algorithm:
// GOAL: extract all vowels from the first string in the array
// filter the array using a helper function
// return the filtered array

// helper function: validWord

// input: a string, and an array of valid vowels
// output: a boolean

// INITIALIZE valid word to true
// EXTRACT all vowels from the string into an array of characters.
// ITERATE through vowelsArr
  // IF the index of char in validVowelsArr is -1
    // validWord = false
  // END IF
// END ITERATION
// RETURN valid vowels

// main function: sameVowelGroup
// EXTRACT all vowels from the first string in the array
// FILTER the input array using the helper function (validWord)
// RETURN the filtered array

function sameVowelGroup(words) {
  if (words.length === 0) return [];

  let validVowels = words[0].match(/[aeiou]/g);
  return words.filter(word => {
    return validWord(word, validVowels);
  });
}

function validWord(word, validVowels) {
  let vowels = word.match(/[aeiou]/g);
  let validWord = true;

  if (!vowels) return false;

  vowels.forEach(char => {
    if (validVowels.indexOf(char) === -1) {
      validWord = false;
    }
  });
  return validWord;
}

console.log(sameVowelGroup(['halo', 'hola', 'helo'])); // ['halo', 'hola']
console.log(sameVowelGroup(['halo', 'hilu', 'hulu'])); // ['halo']
console.log(sameVowelGroup(['running', 'falling', 'uuuiii'])); // ['running', 'uuuiii]

console.log(sameVowelGroup([])); // []

console.log(sameVowelGroup(["toe", "ocelot", "maniac"])); // ["toe", "ocelot"]

console.log(sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"])); // ["many"]

console.log(sameVowelGroup(["hoops", "chuff", "bot", "bottom"])); // ["hoops", "bot", "bottom"]

console.log(["haat", "hat"]);