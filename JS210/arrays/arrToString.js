let arr = [1, 'a', 3, 'c'];

function arrToString(arr) {
  let resultStr = '';

  for (let index = 0; index < arr.length; index += 1) {
    resultStr += arr[index];
  }

  return resultStr
}

console.log(arrToString(arr));