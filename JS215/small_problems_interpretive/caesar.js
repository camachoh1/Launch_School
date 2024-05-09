const ALPHABET = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 
'I', 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z' ];

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


console.log(caesarEncrypt('A', 0) === "A");
console.log(caesarEncrypt('A', 3) === "D");

// wrap around
console.log(caesarEncrypt('y', 5)  === "d");
console.log(caesarEncrypt('a', 47) === "v");

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25)
 === "ZABCDEFGHIJKLMNOPQRSTUVWXY");
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5) === "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!");

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2) === "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?");