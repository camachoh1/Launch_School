// algorithm:

// check if the array length is <= 1
  // if it is, return the array

// split the array in two halves
  // from index 0 to midpoint
  // from midpoint to the end

// recursively call the mergeSort function on each half

// use the merge function to sort both the left half and the right half. 

function mergeSort(arr) {
  if (arr.length <= 1) { // this is the base case
    return arr
  } 

  let leftHalf = arr.slice(0, arr.length / 2);
  let rightHalf = arr.slice(arr.length / 2);

  // recursive case 
  let sortedLeftHalf = mergeSort(leftHalf); 
  let sortedRightHalf = mergeSort(rightHalf);

  return merge(sortedLeftHalf, sortedRightHalf);
}

function merge(arr1, arr2) {
  let copy1 = arr1.slice();
  let copy2 = arr2.slice();
  let result = [];

  while (copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]