// problem: given an array of numbers. Write a function that finds pairs of integers that are equal, goups them in pairs and remove them from the input array.

// the function should return an array containing two values:
// the number of pairs removed and the number of left over values.

// perform this operation until all duplicates are removed from the input array.

// [1,1,2,3,1,3,1] [1,1] [3,3] [1,1] [2]  -> [3,1]
// [1,1,1,1,2,3,3]

// [1,3,2,1,3,2,2] [1,1] [3,3], [2,2] [2] -> [3,1]
// [1,1,2,2,2,3,3]

// data structures: arrays

// algorithm:
// create a copy of the input array and sort it
// create a pairs array
// create a singles array
// initialize next to 1
// current to next - 1

// while the array copy length is > 0
// if the current element is equals to the next
// splice the pair from the array and push it into pairs
// if the current element is not equal to the next
// splice the current element from the array and push it into singles

// check the length of pairs and the length of singles and return them as an array 

function numberOfPairs(nums) {
  let numsCopy = [...nums].sort((a,b) => a - b);
  const pairs = [];
  const singles = [];

  const i = 1;
  
  while (numsCopy.length > 0) {
    if (numsCopy[i - 1] === numsCopy[i]) {
      pairs.push(numsCopy.splice(0,2)); 
    } else {
      singles.push(numsCopy.splice(0, 1));
    }
  }

  return [pairs.length, singles.length];
}

// test cases:

console.log(numberOfPairs([1,1,2,3,1,3,1])) // [3,1]
console.log(numberOfPairs([1,3,2,1,3,2,2])) // [3,1]
console.log(numberOfPairs([1,1])) // [1,0]
console.log(numberOfPairs([1,1,2])) // [1,1]
console.log(numberOfPairs([1,2,3,4,5])) // [0,5]

