function greetings(arr, obj) {
  let keys = Object.keys(obj); 
  console.log(`Hello, ${arr.join(' ')} Nice to have a ${obj[keys[0]]} ${obj[keys[1]]} around` );
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output Hello, John Q Doe! Nice to have a Master Plumber around.