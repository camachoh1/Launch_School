const ALPHABET = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 
'I', 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z' ];


function vigenereEncrypt(text, keyword) {
  let keys = keyword.split('').map(char => ALPHABET.indexOf(char.toUpperCase()));
  
  let textArr = text.split('');
  let keyIndex = 0;
  
  return textArr.map(char => {
    let charToEnctipt = '';
    
    if (keyIndex >= keys.length) {
      keyIndex = 0;
    }
    
    if (char.match(/[a-zA-Z]/)) {
      charToEnctipt = caesarEncrypt(char, keys[keyIndex]);
      keyIndex += 1;
    } else {
      charToEnctipt = char;
    }
    
    return charToEnctipt;
  }).join('');
}

function caesarEncrypt(text, key) {
  let textArr = text.split('');

  return textArr.map((char) => {

    let letterIndex = ALPHABET.indexOf(char.toUpperCase());
    let transposedIndex = (letterIndex + key) % ALPHABET.length;

    if (char.match(/[a-z]/)) {
      return ALPHABET[transposedIndex].toLowerCase();
    } else if (char.match(/[A-Z]/)) {
      return ALPHABET[transposedIndex];
    } else {
      return char;
    }
  }).join('');
}
console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'meat') === "Bmnxmtpeqw dhz'x gh ar pbldal!");
console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'A') === "Pineapples don't go on pizzas!");
console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'Aa') === "Pineapples don't go on pizzas!");
console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'cab') === "Riogaqrlfu dpp't hq oo riabat!");
console.log(vigenereEncrypt("dog", 'Rabbit') === "uoh");
