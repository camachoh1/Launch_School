// let score1 = Number(prompt("Enter Score 1: "));
// let score2 = Number(prompt("Enter Score 2: "));
// let score3 = Number(prompt("Enter Score 3: "));

// let scoresArr = [score1, score2, score3];

// let sum = scoresArr.reduce((accumulator, num) => accumulator + num);

// let average = sum / scoresArr.length;

// let grade = ''
// if (average >= 90) {
//   grade = "A"
// } else if (average >= 70 && average < 90) {
//   grade = 'B'
// } else if (average > 50 && average < 70) {
//   grade = 'C'
// } else {
//   grade = 'F'
// }

// console.log(`Based on the average of your 3 scores your letter grade is ${grade}`);


const SCORES = 5

function getScores() {
  let scoresArr = [];
  let score = 1;
  while (scoresArr.length < SCORES) {
    scoresArr.push(Number(prompt(`Enter score ${score}: `)));
    score += 1;
  }
  return scoresArr
}

function calculateAverage(arr) {
  let sum = arr.reduce((accumulator, num) => accumulator + num);
  let average = sum / arr.length;
  return average
}

function calculateLetterGrade(average) {
  if (average >= 90) {
    grade = "A"
  } else if (average >= 70 && average < 90) {
    grade = 'B'
  } else if (average > 50 && average < 70) {
    grade = 'C'
  } else {
    grade = 'F'
  }
  
  console.log(`Based on the average of your ${SCORES} scores your letter grade is ${grade}`);
}

let scores = getScores();
let average = calculateAverage(scores);
calculateLetterGrade(average);