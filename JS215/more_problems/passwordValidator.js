// problem:
// create a function that checks if the given string is a valid password.

// rules: 
// a valid password contains at least 8 characters in length
// contains at least one lowercase letter
// contains at least one digit
// contains at least one special character (@, #,  $, %) are considered epecial for this exercise.

// if the string is valid return true else return false

function passwordValidator(password) {
  return password.length >= 8 && /[a-zA-Z0-9@#$%].*$/.test(password);
}

console.log(passwordValidator("P@sswOrd")); // true
console.log(passwordValidator("passwo3D")); // false
console.log(passwordValidator("P@SSWO3D")); // false
console.log(passwordValidator("P@ss")); // false