let newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5)
  }, 1000);
});

newPromise.then((num1) => num1 * 2)
          .then((num2) => num2 + 5)
          .then((num3) => console.log(num3));