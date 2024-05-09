// problem: 

// Given two arrays where the first one is smaller than the second one.
// write a function that checks if the smallest array can be considered an ordered sub array in the largest one

// rules: 
  // an ordered sub array is an array whose elements are ordered in ascending order for example:
    // [4,5,6] [1,2,3,4,5,6]
    // [4.5.6] is considered "ordered" since [4,5,6] is ordered in ascending order just like the large array [1,2,3,4,5,6]

    // [5,3,1] [5,4,3,2,1]
    // [5,3,1] is considered "ordered" since the values are ordered in descending order just like the large array [5,4,3,2,1]
    // the large array may contain repeated elements.
    // regardless of the repeated elements, what is important is the index order for each value. if the index and the values are either in ascending or descending order, and that pattern is repeated in the smallest array, then it will be considered ordered

// inputs: two arrays
// output: a boolean

// test cases: 
  // orderedSubArray([4,5,6], [1,2,3,4,5,6]) // true
  // orderedSubArray([5,3,1], [5,4,3,2,1]) // true
  // orderedSubArray([2,6,7], [1,2,3,4,5,6,7]) // true
  // orderedSubArray([1,1,4], [1,2,1,3,4]) // true
  // orderedSubArray([1,2,3], [3,2,1,2,3]) // true

  // orderedSubArray([3,2,1], [1,2,3,4,5]) // false
  // orderedSubArray([], [1,2,3,4]) // false
  // orderedSubArray([3,2,1], [1,2,3,2,4]) // false
  // orderedSubArray([], []) // false

// data structures: arrays

// algorithm:
  

// function orderedSubArray(arr1, arr2) {
//   if ([arr1, arr2].some(subarr => subarr.length === 0)) {
//     return false;
//   }

//   let idx = 0;
//   for (let i = 0; i < arr1.length; i += 1) {
//     idx = arr2.indexOf(arr1[i], idx);
//     if (idx === -1) {
//       return false;
//     }
//     idx += 1;
//   }
//   return true;
// }

function orderedSubArray(arr1, arr2) {
  let start = arr2.indexOf(arr1[0]);
  let end = arr2.lastIndexOf(arr1[arr1.length - 1]);
  let candidate = arr2.slice(start, end + 1);
  
  if (candidate.length === 0) return false;

  let filteredCandidate = candidate.filter(n => arr1.indexOf(n) !== -1);

  return filteredCandidate.join('') === arr1.join('');
}


console.log(orderedSubArray([4,5,6], [1,2,3,4,5,6])); // true
console.log(orderedSubArray([5,3,1], [5,4,3,2,1])); // true
console.log(orderedSubArray([2,6,7], [1,2,3,4,5,6,7])); // true
console.log(orderedSubArray([1,1,4], [1,2,1,3,4])); // true
console.log(orderedSubArray([1,2,3], [3,2,1,2,3])); // true
console.log(orderedSubArray([3,2,1], [1,2,3,4,5])); // false
console.log(orderedSubArray([], [1,2,3,4])); // false
console.log(orderedSubArray([3,2,1], [1,2,3,2,4])); // false
console.log(orderedSubArray([], [])); // false