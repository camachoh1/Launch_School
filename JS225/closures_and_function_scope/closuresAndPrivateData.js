// function makeCounterLogger(number) {
//   return function(secNum) {
//     if (number < secNum) {
//       let count = number;
//       while (count <= secNum) {
//         console.log(count);
//         count += 1;
//       }
//     } else if (number > secNum) {
//       let count = number;
//       while (count >= secNum) {
//         console.log(count);
//         count -= 1;
//       }
//     }
//   }
// }

// let countlog = makeCounterLogger(5);
// countlog(2);


// exercise 2

function makeList() {
  let list = [];
  
  return function() {
    if (arguments.length === 0) {
      if (list.length > 0) {
        list.forEach(task => console.log(task));
      } else {
        console.log('The list is empty.');
      }
    } else {
      if (list.includes(arguments[0])) {
        let idx = list.indexOf(arguments[0]);
        list.splice(idx, 1);
        console.log(`${arguments[0]} removed!`);
      } else {
        list.push(arguments[0]);
        console.log(`${arguments[0]} added!`)
      }
    }
  }
}

let list = makeList();
list('make breakfast');
list('read book');
list();
list('make breakfast');
list();
