function toLowerCase(str) {
  let resultStr = '';

  for (index = 0; index < str.length; index += 1) {
    if (str[index].match(/[A-Z]/)) {
      let asciiNumeric = str[index].charCodeAt(0);
      asciiNumeric += 32;
      resultStr += String.fromCharCode(asciiNumeric);
    } else {
      resultStr += str[index];
    }
  }

  return resultStr;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"