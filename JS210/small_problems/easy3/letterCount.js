function wordSizes(str) {
  if (str === '') {
    return {};
  }

  let result = {}
  let sizesArr = str.split(' ').map((word) => word.length);
  
  for (let i = 0; i < sizesArr.length; i += 1) {
    if (!result[sizesArr[i]]) {
      result[sizesArr[i]] = 0;
    }
    
    result[sizesArr[i]] += 1;
  }
  return result;
}

// ls solution

function wordSizes(str) {
  const wordsArray = words.split('');
  const count = {};

  for (let i = 0; i < wordsArray.length; i += 1) {
    let wordSize = wordsArray[i].length;
    if (wordSize === 0) {
      continue;
    }

    count[wordSize] = count[wordSize] || 0;
    count[wordSize] += 1;
  }
  return count;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}