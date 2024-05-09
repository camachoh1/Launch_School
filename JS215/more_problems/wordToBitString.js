// problem: write a function that receives a string as argument and returns an array of booleans. 

// rules: 
// locate the position of each letter of the input string in the alphabet A-Z 1-26. 
// In this case letter A in the alphabet holds position number 1.
// If the position for a letter is an even number, replace the letter with the number 1. 
// if the position for a letter is an odd number, replace the letter with a 0. 

// iterate through the stirng of 1s and 0s and for each number 1 pass true to the results array for each 0 in pass false into the results array

// the output is an array of true and false values. 
// the array is sorted in the same order as the string of 1s and 0s.

// test cases: 
// toBooleanArray("a") // [false]
// toBooleanArray('abc') // [false, true, false]
// toBoolArray("loves") // [false, true, false, true, true]
// toBoolArray("tesh") // [false, true, true, false]
//toBoolArray("deep") // [false, true, true, false]

// data strucutres: strings arrays objects booleans

// algorithm:
// GOALS: create an alphabet constant array containting all leters from the alphabet from a-z starting with a space. 

// split the input string into an array of characters

// iterate through (transformation) the array of characters and find the index position of the current char in the alphabet array

// if the index is odd return a 0 else return 1

// transform the array of ones and zeroes into boolean values
// if 0 return false if 1 return true

// return the array of booleans

// main function: toBooleanArray
// input: string
// output: arr of booleans

// CREATE alphabet constant
// SPLIT the input string into an array of chars
// ITERATE through charArr
  // IF ALPHABET INDEX OF current char % 2 === 0
    // RETURN 1
  // ELSE return 0
// END IF
// END ITERATION

// ITETATE through binaryArr
  // if currentNum === 1 
    // RETURN true
  // ELSE 
    // RETURN false
  // END IF
// END ITERATION

// RETURN boolArr

function toBooleanArray(string) {
  const ALPHABET = {"a": 1, "b": 2, "c": 3, "d": 4, "e": 5, "f": 6, "g": 7, "h": 8, "i": 9, "j": 10, "k": 11, "l": 12, "m": 13, "n": 14, "o": 15, "p": 16, "q": 17, "r": 18, "s": 19, "t": 20, "u": 21, "v": 22, "w": 23, "x": 24, "y": 25, "z": 26}
  
  let bitStr =  string.split('').map(char => {
    if (ALPHABET[char] % 2 === 0) {
      return 1;
    } else {
      return 0;
    }
  });

  return bitStr.map(n => n === 1 ? true : false);
}


console.log(toBooleanArray("a")); // [false]
console.log(toBooleanArray('abc')); // [false, true, false]
console.log(toBooleanArray("loves")); // [false, true, false, true, true]
console.log(toBooleanArray("tesh")); // [false, true, true, false]
//toBoolArray("deep") // [false, true, true, false]