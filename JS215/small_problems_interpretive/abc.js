// problem: 

// given a collection of spelling blocks (each made of two letters), write a function that takes a string as an argument and returns true ig the word can be spelled using the set of blocks, false otherwise. 

// rules:
  // the function only returns true if the input word can be spelled with the provided blocks
  // if a word uses both letters from a block, the function must return false. 
  // if the word cannot be spelled with the provided letters, return false
  // the function is case insensitive

  // input: a string
  // output: a boolean

  // test cases:
  
  // isBlockWord("") // false
  // isBlockWord('boat') // false
  // isBlockWord('JUNE') // true
  // isBlockWord('duck') // true
  // isBlockWord('BaTcH') // true

  // data structures: arrays, strings

  // algorithm:
    // break the input string into an array of characters.
    // using nested iteration:
      // iterate through the array of chars
        // iterate through the block
        // if the current character is present in the current block, 
          //replace the character from the block with an empty space
          // else leave as is
    // iterate through the blocks, if any block is made of more than 1 space return false, else return true
    // if no blocks were change return false


  
  function isBlockWord(word) {

    let blocks = ["BO","XK","DQ","CP","NA",
                  "GT","RE","FS","JW","HU",
                  "VI","LY","ZM"];
    let wordChars = word.split('').map(char => char.toUpperCase());

    wordChars.forEach(char => {
      blocks.forEach((block, index) => {
        if (block.indexOf(char) !== -1) {
          blocks[index] = block.replace(char, '');
        }
      });
    });
  
    if (blocks.some(block =>  block === '') || blocks.every(block => block.length === 2)) {
      return false;
    }

    return true;
  }


  // console.log(isBlockWord("")); // false
  console.log(isBlockWord('boato')); // false
  // console.log(isBlockWord('JUNE')); // true
  // console.log(isBlockWord('duck')); // true
  // console.log(isBlockWord('BaTcH')); // true