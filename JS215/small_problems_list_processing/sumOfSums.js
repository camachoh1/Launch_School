function sumOfSums(arr) {

  let subsequences = arr.map((_, index) => {
    return arr.slice(0, index + 1);
  });

  let sums = subsequences.map(subArr => subArr.reduce((sum, num) => sum + num), 0);

  let result = sums.reduce((sum, num) => sum + num, 0);

  return result
}


console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35