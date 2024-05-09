// importing a single function from logit.

// const logIt = require("./logit");

// logIt("hablaaalooo")

// importing multiple functions from logit.
// using object destructuring on line 1 to assign the return value of require into two different variables. 

const {logIt, setPrefix} = require("./logit");
logIt("hablaloo") // >> hablaloo
setPrefix("++ ");
logIt("hablalooo") // ++ hablaloo
