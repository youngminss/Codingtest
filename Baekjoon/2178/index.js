const solution = (n, m, graph) => {
  const bfs = () => {
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    const visited = Array(n)
      .fill()
      .map((_) => Array(m).fill(false));
    const queue = [[0, 0]];
    visited[0][0] = true;

    while (queue.length) {
      const [x, y] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];

        if (
          0 <= nx &&
          nx < n &&
          0 <= ny &&
          ny < m &&
          graph[nx][ny] &&
          graph[nx][ny] <= graph[x][y] &&
          !visited[nx][ny]
        ) {
          graph[nx][ny] = graph[x][y] + 1;
          queue.push([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
  };

  bfs();
  console.log(graph[n - 1][m - 1]);
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");
  const [n, m] = input[0].split(" ").map(Number);
  solution(
    n,
    m,
    input.slice(1).map((line) => line.split("").map(Number)),
  );
};

main();

/**
 * 문제: 백준 - 미로탐색(2178)
 * 테마: 그래프 탐색(DFS/BFS)
 * 출처: https://www.acmicpc.net/problem/2178
 */
