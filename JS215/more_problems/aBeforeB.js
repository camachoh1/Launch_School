// write a function that receives a string made exclusively of the letters a and b.
// the function should return true if all `a` characters appear before alll b characters. else return false

// input: a tring of letters
// output a boolean

// rules: 

// the input string will only be made of two letters a and b.
// if the string is empty return false

// algorithm:
// GOALS: iterate through the string and check if the index of every 'a' char is less than every 'b' char. 

// break the input string into chars.
// CREATE aIdxArr = [];
// CREATE bIdxArr = [];

// iterate through the charsArr
// if current char is 'a' pass its index into aIdxArr
// if current char is 'b' pass its index into bIdxArr

// iterate and check if every value in aIdXArr is < than every element in bIdxArr // using nested iteration

function checkString(string) {
  if (string === '' || string.match(/\s/)) {
    return false;
  }

  let strChars = string.split('');
  let aIdxArr = [];
  let bIdxArr = [];

  strChars.forEach((char, index) => {
    if (char === 'a') {
      aIdxArr.push(index);
    } else {
      bIdxArr.push(index);
    }
  });

  for (let i = 0; i < aIdxArr.length; i += 1) {
    for (let j = 0; j < bIdxArr.length; j += 1) {
      if (aIdxArr[i] > bIdxArr[j]) {
        return false
      }
    }
  }
  return true;
}

// test cases:

console.log(checkString('')) // false 
console.log(checkString(' ')) // false 
console.log(checkString('bbaa')) // false
console.log(checkString('abab')) // false

console.log(checkString('a')) // true
console.log(checkString('b')) // true (no a so every a appear before b)
console.log(checkString('abb')) // true  
console.log(checkString('aaabb')) // true  
