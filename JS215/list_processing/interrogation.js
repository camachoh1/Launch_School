// Interrogation lets you determine how many of an array's elements satisfy some condition. There are two array methods in this category: Array.prototype.some and Array.prototype.every

// myOwnEvery

// function myOwnEvery(array, func) {
  
//   for (let i = 0; i < array.length; i += 1) {
//     if (!func(array[i])) {
//       return false;
//     }
//   }
//   return true;
// }

// // let isAString = value => typeof value === 'string';

// // console.log(myOwnEvery(['a', 'a234', '1abc'], isAString)); 


// function areAllNumbers(array) {
//   return myOwnEvery(array, isANumber);
// }

// function isANumber(value) {
//   return typeof value === 'number' && !Number.isNaN(value);
// }

// console.log(areAllNumbers([1, 5, 6, 7, '1']));           
// console.log(areAllNumbers([1, 5, 6, 7, 1]));               
// console.log(areAllNumbers([1, 5, 6, 7, NaN]));

