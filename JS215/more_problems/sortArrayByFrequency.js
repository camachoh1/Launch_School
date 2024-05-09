// problem: given an array of integers, sort the array in increasing order based on the frequency of the values. if multiple values have the same frequenxy, sort them in decreasing order.

// rules:

// the array will contain integers only.
// must be sorted based on the frequency of each element
// if the frequecy count is distinct (element appears < or > times than other elements) for each element sort in ascending order of appearance.

// if the frequency count is the same for multiple values, sort in descending order of appearances .

// data structures: arrays and objects

// algorithm: 

// count frequencies of numbers in the array (helper function)

// helper function (frequency counter) 

// using reduce with an object as accumulator, iterate through the input array, if the value does not exist in the accumulator object, create a key value pair and initialize it to 0
// otherwise, increase the value by 1

// main function: 
// create a freqCount object
// sort the input array:

// if the frequeny count of the current number and the next number is the same 
// sort by num

// else sort by frequency


function frequencySort(nums) {
  if (nums.length === 0) return [];

  const frequencies = nums.reduce((obj, num) => {
    obj[num] = (obj[num] || 0) + 1;
    return obj
  }, {});
  
  return nums.sort((a, b) => {
    if (frequencies[a] === frequencies[b]) {
      return b - a; // sort by num descending
    } else {
      return frequencies[a] - frequencies[b] // sort by frequency ascending
    }
  });
}

// test cases:

console.log(frequencySort([])) // []
console.log(frequencySort([1])) // 1
console.log(frequencySort([1,1])) // 1
console.log(frequencySort([1,2])) // [2,1]
console.log(frequencySort([1,2,3])) // [3,2,1]
console.log(frequencySort([1,2,2,3,3])) // [1,3,3,2,2]
console.log(frequencySort([1,1,2,2,2,3])) // [3,1,1,2,2,2]
console.log(frequencySort([-1,1,-6,4,5,-6,1,4,1])) // [5,-1,4,4,-6,-6,1,1,1]




