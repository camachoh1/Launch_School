"use strict";
// exercise 1: extending interfaces
function getProperty(obj, key) {
    return obj[key];
}
const obj = {
    name: "cole",
    id: 1,
};
console.log(getProperty(obj, "id"));
