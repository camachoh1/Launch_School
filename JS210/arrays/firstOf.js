function firstOf(arr, count) {
  let newArray = [];

  for (let index = 0; index < count; index += 1) {
    newArray.push(arr[index]);
  }

  return newArray;
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(firstOf(digits, 3));
