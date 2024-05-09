// revisit


function indexOf(str1, str2) {
  let limit = str1.length - str2.length;

  for (let indexFirst = 0; indexFirst <= limit; indexFirst += 1) {
    let matchCount = 0;

    for (let indexSecond = 0; indexSecond < str2.length; indexSecond += 1) {
      if (str1[indexFirst + indexSecond] === str2[indexSecond]) {
        matchCount += 1;
      } else {
        break;
      }
    }

    if (matchCount === str2.length) {
      return indexFirst;
    }
  }

  return -1;
}


// console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
// console.log(indexOf('Blue Whale', 'Blute'));                    // -1
// console.log(indexOf('Blue Whale', 'leB'));