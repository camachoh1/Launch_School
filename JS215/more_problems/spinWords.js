function spinWords(string) {
  let words = string.split(" ");

  return words.map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  }).join(' ');
}