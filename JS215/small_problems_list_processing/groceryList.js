function insert(str, times) {
  let result = [];

  while (times > 0) {
    result.push(str);
    times -= 1;
  }

  return result;
}

function buyFruit(arr) {
  return arr.flatMap(subarr => {
    return insert(subarr[0], subarr[1]);
  });
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]