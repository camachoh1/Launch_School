// problem:

// write a function that replaces the entries above the main diagonal with 0s.

// a square matrix is a 2d array that contains n arrays and the arrays contain n elements.

// [1,2,3]
// [4,5,6]
// [7,8,9]

// the main diagonal in the matrix above contain the values: 1,5,9

// the function replaces the values above the diagonal with 0s.

// [1,0,0]
// [4,5,0]
// [7,8,9]

// a valid square matrix can have any number of arrays greater than 1 and each sub array must have the same number of elements as the parent array. 


// data structures: arrays

// algorithm:

// create a 2d array containing the elements below the main diagonal.

// turn the remaining matrix into a square matrix by filling in the spaces of the sub arrays with length < the matrix with 0s

  // create a result matrix same size as the input matrix
  // fill the result matrix with the values under the main diagonal
    // helper function:
      // input: matrix
      // output: triangular matrix

      // using nested iteration:
      // iterate through the input matrix
      // the second iteration only iterates up to the first iterator
      // pushes the values at index of second iterator
    // returns the remaining matrix

  // turn the triangular matrix into a square matrix
  // iterate through the triangular matrix
    // if the length of the current sub array is < the matrix length
    // push 0s until it matches the length of the original matrix
    // else leave as is
  // return square matrix

  // questions: the array could hold any types of element
  // sparse arrays are not valid square matrix
  

let matrix = [[1,2,3], [4,5,6], [7,8,9]];


function triangular(matrix) {
  let result = [];

  for (let idx1 = 0; idx1 < matrix.length; idx1 += 1) {
      result.push(matrix[idx1].slice(0,idx1 + 1));
    }
  return result;
}

function fill(arr, size) {
  while (arr.length < size) {
    arr.push(0);
  }
  return arr;
}

function lowerTriangle(matrix) {
  let triangularArr = triangular(matrix);

  let result = triangularArr.map(subarr => {
    if (subarr.length < matrix.length) {
      return fill(subarr, matrix.length);
    } else {
      return subarr;
    }
  });
  console.log(result);
}

// console.log(lowerTriangle(matrix));

// lowerTriangle([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]) 

// lowerTriangle([
//   [5, 7],
//   [7, 9]
// ]) 

lowerTriangle([
  [1, 8, 8, 1],
  [2, 7, 7, 2],
  [3, 6, 6, 3],
  [4, 5, 5, 4]
]) 