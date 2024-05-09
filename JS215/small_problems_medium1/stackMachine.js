// problem: 

 // a stack is a list of values that grows and shrinks dynamically. It can be implemented with two arrays that pop and push values.

 // In a stack-and-register language each operation operates on a register which can be thought of as the current value. The register is not part of the stack. 

 // An operation that requires two values pops the topmost item from the stack, operates on the popped value and the register value, and stores the result back in the register. 

 // example:

 // operation: MULT 
 
 // stack [2,3] 

 // register 0

 // stack is mutated, top most (3) value is removed -> [2] 3 is popped

 // it is then multiplied by the resiter 3 * 5 = 15 

 // the resulting value is left in the register: register = 15.

 // write a function that implements a stack-and-registare-based programming language that has the followinf commands:

 // all operations are integer operations (keep in mind when implementing DIV and REMINDER)

 // input: a string. Assume that all inputs are valid programs. 

 // data structure: arrays (for the stack) and a number for the register.


 // notice that the input string contains numbers and alphabetic characters. The numbers (n) represent the values that will be assigned to the register

 //commands:

 // PUSH: pushes the register values onto the stack. Leaves the value in the register.
 // ADD: pops a value from the stack and adds it to the register, storing the result in the register.

 // SUB pops a value from the stack and subtract it from the register, stores the result in the register

 // POP remove the topmost item form the stack (the last value) and place it in the register

 // PRINT print the register value.

 // algorithm:

  // initialize the register and the stack.

  // split the input string into an array of characters.

  // iterate through the array of characters. 
    // if the current value is a number (n) place it into the register. (do not modify the stack).

    // else if the value is a string of alphabetic characters, perform the required operation. 

    // 


  function minilang(command) {
    let register = 0;
    let stack = [];
    let commandArr = command.split(' ');

    commandArr.forEach(token => {
      if (token.match(/\d/)) {
        register = Number.parseInt(token, 10);
      } else if (token === 'PUSH') {
        stack.push(register);
      } else if (token === 'POP') {
        register = stack.pop();
      } else if (token === 'ADD') {
        register += stack.pop();
      } else if (token === 'SUB') {
        register -= stack.pop();
      } else if (token === 'MULT') {
        register *= stack.pop();
      } else if (token === 'DIV') {
        register = Math.floor(register / stack.pop());
      } else if (token === 'REMAINDER') {
        register %= stack.pop();
      } else if (token === 'PRINT') {
        console.log(register);
      }
    });
  }

  minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)