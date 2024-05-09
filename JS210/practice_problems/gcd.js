function gcd(num1, num2) {
  let results = [];
  let largestNum = num1 >= num2 ? num1 : num2;
  let smallestNum = num1 <= num2 ? num1 : num2;
  let reminder = largestNum % smallestNum;
  let result = [];

  while (reminder > 0) {
    reminder = largestNum % smallestNum;
    largestNum = smallestNum;
    smallestNum = reminder;
    result.push(reminder);
  }
  return result;
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1


// ls solution

function gcd(num1, num2) {
  var temp;

  while (num2 !== 0) {
    temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return num1
}

