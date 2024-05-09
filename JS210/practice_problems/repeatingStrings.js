function repeat(string, times) {
  if (times < 0 || typeof times !== 'number' ) {
    return undefined
  }
  
  let resultStr = ''
  while (times > 0) {
    resultStr += string;
    times -= 1;
  }
  return resultStr
}


console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined