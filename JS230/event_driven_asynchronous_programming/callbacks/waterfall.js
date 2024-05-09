function waterfallOverCallbacks(callbacks, num) {
  let result = num;
  callbacks.forEach(callback => {
    result = callback(result)
  });

  console.log(result);
}

function double(num) {
  return num * 2;
}

waterfallOverCallbacks([double, double, double], 1);
