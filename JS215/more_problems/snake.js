// The function is given a rectangular array of arrays of numbers. Make an array from these numbers in the order of connecting diagonals like a snake before the strike. Starting from the left-up corner:

//     First diagonal, going up: [0][0]
//     Second diagonal, going down: [0][1] -> [1][0]
//     Third diagonal, going up: [2][0] -> [1][1] -> [0][2]
//     etc, alternate between going up and going down
//     Last diagonal: [rows - 1][cols -1]

/*
rules:
Receive one array of only arrays
Subarrays will only contain primitives
Subarrays will all be the same size
Arrays cannot be empty, sparse, or have non-element properties

algorithm:
  1[0], 1[1], 2[0], 3[0], 2[1], 1[2], 2[2], 3[1], 3[2]
  1[0], 1[1], 2[0], 2[1], 1[2], 2[2]

  if the length of the first subarray is 0, return an empty array
  initialize a results variable to the first value in the first subarray
  initiailize currentIndex variable to an array of 0's equal to the length of the passed argument, except the first element will be a 1
  initialize a currentRow variable to 0
  initialize descending = true;

  while results.length < matrix.flat().length do
    - push into the results array the value at matrix[currentRow][currentIndex[currentRow]]
    - Increment currentIndex[currentRow] by 1
    - if descending
      - if currentRow + 1 < matrix.length
        - Increment currentRow by 1
      - else
        - Decrement currentRow by 1
        - Set descending to false
    - else
      - if currentRow - 1 >= 0
        - Decrement currentRow by 1
      - else
        - Increment currentRow by 1
        - Set descending to true

Return results
*/

function diagonalSnake(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return [];
  else if (matrix.length === 1) return matrix[0];

  let results = [ matrix[0][0] ];
  let currentIndex = matrix.map(row => 0);
  currentIndex[0] = 1;
  let currentRow = 0;
  let descending = true;

  while (results.length < matrix.flat().length) {
    if (matrix[currentRow].length > currentIndex[currentRow]) {
      results.push(matrix[currentRow][currentIndex[currentRow]]);
      currentIndex[currentRow] += 1;
    }
    
    if (descending) {
      if (currentRow + 1 < matrix.length) {
        currentRow++;
      } else {
        currentRow--;
        descending = false;
      }
    } else {
      if (currentRow - 1 >= 0) {
        currentRow--;
      } else {
        currentRow++;
        descending = true;
      }
    }
  }

  return results;
}

console.log(diagonalSnake([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
])); //[1, 2, 4, 7, 5, 3, 6, 8, 9]

console.log(diagonalSnake([
  [1, 2, 3],
  [4, 5, 6],
])); //[1, 2, 4, 5, 3, 6]

console.log(diagonalSnake([
  [1, 2, 3],
])); //[1, 2, 3]

console.log(diagonalSnake([[], []])); //[]
console.log(diagonalSnake([])); //[]

console.log(diagonalSnake([
  [1],
  [4],
  [7],
])); //[1, 4, 7]

console.log(diagonalSnake([
  [1],
  [undefined],
  [7],
])); //[1, undefined, 7]