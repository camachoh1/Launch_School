// my solution uses a nested iterator in order to check whether the keys and values of both objects are the same. 
// the limitation of this example is that I am assuming that every object has its own properties. This could be a problem if any of the objects are sourcing the properties from a prototype. Not only that but if the properties of the two objects were the same but were in different order, this function would fail

// function objectsEqual(obj1, obj2) {
//   for (let key in obj1) {
//     for (let key2 in obj2) {
//       if (key !== key2 && obj1[key] !== obj2[key2]) {
//         return false;
//       }
//     }
//   }

//   return true;
// }


// LS solution checks for own properties of objects.

function objectsEqual(a, b) {
  if (a === b) {
    return true;
  }

  return (keysMatch(a,b) && valuesMatch(a,b));
}

function keysMatch(a, b) {
  const aKeys = Object.getOwnPropertyNames(a).sort();
  const bKeys = Object.getOwnPropertyNames(b).sort();

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  return aKeys.every((key, index) => key === bKeys[index]);
}

function valuesMatch(a, b) {
  const aKeys = Object.getOwnPropertyNames(a).sort();

  return aKeys.every(key => {

    if (typeof a[key] === 'object' && a[key] !== null && typeof b[key] === 'object' && b[key] !== null) {
      return objectsEqual(a[key], b[key]);
    }

    return a[key] === b[key];
  });
}



console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

console.log(objectsEqual({ a: { c: 'foo' } }, { a: { c: 'foo' } })); // true
console.log(objectsEqual({ a: ['foo' ] }, { a: ['foo']})); // true

console.log(objectsEqual({ a: ['foo' ] }, { a: ['baz']})); // false
console.log(objectsEqual({ a: { c: 'foo' } }, { a: { c: 'bar' } })); // false