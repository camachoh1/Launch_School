let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(things) {
  let result = things.filter(function(obj) {
    if (Number.isInteger(obj)) {
      return obj
    }
  });

  return result
}

console.log(findIntegers(things));