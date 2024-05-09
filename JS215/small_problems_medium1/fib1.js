//problem: write a function that calculates and return the index of the first fibonacci number that has the number of digits specified by the argument. 

function findFibonacciIndexByLength(n) {
  let n1 = 1n;
  let n2 = 1n; 
  let index = 2n;
  let nextN;
  
  do {
    nextN = n1 + n2;
    index += 1n
    n1 = n2;
    n2 = nextN;
  } while (String(nextN).length < n)

  return index;
}

console.log(findFibonacciIndexByLength(2n) === 7n);
console.log(findFibonacciIndexByLength(3n) === 12n);   
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.