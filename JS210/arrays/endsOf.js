function endsOf(beginningArr, endingArr) {
  let newArr = [];
  newArr.push(beginningArr[0]);
  newArr.push(endingArr[endingArr.length - 1]);

  return newArr;
}

function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]];
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));