function flakyService() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  });
}

Promise.allSettled([flakyService(), flakyService(), flakyService()]).then(console.log)