function downloadFile(callback) {
  console.log('Downloading file...')
  setTimeout(() => {
    callback();
  }, 1500)
}

function downloadComplete() {
  console.log('Download Complete!');
}

downloadFile(downloadComplete);