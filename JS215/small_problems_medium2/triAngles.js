// problem: write a function that takes the three angles of a triangle as arguments and determines wether the triangle is: righe, acute, obstuse or invalid.

// rules: 

// a valid triangle:
  // the sum of its angles must be exactly 180
  // every angle must be greater than 0

// a right triangle has one angle is exactly 90 degrees

// an acute triangle all three angles are less than 90 degrees

// obstuse: one angle is greater than 90

// assume that all angles have integer values, dont worry about floating point errors. 

// assume that the arguments are in degrees.

// examples: 

// triangle(60,70,50) // "right"
// triangle(30, 90, 60) // "acute"
// triangle(10, 60, 120) // "obstuse"
// triangle(50 50, 50) //  "invalid"
// triangle(0, 60, 90) // "invalid"
// triangle(90,90, 30) // not a valid triangle.
// triangle(120, 120, 10) // not valid
// triangle(30,30,30) // not valid


// data structures: arrays

// I will group all the inputs into an array.
// this will allow me to use some list procesing functions

// algorithm:

// create a helper function that validates the triangles:
  // groups the sides in an array
  // reduce the value of the sides array check if the total sum of the sides is 180.
  // every side must be greater than 0.

// declare a new variable, initialize it to an array containing the three angles provided as arguments. 

// if only one of the sides is 90 degrees, the triangle is right
  // if any value is === 90 return "right
// if any value is > 90
  // return "obstuse"
// if every angle is < 90 degrees "return acute"

function isValidTriangle(side1, side2, side3) {
  let sides = [side1, side2, side3];
  let perimeter = sides.reduce((sum, side) => sum += side, 0);

  return perimeter === 180 && sides.every(side => side > 0);
}

function triangle(side1, side2,side3) {
  if (!isValidTriangle(side1, side2, side3)) return "invalid";
  
  let sides = [side1, side2, side3];

  if (sides.some(side => side === 90)) {
    return "right";
  } else if (sides.every(side => side < 90)) {
    return "acute";
  } else if (sides.some(side => side > 90)) {
    return "obstuse";
  }
}


// my solution extracted the validation logic into a helper function. The main function only checks the types of valid triangles only. 
// LS solution:

function triangle(angle1, angle2, angle3) {
  const angles = [angle1, angle2, angle3];

  if (isValid(angles)) {
    return getTriangleType(angles);
  } else {
    return "invalid";
  }
}

function isValid(angles) {
  const totalAngle = angles.reduce((total, angle) => total + angle);

  const allNonZero = angles.every(angle => angle > 0);

  return totalAngle === 180 && allNonZero;
}

function getTriangleType(angles) {
  if (angles.some(testRightTriangle)) {
    return "right";
  } else if (angles.every(testAcuteTriangle)) {
    return "acute"
  } else {
    return "obstuse";
  }
}

function testRightTriangle(angle) {
  return angle === 90;
}

function testActuteTriangle(angle) {
  return angle < 90;
}

// This solution reads from top to bottom:

// the main function is at the top and calls all of the diferent functions before they were defined. Hoisting allows this.

// What is cool about this solution is thay by structuring the code this way, you can map your entire program from top to bottom.

// the functions are created in the same order in which they are invoked in the main function. 

// unlike my solution, the conditional logic that checks the triangle type, is extracted into its own function. getRightTriangle type function 

// What is also cool is that they are passing the callback functions as vairables into some's invocation. 

// the callback functions contain the logic that defines a right triangle and the acute triangle.



console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"