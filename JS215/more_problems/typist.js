// problem:

// write a function that detects and counts key strokes based on an input string.

// rules: 
  // if the letter is uppercase the key stroke count is 2.
  // this is because the typist pressed caps lock once and then the letter

  // if an uppercase letter is followed by another uppercased letter, the key stroke counts as 1 since the typist didnt need to activate caps lock

  // if a lowercase letter follows an uppercase letter, the lowercase letter also accounts for two key strokes this is because caps lock needs to be deactivated before typing the letter

  // if the letter is lowercase and not preceded by an uppercase, the key stroke count is 1.

  // if the letter is uppercase and not preceded by a lowercase letter the key stroke count is 1

  // input a string
  // output: a number representing the key strokes

  // test cases:
    // typist("a") // 1
    // typist("aa") // 2
    // typist("abocx") // 5
    // typist("A") // 2
    //typist("AaA") // 6
    //typist("aA") // 3
    // typist("AA") // 3
    // typist("a b") // 3
    //typist("") // 0
  
  // data structures: 
    // arrays

  // algorithm:
  // initialize a counter to 0
  // split the input string into an array of characters
  // iterate through the array of characters:
    // if the current character is lowercase
      // increase the counter by 1
    // if the current character is uppercase
      // increase the counter by 2
    // if the current character is the same casing as the character before 
      // increase the counter by one
    // if the current character has different casing as the character before increase by 2
  // return the counter

function singleChar(str) {
  if (str.match(/[a-z]/)) {
    return 1;
  } else if (str.match(/[A-Z]/)) {
    return 2;
  }
}

function typist(str) {
  let count = singleChar(str[0]);

  if (str.length === 1) {
    return count;
  }

  let strArr = str.split('');
  
  for (let i = 1; i < strArr.length; i += 1) {
    let current = strArr[i];
    let previous = strArr[i - 1];


    if (current.match(/[A-Z]/) && previous.match(/[a-z]/)) {
      count += 2;
    } else if (current.match(/[a-z]/) && previous.match(/[A-Z]/)) {
      count += 2;
    } else {
      count += (current.match(/[a-zA-Z]/) ? 1 : 2);
    }
  }

  return count;
}
console.log(typist("a")); // 1
console.log(typist("A")); // 2
console.log(typist("aa")); // 2
console.log(typist("abocx")); // 5
console.log(typist("AaA")); // 6
console.log(typist("aA")); // 3
console.log(typist("AA")); // 3
console.log(typist("MMSuECRVwglq")) // 16