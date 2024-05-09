let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(objToCopy, arr) {
  let newObj = {};

  if (!arr) {
    newObj = Object.assign(newObj, objToCopy);
  } else {
    arr.forEach (function(key) {
      newObj[key] = objToCopy[key];
    });
  }

  return newObj;
}

console.log(copyObj(objToCopy, ['bar', 'foo']));
