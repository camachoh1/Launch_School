// problem:

// write a function that takes the lengths of the three side of a triangle and calculates what kind of triangle it is.

// input: 3 numbers representing each side of the triangle. Floating numbers are also valid numbers

// output: a string (equilateral, isosceles, scalene, invalid)


// rules: 

// if all three sides are equal -> equilateral

// if two sides are of equal length while the tird is different -> isosceles 

// if all three sides are of different lengths -> scalene

// if any side is === 0 or the sum of the smaller sides is smaller than the longest side -> invalid

// examples:

// assuming the input is only numbers or floating number values 

// triangle(2,2,2) // equilateral

// triangle(3,3, 1) // isosceles



// triangle(0, 3, 4) // invalid

// triangle(0,0,0) // invalid

// triangle(4,5,6) // scalene

// triangle(-3, 4, 4) // invalid

// triangle(1,1,3) // invalid

// data structures: arrays 

// group the three sides in an array and use list processing methods to check each value.

// an object in order to keep track of the count of each element in the sides array

// algorithm

// create helper function to check for a valid triangle:
  // the function receives an array of sides.
  // sorts the arrays of sides in ascendin order. (checks wether the sum of sides[0] and side[1] is > side[2])
  // checks wether every side is > 0.
  // if its not valid, return invalid
  
  // initialize a counter object

  // iterate through the sides array

  // count each element in the array adding the element as key the count as value
    // if the current value is not in the object initialize it to 0
    // if it exist add one to the count

    // check the final count object
    // if any value has a count of 3 return equilateral
    // if any value has a count of 2 return isosceles
    // if all values have a count of 1 return scalene


    function isValidTriangle(sides) {
      let sortedArr = sides.sort();
      let smallerSum = sortedArr[0] + sortedArr[1];

      return smallerSum > sortedArr[2] && sortedArr.every(val => val > 0);
    }

    function countSides(sides) {
      let countObj = {};

      sides.forEach(side => {
        if (!countObj[side]) {
          countObj[side] = 0;
        } 
        countObj[side] += 1;
      });

      return Object.values(countObj);
    }

    function triangle(side1, side2, side3) {
      if (!isValidTriangle([side1, side2, side3])) {
        return 'invalid'
      }
      let count = countSides([side1, side2,side3]);
      
      if (count.every(count => count === 3)) {
        return 'equilateral';
      } else if (count.every(count => count === 1)) {
        return 'escalene';
      } else {
        return 'isosceles';
      }
    }


    // console.log(triangle(3, 3, 3));        // "equilateral"
    // console.log(triangle(3, 3, 1.5));      // "isosceles"
    // console.log(triangle(3, 4, 5));        // "scalene"
    // console.log(triangle(0, 3, 3));        // "invalid"
    // console.log(triangle(3, 1, 1));        // "invalid"


console.log(triangle(2,2,2)); // equilateral
console.log(triangle(3,3, 1)); // isosceles
console.log(triangle(0, 3, 4)); // invalid
console.log(triangle(0,0,0)); // invalid
console.log(triangle(4,5,6)); // scalene
console.log(triangle(-3, 4, 4)); // invalid
console.log(triangle(1,1,3)); // invalid