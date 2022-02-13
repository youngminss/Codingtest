let result;
let visited;

function solution(n, start, graph) {
  result = [];
  visited = new Array(n).fill(false);
  DFS(start);
  console.log(result.join(" "));

  result = [];
  visited = new Array(n).fill(false);
  BFS(start);
  console.log(result.join(" "));

  function DFS(start) {
    visited[start] = true;
    result.push(start + 1);

    for (let i = 0; i < n; i++) {
      if (graph[start][i] && !visited[i]) {
        DFS(i);
      }
    }
  }

  function BFS(start) {
    visited[start] = true;
    let queue = [start];

    while (queue.length !== 0) {
      let popVertex = queue.shift();
      result.push(popVertex + 1);

      for (let i = 0; i < n; i++) {
        if (graph[popVertex][i] && !visited[i]) {
          queue.push(i);
          visited[i] = true;
        }
      }
    }
  }
}

function main() {
  const fs = require("fs");
  let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

  const [n, m, start] = input[0].split(" ").map(Number);
  const vertexs = input.slice(1);
  let graph = new Array(n).fill().map(() => new Array(n).fill(false));

  vertexs.forEach((vertex) => {
    const [i, j] = vertex.split(" ").map(Number);
    graph[i - 1][j - 1] = true;
    graph[j - 1][i - 1] = true;
  });

  solution(n, start - 1, graph);
}

main();

/**
 * 문제: DFS와 BFS (1260)
 * 테마: 그래프 탐색, DFS, BFS
 * 출처: https://www.acmicpc.net/problem/1260
 */
