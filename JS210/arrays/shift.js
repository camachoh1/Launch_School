let count = [1,2,3];

let shift = function (arr) {
  let first = arr[0];

  if (arr.length === 0) {
    return undefined;
  }

  for (let index = 0; index < arr.length - 1; index += 1) {
    console.log(arr);
    arr[index] = arr[index + 1];
    console.log(arr);
  }

  arr.length = arr.length - 1;
  return first;
}

shift(count);