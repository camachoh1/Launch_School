let array = [3,5,7];

function sumOfSquares(array) {
  return array.reduce((accumulator, element) => accumulator + (element * element), 0);
}

console.log(sumOfSquares(array));