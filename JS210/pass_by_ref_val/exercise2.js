function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = "hello";
myWord = changeMyWord(myWord);
console.log(myWord);

// since we are dealing with primitive values, we can say that this entire operation is pass-by-value. Meaning the values assigned to the variable cannot be changed. And the only way way to impact the value of the myWord variable outside the scope of the function is by returning something from the function itself. This value is then assigned to the variable causing the change to myWord. 