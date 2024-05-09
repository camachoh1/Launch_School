function flakyService() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  });
}

let promise = flakyService();

promise
  .then((message) => console.log(message))
  .catch((error) => console.error('la cagaste mi llave'));