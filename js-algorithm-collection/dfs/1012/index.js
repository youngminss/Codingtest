const solution = (graph, visited, n, m) => {
  let result = 0;
  const stack = [];

  const positionMap = {
    0: [-1, 0],
    1: [1, 0],
    2: [0, -1],
    3: [0, 1],
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 1 && visited[i][j] === false) {
        visited[i][j] = true;
        stack.push([i, j]);

        while (stack.length !== 0) {
          const [cy, cx] = stack.pop();

          for (let i = 0; i < 4; i++) {
            const [dy, dx] = positionMap[i];
            const nx = cx + dx;
            const ny = cy + dy;

            if (
              0 <= nx &&
              nx < m &&
              0 <= ny &&
              ny < n &&
              graph[ny][nx] === 1 &&
              visited[ny][nx] === false
            ) {
              visited[ny][nx] = true;
              stack.push([ny, nx]);
            }
          }
        }

        result = result + 1;
      }
    }
  }

  return result;
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");

  const n = Number(input.shift());

  for (let i = 0; i < n; i++) {
    const [m, n, k] = input.shift().split(" ").map(Number);
    const visited = new Array(n).fill(null).map(() => new Array(m).fill(false));
    const graph = new Array(n).fill(null).map(() => new Array(m).fill(0));

    for (let j = 0; j < k; j++) {
      const [x, y] = input.shift().split(" ").map(Number);
      graph[y][x] = 1;
    }

    console.log(solution(graph, visited, n, m));
  }
};

main();

/**
 * 문제 : 유기농 배추
 * 테마 : 그래프 탐색, DFS (or BFS)
 * 출처 : https://www.acmicpc.net/problem/1012
 */

/**
 * + 주어진 정보를 기반으로, 2차원 graph (배추 심은 곳은 1, 아님 0), visited (초기 false) 배열을 생성
 * + n * m 순회하면서, graph 상으로 1이면(= 배추 심어져있으면), 그 시점으로부터 dfs 돌리기 (= 연결요소 다 찾았으니, result 1 증감)
 */
