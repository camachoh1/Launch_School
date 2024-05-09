// problem:

// write a function that takes two objects and combine them into a new object. The result object must include all properties from both input objects as well as summing the values of all properties that belong to the same category:

// example: obj1 = {a: 100, b: 244, c:100}
          // obj2 = {d: 2, e: 40, c:100}

          // result = {d: 2, e: 40, a: 100, c: 200, b: 244}
// the values must be ordered from lowest to highest
// c: is present on both arrays they are considered the same category so their values are added. 

// rules: 
  // the input objects may contain different key-value pairs. 
  // return object is ordered from lowest to highest
  // same categories are summed
  // assume both inputs will contain values
  // assume both inputs will always be objects

// question: if any of the objects is empty? - return the non empty object.

// test cases:
  // combineSum({a: 100, b: 244, c:100}, {d: 2, e: 40, c:100}) // {d: 2, e: 40, a: 100, c: 200, b: 244}

  // const user1 = {
  //   powerPlant: 70000,
  //   rental: 12000
  // }
  
  // const user2 = {
  //   teaching: 40000,
  //   rental: 10000
  // }

  // combineSum(user1, user2) // {
//   powerPlant: 70000,
//   teaching: 40000,
//   rental: 22000   // The rental income is added together.
// }
  
  // combineSum({}, {a: 1, b: 2}) // {a: 1, b: 2}

  // combineSum({a:, 1, b: 2}, {c: 3, d:4, e: 5, b: 6}) // {a: 1, c: 3, d: 4, b: 8}

// DS: objects arrays

// algorithm:

// GOAL: find the keys present in both objects. add their values
// combine the sum of their values with the rest of the key/value pairs present in the two input objects

// IF any of the 
// CREATE a result object
// EXTRACT the keys and values from each object creating a 2D array for each object
// MERGE both 2D arrays creating a new 2D array containing all entries from both objects
// ITERATE through the merged array:

  // IF !resultObj[subarr[0]]
    // resultObj[subarr[0]] = subarr[1]
  // ELSE
    //resultObj[subarr[0]] += subarr[1]
  // END IF
// END ITERATION

// RETURN resultObj


function combineSum(obj1, obj2) {
  let resultObj = {};
  let obj1Entries = Object.entries(obj1);
  let obj2Entries = Object.entries(obj2);
  let combined = [...obj1Entries, ...obj2Entries].sort((a,b) => b[1] - a[1]);
  
  combined.forEach(subArr => {
    if (!resultObj[subArr[0]]) {
      resultObj[subArr[0]] = subArr[1];
    } else {
      resultObj[subArr[0]] += subArr[1]
    }
  });

  return resultObj;
}

  console.log(combineSum({a: 100, b: 244, c:100}, {d: 2, e: 40, c:100})); // {d: 2, e: 40, a: 100, c: 200, b: 244}

  const user1 = {
    powerPlant: 70000,
    rental: 12000
  }
  
  const user2 = {
    teaching: 40000,
    rental: 10000
  }

  console.log(combineSum(user1, user2)); // {
//   powerPlant: 70000,
//   teaching: 40000,
//   rental: 22000   // The rental income is added together.
// }
  
  console.log(combineSum({}, {a: 1, b: 2})); // {a: 1, b: 2}

  console.log(combineSum({a: 1, b: 2}, {c: 3, d:4, e: 5, b: 6})); // {a: 1, c: 3, d: 4, b: 8}