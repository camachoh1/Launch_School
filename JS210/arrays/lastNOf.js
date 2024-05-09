function lastNOf(arr, count) {
  let n = arr.length - count;
  let newArray = [];

  for(let index = n; index < arr.length; index += 1) {
    newArray.push(arr[index]);
  }
  return newArray;
}

function lastNOf(arr, count) {

  return arr.slice(arr.length - count);
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(lastNOf(digits, 3));


// further exploration

function lasNOf(arr, length) {
  let index = arr.length - length;

  if (index < 0) {
    index = 0;
  }

  return arr.slice(index);
}

l