function substr(str, start, length) {
  let resultStr = ''
  if (start < 0) {
    start = str.length + start;
  }

  if (length > str.length) {
    length = str.length;
  }

  for (let counter = 0; counter < length; counter += 1) {
    let index = start + counter;
    
    if (str[index] === undefined) {
      break;
    }

    resultStr += str[index];
  }
  return resultStr;
}



let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""