// Using OLOO and IIFEs to make `data` private.  

// let Stack; 

// function makeStack() {
//   Stack = (function() {
//     let data = [];
//       return {
//       push(value) {
//         data.push(value);
//         return this
//       },
  
//       pop() {
//         return data.pop();
//       },
  
//       print() {
//         console.log(data);
//       }
//     }
//   })();
// }

// makeStack();
// let stackInstance = Object.create(Stack);
// console.log(Stack.isPrototypeOf(stackInstance))

// stackInstance.print(); // [] print behaviour accessible through the [[Prototype]] Stack
// stackInstance.push(3); // push behaviour accessible through [[Prototype]]
// stackInstance.push(20);
// stackInstance.push(1);
// stackInstance.pop();
// stackInstance.print() // [3, 20]
// console.log(stackInstance.data) // undefined data is private

// makeStack();
// let stackInstance2 = Object.create(Stack); // 
// console.log(Stack.isPrototypeOf(stackInstance2)) // Stack is prototype 
// stackInstance2.print() // [] different instance, different data prop



