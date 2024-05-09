function loadData() {
  console.log('fetching data...');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('Data Loaded');
      } else {
        reject('Network Error')
      }
    }, 1000);
  }).catch(() => {
    console.error('An error occurred attempting to recover');
    return Promise.resolve('using cached data');
  })
}

loadData().then(console.log)
      