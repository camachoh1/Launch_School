// problem: given an array of integer sorted in non-decreasing order, remove the duplicates in place. Such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums. 

// input: an array of numbers
// output: the number of unique elements in the array after removing the duplicates.

// test cases:
// removeDuplicates() // 0
// removeDuplictes([]) // 0
// removeDuplicates([1]) // 0
// removeDuplicates([1,2]) // 0
// removeDuplicates([1,1]) // 1
// removeDuplicates([0,1,1,2,3,3]) // 2
// removeDuplicates([0,0,1,1,2,2]) // 3
// removeDuplicates([1,1,,2,3,3]) // 2
// removeDuplicates([null, null, false, false]) // 2
// removeDuplicates(["a", "a", "b", "c"]) // 1

// rules: the duplicate numbers must be removed in place. 

// data structures: arrays

// algorithm: 
// GOALS: iterate through the input array if current element is equals to previous element, remove current element and increment the removed count by 1. 

// create a guard clause that will return 0 if the input element is not an array or if it is an array but it is empty. 

function sortValues(value) {
  return value === '' ? 1 : -1;
}


function removeDuplicates(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;

  let removed = 0;

  for (let i = 1; i <= arr.length; i += 1) {
    let current = i
    let previous = i - 1;

    if (arr[current] === arr[previous]) {
      arr[current] = '';
      removed += 1;
    }
  }
  return removed;
}

// console.log(removeDuplicates()); // 0
// console.log(removeDuplicates([])); // 0
// console.log(removeDuplicates([1])); // 0
// console.log(removeDuplicates([1,2])); // 0
// console.log(removeDuplicates([1,1])); // 1
// console.log(removeDuplicates([1,1,2]));
// console.log(removeDuplicates([0,1,1,2,3,3])); // 2
// console.log(removeDuplicates([0,0,1,1,2,2])); // 3
// console.log(removeDuplicates([1,1,,2,3,3])); // 2
// console.log(removeDuplicates([null, null, false, false])); // 2
// console.log(removeDuplicates(["a", "a", "b", "c"])); // 1

let arr = [1,1,2];
console.log(arr) // [1,1,2]
console.log(removeDuplicates(arr)); // 1
console.log(arr); // [1,2,'']