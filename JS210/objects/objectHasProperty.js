let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
}


function objectHasProperty(obj, str) {
  for(key in obj) {
    if (key === str) {
      return true;
    }
  }
  return false;
}

function objectHasProperty(object, propertyName) {
  let keys = Object.keys(object);
  return keys.indexOf(propertyName) !== -1;
}

console.log(objectHasProperty(pets, 'dog'));       // true
console.log(objectHasProperty(pets, 'lizard'));    // false
console.log(objectHasProperty(pets, 'mice'));      // true