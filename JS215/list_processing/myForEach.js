// myForEach

// function myForEach(array, callback) {
//   for (let index = 0; index < array.length; index += 1) {
//     let value = array[index]
//     callback(value, index, array);
//   }
// }

// let min = Infinity;

// let getMin = value => (min = value <= min ? value : min);

// myForEach([4,5,12,23,3, Infinity], getMin);

// console.log(min);


// let min = Infinity;
// let max = -Infinity;

// let getMinMax = function(value) {
//   if (value >= max) {
//     max = value;
//   }

//   if (value <= min) {
//     min = value;
//   }
// };

// [4,5,12,23,3].forEach(getMinMax);

// console.log(min, max);

// forEach mutates min and max. Mutation is needed in order to make forEach useful.


// same idea as above but illustrated using an anonymous function as callback. 

// let min = Infinity;
// let max = -Infinity;

// [4,5,12,23,3].forEach(value => {
//   if (value >= max) {
//     max = value;
//   }

//   if (value <= min) {
//     min = value;
//   }
// });