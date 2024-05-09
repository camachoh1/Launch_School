function concat(array1, secondElement) {
  if (!Array.isArray(array1)) {
    console.log("Argument Error");
    return;
  }
  let resultArr = [];

  for (let index = 0; index < array1.length; index += 1) {
    resultArr.push(array1[index]);
  }
  
  if (Array.isArray(secondElement)) {
    for (let index = 0; index < secondElement.length; index += 1) {
      resultArr.push(secondElement[index]);
    }
  } else {
    resultArr.push(secondElement);
  }

  return resultArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));          // [1, 2, 3, 4, 5, 6]
console.log(concat([1, 2], 3));                     // [1, 2, 3]
console.log(concat([2, 3], ['two', 'three']));      // [2, 3, "two", "three"]
console.log(concat([2, 3], 'four')); 

const obj = { a: 2, b: 3 };
const newArray = concat([2, 3], obj);
console.log(newArray);                              // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
console.log(newArray);  // [2, 3, { a: "two", b: 3 }]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, obj];
const arr3 = concat(arr1, arr2);
arr3;                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = 'three';
arr3; 

arr3[5].b = 3;                         // or, `arr3[5]['b'] = 3;`
console.log(obj);  