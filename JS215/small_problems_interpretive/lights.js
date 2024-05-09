// problem

// you are given a bank of switches numbered from 1 to n. Every switch is connected to exactly one light that is initially off. 

// - you toggle every switch
// - on the second pass, go back to the top and toggle switches 2,4,6, and so on.
// - on the third pass, go back to the top and toggle switches 3,6,9, and so on. 

// continue the process until you have gone through n repetitions.

// input: a number representing the total number of switches
// output: an array of lights that are on after n repetitions. 

// lightsOn(5); // [1,4]

// n = 5 [off, off, off, off, off]

// first pass = [on,on,on,on,on] // all on every switch is a multiple of n = 1

// second pass = [on, off, on, off, on] // only switches multiple of n = 2

// third pass = [on, off, off, off, on] // onlly switches multiple of 3

// fourth pass = [on, off, off, on, on] // toggle switches multiple 4

// fifth pass = [on, off, off, on, off] toggle switches multiple of 5


//lightsOn(2) => [off, off] => [on, on] => [on, off];

// lightsOn(3) => [off, off, off] => [on, on, on] => [on, off, on] => [on, off, off] => [1]

// data structures: arrays

// create an array n length with 'off' strings.

// iterate through the array n times. (for loop)

// if the index + 1 is multiple of n, toggle the value at the curent index

// at the end of the iteration map the result array and return the index of the values "on" in the array.


// function makeLights(switches) {
//   let lightsArr = [];

//   while (switches > 0) {
//     lightsArr.push(false);
//     switches -= 1;
//   }

//   return lightsArr;
// }

// function toggleLights(lights, n) {
//   return lights.map((light, index) => {
//     if ((index + 1) % n === 0) {
//       return !light;
//     } else {
//       return light;
//     }
//   });
// }

// function lightsOn(switches) {
//   let lights = makeLights(switches);
//   let n = 1;
  
//   while (n <= switches) {
//     lights = toggleLights(lights, n)
//     n += 1;
//   }
  
//   let result = lights.map((light, index) => {
//     if (light) {
//       return index + 1;
//     } 
//   }).filter(n => n);

//   return result;
// } 



// second solution:

// function lightsOn(switches) {
//   let lightsArr = createLights(switches);
//   let toggledLights = toggleLights(switches, lightsArr);
//   let result = formatResult(toggledLights);
//   return result;
// }

// function createLights(switches) {
//   return new Array(switches).fill(false);
// }

// function toggleLights(switches, arr) {
//   let round = 1;

//   while (round <= switches) {
//     for (let i = 0; i <= switches; i += 1) {
//       if (i % round === 0) {
//         arr[i] = !arr[i];
//       }
//     }
//     round += 1;
//   }
//   return arr
// }

// function formatResult(arr) {
//   return arr.map((el, index) => {
//     if (el) {
//       return index;
//     }
//   }).filter(el => el);
// }


// You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

// Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.

// problem: 
// given a number (n), write a function that creates an array of lights size 1-n.
// after iterating n times switching the lights on or off.
// return an array containing the index of the lights that are on at the end of the iteration. 

// rules:
// all lights are initially off
// on the first iteration turn all of them on
// go back to the beginning and switch lights 2, 4, 6, and so on on
// go back to the beginning this time switch 3,6, 9...
// continut the process until the end of the array
// the input number will always be > 0

// test cases:

// lightsOn(5); [1,4] -> [off, off,off, off, off]
                      // -> [on, on, on,on,on]
                      // -> [on, off, on, off, on]
                      // -> [on, off, off, off, on]
                      // -> [on, off, off, on, on]
                      // -> [on, off, off, on, off]
                      // -> [0, 3] -> [1, 4]

// lightsOn(5); [1,4]
// lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// data structures: arrays, booleans

// ALGORITHM:
// GOALS: create an array of lights size n
// each light is represented by a boolean value true = on false = on (initially all of them false)
// iterate through the array n times switching the lights on or off following given rules
// extract the index of the elements that are on (true)
// return an array with those index + 1

// helper function: createLights
// input n
// outputs: array of booleans

