function reverseWord(str) {
  return str.split('').reverse().join('');
}

function reverseWords(str) {
  let wordsArr = str.split(' ');

  return wordsArr.map((word) => {
    if (word.length >= 5) {
      return reverseWord(word);
    } else {
      return word;
    }
  }).join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"