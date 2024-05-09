function isPrime(num) {
  if (num <= 1) {
    return false
  }

  for (let candidate = 2; candidate < num; candidate += 1) {
    if (num % candidate === 0) {
      return false;
    }
  }
  return true;
}



//further exploration

function isPrime(number) {
  if (number <= 1 || (number > 2 && number % 2 === 0)) {
    return false;
  }

  let divisor = 3

  while (divisor < number) {
    if (number % divisor === 0) {
      return false;
    }

    divisor += 2
  }
  return true;
}


console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false