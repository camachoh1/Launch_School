function generateHashtag(str) {
  if (str === "" || typeof str !== 'string') return false;
  
  let words = str.match(/[a-z]+/gi);

  if (!words) return false;
  
  words = words.map(word => {
    return word[0].toUpperCase() + word.slice(1);
  });

  words.unshift("#");
  let hashtag = words.join('');

  return hashtag.length > 140 ? false : hashtag;
}

console.log(generateHashtag("     hello       world    "));