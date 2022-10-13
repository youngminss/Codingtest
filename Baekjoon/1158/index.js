const solution = (n, k) => {
  const arr = Array(n)
    .fill()
    .map((_, idx) => idx + 1);
  const stack = [];

  let idx = k - 1;
  while (arr.length) {
    stack.push(arr.splice(idx, 1));
    idx = (idx + k - 1) % arr.length;
  }

  console.log(`<${stack.join(", ")}>`);
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const [n, k] = require("fs").readFileSync(path).toString().trim().split(" ");

  solution(+n, +k);
};

main();

/**
 * 문제: 백준 - 요세푸스 문제(1158)
 * 테마: 자료구조(배열)
 * 출처: https://www.acmicpc.net/problem/1158
 */
