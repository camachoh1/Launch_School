let count = [1,2,3];

function unshift(arr, value) {
  for (let index = arr.length; index > 0; index -= 1) {
    arr[index] = arr[index - 1];
  }
  arr[0] = value;
  return arr.length;
}

unshift(count, 0);
count;
