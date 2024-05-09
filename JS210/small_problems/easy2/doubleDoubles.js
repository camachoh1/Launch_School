function equalHalves(str) {
  let firstHalf = '';
  let secondHalf = '';
  let halfPoint = str.length / 2;

  for(let i = 0; i < halfPoint; i += 1) {
    firstHalf += str[i];
  }

  for (let i = halfPoint; i < str.length; i += 1) {
    secondHalf += str[i];
  }
  return firstHalf === secondHalf;
}

function twice(num) {
  let numStr = String(num);

  if (equalHalves(numStr)) {
    return num;
  } else {
    return num * 2;
  }
}

console.log(twice(37)     ===  74);
console.log(twice(44)     ===  44);
console.log(twice(334433) ===  668866);
console.log(twice(444)    ===  888);
console.log(twice(107)    ===  214);
console.log(twice(103103) ===  103103);
console.log(twice(3333)   ===  3333);
console.log(twice(7676)   ===  7676);