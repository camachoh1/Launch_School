function newStack() {
  let stack = [];
  return {
    push(value) {
      stack.push(value);
    }, 
    pop() {
      return stack.pop();
    },
    printStack() {
      stack.forEach(el => console.log(el));
    },
  }
}

let myStack = newStack();

myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)

console.log(myStack.pop())

myStack.printStack();