// CREATE a results array
// WHILE n > 0
// PUSH false into results
// END WHILE
// RETURN results array

// helper funtion: toggle
// CREATE counter variable to 1
// WHILE n > 0
  // ITERATE through the lights array
  // IF current light index % counter === 0
    // SWITCH current light !light
  // END If
  // counter += 1
  // n -= 1
// END WHIL

// helper function: extractIndex
// CREATE an index array 

// ITERATE the resulting array 
  // IF state === true 
    // PUSH index + 1 into result
// END IF
// END ITERATION
// RETURN index array

// main function: lightsOn

// CREATE lights array (helper function)
// TOGGLE lights (helper function)
// EXTRACT index (helper function)
// RETURN index array 




// function lightsOn(n) {
//   let lights = createLights(n);
//   let toggled = toggle(lights, n);
//   // let lightsIdx = extractIndex(toggled);
//   return toggled
// }

// function createLights(n) {
//  let result = [];

//  while (n > 0) {
//   result.push(false);
//   n -= 1
//  }

//  return result
// } 

// helper funtion: toggle
// CREATE counter variable to 1
// WHILE n > 0
  // ITERATE through the lights array
  // IF current light index % counter === 0
    // SWITCH current light !light
  // END If
  // counter += 1
  // n -= 1
// END WHIL

// function toggle(lights, n) {
//   let counter = 0;
//   while (n >= 0) {
//     lights.forEach((light, index) => {
//       if (index % counter === 0) {
//         lights[index] = !lights[light]
//       }
//     });

//     counter += 1;
//     n -= 1;
//   }

//   return lights;
// }

// console.log(lightsOn(5)); //[1,4]
// console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


// console.log(lightsOn(100))


// console.log(lightsOn(5)); // [1,4]
// console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
// console.log(lightsOn(2)); // [1]
// console.log(lightsOn(3)); // [1]


// problem: write a function that receives a number n.
// using this number create a bank of switches from 1 to n.
// every switch is connected exactly to one light that is initially off.
// write a function that toggles the switches so that:
// in the beginning you toggle every switch. 
// on the secon round you toggle switches 2,4,6...
// you go back to the beginning and toggle 3,6,9...
// you continue to repeat this process until you have completed n repetitions.

// after toggling the lights, return an array containing the lights that are on after n repetitions.

// rules: 
// n will be a possitive integer greater than 0
// input: a number
// output: an array

// test cases:

// data structures: arrays

// algorithm:
// booleans will work as switches: false = off true = on
// create lights: instantiate a new array length of n and fill it with false

// toggle the lights:
// input: lights and n
// output: toggled lights 

// initialize rounds to 0 (will keep track of the times we are toggling lights)

// while rounds is less than n
// iterate through the lights array 
// if the current light % current round === 0
// toggle the light
// end iteration
// round += 1

// return toggled lights

// main function: 

// create an array of lights: helper function
// toggle the lights: helper function

// create a results array
// iterate through toggled lights with index
// if the current light is on (true)
  // pass the index into result
// end iteration
// return result. 

function createLights(n) {
  return new Array(n).fill(false);
}

function toggleLights(lights, n) {
  rounds = 0;

  while (rounds <= n) {
    for (let i = 1; i <= n; i += 1) {
      if (i % rounds === 0) {
        lights[i] = !lights[i]
      }
    }
    rounds += 1
  }

  return lights;
}

function lightsOn(n) {
  let lights = createLights(n);
  let toggled = toggleLights(lights, n)
  
  let result = [];

  toggled.forEach((light, index) => {
    if (light) {
      result.push(index);
    }
  });

  return result;
}


console.log(lightsOn(5)) // [1,4]
// explanation:

// n = 5 -> lights = [off, off, off, off, off]
// first pass: toggle all lights on -> [on, on, on, on, on]
// second pass toggle 2, 4, 6... -> [on, off, on, off, on]
// third pass toggle 3, 6, 9... -> [on, off, off, off, on]
// fourth pass toggle 4, 6, 8... -> [on, off, off, on, on]
// fifth pass toggle 5, 7... -> [on, off, off, on, off]
// lights on -> [1, 4]

console.log(lightsOn(100)) // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

