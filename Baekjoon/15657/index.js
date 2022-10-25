let results = "";

const solution = (origin, current, m) => {
  if (current.length === m) {
    results += `${current.join(" ")}\n`;
    return;
  }

  for (let i = 0; i < origin.length; i++) {
    if (current.length === 0) {
      solution(origin, [origin[i]], m);
    } else {
      if (current[current.length - 1] <= origin[i]) {
        solution(origin, [...current, origin[i]], m);
      }
    }
  }
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");
  const [n, m] = input[0].split(" ").map(Number);
  const sortedArray = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  solution(sortedArray, [], m);
  console.log(results);
};

main();

/**
 * 문제: 백준 - N과 M(8)
 * 테마: 브루트포스(중복순열), 백트래킹
 * 출처: https://www.acmicpc.net/problem/15657
 */
