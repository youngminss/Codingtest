let results = "";

const solution = (origin, current, m) => {
  if (current.length === m) {
    results += `${current.join(" ")}\n`;
    return;
  }

  for (let i = 0; i < origin.length; i++) {
    solution(origin, [...current, origin[i]], m);
  }
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");
  const [n, m] = input[0].split(" ").map(Number);
  const array = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  solution(array, [], m);
  console.log(results);
};

main();

/**
 * 문제: 백준 - N과 M(7)
 * 테마: 브루트포스(중복순열), 백트래킹
 * 출처: https://www.acmicpc.net/problem/15656
 */
