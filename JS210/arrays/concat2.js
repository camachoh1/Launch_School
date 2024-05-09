
function concat(...arg) {
  let resultArr = [];

  for (let index1 = 0; index1 < arg.length; index1 += 1) {
    if (Array.isArray(arg[index1])) {
      for (let index2 = 0; index2 < arg[index1].length; index2 += 1) {
        resultArr.push(arg[index1][index2]);
      }
    } else {
      resultArr.push(arg[index1]);
    }
  }

  return resultArr;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));
console.log(concat([1, 2], 'a', ['one', 'two']));
console.log(concat([1, 2], ['three'], 4));