function getGrade(...args) {
  let sum = 0;

  for (let i = 0; i < args.length; i += 1) {
    sum += args[i];
  }

  let score = sum / args.length;

  if (score >= 90 && score <= 100) {
    return 'A';
  } else if (score >= 80 && score < 90) {
    return 'B';
  } else if (score >= 70 && score < 80) {
    return 'C';
  } else if (score >= 60 && score < 70) {
    return 'D';
  } else {
    return 'F'
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"