// problem:

// write a function that rotates the las n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end. 

// input two numbers. One representing the number of digits that are going to be rotated from the number.

// output: the rotated number

// rotation happens from left to right. 

// the right most digit is rotated to the end.

// n digits are counted from the right of the main number.

// test cases: 

// 12345, 2 => 12354

// 123456. 3 => 123 456 -> 564 -> 123564

// arrays: split the number into an array of digits.

// slice the array based on n

// rotate the sliced array

// concatenate with the rest of the numbers.

//join the array and turn into a number

// return


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

console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);