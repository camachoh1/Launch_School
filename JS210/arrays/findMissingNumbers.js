function missing(arr) {
  let fullRange = [];
  let resultArr = [];

  for(let num = arr[0]; num < arr[arr.length - 1]; num += 1) {
    fullRange.push(num);
  }

  for(let index = 0; index < fullRange.length; index += 1) {
    if (arr.indexOf(fullRange[index]) === - 1) {
      resultArr.push(fullRange[index]);
    }
  }

  return resultArr;
}


function missing(array) {
  let result = [];
  let start = array[0] + 1;
  let end = array[array.length - 1];

  for (let interger = start; integer < end; integer += 1) {
    if (array.indexOf(integer) === -1) {
      result.push(integer);
    }
  }

  return result;
}

console.log(missing([-3, -2, 1, 5]));
console.log(missing([1, 2, 3, 4]));
console.log(missing([1, 5]));
console.log(missing([6]));
