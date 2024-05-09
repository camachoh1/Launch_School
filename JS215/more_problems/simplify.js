// problem:
// given an array of objects, create a function that counts the appearances of certain brands in the input object and returns a reduced version of the input array where duplicates objects are removed and a count propery is added, this count property represents the number of times the object appeared in the input array.

// rules: 
  // there will always be one or more elements in the given array
  // wach element will always have a brand and name propery
  // all duplicates will be displayed in order

// data structures: objects and arrays

// algorithm:

// GOAL: to create a results array that contains no duplicate of each object in the input array. The objects in the result array must contain a count property representing the number of duplicates

// CREATE a results array
// ITERATE through the input array
  // IF resultArr[LEN - 1]   
    //IF resultArr[LEN - 1].brand === obj.brand
      // resultArr[LEN - 1].count += 1 
    // ELSE 
      // PUSH new object in resultArr with count = 1
    // END IF
  // ELSE 
    // PUSH new object in resultArr with count = 1
  // END IF
// END ITERATION
// RETURN result

function simplifyList(list) {
  let result = [];

  list.forEach(product => {
    if (result[result.length - 1]) {
      if (result[result.length - 1].brand === product.brand) {
        result[result.length - 1].count += 1;
      } else {
        result.push({...product, count: 1});
      }
    } else {
      result.push({...product, count: 1});
    }
  });

  return result;
}

console.log(simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "Urban Decay", name: "Naked Honey Pallete" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" }
])); // [
  // { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 2 },
  // { brand: "Urban Decay", name: "Naked Honey Pallete", count: 1 },
  // { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 3 }