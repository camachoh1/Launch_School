// problem: write a function that receives a string and removes the last vowel of each word in a sentence.

// input: a string
// output: a string (with the last vowel of each word removed.)

// rules:

// the input string will contain one or more words.
// if the input string is "" return ""
// assume the input will always be a string
// the words may contain any type of characters.


// data structures: arrays 

// algorithm: 
// GOAL: break the string into an array of words.
// extract all vowels from each word. 
// from the extracted vowels, use the last one to find its index in the input string.
// using the index iterate through the word, find and remove the character.

// helper function: find last index
// input: a string
// output a number

// MATCH all vowels from the input string.
// EXTRACT the lat vowel from vowelsArr
// str.lastIndexof(lastVowel);
// return index

// main function removeLastVowel
// SPLIT the input string into words
// ITERATE through the wordsArr
  // EXTRACT index of lastVowel in word
  // RETURN wordArr = word.split('')
// END ITERATION
// JOIN modified array
// RETURN


// function findLastVowelIndex(word) {
//   let vowels = word.match(/[aeiou]/ig);
//   if (!vowels) return -1;
//   let lastVowelIndex = word.lastIndexOf(vowels[vowels.length -1]);
//   return lastVowelIndex;
// }


// function removeLastVowel(str) {
//   let wordsArr = str.split(' ');

//   return wordsArr.map(word => {
//     let lastVowelidx = findLastVowelIndex(word);
//     let wordArr = word.split('');

//     if (lastVowelidx < 0) {
//       return word;
//     }

//     wordArr[lastVowelidx] = '';
//     return wordArr.join('');
//   }).join(' ');
// }



console.log(removeLastVowel("mi casa es tu casa"));
console.log(removeLastVowel("Those who dare to fail miserably can achieve greatly."));

console.log(removeLastVowel("Love is a serious mental disease."));
console.log(removeLastVowel("Get busy living or get busy dying."));
console.log(removeLastVowel("GTD dF"));
console.log(removeLastVowel(""));