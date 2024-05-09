let matrix = [[1,2,3,4], 
              [5,6,7,8], 
              [9,10,11,12],
              [13,14,15,16]];

// Iterating through matrixes (rows, columns, right diagonal, left diagonal) where the number of rows is equal to the number of columns: 

// // iterating through rows
// function iterateMatrixRows(matrix) {
//   for (let row = 0; row < matrix.length; row += 1) {
//     for (let column = 0; column < matrix.length; column += 1) {
//     console.log(matrix[row][column]);
//     }
//   }
// }

// iterateMatrixRows(matrix);

// // iterating through columns 
// function iterateMatrixColumns(matrix) {
//   for (let row = 0; row < matrix.length; row += 1) {
//     for (let column = 0; column < matrix.length; column += 1) {
//     console.log(matrix[column][row]);
//     }
//   }
// }

// iterateMatrixColumns(matrix);

// // iterating through diagonals:
// // top left
// function iterateMatrixTopLeft(matrix) {
//   for (let i = 0; i < matrix.length; i += 1) {
//     console.log(matrix[i][i]);
//   }
// }

// iterateMatrixTopLeft(matrix);

// iterating through diagonals
// top right

// function iterateMatrixTopRight(matrix) {
//   for (let i = 0; i < matrix.length; i += 1) {
//     console.log(matrix[i][matrix.length - 1 - i]);
//   }
// }

// iterateMatrixTopRight(matrix);