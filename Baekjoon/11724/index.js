const solution = (n, m, edges) => {
  const visited = Array(n).fill(false);
  const graph = Array(n)
    .fill()
    .map((_) => Array(n).fill(false));
  let result = 0;

  edges.forEach((edge) => {
    const [i, j] = edge.split(" ").map(Number);
    graph[i - 1][j - 1] = true;
    graph[j - 1][i - 1] = true;
  });

  const DFS = (start) => {
    visited[start] = true;

    for (let i = 0; i < n; i++) {
      if (graph[start][i] && !visited[i]) {
        DFS(i);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      DFS(i);
      result++;
    }
  }

  console.log(result);
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");
  const [n, m] = input[0].split(" ").map(Number);
  solution(n, m, input.slice(1));
};

main();

/**
 * 문제: 연결 요소의 개수
 * 테마: 그래프 탐색(DFS)
 * 출처: https://www.acmicpc.net/problem/11724
 */
