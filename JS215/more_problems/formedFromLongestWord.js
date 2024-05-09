// problem: Write a function that returns true if all the strings in an array can be formed by using only the characters from the lopngest word. 

// input: an array of strings
// output: a boolean

// rules: 

// there will only be one longest string in the array.
// '' are valid strings
// the input array can be empty

// data structures: arrays

// algorithm: 
// GOALS: if the input has a length <= 1 return false
// find and extract the longest sting from the input array
// compare the rest of the strings with the longest one.
  // split each string into characters and check if every character exist in the longest string if this condition is met for all strings in the array return true else false. 

  // main function canForm:
  // input an array
  // output: a boolean

  // IF arr LEN <= 1 return false
  // IF every string in the input is the same length return false

  // CREATE inputArr copy
  // SORT copyArr by length (Descending)
  // INITIALIZE longest = copyArr[0] (longest)
  // SHIFT longest from copyArr
  // ITERATE throuygh copyArr
    // if EVERY char from word exist in longest
    // return TRUE
  // END ITERATION 


function canForm(words) {
  if (words.length <= 1) return false;
  if (words.every(word => word.length === words[0].length)) {
    return false;
  }

  let wordsCopy = [...words].filter(word => word !== '');

  wordsCopy.sort((a,b) => b.length - a.length);

  let longest = wordsCopy.shift().toLowerCase();;

  return wordsCopy.every(word => {
    let wordArr = word.toLowerCase().split('');
    return wordArr.every(char => longest.indexOf(char) !== -1);
  });
}

console.log(canForm([])) // false
console.log(canForm([''])); // false
console.log(canForm(['', '', ''])); // false
console.log(canForm(['a', 'b', 'c'])); // false
console.log(canForm(['abcde', 're', 'ac'])); // false

console.log(canForm(['a', '', 'ab', 'abc'])); // true
console.log(canForm(['abcde', 'ab', 'ace', 'aba'])); // true
console.log(canForm(['abcde', 'AbC', 'CDA', 'Ebd'])); // true
console.log(canForm(['@Bcd3', '@CD', '3@d'])); // true
console.log(canForm(["mast", "manifest", "met", "fan"])) // true;