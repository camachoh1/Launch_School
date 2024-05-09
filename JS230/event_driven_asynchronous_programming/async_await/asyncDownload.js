// function dowloadFilePromise() {
//   return new Promise(function(resolve, reject){
//     console.log('downloading...')
//     setTimeout(() => {
//       console.log('download complete');
//     }, 1500);
//   })
// }


// let promise = dowloadFilePromise();


async function downloadFileAsync() {
  try {
    await new Promise((resolve, reject) => {
      
    })
  } catch(error) {
    console.error(error);
  }
}

downloadFileAsync();