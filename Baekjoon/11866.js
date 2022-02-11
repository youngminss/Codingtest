function solution(n, k) {
  let result = [];
  let arr = new Array(n).fill().map((_, i) => i + 1);

  let i = 0;
  while (result.length < n) {
    i = (i + (k - 1)) % arr.length;
    result.push(arr.splice(i, 1));
  }

  return `<${result.join(", ")}>`;
}

function main() {
  const fs = require("fs");
  let input = fs.readFileSync("./input.txt").toString().trim().split(" ");

  const [n, k] = input.map(Number);

  console.log(solution(n, k));
}
main();

/**
 * 문제: 요세푸스 문제 0 (11866)
 * 테마: 구현
 * 출처: https://www.acmicpc.net/problem/11866
 */
