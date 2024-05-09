function mockAsyncOp() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('Operation Succeeded');
      } else {
        reject('Operation failed')
      }
    }, 1000)
  });
}

mockAsyncOp()
          .then((resolve) => {console.log(`ahi jue ${resolve}`)})
          .catch((reject) => {console.error(`naaada vale mia ${reject}`)})
          .finally(() => {console.log('Operation Attempted')});