// problem: given a string with numbers that represent a word's location write a function that returns the sorted sentence

// rules: 
// each string will only contain a single number between 1-9
// if the input string is empty return an empty string
// the output string does not include the numbers. 

// test cases: 
// rearrange("he2llo wo1rld") // "world hello";
// rearrange("")  // ''
// rearrange("he2llo") // hello

// data structures: arrays 

// algorithm:
// goal: 

// approach 1split the input string into an array of words
// create a results array 
// iterate through the words array 
// extract the number and add it to an array along with the word
// sort the resulting 2D array based on the number
// iterate through the sorted 2D array and transform each word by removing the number
// return an array containing the words in order without numbers
// join the words and return

// approach 2: 
// create a helper function that iterates through the array of words
// using regex extract the number and compare it with the number from the next string
// if greater return 1
// else -1
// if equal return 0

// sort the array of words passing the helper function as callback to sort
// map the sorted array by removing numbers 
// join and return 

// helper function
  // input: two words
  // output: 1, -1, or 0

  // num1 = word1.match(/[0-9]/)
  // num2 = word2...

  // IF num1 > num2
  // return 1
  // ELIF num1 === num2
    //return 0
  // ELSe
  // return -1
  // END IF

// main function: rearrange
// SPLIT sentence into wordsArr
// SORT wordsArr (helper function as callback)
// TRANSFORM sorted wordsArr (remove numbers)
// JOIN and return

function rearrange(str) {
  if (str === " ") return " ";

  let strArr = str.split(/\s/);
  let sortedArr = strArr.sort(sortByNumber);

  
  return sortedArr.map(word => {
    return word.split('').filter(char => /[a-z]+/gi.test(char)).join('');
  }).join(' ');
}

function sortByNumber(word1, word2) {
  let num1 = word1.match(/[0-9]/)[0];
  let num2 = word2.match(/[0-9]/)[0];

  if (num1 > num2) {
    return 1;
  } else if (num1 < num2) {
    return -1;
  } else {
    return 0;
  }
}

// console.log(rearrange("is2 Thi1s T4est 3a")); // "This is a Test"

// console.log(rearrange("4of Fo1r pe6ople g3ood th5e the2")); // "For the good of the people"

// console.log(rearrange(" ")); // ""


console.log(rearrange("4of Fo1r   pe6ople g3ood th5e the2"))