function isPrime(num) {
  if (num <= 1) {
    return false
  }

  for (let candidate = 2; candidate < num; candidate += 1) {
    if (num % candidate === 0) {
      return false;
    }
  }
  return true;
}


function checkGoldbach(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 === 1) {
    console.log(null);
    return;
  }

  for (let firstNum = 2; firstNum < expectedSum; firstNum += 1) {
    if (firstNum > expectedSum / 2) {
      break
    }

    let secondNum = expectedSum - firstNum;

    if ((isPrime(firstNum) && isPrime(secondNum)) && (firstNum + secondNum === expectedSum)) {
      console.log(firstNum, secondNum);
    }
  }

}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53