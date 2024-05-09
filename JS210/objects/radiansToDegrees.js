function radiansToDegrees(radians) {
  let degrees = (radians * 180) / Math.PI
  return Math.round(degrees);
}

// using a function expression with an arrow function:

let radiansToDegrees = radians => Math.round((radians * 180) / Math.PI); 

let rad = 0.785;

console.log(radiansToDegrees(rad));