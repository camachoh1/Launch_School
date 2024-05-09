function fibonacci(n) {
  if (n <= 2) {return 1};
  let first = 1;
  let second = 1;
  let fib;

  for (let i = 3 ; i <= n; i += 1) {
    fib = first + second;
    first = second;
    second = fib;
  }

  return fib
}

console.log(fibonacci(20));
console.log(fibonacci(50));     
console.log(fibonacci(75));  