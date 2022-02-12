function solution(t, numbers) {
  let zeroCount = [1, 0, 1];
  let oneCount = [0, 1, 1];

  for (let i = 3; i <= 40; i++) {
    zeroCount[i] = zeroCount[i - 2] + zeroCount[i - 1];
    oneCount[i] = oneCount[i - 2] + oneCount[i - 1];
  }

  numbers.forEach((number) => console.log(`${zeroCount[number]} ${oneCount[number]}`));
}

function main() {
  const fs = require("fs");
  let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

  const t = input[0];
  const numbers = input.slice(1).map(Number);

  solution(t, numbers);
}
main();

/**
 * 문제: 피보나치 함수 (1003)
 * 테마: DP
 * 출처: https://www.acmicpc.net/problem/1003
 */
