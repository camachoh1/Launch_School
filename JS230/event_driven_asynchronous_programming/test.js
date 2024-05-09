// function logger(num) {
//   console.log(num);
// }

// function delayLog() {
//   for (let num = 1; num <= 10; num += 1) {
//     setTimeout(() => {
//       logger(num)
//     }, num * 1000);
//   }
// }

// delayLog()

// setTimeout(() => {  // 1
//   console.log('Once'); // 5
// }, 1000);

// setTimeout(() => { // 2
//   console.log('upon'); // 7
// }, 3000);

// setTimeout(() => { // 3
//   console.log('a');
// }, 2000); // 6 

// setTimeout(() => { // 4
//   console.log('time');
// }, 4000); // 8


// function q() {console.log('q')}
// function d() {console.log('d')}
// function n() {console.log('n')}
// function z() {console.log('z')}
// function s() {console.log('s')}
// function f() {console.log('f')}
// function g() {console.log('g')}

// setTimeout(() => {  
//   setTimeout(() => {
//     q();
//   }, 15);

//   d(); // 3

//   setTimeout(() => {
//     n(); // 5
//   }, 5);

//   z(); // 4
// }, 10);

// setTimeout(() => { 
//   s(); // 6
// }, 20);

// setTimeout(() => { 
//   f(); // 2
// });

// g(); // 1

// function tuMae() {
//   console.log('tu mae!')
// }

// function afterNseconds(time, callback) {
//   setTimeout(callback, time * 1000);
// }

// afterNseconds(2, tuMae);

// function stopCounting(id) {
//   clearInterval(id);
// }
// function startcounting() {
//   let num = 0;
//   let id = setInterval(() => {
//     console.log(num);
//     num += 1;
//   }, 1000);

//   return id;
// }

// startcounting();

// stopCounting(id);

