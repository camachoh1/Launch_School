// problem: given a string of words, write a function that will turn every word in the string 'inside out'. 

// input: a string
// output: a sting

// rules: 

// if the word is even length, move all inside letters to the outside and outer letters to the inside ex; taxi -> atix

// if a word is odd length, the middle character stay in place and everything else is shifted: taxis -> atxsi

// the input is a string containing multiple words.
// minimum size of the string is 1.
// if the input string is empty, return ''
// if the input is other than a string return ''

// test cases: 
// insideOut() // ''
// insideOut('') // ''

// insideOut('a') // a
// insideOut('ab') // ab
// insideOut('abc') // abc

// insideOut('taxi') // axti
// isideOut('taxis') // atxsi
// insideOut("hello world") // ehlol owrdl
// insideOut("hello worlds") // ehlol rowsdl

// data structures: strings, arrays

// algorithm: 
// GOAL: split the input string into an array of characters.
// find the middle point of the array
// if the array length is even split the array at the middle, reverse each half and join back
// if the array length is odd slice the array at the point before and after the middle point.
// reverse each half and join at the middle point. 

// helper function: turnInsideOut
// input: a string
// output: a string

// SPLIT the input string into an array of characters.
// INITIALIZE variable to middle point of the array (LEN / 2)

// IF charArr LEN even
  // firstHalf = charArr.slice(0, midpoint)
  // secondHald = charArr.slice(midpoint)
  // REVERSE each half 
  // CONCATENATE both halves
// ELSE 
  // midchar = charArr[midpoint]
  // fistHalf = charArr.slice(0, midpoint - 1)
  // secondHald = charArr.slice(midpoint + 1)
  // REVERSE each half
  // CONCATENATE first + middle + last
// END IF

// JOIN charArr
// RETURN

// main function:
 // IF !string || ''
  // RETURN ''
// END IF

// SPLIT the input string into an array of words
// ITERATE through the wordsArr
  // IF word LEN > 3
    // turnInsideOut(word)
  // ELSE
    // word
  // END IF
// END ITERATION
// JOIN 
// RETURN


function insideOut(string) {
  if (typeof string !== 'string' || string === '') return '';

  let wordsArr = string.split(' ');

  return wordsArr.map(word => {
    if (word.length > 3) {
      return turnInsideOut(word);
    } else {
      return word;
    }
  }).join(' ');
} 

function turnInsideOut(word) {
  let wordChars = word.split('');
  let midpoint = Math.floor(wordChars.length / 2);

  if (wordChars.length % 2 === 0) {
    let firstHalf = wordChars.slice(0, midpoint).reverse();
    let secondHalf = wordChars.slice(midpoint).reverse();
    return firstHalf.concat(secondHalf).join('');
  } else {
    let firstHalf = wordChars.slice(0, midpoint).reverse();
    let secondHalf = wordChars.slice(midpoint + 1).reverse();
    let middle = wordChars[midpoint];
    return [...firstHalf, middle, ...secondHalf];
  }
}

console.log(insideOut()); // ''
console.log(insideOut('')); // ''

console.log(insideOut('a')); // a
console.log(insideOut('ab')); // ab
console.log(insideOut('abc')); // abc

console.log(insideOut('taxi')); // atix
console.log(insideOut('taxis')); // atxsi
console.log(insideOut("hello world")); // ehlol owrdl
console.log(insideOut("hello worlds")); // ehlol rowsdl