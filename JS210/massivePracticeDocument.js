// for...of loop puzzle
// let num = 0
// console.log(num);
// const numbers = [1,2,3,4,5];

// for (num of numbers) {
//   console.log(num)
// }

// console.log(num); the value logged to the screen will be 5. due to an implicit assignment which takes place as part of the for...of loop. the variable `num` is assigned the values of the element in the `numbers` array. For each iteration of the loop, the next element from the numbers array is assigned to the num variable, and the code block inside the loop is executed. This assignment takes place implicitly as part of the loop's mechanism.

//------------

//hoisting exercise 1

// function foo(){
//   function bar() {
//       return 3;
//   }
//   return bar();
//   function bar() {
//       return 8;
//   }
// }
// console.log(foo());

// ANSWER: 
// Due to hoisting, both `bar` functions are moved to their top scope. When we have multiple function declaration with the same name, the later ones will overwrite the earlier ones. So the code above returns 8. Conceptually speaking, the code above looks like this. 

// function foo() {
//     function bar() {
//       return 3;
//     }

//     function bar() {
//       return 8;
//     }

//     return bar(); // at this point, the second 'bar' function has overwritten the first one
// }

// console.log(foo());  // logs 8

//----------------

// function foo() {
//   var bar = function () {
//     return 3;
//   }
//   return bar();
//   var bar = function () {
//     return 8;
//   }
// }

// console.log(foo()); // logs 3

// // ANSWER:
// // The code above returns 3 because of variable hoisting and function expressions work in JavaScript. In the code above `bar` is a variable that is assigned to a function expression. unlike function declarations, function expressions are not hoisted. however variable declarations are hoisted which means that both `var` variables are hoisted to the top of their scope but their assignment to function expressions remain in place. 
// function foo() {
//   var bar = undefined;
//   var bar = undefined;

//   bar = function() {
//     return 3;
//   }
//   return bar();

//   //second function expression is unreachable because of the return statement above
//   bar = function () {
//     return 8;
//   }
// }
//-----------


// console.log(foo());

// function foo() {
//   var bar = function() {
//     return 3;
//   };

//   return bar();

//   var bar = function () {
//     return 8;
//   };
// }

// ANSWER: 3 is logged to the console. 

// In this example, the `foo` function is defined using a function declaration, which gets hoisted to the top of its scope. As a result, it can be called before its definition in the code.

// Within the `foo` function, there are two variable declarations using `var bar`. These declarations are hoisted to the top of their ScriptProcessorNode, but their assignments to function expressions remain in AnimationPlaybackEvent. 

// The function `foo` executes the first function expression assigned to `bar`, which returns 3. Immediately after, the `return bar();` statement is executed, which returns the value 3 from the `foo` function. 

// The second function expression assigned to `bar` is never executed because the code is unreachable due to the `return` statement above it.

//--------------

// function foo() {
//   return bar();
//   var bar = function () {
//     return 3;
//   };

//   var bar = function() {
//     return 8
//   };
// }

// console.log(foo());
//ANSWER: "TypeError bar is not a function" is logged. 

// In this example, within the `foo` function, there are two variable declarations using `var bar`. These declarations are hoisted to the top of their scope, but their assignments to function expression remain in place.

// When the `foo` function is executed, the `return bar();` statement is called before any of the function expressions are assigned to `bar`. At this point, `bar` is still `undefined` due to variable hoisting. When the code tries to invoke `undefined` as a function, it results in a TypeError "bar is not a function."


// function add(first, second) {
//   return first + second;
// }

// function makeAdder(firstNumber) {
//   return function(secondNumber) {
//     return add(firstNumber, secondNumber);
//   };
// }

// let addFive = makeAdder(5);
// let addTen = makeAdder(10);

// console.log(addFive());
// console.log(addTen());

// // console.log(addFive(3));  // 8
// // console.log(addFive(55)); // 60
// // console.log(addTen(3));   // 13
// // console.log(addTen(55));  // 65

// function makeLogger(indentifier) {
//   return function(msg) {
//     console.log(indentifier, msg);
//   }
// }

// let logVal = makeLogger('habla');

// console.log(logVal('mi llave'));

//------------------------------------------------------------

// Syntactical sugar exercises:

// function abc(foo, bar, qux) {
//   return {
//     foo,
//     bar,
//     qux,
//   };
// }

// obj = abc('habla', 3, 1);

// let {foo, bar, qux} = obj;

// console.log(foo, bar, qux);

// function abc(foo, bar, qux) {
//   return {
//     foo: foo,
//     bar: bar,
//     qux: qux,
//   };
// }

// function foo() {
//   return {
//     bar: function() {
//       console.log("bar");
//     },
//     qux: function(arg1) {
//       console.log("qux");
//       console.log(arg1);
//     },
//     baz: function(arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     }
//   }
// }

// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     quz: three,
//   };
// }


// let baz = foo.baz;
// let bar = foo.bar;
// let qux = foo.qux;

