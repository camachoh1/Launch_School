function changeMyWords(words) {
  console.log(words);
  words[0] = 'hi';
}

let myWords = ['hello', 'bye'];
changeMyWords(myWords);
console.log(myWords);
