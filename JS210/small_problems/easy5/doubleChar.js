function repeater(str) {
  if (str === '') {
    return ''
  }
  resultStr = '';

  for (let i = 0; i < str.length; i += 1) {
    resultStr += (str[i] + str[i]);
  }

  return resultStr;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""