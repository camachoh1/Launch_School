// function union(arr1, arr2) {
//   let resultArr = [];
//   let arrays = [arr1, arr2];

//   for (let index1 = 0; index1 < arrays.length; index1 += 1) {
//     for (let index2 = 0; index2 < arrays[index1].length; index2 += 1) {
//       if (!resultArr.includes(arrays[index1][index2])) {
//         resultArr.push(arrays[index1][index2]);
//       }
      
//     }
//   }
//   console.log(resultArr);
// }


// refactoring

function copyNonDups(newArray, array) {
  array.forEach(value => {
    if (!newArray.includes(value)) {
      newArray.push(value);
    }
  });
}

function union(...args) {
  const newArray = [];

  args.forEach(subArr => copyNonDups(newArray, subArr));

  return newArray;
}



console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]