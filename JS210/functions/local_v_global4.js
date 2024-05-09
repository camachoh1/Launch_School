function someFunction() {
  myVar = 'This is global'; // there is no keyword during the variable declaration so JS declares it as global. in more precise words JS binds myVar to be a "property" of the global object.
}

someFunction();
console.log(myVar);