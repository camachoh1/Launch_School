// write a function that maps the letters in a string to an object as keys and the values will be the index of each appearance of each letter in the string. 

// rules: 
  // input: a string
  // output: an object

  // all input will be lowercase strings
  // each letter in the string is a key to the object
  // the values of each key are arrays containing the index of each appearance of the letter key in the input string

// test cases:
  // mapLetters('hello') // {h: [0], e: [1], l: [2, 3], o: [4]}
  // mapLetters('dodo') // {d: [0, 2], o: [1, 3]}
  // mapLetters("hello world") // {h: [0], e: [1], l: [1,2,9], o: [4,7], "": [5], w: [6], r: [8] d: [10] }
  // mapLetters('s') // {s: [0]};
  // mapLetters('')  // {}

// data structures: arrays, objects

// algorithm:
  // create a result object
  // split the input string into an array of characters
  // iterate through the array of characters

  // helper function 
  // initialize a key value pair with each character by setting the key to each character in the string and the value to empty arrays

  // helper function:
  // the input string and the result object with the keys
    // iterates through the input string extracting the index for each letter and pushing them into the values of the result object

    // iterate through the input string:
      // if the current character has a key in the object:
      // pass its index into the values array 
      


function mapLetters(str) {
  let lettersObj = initializeObj(str);
  lettersObj = insertIndex(lettersObj, str);

  return lettersObj;
}

function initializeObj(str) {
  let strArr = str.split('');
  let resultObj = {}

  strArr.forEach(char => {
    resultObj[char] = [];
  });

  return resultObj;
}

function insertIndex(obj, str) {
  let strArr = str.split('');

  strArr.forEach((char, index) => {
    obj[char].push(index);
  });

  return obj;
}

console.log(mapLetters('hello')); // {h: [0], e: [1], l: [2, 3], o: [4]}
console.log(mapLetters('dodo')); // {d: [0, 2], o: [1, 3]}
console.log(mapLetters("hello world")); // {h: [0], e: [1], l: [2,3,9], o: [4,7], "": [5], w: [6], r: [8] d: [10] }
console.log(mapLetters('s')); // {s: [0]};
console.log(mapLetters(''));  // {}