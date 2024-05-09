// callback

// function dowloadFile(callback) {
//   console.log("Downloading file...");

//   setTimeout(() => {
//     callback('Download Complete!');
//   }, 1500);
// }

// function logger(message) {
//   console.log(message);
// }

// dowloadFile(logger);

// promise

function dowloadFilePromise() {
  return new Promise(function(resolve, reject){
    console.log('downloading...')
    setTimeout(() => {
      console.log('download complete');
    }, 1500);
  })
}


let promise = dowloadFilePromise();



