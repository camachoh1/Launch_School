function matrixSum(arr) {
  let resultArr = [];

  arr.forEach(function(subArr) {
    let sum = 0;

    for(let index = 0; index < subArr.length; index += 1) {
      sum += subArr[index]
    }
    resultArr.push(sum);
  });
  return resultArr;
}

console.log(matrixSum([[2, 8, 5], [12, 48, 0], [12]]));