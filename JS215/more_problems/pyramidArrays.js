// problem:

// Given a number `n`, return an array containing n number of arrays. Each array contains its length as the elements.

// the arrays range from 1 to n inclusive.

// input: a number
// output: an array of arrays

// test cases:

  // pyramidArrays(0) // []
  // pyramidArrays(1) // [[1]];
  // pyramidArrays(2) // [[1], [2,2]];
  // pyramidArrays(3) // [[1], [2,2], [3,3,3]]

// what would happen if the input number is not provided?
// what if the input is a negative number?
// what if the input is not an integer but a floating number or string?

// data structures: arrays
// the output is an array.

// algorithm:

// declare a helper function that creates the sub arrays
    //(choosing to expor this functionality in order to make my main function simpler)

    // helper function receives an integer
    // outputs an array.

    // initialize a result array
      //using a while loop, push n into the array n times.
      // return the array.
  
  // main function
  // declare a result variable and initialize it to an empty array.
  // using a for loop, initialize variable i to 1.
  // loop until i is === n
  // push the return value of the helper function using i as argument into the results array
  // return the results array


function createSubArray(n) {
  let result = [];
  let count = n;
  while (count > 0) {
    result.push(n);
    count -= 1;
  }

  return result;
}

function pyramidArrays(n) {
  let result = [];

  for (let i = 1; i <= n; i += 1) {
    result.push(createSubArray(i));
  }

  return result;
}

console.log(pyramidArrays(0)); // []
console.log(pyramidArrays(1)); // [[1]];
console.log(pyramidArrays(2)); // [[1], [2,2]];
console.log(pyramidArrays(3)); // [[1], [2,2], [3,3,3]]
