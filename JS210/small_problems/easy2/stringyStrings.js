function stringy(num) {
  let resultStr = '';

  for(let i = 0; i < num; i += 1) {
    if (i % 2 === 0) {
      resultStr += '1';
    } else {
      resultStr += '0';
    }
  }
  return resultStr;
}

console.log(stringy(6) === "101010");
console.log(stringy(9) === "101010101");
console.log(stringy(4) === "1010");
console.log(stringy(7) === "1010101");