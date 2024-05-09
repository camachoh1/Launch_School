const myArray = [5,5];
myArray[myArray.length] = 5;
myArray[myArray.length] = 5;

function average(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

console.log(average(myArray));

// adding elements with negative index values to an array adds a new property to the array since arrays are objects. these new properties are not counted as part of the array length so the return statement evaluates 20 / 2. `2` being the array size. The properties: -1 and -2 are not considered when calculating the size of the array. 