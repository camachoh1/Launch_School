function startsWith(str, searchString) {
  let resultStr = '';

  for (index = 0; index < searchString.length; index += 1) {
    if (str[index] === searchString[index]) {
      resultStr += searchString[index];
    }
  }

  return searchString === resultStr
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));       // false