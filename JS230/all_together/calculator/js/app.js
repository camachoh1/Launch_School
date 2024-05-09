// DOM API

// document.addEventListener('DOMContentLoaded', () => {
//   let result = document.querySelector('#result');
//   const form = document.querySelector('form');

//   form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     let number1 = Number(this.querySelector('#number1').value);
//     let number2 = Number(this.querySelector('#number2').value);
//     let operator = this.querySelector('#operator').value;
//     let total;
//     switch(operator) {
//       case "+":
//         total = number1 + number2;
//         break;
//       case "-": 
//         total = number1 - number2;
//         break;
//       case '*':
//         total = number1 * number2;
//         break;
//       case '/':
//         total = number1 / number2;
//         break;
//     }

//     result.textContent = total;
//   });
// });




// jquery

$(() => {
  $('form').on('submit', function (event) {
    event.preventDefault();
    const $number1 = Number($('#number1').val());
    const $number2 = Number($('#number2').val());
    const $operator = $('#operator').val();
    const $result = $('#result');
    let total;

    switch($operator) {
      case "+":
        total = $number1 + $number2;
        break;
      case "-": 
        total = $number1 - $number2;
        break;
      case '*':
        total = $number1 * $number2;
        break;
      case '/':
        total = $number1 / $number2;
      break;
    }

    $result.text(total);
  });
});