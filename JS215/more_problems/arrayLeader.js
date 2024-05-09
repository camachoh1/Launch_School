// problem: 
// given an array of numbers create a function that finds each number in the given array that is greater than every number that comes after it. 

// rules:
// input: an array of numbers
// output: an array of numbers

// elements in the result array must appear in the same order as they occur in the input array


// test cases:

// leader([1,2,3,40, 20, 10]) // [40, 20, 10]
// leader([1, 2, 2, 50, 13]) // [50, 13]
// leader([]) // []
// leader([1,2,3,4,5]) // [5]
// leader([1,3,5,67,6,60]) // [67, 60]

// data structures: arrays // list processing abstractions

// algo: 
  // slice the input array from the greates value on
  // if a value in the sliced array does not meet the conditions (value that is greater than every other value following it)
  // remove that value from the array (filter)
    // create a helper function:
      // iterate through the sliced array
      // if the current value is > every other value (slice the remaining array from the index of the current element to the end)
    // return the filtered array
    // [20, 15, 8, 3]


function leader(arr) {
  return arr.filter((num, index) => {
    let sliced = arr.slice(index + 1);

    if (sliced.every(n => n < num)) {
      return num;
    }
  });
}

console.log(leader([1,2,67,3,40, 20, 10])); // [40, 20, 10]
console.log(leader([1, 2, 2, 50, 13])); // [50, 13]
console.log(leader([])); // []
console.log(leader([1,2,3,4,5])); // [5]
console.log(leader([1,3,5,67,6,60])); // [67, 60]
console.log(leader([1,3,56,,30,,])); // 56, 30