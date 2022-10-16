const solution = (n, v, infos) => {
  let graph = Array(n)
    .fill()
    .map((_) => Array(n).fill(0));

  infos.forEach((info) => {
    const [start, end] = info.split(" ");
    graph[+start - 1][+end - 1] = 1;
    graph[+end - 1][+start - 1] = 1;
  });

  const BFS = (graph, start) => {
    visited[start] = true;
    const queue = [start];

    while (queue.length) {
      const popLeft = queue.shift();

      for (let i = 0; i < n; i++) {
        if (graph[popLeft][i] && !visited[i]) {
          queue.push(i);
          result.push(i);
          visited[i] = true;
        }
      }
    }
  };

  const DFS = (graph, start) => {
    result.push(start);
    visited[start] = true;

    for (let i = 0; i < n; i++) {
      if (graph[start][i] && !visited[i]) {
        DFS(graph, i);
      }
    }
  };

  let result = [v - 1];
  let visited = Array(n).fill(false);
  DFS(graph, v - 1);
  console.log(result.map((item) => item + 1).join(" "));

  result = [v - 1];
  visited = Array(n).fill(false);
  BFS(graph, v - 1);
  console.log(result.map((item) => item + 1).join(" "));
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");
  const [n, _, v] = input[0].split(" ").map(Number);
  solution(n, v, input.slice(1));
};

main();

/**
 * 문제: DFS와 BFS
 * 테마: 그래프 탐색(DFS/BFS)
 * 출처: https://www.acmicpc.net/problem/1260
 */
