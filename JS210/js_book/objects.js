myProtoObj = {
  foo: 1,
  bar: 2,
}

let newObj = Object.create(myProtoObj);
newObj.qux = 3

let objKeys = Object.keys(newObj);
objKeys.forEach(function(key) {
  console.log(key);
}) // qux. only returns the values that belong to the object passed in as argument to Object.keys. 

for (let key in newObj) {
  console.log(key);
} // qux, foo, bar. This outputs newObj own value (qux) and the prototype's (myProtoObj) values foo and bar.
