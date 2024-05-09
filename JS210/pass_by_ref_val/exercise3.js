function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = "hello";
let myOtherWord = changeMyWord(myWord);
console.log(myWord);
console.log(myOtherWord);

