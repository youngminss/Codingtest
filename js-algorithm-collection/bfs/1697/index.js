const LIMIT = 100_001;

const solution = (n, k) => {
  const visited = new Array(LIMIT).fill(0);
  const queue = [n];

  while (queue.length !== 0) {
    const current = queue.shift();

    if (current === k) {
      return visited[current];
    }

    const jump = current * 2;
    const back = current - 1;
    const next = current + 1;

    for (let nxt of [back, next, jump]) {
      if (nxt < 0 || nxt >= LIMIT) {
        continue;
      }

      if (visited[nxt] === 0) {
        visited[nxt] = visited[current] + 1;
        queue.push(nxt);
      }
    }
  }
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");

  const [n, k] = input[0].split(" ").map(Number);
  const result = solution(n, k);
  console.log(result);
};

main();

/**
 * 문제 : 숨박꼭질
 * 테마 : 그래프 탐색, BFS
 * 출처 : https://www.acmicpc.net/problem/1697
 */
