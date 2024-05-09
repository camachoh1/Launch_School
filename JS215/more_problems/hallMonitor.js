// problem: given a floor plan with rooms 1,2, 3, 4, and a hallway.
// where rooms 1 and 2 are connected thus allowing you to move freely between them. Same for rooms 3 and 4.

// however, to move between rooms 2 and 4 you need to enter the hallway (H). 

// write a function that validates wether a route taken between rooms is possible. 

// example: route: 1,2,1 -> is a valid route, rooms 1 and 2 are connected.
// route: H,2,1,2,H,2 -> is valid since rooms 1 and 2 are connected and 2 and H are also.

// route: 1,3,4 -> is not valid since you need to walk through room 2, the hallway and room 4 to reach room 3 from room 1.

// route 2,H,4,3 -> is valid since this is the layout of the building.

// route 3,4,H,4 -> is valid since rooms 3 and 4 are connected and 4 and H are also connected. 

// input: an array
// output: a boolean

// rules:
// all values in the array will be numbers between 1-4 and the letter H
// no rooms will repeat
// a route may begin or end in any room including the hallway

// test cases:

  // possiblePath([1,2,1]) // true 
  // possiblePath(['H',2,1,2,'H',2) // true
  // possiblePath([1,3,4]) // false
  // possiblePath([2,'H',4,3]) // true
  // possiblePath([3,4,'H',4]) // true 

// data structures: arrays

// algorithm:
// GOAL: iterate through the input array
// check that every element following the current element in the iteration is a valid location if it is, continue if not return false.
// if iteration ends return true

// ITERATE through the input array
  // IF currentRoom === 1 AND next room != 2 
    // RETURN false
    // ELIF currentRoom === 2 AND (next room != 1 AND next room != "H")
      // RETURN false
    // ELIF currentRoom === H AND (next room != 2 AND next room != 4)
      // RETURN false
    // ELIF currentRoom === 4 AND (next room != 3 AND next room != H)
      // RETURN false
    // ELIF currentRoom === 3 AND next room != 4
      // RETURN false
  // END IF
// END ITERATION
// RETURN true

// function possiblePath(path) {
//   for (let i = 1; i < path.length; i+= 1) {
//     let currentRoom = path[i - 1];
//     let nextRoom = path[i];

//     if (currentRoom === 1 && nextRoom !== 2) {
//       return false;
//     } else if (currentRoom === 2 && ((nextRoom !== 1) && (nextRoom !== "H"))) {
//       return false;
//     } else if (currentRoom === "H" && ((nextRoom !== 2) && (nextRoom !== 4))) {
//       return false;
//     } else if (currentRoom === 4 && ((nextRoom) !== 3 && (nextRoom !== "H"))) {
//       return false;
//     } else if (currentRoom === 3 && nextRoom !== 4) {
//       return false;
//     }
//   }

//   return true;
// }

// simpler answer:

// function possiblePath(path) {
//   const rooms = {
//     1: [2],
//     2: [1, 'H'],
//     'H': [2, 4],
//     4: [3, 'H'],
//     3: [4]
//   };

//   for (let i = 0; i < path.length - 1; i++) {
//     if (!rooms[path[i]].includes(path[i + 1])) {
//       return false;
//     }
//   }

//   return true;
// }

console.log(possiblePath([1,2,1])) // true 
console.log(possiblePath(['H',2,1,2,'H',2])) // true
console.log(possiblePath([1,3,4])) // false
console.log(possiblePath([2,'H',4,3])) // true
console.log(possiblePath([3,4,'H',4])) // true 