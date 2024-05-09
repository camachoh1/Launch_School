function basicCallback(callback, num) {
  setTimeout(() => {
    callback(num);
  }, 2000);
}

function multiplyBy2(num) {
  console.log(num * 2);
}

basicCallback(multiplyBy2, 5);