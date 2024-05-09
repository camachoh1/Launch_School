// let input = require('readline-sync');

// console.log('Enter the length of the room in meters: ');
// let length = parseInt(input.prompt(), 10);

// console.log('Enter the width of the room in meters: ');
// let width = parseInt(input.prompt(), 10);

// let areaMeters = (length * width);
// let squareFeet = areaMeters * 10.764;

// console.log(`The area of the room is ${areaMeters.toFixed(2)} meeters (${squareFeet.toFixed(2)} square feet.)`);


let input = require('readline-sync');

function meterToFeet() {
  let length = parseInt(input.question('Enter the length of the room in meters: '), 10);
  let width = parseInt(input.question('Enter the width of the room in meters: '), 10);

  let area = (length * width);
  let squareFeet = area * 10.764;

  console.log(`The area of the room is ${area.toFixed(2)} meeters (${squareFeet.toFixed(2)} square feet.)`);
}

function feetToMeter() {
  let length = parseInt(input.question('Enter the length of the room in feet: '), 10);
  let width = parseInt(input.question('Enter the width of the room in feet: '), 10);

  let area = (length * width);
  let squareFeet = area / 10.764;

  console.log(`The area of the room is ${area.toFixed(2)} meeters (${squareFeet.toFixed(2)} square feet.)`);
}

function converter() {
  let measureUnit = input.question("Which coversion unit would you like to use? (meter or feet): ");

  if (measureUnit === 'm') {
    meterToFeet();
  } else {
    feetToMeter();
  }
}

converter();