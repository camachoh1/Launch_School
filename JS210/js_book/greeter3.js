let rlSync = require("readline-sync");
let firstName = rlSync.question("Cual es tu nombre compi?");
let lastName = rlSync.question("Y tu apellido, careverga?");

console.log(`hablaaaa, ${firstName + ' ' + lastName}`);