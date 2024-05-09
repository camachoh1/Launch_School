function mysteryMath(operation) {
return operation.replace(/[+\-*\/]/, '?'); // the - was scaped and the / too just for consistency. It is not necessary in JS.
}

console.log(mysteryMath('4 + 3 - 5 = 2'));
// -> '4 ? 3 - 5 = 2'

console.log(mysteryMath('(4 * 3 + 2) / 7 - 1 = 1'));
// -> '(4 ? 3 + 2) / 7 - 1 = 1'