function teddy(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let age = Math.floor(Math.random() * (max - min + 1) + min);

  console.log(`Teddy's is ${age} years old.`);
}

teddy(20, 200);