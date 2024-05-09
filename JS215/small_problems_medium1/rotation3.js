function rotateArray(arr){
  if (!Array.isArray(arr)) {return undefined};
  if (arr.length === 0) {return arr};

  let arrCopy = [...arr];

  arrCopy.push(arrCopy.shift());
  return arrCopy
}

function rotateRightmostDigits(number, n) {
  let numArr = String(number).split('');
  let slicePoint = numArr.length - n;
  let firstPart = numArr.slice(0, slicePoint)
  let rotated = rotateArray(numArr.slice(slicePoint));

  return Number(firstPart.concat(rotated).join(''));
}

function maxRotation(number) {
  for (let i = String(number).length; i > 1; i -= 1) {
    number = rotateRightmostDigits(number, i);
  }

  return number;
}


console.log(maxRotation(735291));          // 321579
// maxRotation(3);               // 3
// maxRotation(35);              // 53
// maxRotation(105);             // 15 -- the leading zero gets dropped
// maxRotation(8703529146);      // 7321609845