let rlSync = require("readline-sync");

function countingChars() {
  let phrase = rlSync.question("Please Enter a phrase: ");
  let phraseNoSpace = phrase.replace(" ", "")
  console.log(`There are ${phraseNoSpace.length} characters in ${phraseNoSpace}`); 
}

countingChars();