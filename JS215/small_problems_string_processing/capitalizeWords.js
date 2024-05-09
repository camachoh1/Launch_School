function wordCap(str) {
  let wordArr = str.split(' ');
  return wordArr.map((word) => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'