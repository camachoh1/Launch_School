function halvsies(arr) {
  let halfPoint = 0;

  if (arr.length % 2 !== 0) {
    halfPoint = (arr.length / 2) + 1;
  } else {
    halfPoint = (arr.length / 2);
  }

  let resultArr = [];

  resultArr.push(arr.slice(0, halfPoint));
  resultArr.push(arr.slice(halfPoint));

  return resultArr;
}

// ls solution:

function halvsies(array) {
  const half = Math.ceil(array.length / 2);
  const firstHalf = array.slice(0, half);
  const secondHalf = array.slice(half);

  return [firstHalf, secondHalf];
}


console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]