function uniqueElements(arr) {
  let newArray = [];
  let sortedArr = arr.sort();

  for(let index = 0; index < sortedArr.length; index += 1) {
    if (newArray[newArray.length - 1] === sortedArr[index]) {
      continue;
    } else {
      newArray.push(sortedArr[index]);
    }
  }

  return newArray;
}

function uniqueElements(arr) {
  let uniques = [];
  let len = arr.length;

  for(let index = 0; index < len; index += 1) {
    if (uniques.indexOf(arr[index]) === -1) {
      uniques.push(arr[index]);
    }
  }
  return uniques;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));