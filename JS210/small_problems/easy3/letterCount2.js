function cleanWord(word) {
  let cleanWord = '';

  for (let i = 0; i < word.length; i += 1) {
    let char = word[i];

    if (char.match(/[a-zA-Z]/)) {
      cleanWord += char;
    }
  }

  return cleanWord;
}

function wordSizes(words) {
  let count = {}
  let wordSizesArr = words.split(' ').map((word) => cleanWord(word).length);
  
  for (let i = 0; i < wordSizesArr.length; i += 1) {
    if (wordSizesArr[i] === 0) {
      continue;
    }
    
    count[wordSizesArr[i]] = count[wordSizesArr[i]] || 0;
    count[wordSizesArr[i]] += 1;
  }
  return count;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}