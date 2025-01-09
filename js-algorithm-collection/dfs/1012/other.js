const dfs = (graph, n, m, x, y) => {
  if (y <= -1 || y >= n || x <= -1 || x >= m) {
    return false;
  }

  if (graph[y][x] === 1) {
    graph[y][x] = -1;

    dfs(graph, n, m, x, y - 1); // 상
    dfs(graph, n, m, x, y + 1); // 하
    dfs(graph, n, m, x - 1, y); // 좌
    dfs(graph, n, m, x + 1, y); // 우

    return true;
  }

  return false;
};

const solution = (graph, n, m) => {
  let result = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(graph, n, m, j, i)) {
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
    const graph = new Array(n).fill(null).map(() => new Array(m).fill(0));

    for (let j = 0; j < k; j++) {
      const [x, y] = input.shift().split(" ").map(Number);
      graph[y][x] = 1;
    }

    console.log(solution(graph, n, m));
  }
};

main();

/**
 * 문제 : 유기농 배추
 * 테마 : 그래프 탐색, DFS (or BFS)
 * 출처 : https://www.acmicpc.net/problem/1012
 */

/**
 * + 재귀 dfs 로 해결
 * + 주어진 정보를 기반으로, 2차원 graph (배추 심은 곳은 1, 아님 0) 배열을 생성
 * + 좌측 상단(= 0,0)부터 n * m 순회하면서 graph 상으로 1이면(= 배추 심어져있으면), 그 시점으로부터 dfs 돌리기 (= 연결요소 다 찾았으니, result 1 증감)
 */
