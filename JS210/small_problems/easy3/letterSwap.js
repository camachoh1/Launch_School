function swapChars(str) {
  let first = str[0];
  let last = str[str.length - 1];
  let middle = str.slice(1, -1);

  return last + middle + first;
}

function swap(str) {
  if (str.length === 1) {
    return str;
  }

  let strArr = str.split(' ');
  return strArr.map((word) => swapChars(word)).join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"