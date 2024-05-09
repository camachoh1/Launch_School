// problem: given an array and a number n
// write a function that splits the array in smaller arrays size n
// organize the splitted arrays into a 2D array/
// calculate the sum off all columns in the 2D array and return the the number of the column that has the biggest sum.

// input: an array
// output: an integer

// rules:
// if two columns share the greatest sum return the one with the smallest column number
// the column number is the index of the sub array in the 2D array + 1
// the input array will always divide into equal-length groups.

// test cases:

// maxColumnSum([1,2,3,4,5,6,7,8], 4) // 2
// maxColumnSum([4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19], 4) // 2

// data structures: arrays

// algorithm:
//GOALS: slice the input array into n size arrays in order to create a 2D array.
// iterate through the 2D array using nested iteration to access the each column (rows = index 1) (columns = index 2).
// sum all values located in each column and pass them into an array.
// return the index + 1 of the greatest sum found in the results array

// helper function: splitArray
// input: an array and a number
// output: a 2D array with subarray size of n

// INITIALIZE an end variable to n
// CREATE a results array
// ITERATE through the input array (for loop) from start = 0 to input array LEN
  // PUSH a SLICE input array (start, end)
  // start += n
  // end += n
// END FOR

// RETURN result array

// helper function: calculateColumnSum
// input: a 2D array
// output: an array of numbers

// CREATE a results array
// ITERATE through 2D array (for loop) index 1 = rows
  // INITIALIZE sum variable to 0
    // ITERATE through sub array (for loop) index 2 = columns
      // sum += array[column][row]
    // END FOR
    // PUSH sum into result
// END FOR
// RETURN result array

// main function: maxColumnSum
// SPLIT the input array (splitArrays helperfunction)
// CALCULATE column sum (calculateColumnSum)
// EXTRACT max value from sums array
// FIND index of max value
// RETURN index + 1


function maxColumnSum(arr, n) {
  let splitArr = splitArray(arr, n);
  let columnSum = calculateColumnSum(splitArr); 
  let maxValue = Math.max(...columnSum);
  let maxIndex = columnSum.indexOf(maxValue);
  return maxIndex + 1;
}

function splitArray(arr, n) {
  let end = n;
  let result = [];

  for (start = 0; start < arr.length; start += n) {
    result.push(arr.slice(start, end));
    end += n;
  }

  return result;
}

function calculateColumnSum(arr) {
  let columnSum = [];

  for (let row = 0; row < arr[0].length; row += 1) {
    let sum = 0;
    for (let column = 0; column < arr.length; column += 1) {
      if (row < arr[column].length) {
        sum += arr[column][row];
      }
    }
    columnSum.push(sum);
  }

  return columnSum;
}

console.log(maxColumnSum([1,2,3,4,5,6,7,8], 4)); // 4
console.log(maxColumnSum([4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19], 4)); // 2
  