// function foo([one, , three]) {
//   return [
//     three,
//     5,
//     one,
//   ];
// }

// let array = [1,2,3];
// let result = foo(array);
// let [bar, qux, baz] = result;

// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }

// let array = [2,3,5];
// let result = product(array[0], array[1], array[2]);

// function product() {
//   let numbers = Array.from(arguments);
//   return args.reduce((total, number) => total * number);
// }

// let result = product(2,3,4,5);

// function push(arr, element) {
//   arr[arr.length] = element;
//   return arr.length;
// }

// let count = [0, 1, 2];
// console.log(push(count, 3));         // 4
// console.log(count);                  // [ 0, 1, 2, 3 ]

// function pop(arr) {
//   let last = arr[arr.length - 1];
//   arr.length = arr.length - 1;
//   return last;
// }

// let count = [1, 2, 3];
// console.log(pop(count));             // 3
// console.log(count);                  // [ 1, 2 ]

// function unshift(arr, val) {
//   for (let i = arr.length; i > 0; i -= 1) {
//     arr[i] = arr[i - 1];
//   }

//   console.log(arr);
// }

// unshift([1,2,3], 0);

// function indexOf(arr, val) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === val) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(indexOf([1, 2, 3, 3], 3));         // 2
// console.log(indexOf([1, 2, 3], 4));            // -1

// function lastIndexOf(arr, val) {
//   let lastIndex = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === val) {
//       lastIndex = i;
//     }
//   }

//   return lastIndex ? lastIndex : -1;
// }

// console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
// console.log(lastIndexOf([1, 2, 3], 4));        // -1

// function arraysEqual(arr1, arr2) {
//   let longest = arr1.length >= arr2.length ? arr1 : arr2
//   let count  = 0;
//   for (let i = 0; i < longest.length; i += 1) {
//     if (arr1[i] === arr2[i]) {
//       count += 1;
//     }
//   }

//   return count === longest.length;
// }

// console.log(arraysEqual([1], [1]));                               // true
// console.log(arraysEqual([1], [2]));                               // false
// console.log(arraysEqual([1, 2], [1, 2, 3]));                      // false
// console.log(arraysEqual([1, 'hi', true], [1, 'hi', true]));       // true
// console.log(arraysEqual([1, 'hi', true], [1, 'hi', false]));      // false
// console.log(arraysEqual([1, 'hi', true], [1, 'hello', true]));    // false
// console.log(arraysEqual([1, 'hi', true], [2, 'hi', true]));       // false


// console.log(foo());

// function foo() {
//   console.log('Waiting for bar!');
// }

// function foo() {
//   console.log(foo);
//   function bar() {
//     console.log('bar again');
//   }

//   bar();

//   function bar() {
//     console.log('bar again and again');
//   }
// }


//***spread syntax */
// function add3(item1, item2, item3) {
// 	return item1 + item2 + item3;
// }

// let foo = [3,7,11];
// console.log(add3(...foo));

//** rest syntax */

// let foo = [3,2,3];
// let [ bar, ...otherStuff] = foo;
// console.log(bar);
// console.log(typeof otherStuff);




// function aFunction(first, middle1, middle2, middle3, last) {
//   return {
//     first,
//     last,
//     middle: [middle1, middle2, middle3].sort(),
//   };
// }

// let arr = ['a','s','r','t','e'];
// let {first, last, middle} = qux(...arr);


// function foo() {
//   function fun() {
//     var a = 1;
//   }

//   console.log(a); // undefined
// }

// foo();



// function copyObj(obj, arr) {
//   let result = {};
  
//   if (arr) {
//     arr.forEach(key => result[key] = obj[key]);
//   } else {
//     Object.assign(result, obj);
//   }

//   return result;
// }

// let objToCopy = {
//   foo: 1,
//   bar: 2,
//   qux: 3,
// };

// let newObj = copyObj(objToCopy);
// console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

// let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
// console.log(newObj2);       // => { foo: 1, qux: 3 }

// let newObj3 = copyObj(objToCopy, [ 'bar' ]);
// console.log(newObj3);       // => { bar: 2 }

// function isNotANumber(value) {
//   return String(value) === 'NaN'
// }

// console.log(isNotANumber(-0 / 0));


// function greetings(arr, obj) {
//   let fullName = arr.join(' ');
//   let occupation = Object.values(obj).join(' ');

//   console.log(`Hello, ${fullName}! Nice to have a ${occupation} around`);
// }


// greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// function repeatedCharacters(str) {
//   let strArr = str.toLowerCase().split('');
//   let charCount = {};

//   strArr.forEach(char => {
//     if (!charCount[char]) {
//       charCount[char] = 0;
//     }
//     charCount[char] += 1;
//   });

//   for (prop in charCount) {
//     if (charCount[prop] === 1) {
//       delete charCount[prop];
//     }
//   }

//   return charCount;
// }


// console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
// console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
// console.log(repeatedCharacters('Pet'));            // {}
// console.log(repeatedCharacters('Paper'));          // { p: 2 }
// console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }

