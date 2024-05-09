// [2, 4], [4, 3, 1, 2]
// 2 * 4 = 8 , 2 * 3 = 6, 2 * 1  2 , 2 * 2 = 4

// 8 , 6 , 2 , 4

// 4 * 4 = 16 , 4 * 3 = 12 , 4 * 1 = 4, 4 * 2 = 8

// 16 12 4 8

// [2, 4, 4, 6, 8, 8, 12, 16]


// using two for loops
function multiplyAllPairs(arr1, arr2) {
  let result = [];

  for (let index1 = 0; index1 < arr1.length; index1 += 1) {
    for (let index2 = 0; index2 < arr2.length; index2 += 1) {
      result.push(arr1[index1] * arr2[index2]);
    }
  }

  return result.sort((a,b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

// using for each
function multiplyAllPairs(arr1, arr2) {
  let result = [];

  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
      result.push(num1 * num2);
    })
  });

  return result.sort((a,b) => a - b);
}

