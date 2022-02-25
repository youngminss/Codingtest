function solution(n) {
  let result = 0;

  for (let i = 2; i <= n; i++) {
    if (i % 5 === 0) result++;
    if (i % 25 === 0) result++;
    if (i % 125 === 0) result++;
  }

  return result;
}

function main() {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const fs = require("fs");
  const input = fs.readFileSync(path).toString().trim();

  const n = Number(input);
  console.log(solution(n));
}
main();

/**
 * 문제: 팩토리얼 0의 개수
 * 테마: 수학
 * 출처: https://www.acmicpc.net/problem/1676
 */
