let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

const calculate = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => (a < 0 ? -Math.floor(Math.abs(a) / b) : Math.floor(a / b)),
];

const solution = (count, size, numbers, operations, result) => {
  if (count === size - 1) {
    max = Math.max(max, result);
    min = Math.min(min, result);
  } else {
    for (let i = 0; i < 4; i++) {
      if (!operations[i]) continue;

      operations[i]--;
      solution(count + 1, size, numbers, operations, calculate[i](result, numbers[count + 1]));
      operations[i]++;
    }
  }
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");
  const n = +input[0];
  const numbers = input[1].split(" ").map(Number);
  const operations = input[2].split(" ").map(Number);

  solution(0, n, numbers, operations, numbers[0]);
  console.log([max, min].join("\n"));
};

main();

/**
 * 문제: 백준 - 연산자 끼워넣기(14888)
 * 테마: 브루트포스, 백트래킹
 * 출처: https://www.acmicpc.net/problem/14888
 */
