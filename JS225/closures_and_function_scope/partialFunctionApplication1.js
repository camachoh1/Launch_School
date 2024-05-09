// function subtract(a,b) {
//   return a - b;
// }

// // function makeSub(num1) {
// //   return function(num2) {
// //     return subtract(num2, num1);
// //   }
// // };


// // const sub4 = makeSub(4);
// // const sub7 = makeSub(7);

// // console.log(sub4(10));
// // console.log(sub4(20));
// // console.log(sub7(10));
// // console.log(sub7(20));

// exercise 2

// function makePartialFunc(func, b) {
//   return function(a) {
//     return func(a, b);
//   }
// }

// function subtract(a,b) {
//   return a - b;
// }

// function multiply(a,b) {
//   return a * b;
// }

// function divide(a, b) {
//   return a / b;
// }

// let multiplyBy5 = makePartialFunc(multiply, 5);
// let divideBy2 = makePartialFunc(divide, 2);

// console.log(multiplyBy5(100));
// console.log(divideBy2(100));

// exercise 3

let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function(students) {
    return rollCall('Math', students);
  }
}

let mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan