// logValue();

// function logValue() {
//   console.log('hello world');
// }

// var logValue = 'foo';

// function logValue() {
//   console.log('Hello, world!');
// }

// console.log(typeof logValue);


// function logValue() {
//   console.log('Hello, world!');
// }
// var logValue;

// logValue = 'foo' // this reassignment overwrites the value originally assigned to  `logValue`


// console.log(typeof logValue);


// var foo = 1;
// function bar() {
//   var foo = 2;
//   var qux = 5;
//   return qux;
// }

console.log(foo());

function foo() {}
console.log(typeof bar());
console.log(qux)

console.log(foo());

function foo() {
  console.log('Waiting for bar!');
}

function foo() {
  console.log(foo);
  function bar() {
    console.log('bar again');
  }

  bar();

  function bar() {
    console.log('bar again and again');
  }
}


