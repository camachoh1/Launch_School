// problem: write a function that receives an array of strings and returns a string formatted into a sentence with comma separated words and the word "and" used to separate the last word. 

// rules: 
// the input string may contain any element besides strings, if that is the case ignore the element. 
// the input array may be sparse.
// return an empty string if the input empty
// if a single word is provided with the input array, return the word
// if no array is provided as input return an empty string. 


// test cases:
// formatWords([]) // ''
// formatWords([null]) // ''
// formatWords() // ''

// formatWords(['a']) // 'a'
// formatWords(['a', 'b']) // a and b
// formatwords(['a','b', 'c']) // a, b and c

// formatWords(['a',,'b','c']) // a, b, and c
// formatWords(['a', null, [], undefined, true, '', 'b', 'c']) // a, b and c

// data structures: arrays

// algorithm: 
// GOALS: create a result string
// filter the input array to only contain valid strings type of strings and strings with length > 0.
// identify the last value in the filtered array
// iterate through the filtered array with index.
// if the index is < last index
// add the current string with a comma to the result string
// if the index is === last index, add the current word with 'and'
// return the result string

function formatWords(words) {
  if (!Array.isArray(words) || words.length === 0) return '';

  let cleanWords = words.filter(word => typeof word === 'string' && word !== '');
  
  if (cleanWords.length === 0) return '';
  if (cleanWords.length === 1) return cleanWords[0];
  if (cleanWords.length === 2) return cleanWords[0] + " " + "and" + " " + cleanWords[1];
  
  let result = '';
  cleanWords.forEach((word, index) => {
    if (index < cleanWords.length - 2) {
      result += word + ', '
    } else if (index === cleanWords.length - 2) {
      result += word + ' ';
    } else {
      result += "and" + " " + word;
    }
  });
  return result;
}

// test cases:
console.log(formatWords([])); // ''
console.log(formatWords([null])); // ''
console.log(formatWords()); // ''

console.log(formatWords(['a'])); // 'a'
console.log(formatWords(['a', 'b'])); // a and b
console.log(formatWords(['a','b', 'c'])); // a, b and c

console.log(formatWords(['a',,'b','c'])); // a, b, and c
console.log(formatWords(['a', null, [], undefined, true, '', 'b', 'c'])); // a, b and c