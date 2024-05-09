function multiplyList(arr1, arr2) {
  let resultArr = [];

  for (let i = 0; i < arr1.length; i += 1) {
    resultArr.push(arr1[i] * arr2[i]);
  }

  return resultArr;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]