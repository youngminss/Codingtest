const solution = (n, testCases) => {
  const dp = [0, 1, 2, 4];

  for (let i = 4; i <= 10; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  testCases.forEach((testCase) => {
    console.log(dp[testCase]);
  });
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const [n, ...input] = require("fs").readFileSync(path).toString().trim().split("\n").map(Number);

  solution(n, input);
};

main();

/**
 * 문제: 백준 - 1, 2, 3 더하기
 * 테마: DP
 * 출처: https://www.acmicpc.net/problem/9095
 */
