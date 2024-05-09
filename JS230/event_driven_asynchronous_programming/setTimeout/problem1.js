const delayLog = function() {
  let num = 1;

  for (let i = num; i <= 10; i += 1) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  
}

delayLog()