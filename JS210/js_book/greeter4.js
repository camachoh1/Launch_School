function getName(prompt) {
  let rlSync = require("readline-sync");
  let input = rlSync.question(prompt)
  return input
}

let firstName = getName("Cual es tu nombre compi?");
let lastName = getName("Y tu apellido, careverga?");
console.log(`hablaaaa, ${firstName + ' ' + lastName}`);