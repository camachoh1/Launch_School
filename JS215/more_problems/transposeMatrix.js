// problem: write a function that takes an array of arrays representing a 3x3 matrix and returns the transpose of the matrix. 

// the transpose of a3x3 matrix is the matrix that results from exchanging the rows and columns of the original matrix. 

// rules:
// we can expect the matrix to always be symetric meaning the length of the rows is equal to the number of columns. 

// the original matrix cannot be mutated. The function should return a new matrix. 

// data structures: arrays

// algorithm: 

// row = each sub array
// column = each element of each sub array

// const matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6]
// ];

// row = 0;
// column = 0;
// matrix[row] = [1,5,8]
// matrix[row][column] = 1
// 

// create a results array
// initialize a for loop column = 0
// initialize a for loop row = 0
  // initialize sub arr = []
  // push the current element into sub arr
// end for
//push subarr into result
// end for

// return result


// const matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6]
// ];


// function transpose(matrix) {
//   let result = [];
//   let subArr;

//   for (let column = 0; column < matrix.length; column += 1) {
//     subArr = [];
//     for (let row = 0; row < matrix.length; row += 1) {
//       subArr.push(matrix[row][column]);
//     }
//     result.push(subArr);
//   }

//   return result;
// }

// console.log(transpose(matrix));