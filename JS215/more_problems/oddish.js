function oddishOrEvenish(num) {
  let n =  String(num).split('')
                      .map(Number)
                      .reduce((sum, num) => { return sum += num},0);

  return n % 2 === 0 ? "evenish" : "oddish";
}

console.log(oddishOrEvenish(43)); //"Oddish"

console.log(oddishOrEvenish(373)); // "Oddish"


console.log(oddishOrEvenish(4433)); // evenish