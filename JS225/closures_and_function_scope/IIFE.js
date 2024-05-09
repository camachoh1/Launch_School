// exercise 4
function countdown(count) {
  (function(num) {
    for(let i = num; i > 0; i -=1) {
      console.log(i);
    }

    console.log('Done!')
  })(count)
};

countdown(7)


// recursive version

function countdown(count) {
  (function recursiveSub(n) {
    console.log(n);

    if (n === 0) {
      console.log('Done!');
    } else {
      recursiveSub(n - 1);
    }
  })(count);
}

countdown(7)