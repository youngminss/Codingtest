const solution = (w, h, graph) => {
  // [LU, U, RU, L, R, LD, D, RD] 순
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];
  const visited = Array(h)
    .fill()
    .map((_) => Array(w).fill(false));

  const BFS = (startX, startY) => {
    const queue = [[startX, startY]];

    while (queue.length) {
      const [x, y] = queue.shift();

      for (let i = 0; i < 8; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (0 <= nx && nx < h && 0 <= ny && ny < w && graph[nx][ny] && !visited[nx][ny]) {
          queue.push([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
  };

  let result = 0;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (graph[i][j] && !visited[i][j]) {
        BFS(i, j);
        result++;
      }
    }
  }

  console.log(result);
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");

  let [w, h] = [null, null];
  let graph = null;
  let i = 0;

  while (input[i] !== "0 0") {
    [w, h] = input[i].split(" ").map(Number);
    graph = input.slice(i + 1, +h + i + 1).map((line) => line.split(" ").map(Number));
    solution(w, h, graph);
    i = +h + i + 1;
  }
};

main();

/**
 * 문제: 백준 - 섬의 개수(4963)
 * 테마: 그래프 탐색(DFS/BFS)
 * 출처: https://www.acmicpc.net/problem/4963
 */
