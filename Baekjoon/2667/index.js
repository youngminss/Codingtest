const solution = (n, graph) => {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const visited = Array(n)
    .fill()
    .map((_) => Array(n).fill(false));
  const result = [];

  const BFS = (i, j) => {
    let groupCount = 1;
    const queue = [[i, j]];
    visited[i][j] = true;

    while (queue.length) {
      const [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];

        if (0 <= nx && nx < n && 0 <= ny && ny < n && graph[nx][ny] && !visited[nx][ny]) {
          queue.push([nx, ny]);
          visited[nx][ny] = true;
          groupCount++;
        }
      }
    }

    result.push(groupCount);
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] && !visited[i][j]) {
        BFS(i, j);
      }
    }
  }

  console.log(result.length);
  console.log(result.sort((a, b) => a - b).join("\n"));
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const [n, ...input] = require("fs").readFileSync(path).toString().trim().split("\n");
  solution(
    +n,
    input.map((line) => line.split("").map(Number)),
  );
};

main();

/**
 * 문제: 백준 - 단지번호붙이기(2667)
 * 테마: 그래프탐색(BFS)
 * 출처: https://www.acmicpc.net/problem/2667
 */
