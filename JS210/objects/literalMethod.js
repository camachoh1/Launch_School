const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

// const prop2 = '456';
// myObject['prop2'] = '456';
// myObject[prop2] = '678';

// console.log(myObject[prop2]);
// console.log(myObject.prop2);
// console.log(myObject);



// let variable = '123';
// myObject[variable] = '345';
// console.log(myObject[variable]);

const myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj);
myObj[myFunc()] = 'world!';
console.log(myObj);
