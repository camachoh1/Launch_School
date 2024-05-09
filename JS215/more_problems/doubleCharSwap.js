// problem: write a function that receives a string and two characters. The function should return the input strings with all appearances of char1 replaced by char2 and vice versa.

// rules:
// both characters will show up at least once in the string

// the inputs will always be valid

// test cases:

// doubleSwap("aabbcc", 'a', 'c') // ccbbaa
// doubleSwap("ab", 'a', 'b') // 'ba'
// doubleSwap( "aabbccc", "a", "b") //"bbaaccc"

// doubleSwap("random w#rds writt&n h&r&", "#", "&")
// //"random w&rds writt#n h#r#"

// doubleSwap("128 895 556 788 999", "8", "9")
// //"129 985 556 799 888"

// data structures: strings

// algorithm:
// GOAl: split the input string into an array of characters.
// iterate through the array of characters.
// if the current character is === to char 1 replace with char 2
// if the current character is === char 2 replace with char 1
// join and return

// main function: doubleSwap

// SPLIT input string 
// ITERATE through charArr
    // IF currenChar === char1
      // RETURN char2
    // ELIF currentChar === char2
      // RETURN char 1
    // ELSE
      // RETURN char
    // END IF
// END iteration

// JOIN resulting arr and RETURN

function doubleSwap(str, char1, char2) {
  return str.split('').map(char => {
    if (char === char1) {
      return char2;
    } else if (char === char2) {
      return char1;
    } else {
      return char;
    }
  }).join('')
}


console.log(doubleSwap("aabbcc", 'a', 'c')); // ccbbaa
console.log(doubleSwap("ab", 'a', 'b')); // 'ba'
console.log(doubleSwap( "aabbccc", "a", "b")); //"bbaaccc"

console.log(doubleSwap("random w#rds writt&n h&r&", "#", "&"));
// //"random w&rds writt#n h#r#"

console.log(doubleSwap("128 895 556 788 999", "8", "9"));
// //"129 985 556 799 888"