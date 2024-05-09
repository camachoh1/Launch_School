function startCounting() {
  let num = 0;
  let id = setInterval(() => {
    console.log(num += 1)
  }, 1000);
  return id;
}

let id = startCounting()
clearInterval(id);