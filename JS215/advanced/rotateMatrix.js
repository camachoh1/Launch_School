// problem:

// Write a function that takes an array of arrays that represents a 3x3 matrix and returns the transpose of the matrix. 

// rules:

// input a two-dimensional array or matrix
// a matrix rotation exchanges the rows and columns for the original (columns become rows, rows become colums)

// the function must return a new matrix do not mutate the input

// test cases:

// data structures: arrays

// algorithm:
  
// NOTES:  to access a row, we can use the index number of the main array
    // matrix[i] -> rows
  // to access a column value we can use i on the sub array
    // matrix[i][i] -> access the element in the i row/colum. This, for example, will return the values in the diagonal position
  
// create a results matrix

// using nested iteration:
  // the first iterator will run through each sub array (rows)
  // the second iterator will access each value in a row (column)

  // insert the all values at index 0 of all rows into the result array 0 
  // repeat this for every other sub array


function transpose(matrix) {
  let result = new Array(matrix.length).fill(0).map(() => []);
  
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
  [3, 9, 6]
];

console.log(transpose(matrix));

// my algorithm and solution were fine for the most part. My main issue was with the use of fill().

// originally I was creating my results array using:

// new Array(matrix.length).fill([]) This would ouput // [[], [], []]

// however, after pushing the values in the array as intended by my algorithm I would get:

// [
//   [
//     1, 5, 8, 4, 7,
//     2, 3, 9, 6
//   ],
//   [
//     1, 5, 8, 4, 7,
//     2, 3, 9, 6
//   ],
//   [
//     1, 5, 8, 4, 7,
//     2, 3, 9, 6
//   ]
// ]

// as final output and not a 3x3 matrix as I was expecting

// this is because fill() when called with an object as argument, it creates copies of the first array created.

// if this first array is altered in any way, any other copy created by fill will be altered as well.

// which is why each sub array contains all elements.

// a way to solve this problem is to make sure that fill is creating distinct arrays separate from each other which is why I changed fill's invocation to:

// new Array(matrix.length).fill(0).map(() => []);

// here fill uses 0 as place holders which are then replaced by new arrays after map's invocation.

// this ensures that each array is unique changing the output to:

// [ [ 1, 4, 3 ], [ 5, 7, 9 ], [ 8, 2, 6 ] ]

// which is the expected output.

// this solution is hard to understand, a more readable way to deal with this is to manually inserting a new array into the results array. This ensures that every sub array is distinct and it is more readable. 





