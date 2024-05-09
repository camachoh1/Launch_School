// problem: Write a function that takes a year as an argument and returns the number of 'Friday the 13ths' in that year. 

// you may asume that the year is greater than 1752.

// You may also assume that the same calendar will remain in use for the foreseeable future. 

// inputs: a number representing a year

// output: a number representing the number of 'friday the 13ths' in a year'

// data structures

function fridayThe13ths(year) {
  const thirteenths = [];
  
  for (let i = 0; i < 12; i += 1) {
    thirteenths.push(new Date(year, i, 13));
  }
  console.log(thirteenths);

  return thirteenths.reduce((count, day) => day.getDay() === 5 ? count += 1 : count, 0);
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2