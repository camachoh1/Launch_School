// problem: Write a function that prints all prime numbers present as substrings in a given string. 

// rules: The input is a string consisting of letters and numbers. 

// a prime number is a number that is divisible only by one and itself. 

// input: a string
// output: an array containing the prime numbers present in the string

// questions:
  // what should the function return if no prime numbers are present in the string. 
  // does the string contain spaces and special characters?
  // what should I return if the string is empty ""
  // is the input always a string?
  // is one argument expected always, what if we get more arguments?
  // what if we receive no arguments?
  // 

  // example:

  // primeNumberPrinter("a4bc2k13d"); // [2, 13]

  // "a4bc2k13d" => numbers = [4, 2, 13] => primes [2, 13]

  // data structures: arrays
  

  // algorithm:

  // create a guard clause that returns [] if the string is empty "".

  // declare a variable numbers and initialize it to the return value of matching the numbers with a regex

  // create helper function is prime
    // receives a number and returns a boolean if the number is prime returns true else false.
    // filter the numbers array using isPrime as callback function and return the filtered array which only contains primes.
  

  function isPrime(num) {
    let isPrime = true;
    if (num <= 1) return false;

    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        isPrime = false;
      }
    }
    return isPrime;
  }

  // the isPrime function checks if the input number is divisible by any number between 1 and itself. If it is, then the number is not prime. This function asumes that the number is prime from the start and discards it if its proven that the number is divisible by any other value other than 1 and itself. 



  function primeNumberPrinter(string) {
    if (string === "") return [];
  
    let numbers = string.match(/-?[0-9]+/g).map(Number);
    return numbers.filter(isPrime);
  }

  
  console.log(primeNumberPrinter("a4bc2k13d")); // [2, 13]
  console.log(primeNumberPrinter("a-13b4c6k1d"));
  console.log(primeNumberPrinter("")); 




 