"use strict";
// function greet(person: string, date: Date) {
//   console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }
function showState(state) {
    if (state === "on" || state === 1) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}
console.log(showState("off"));
