// function oddNumbers() {
//   let num = 1;

//   while (num <= 99) {
//     if (num % 2 !== 0) {
//       console.log(num);
//     }
//     num += 1;
//   }
// }

function oddNumbers() {
  for (i = 1; i <= 99; i += 2) {
    console.log(i);
  }
}

oddNumbers();