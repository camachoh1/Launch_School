function alphabetic(word) {
  return word.split('').sort().join('');
}

function anagram(word, wordArr) {
  return wordArr.slice().filter(w => alphabetic(w) === alphabetic(word));
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));