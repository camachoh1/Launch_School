// problem given an array of integers nums and a target, return the indices of the two numbers that add up to target.

// rules: you may assume that each input would have exactly one solution and you may not use the same element twice
// the answer can be returned in any order.

// data structures: arrays

// algorithm: 

// if the input array is empty return an empty array.

// create a results array = []

// using a nested for loop where i = 0 and j = 0
// iterate through the input array
// if arr[i] + arr[j] === target
// push in i and j into results and break the loops

// return results.


function twoSum(nums, target) {
  if (nums.length === 0) return [];

  let result = [];

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 1; j < nums.length; j += 1) {
      if (nums[i] + nums[j] === target) {
        result = [i, j];
        return result;
      }
    }
  }

  return result;
}

// test cases:

console.log(twoSum([], 3)) // []
console.log(twoSum([1,2,3,4,5], -1)) // []

console.log(twoSum([1, -1, 2, 3], 0)) // [0, 1]
console.log(twoSum([0, -1, 2, 3], -1)) // [0, 1]
console.log(twoSum([7,6,17,3], 9)) // [1,3]
console.log(twoSum([3,3], 6)) // // [0,1]
console.log(twoSum([2,4,11,3], 6)) // [0, 1]
console.log(twoSum([3,2,4], 6)) // [0, 2]
