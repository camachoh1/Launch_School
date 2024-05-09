// problem: given two objects, create a function that will return true if the two supplied arguments hold exactly the same values and the same number of values (not necessarily in the same order) and false if they do not. 

// the supplied arguments will be objects, arrays and strings

// test cases:
// areEqual() // false
// areEqual("a") // false
// areEqual("", "") // true
// areEqual("a", "a") // true
// areEqual("a", "A") // false
// areEqual("ab", "ba") // true

// areEqual({}, {}) // true
// areEqual({a: 1}) // false
// areEqual({a: 1}, {a: 1}) // true
// areEqual({a:1}, {b:1}) // true
// areEqual({b: 1, a: 2}, {a: 2, b: 1}) // true
// areEqual({a: []}, {b: []}) // true
// areEqual({a: [1,2,3]}, {b: [3,2,1]}) // true
// areEqual({a: {a: 2}}, {b: {b: 2}}) // true

// areEqual([], []) // true
// areEqual([1], [2]) // false
// areEqual([1,2,3], [3,2,1]) // true
// areEqual([1,,3], [1,,3]) // true
// areEqual([1,2,3], [1,,2,3]) // true
// areEqual([null, false], [false, null]) // true
// areEqual([{a: 1}], [{c: 1}]) // true
// areEqual([[1,2,3]], [[3,1,2]]) // true


// areEqual([1,2,3], {a: 1}) // false
// areEqual({d: 22}, "a") // false


// data structures: arrays, objects, strings

// algorithm:
// GOAL: identify the different data types received as arguments
// based on the data type perform equality operation.
// the equality operation for each data type will be done on a separate helper function.
// 

function areEqual(value1, value2) {
  if ([value1, value2].some(val => val === null)) return false;
  if ([value1, value2].every(val => val === undefined)) return false;
  if (typeof value1 !== typeof value2) return false;
  if (Array.isArray(value1) && !Array.isArray(value2)) return false;

  if (typeof value1 === "string" && typeof value2 === "string") {
    return areEqualStrings(value1, value2);
  } else if (Array.isArray(value1) && Array.isArray(value2)) {
    return areEqualArrays(value1, value2);
  } else if (typeof value1 === "object" && typeof value2 === "object") {
    return areEqualObjects(value1, value2);
  }
}

function areEqualStrings(string1, string2) {
  let sortedStr1 = string1.split('').sort().join('');
  let sortedStr2 = string2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

function areEqualArrays(array1, array2) {
  let sortedArr1 = array1.filter(el => el).sort();
  let sortedArr2 = array2.filter(el => el).sort();

  if (sortedArr1.length !== sortedArr2.length) return false;

  for (let i = 0; i < sortedArr1.length; i += 1) {
    
    if (Array.isArray(sortedArr1[i] && Array.isArray(sortedArr2[i]))) {
      if (!areEqualArrays(sortedArr1[i].sort(), sortedArr2[i].sort())) return false;
    } else if (typeof sortedArr1[i] === "object" && typeof sortedArr2[i] === "object") {
      return (areEqualObjects(sortedArr1[i], sortedArr2[i]));
    } else if (sortedArr1[i] !== sortedArr2[i]) {
      return false;
    }
    
  }

  return true;
}

function areEqualObjects(object1, object2) {
  let object1Values = Object.values(object1).sort();
  let object2Values = Object.values(object2).sort();

  return areEqualArrays(object1Values, object2Values);
}



console.log(areEqual() === false);
console.log(areEqual("a") === false);
console.log(areEqual([1,2,3], {a: 1}) === false);
console.log(areEqual({d: 22}, "a") === false);
console.log(areEqual(null, "a") === false);

console.log(areEqual("", "") === true);
console.log(areEqual("a", "a") === true);
console.log(areEqual("a", "A") === false);
console.log(areEqual("ab", "ba") === true);

console.log(areEqual({}, {}) === true);
console.log(areEqual({a: 1}) === false);
console.log(areEqual({a: 1}, {a: 1}) === true);
console.log(areEqual({a:1}, {b:1}) === true);
console.log(areEqual({b: 1, a: 2}, {a: 2, b: 1}) === true);
console.log(areEqual({a: []}, {b: []}) === true);
console.log(areEqual({a: [1,2,3]}, {b: [3,2,1]}) === true);
console.log(areEqual({a: {a: 2}}, {b: {b: 2}}) === true);

console.log(areEqual([], []) === true);
console.log(areEqual([1], [2]) === false);
console.log(areEqual([1,2,3], [3,2,1]) === true);
console.log(areEqual([1,,3], [1,,3]) === true);
console.log(areEqual([1,2,3], [1,,2,3]) === true);
console.log(areEqual([null, false], [false, null]) === true);
console.log(areEqual([{a: 1}], [{c: 1}]) === true);
console.log(areEqual([[1,2,3]], [[3,1,2]]) === true);


