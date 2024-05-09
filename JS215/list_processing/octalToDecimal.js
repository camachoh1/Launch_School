function octalToDecimal(numStr) {
  let numArr = numStr.split('').map(n => Number(n)).reverse();
  
  return numArr.map((num, index) => {
    return num * 8**index;
  }).reduce((sum, num) => sum + num);

  
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9