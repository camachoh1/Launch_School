// problem: 
// given an array of numbers containing 2 * n (n being the length of the array) integers.

// write a function that divides nums into n pairs such that
// each element belongs exactly to one pair
// the elements present in a pair are equal

// if the input array meets the conditions above, return true. Else return false. 

// input: an array of numbers
// output: a boolean

// data structures: arrays

// algorithm: 
// GOALS: sort the input array and create a 2d array containing all contiguous pairs.
// if all pars have equal values return true else return false.

// creating pairs helper function: 
// input: nums
// output: a 2d array

// create a copy of the input array

// sort the array copy
// create max variable = nums.length / 2
// create a results array

// while the array copy is not empty
// push pairs into results (using splice)

// return the pairs

// main function: 

// get all pairs
// check if every pair has a length of 2 and every value in the pair is equal


function getPairs(nums) {
  const result = [];
  let arrCopy = [...nums];

  arrCopy.sort((a,b) => a - b);

  while (arrCopy.length > 0) {
    result.push(arrCopy.splice(0,2));
  }

  return result;
}

function divideArray(nums) {
  let pairs = getPairs(nums);
  return pairs.every(pair => {
    return pair.length === 2 && pair[0] === pair[1];
  });
}

// test cases:

console.log(divideArray([1,2,3,4])) // false
console.log(divideArray([1,3,1,3])) // true 
console.log(divideArray([3,2,3,2,2,2])) // true
console.log(divideArray([2,3,2,3,12])) // false
console.log(divideArray([2,3,1,3,2,3])) // false