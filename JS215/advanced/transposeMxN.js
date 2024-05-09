//

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

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

console.log(transpose(matrix));            // [[1], [2], [3], [4]]
// console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
// console.log(transpose([[1]]));                     // [[1]]

// transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// // [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]