function transpose(matrix) {
  // let result = new Array(matrix.length).fill(0).map(() => []);

  const result = [];
  const newRowsCount = matrix[0].length;

  for (let rowIdx = 0; rowIdx < newRowsCount; rowIdx += 1) {
    result.push([]);
  }

  for (let row = 0; row < matrix.length; row += 1) {
    for (let col = 0; col < matrix[row].length; col += 1) {
      result[col].push(matrix[row][col])
    }
  }


  return result;
}

function rotate90(matrix) {
  let transposed = transpose(matrix);

  return transposed.map(row => row.reverse());
}

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]