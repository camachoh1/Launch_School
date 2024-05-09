
let temperatures = [22,34,32,25,15];

function average(arr) {
  let total = sum(arr)
  let result = (total / arr.length);
  return result;
}

function sum(arr) {
  total = 0;

  for (let index = 0; index < arr.length; index += 1) {
    total += arr[index];
  }
  return total
}

console.log(average(temperatures));

