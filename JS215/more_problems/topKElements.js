// problem: given an integer array nums and an integer k, return the k most frequent elements.

// rules: k will always be a possitive number and will always be in range of the elements in the array
// the answer will always be unique
// the input array will always contain at least one element

// data structures: arrays objects

// algorithm:
// if the length of the input is 1 and k is 1 return the input element.

// create a frequency counter
// extract the keys
// sort the keys by frequency descending
// slice sorted array from 0 to k

function topKFrequent(nums, k) {
  if (nums.length === 1 && k === 1) return nums;

  let freq = nums.reduce((obj, num) => {
    obj[num] = (obj[num] || 0) + 1;
    return obj;
  }, {});

  let keys = Object.keys(freq);
  keys.sort((a,b) => {
    return freq[b] - freq[a];
  });

  return keys.map(Number).slice(0, k);
}

// test cases:
console.log(topKFrequent([1], 1)) // [1]
console.log(topKFrequent([1,2], 1)) // [1]
console.log(topKFrequent([1,2,2], 2)) // [1,2]
console.log(topKFrequent([1,1,2,2,2,3,3,3,3,4], 2)) //[2,3]
console.log(topKFrequent([1,1,2,2,2,3,3,3,3,4], 3)) //[1,2,3]
