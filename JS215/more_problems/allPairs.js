// problem:

// create a function that returns all pairs of numbers in an array that sum to a target. Sort the pairs in ascending order.

// if no pairs are found return [];

function allPairs(arr, target) {
  let pairs = [];

  for (let idx1 = 0; idx1 < arr.length; idx1 += 1) {
    for (let idx2 = 0; idx2 < arr.length; idx2 += 1) {
      pairs.push([arr[idx1], arr[idx2]]);
    }
  }

  return pairs.filter(pair => {
    return pair.reduce((sum, num) => sum += num, 0) === target;
  }).sort((a, b) => a[0] - b[0])

}

console.log(allPairs([2, 4, 5, 3], 7)); // [[2, 5], [3, 4]]
console.log(allPairs([5, 3, 9, 2, 1], 3)); //[[1, 2]])
console.log(allPairs([4, 5, 1, 3, 6, 8], 9))