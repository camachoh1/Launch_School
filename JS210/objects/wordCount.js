function wordCount(str) {
  let resultObj = {};
  let wordsArr = str.split(' ');

  for(let index = 0; index < wordsArr.length; index += 1) {
    let word = wordsArr[index];

    if (!resultObj[word]) {
      resultObj[word] = 0;
    }

    resultObj[word] += 1;
  }

  return resultObj;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }