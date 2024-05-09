function arraysAreEqual(array1, array2) {
  let count = 0;
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i += 1) {
    if (array1.includes(array2[i]) && array2.includes(array1[i]) ) {
      count += 1;
    } else {
      return false;
    }
  }

  return count === array1.length;
}

console.log(arraysAreEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(arraysAreEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(arraysAreEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(arraysAreEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(arraysAreEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(arraysAreEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(arraysAreEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(arraysAreEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(arraysAreEqual([1, 1, 1], [1, 1]));                     // false
console.log(arraysAreEqual([1, 1], [1, 1]));                        // true
console.log(arraysAreEqual([1, '1'], ['1', 1]));                    // true