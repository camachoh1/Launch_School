let count = [0,1,2];

function push(arr, element) {
  arr[arr.length] = element;
  return arr.length;
}

console.log(push(count, 3));
console.log(count);