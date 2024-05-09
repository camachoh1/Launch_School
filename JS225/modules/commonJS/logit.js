// exporting a single function from logit.

// function logIt(string) {
//   console.log(string);
// }

// module.exports = logIt;

// exporting multiple functions and variables:

let prefix = '>>';

function logIt(string) {
  console.log(`${prefix}${string}`);
}

function setPrefix(newPrefix) {
  prefix = newPrefix;
}

module.exports = {
  logIt,
  setPrefix,
};