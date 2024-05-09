// problem:

// given an array containing objects whose properties are name and quantity, write a function that returns an array of objects. The number of objects is equivalent to the quantity value in the input object.

// input: an array of objects
// output: an array of objects 

// rules:
  // the input array will never be empty
  // objects will always have a name and quantity property, the quantity property will always be greater then 0
  // the returned object should have each fruit in the same order as the original. 
  // the input array may contain any number of objects > 0

// test cases:

// splitBunches([{name: "apples", quantity: 2}]) // [{name: "apples", quantity: 1}, {name: "apples", quantity: 1}];

// splitBunches([{name: "bananas", quantity:1}, {name: "pears", quantity: 2}]) // [{name: "bananas", quantity: 1}, {name: "pears", quantity: 1}, {name: "pears", quantity: 1}]

// data structures: objects arrays

// algorithm: 

// GOAL: iterate through the input array, push a new object containing properties name and quantity into a result array
// the new object will be pushed into the result array n times 
// n being the quantity found in the input object.

// CREATE a results array
// ITERATE through the input array
// INITIALIZE a variable times to the value of quantity
// WHILE times > 0 
  // PUSH new object into the result array
  // times -= 1
// END WHILE
// RETURN result object

function splitBunches(lists) {
  let result = [];

  lists.forEach(list => {
    let times = list.quantity;

    while (times > 0) {
      result.push({name: list.name, quantity: 1});
      times -= 1;
    }
  });

  return result;
}

console.log(splitBunches([{name: "apples", quantity: 2}])); // [{name: "apples", quantity: 1}, {name: "apples", quantity: 1}];

console.log(splitBunches([{name: "bananas", quantity:1}, {name: "pears", quantity: 2}])); // [{name: "bananas", quantity: 1}, {name: "pears", quantity: 1}, {name: "pears", quantity: 1}]

console.log(splitBunches([
  { name: "grapes", quantity: 2 }
]));

console.log(splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "bananas", quantity: 2 }
]));