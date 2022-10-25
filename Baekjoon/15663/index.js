let results = [];

const solution = (origin, current, visited, m) => {
  if (current.length === m && !results.includes(current.join(" "))) {
    results.push(current.join(" "));
    return;
  }

  for (let i = 0; i < origin.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      solution(origin, [...current, origin[i]], visited, m);
      visited[i] = false;
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
  const visited = Array(n).fill(false);

  solution(sortedArray, [], visited, m);
  console.log(results.join("\n"));
};

main();

/**
 * 문제: 백준 - N과 M(9)
 * 테마: 백트래킹
 * 출처: https://www.acmicpc.net/problem/15663
 */
