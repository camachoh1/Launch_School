function startCounter(callback) {
  let count = 1;
  let id = setInterval(() => {
    if (callback(count)) {
      clearInterval(id)
    }
    count += 1
    
  }, 1000);
}

function count(count) {
  console.log(count)
  return count === 5;
}

startCounter(count)