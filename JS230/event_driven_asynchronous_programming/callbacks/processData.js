function processData(arr, callback) {
  console.log('processing...')
  setTimeout(() => {
    let double = arr.map(callback);
    console.log(double);
  }, 1000);
}

function double(num) {
  return num * 2;
}

processData([1,2,3], double);