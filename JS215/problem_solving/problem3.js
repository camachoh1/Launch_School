// problem

// given a collection of word letters. write a function that receives a word as input and returns true if the word can be spelled with the letters found in the collection of blocks. 

// the function will return false if the word cannot be spelled with the provided blocks.

// each block can only be used once. IF a word uses both letters from a block, the function retuns false. 

// input: a string

// output: a boolean

// the input string is considered case-insensitive when applying the rules. 

// letter block: 
// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M


// isBlockWord('BATCH') // true all letters in BATCH are found in the block and each letter belong to a different block.

// isBlockWord('BOAT') // false B and O belong to the same block. 

// isBlockWord('BUTCH') // false U and H belong to the same block

// data structure: arrays 

// blocks can be stored in a two dimensional array. 

// input string can be split into characters if a character is found in the block, replace the character in the block with an empty space. 

// if at the end of the iteration any of the blocks is empty, the function returns false. Else returns true. 

// let blocks = [['B','O'], ['X', 'K'], ['D','Q'], ['C', 'P'],['N', 'A'], ['G', 'T'] ,['R', 'E'], ['F', 'S'], ['J', 'W'],['H', 'U'], ['V', 'I'], ['L', 'Y'], ['Z', 'M']]

// [B, A, T, C, H]

// create a helper function that receives the block and iterates through it. 

// this helper function will also receive a letter.

// it will iterate throgh the blocks, checking if each sub array contains the letter received as argument, if it does contain the candidate letter, the letter value is replaced with a ''.

// the main function checks if there are any blocks empty, if there is any empty block returns false. else returns true. 


function findLetter(arr, letter) {
  arr.forEach(subarr => {
    if (subarr.includes(letter.toUpperCase())) {
      subarr[subarr.indexOf(letter)] = '';
    }
  });

  return arr;
}

function isBlockWord(word) {
  if (word.match(/[^a-zA-Z]/)) { return false};

  let blocks = [['B','O'], ['X', 'K'], ['D','Q'], ['C', 'P'],['N', 'A'], ['G', 'T'] ,['R', 'E'], ['F', 'S'], ['J', 'W'],['H', 'U'], ['V', 'I'], ['L', 'Y'], ['Z', 'M']];
  
  let wordArr = word.split('');

  wordArr.forEach(char => {
    findLetter(blocks, char);
  });

  if (blocks.some(block => block.every(el => el === ''))) {
    return false;
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('BOAT'));        // false
console.log(isBlockWord('BO@T'));        // false