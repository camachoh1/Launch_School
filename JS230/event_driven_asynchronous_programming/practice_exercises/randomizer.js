// function randomizer(...callbacks) {
//   if (callbacks.length < 1) return;

//   let maxTime = callbacks.length * 2;
  
//   for (let secs = 1; secs <= maxTime; secs += 1) {
//     let randomIdx = Math.floor(Math.random() * callbacks.length);

//     setTimeout(() => {
//       console.log(secs)
//       if (Math.random() > 0.5) {
//         callbacks[randomIdx]();
//       }
//     }, secs * 1000);
//   }
// } 

// my solution has a more complex random behaviour. It may or may not execute the callbacks. It may or may not execute one call back multiple times.

// here determining the random execution and the timer are both being placed inside a for loop. 

// LS solution

function randomizer(...callbacks) {
  if (callbacks.length < 1) {
    return;
  }

  const secondsEnd = 2 * callbacks.length;
  let secondsElapsed = 0;

  const timeLogger = setInterval(() => {
    secondsElapsed += 1;
    console.log(secondsElapsed);

    if (secondsElapsed >= secondsEnd) {
      clearInterval(timeLogger);
    }
  }, 1000);

  callbacks.forEach(callback => {
    const executeTime = Math.floor(Math.random() * secondsEnd * 1000);
    setTimeout(callback, executeTime)
  })
}

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

randomizer(callback1, callback2, callback3);