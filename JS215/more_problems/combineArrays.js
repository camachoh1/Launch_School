// Create a function that takes three arrays and returns one array where all passed arrays are combined into nested arrays. (i see questions that need asking already)

// These arrays should be combined based on indexes: the first nested array should contain only the items on index 0, the second array on index 1, and so on.

// If any array contains fewer items than necessary, supplement the missing item with "*".

/*
Input: 3 arrays
---
Output: 1 array consisting of the three input arrays combined into nested arrays.
Q: fun(array1, array2, array3) => 
----- [[array1], [array2], [array3]] x
----- [[0, 0, 0], [1, 1, 1], [2, 2, 2]] <<--
----- [[array1 + array2 + array3]] x

- If any of the arrays's length is smaller than the greatest array's length, suplement the missing elements with *

- outer array: has 3 elements
---- each element of the outer array is:
-------- a nested array of longestArray.length number of elements

----> TRANSFORM the longest array using Array.prototype.map ( TOO EARLY FOR THAT)
*/

// ['', '']
// [ <2 empty slots>]
// What if all the arrays are length of zero?
// What if the longest array consists / has empty slots (sparse array)?
// Should non-elements count? (likely no, since we're talking about indexes (i.e. non-negative integers))


/*
1. Create Nested arrays
2. Calculate the longest length from input arrays (or: among nested arrays)
3. Combine nested arrays and return the requested value.
*/

// CREATE NESTED ARRAYS
// 1 create an array that contains al of the input arrays
// 2 create a result array

// CALCULATE LONGEST LENGTH
// 2 calculate the largest sub array length. (helper method)
  // 2.1 place all of the input arrays in an array, transform this array in an array of numbers each representing the length.
  // 2.2 get the maximum value.

// COMBINE NESTED ARRAYS (CORE PROBLEM)
// 3 create helper function (core function)
    // input: greatest length, nested arrays from step 1
    // ???
    // output: returns an array of arrays formatted as explained in the description

    // create result 2d array (using helper function)

    // declare a main indexNumber variable, initialize it to maxLength - 1
    
    // using a for loop iterate until the index value is <= indexNumber

      // if valid element (helper function)
        // a valid element is an element that exists AS AN ELEMENT in the array (i.e. it has a valid index)
        // -- a valid index is a non-negative integer
        // input: current sub array and current element 
        // output: boolean

        // if the index of the current element in the input sub array is valid return true 
        // else false

      // push current element into its appropriate sub array based on the index
      // else push '*' into its appropriate sub array based on the index.
    //returns the result

function combineArrays(arr1, arr2, arr3) {
  let arrays = [arr1, arr2, arr3];
  let maxLength = Math.max(...arrays.map(arr => arr.length));
  console.log(formatArrays(arrays, maxLength));
}

function formatArrays(arrays, maxLength) {
  let resultArr = createResultArr(maxLength);
  
  for (let i = 0; i <= maxLength - 1; i += 1) {
    for (let i2 = 0; i2 <= maxLength - 1; i2 += 1) {
      let currentSubArr = arrays[i];
      let currentElement = arrays[i][i2];

      if (currentSubArr.indexOf(currentElement) >= 0) {
        resultArr[i2].push(currentElement);
      } else {
        resultArr[i2].push('*');
      }
    }
  }
  return resultArr
}

function createResultArr(maxLength) {
  let arrays = [];

  for (let i = 0; i < maxLength; i += 1) {
    arrays.push([]);
  }
  return arrays;
}

combineArrays([1,2,3], [4,5,6], [7,8,9]) // [[1,4,7], [2,5,8], [3,6,9]]

combineArrays([], ['a','b','c'], [true, false, true]) // [['*', 'a', true], ['*', 'b', false], ['*', 'c', true]]


combineArrays([],[],[]) // []

combineArrays([,,,], [], []) // [[*,*,*] [*,*,*], [*,*,*] ]

