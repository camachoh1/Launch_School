function fetchData() {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 1) {
        resolve('Data Loaded');
      } else {
        reject('Network Error');
      }
    }, 1000);
  });
}

async function loadData() {
  try {
    let promise = await fetchData()
    console.log(promise);
  } catch (error) {
    console.log(error);
  }
}

loadData()