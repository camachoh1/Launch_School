// problem: You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


// explanation:

// if n === 5 the only way to reach step 5 is by either starting from step 3 (n - 2) and move up 2 steps or starting from step 4 (n - 1) and move up one step.

// the same applies for every number of steps before 5

// for example: the only way to reach 4 is by either starting from step 2 (n - 2) and move up two steps or starting at step 3 (n - 1) and move up one step.

// so the way to calculate every possible way to reach step 5 is by calculating the ways in which you can reach every step before it.

// n ways to reach step 5 = number of ways to reach step 4 + number of ways to reach step 3. 

// n ways to reach step 4 = number of ways to reach step 3 + number of ways to reach step 2. and so on...

// this means that in order to calculate the possible ways to reach n step is by calculating (n - 1 step) + (n + 2 steps)

// which pretty much is the same formula as the fibonacci sequence.

// n = (n - 1) + (n - 2)

// I used the procedural approach rathen than the recursive approach:


function climbStairs(n) {
  // If there's only 1 or 2 steps, we return n
  if (n <= 2) {
      return n;
  }

  // Initial two steps
  let oneStepBefore = 2;  // For n=2
  let twoStepsBefore = 1; // For n=1
  let current = 0;

  // Start from the 3rd step since we already know for 1st and 2nd step
  for (let i = 3; i <= n; i+= 1) {
      current = oneStepBefore + twoStepsBefore;
      twoStepsBefore = oneStepBefore;
      oneStepBefore = current;
  }
  
  return current;
}

console.log(climbStairs(1)) // 1
console.log(climbStairs(2)) // 2
console.log(climbStairs(3)) // 3
console.log(climbStairs(4)) // 5
console.log(climbStairs(5)) // 8
