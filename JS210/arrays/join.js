function join(arr, str) {
  let resultStr = '';

  for(let index = 0; index < arr.length; index += 1) {
    resultStr += arr[index];

    if (index < arr.length - 1) {
      resultStr += str;
    }
  }
  return resultStr;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'