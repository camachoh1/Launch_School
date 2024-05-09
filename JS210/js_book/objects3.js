// let obj = {
//   foo: { a: "hello", b: "world" },
//   bar: ["example", "mem", null, { xyz: 6 }, 88],
//   qux: [4, 8, 12]
// };

// obj.bar[3].xyz = 606

// console.log(obj);


function foo(bar) {
  console.log(bar());
}

foo(function() {return "Welcome"});    // Should print 'Welcome'
foo(function() {return 3.1415});    // Should print 3.1415
foo(function() {return [1,2,3]});    // Should print [1, 2, 3]