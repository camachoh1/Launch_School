var myVar = 'this is global';

function someFunction() {
  var myVar = 'this is local'
}

someFunction();
console.log(myVar);
