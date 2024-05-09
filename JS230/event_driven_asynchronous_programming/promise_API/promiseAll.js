function flakyService() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve('Operation successful');
    } else {
      reject("Operation failed");
    }
  });
}

function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('Data Loaded');
      } else {
        reject('Network Error')
      }
    }, 1000);
  });
}


let promises = [flakyService(), flakyService(), loadData(), loadData()];

Promise.all(promises)
        .then((results) => {console.log(results)})
        .catch(() => {console.error('One or more operations failed')});