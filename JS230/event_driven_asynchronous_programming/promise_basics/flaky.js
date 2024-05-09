new Promise(function(resolve, reject) {
  let operations = ['Operation Successful', 'Operation Failed'];
  let randomIdx = Math.floor(Math.random() * 2);
  let msg = operations[randomIdx]
  if (msg === 'Operation Successful') {
    resolve(msg);
  } else {
    reject(msg);
  }
})
  .then(function(resolve) {
    console.log(resolve);
  })
  .catch(function(reject) {
    console.log(reject);
  });