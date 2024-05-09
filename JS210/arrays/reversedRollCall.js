let arr = [1,2,3,4,5];

function reversedRollCall(arr) {
  let revArr = [];
  for (let index = arr.length - 1; index >= 0; index -= 1) {
    revArr.push(arr[index]);
  }

  return revArr;
}

console.log(reversedRollCall(arr));