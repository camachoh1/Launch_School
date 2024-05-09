// problem:

// write a function that receives a string and returns true if the input is a valid phone number. 

// rules:
  // a valid phone number has the following format: (nnn) nnn-nnnn
  // the function should return false if the phone number does not follow the format above.

// data structures:
  // stirings

// algorithm: 
  // develop a regula expression that follows the following patter:
  
  // the string must start with three digits in brackets followed by a space
  // three digits followed by a dash - 
  // end with four digits 

  function validPhoneNumber(phoneNumber) {
    return /^\(\d{3}\) \d{3}-\d{4}$/.test(phoneNumber);
  }

  console.log(validPhoneNumber("(123) 456-7890"));
  console.log(validPhoneNumber("(1111)555 2345"));
  console.log(validPhoneNumber("(098) 123 4567"));