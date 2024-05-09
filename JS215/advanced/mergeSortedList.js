// problem:
// write a function that takes two sorted arrays as arguments and returns a new array that contains all the elemebts from both input arrays in sorted order

// rules: 
  // do not use any function that sorts the input arrays
  // the result array must be built one element at a time in the proper order
  // do not mutate the input arrays
  // the input array could have different sizes

// input: two arrays
// output: a merged sorted array

// test cases:
  // merge([1,2,3], [4,6,5]) // [1,2,3,4,5,6]
  // merge([], []) // []
  // merge([1,2,3], []) // [1,2,3]
  // merge([], 1,2,3) // [1,2,3]
  // merge([1,2,2,4], [3,3]) // [1,2,2,3,3,4]
  // merge([1,2,,3], [4,,5]) // [1,2,3,4,5]

// data structures: arrays

// using sorting( not what is required but a good exercise nonetheless )
// algorithm:
  // merge both arrays
  // create a helper function that uses bubble sort:
    // input: an array
    // output: a sorted array

  // sort the merged array and return

// function merge(arr1, arr2) {
//   let merged = [...arr1,...arr2];
//   let sorted = bubbleSort(merged);
//   return sorted;
// }

// function bubbleSort(arr) {
//   let n = arr.length;

//   while(true) {
//     let swapped = false

//     for (let i = 1; i < n; i += 1) {
//       if (arr[i - 1] > arr[i]) {
//         swap(arr, i-1, i);
//         swapped = true;
//       }
//     }
//     if (!swapped) {
//       break
//     }
//   }
//   return arr.filter(n => n);
// }

// function swap(arr, idx1, idx2) {
//   let temp;

//   temp = arr[idx1];
//   arr[idx1] = arr[idx2];
//   arr[idx2] = temp;
// }


// actual solution not using a sorting alrogithm:

function merge(arr1, arr2) {
  let copy1 = arr1.slice();
  let copy2 = arr2.slice();
  let result = [];

  while (copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}

console.log(merge([1,2,3], [4,6,5])); // [1,2,3,4,5,6]
console.log(merge([], [])); // []
console.log(merge([1,2,3], [])); // [1,2,3]
console.log(merge([], [1,2,3])); // [1,2,3]
console.log(merge([1,2,2,4], [3,3])); // [1,2,2,3,3,4]


console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]