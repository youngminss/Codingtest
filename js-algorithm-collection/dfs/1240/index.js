const solution = (startV, dist, graph, visited, distance) => {
  if (visited[startV]) {
    return;
  }

  visited[startV] = true;
  distance[startV] = dist;

  for (const [nextV, cost] of graph[startV]) {
    solution(nextV, dist + cost, graph, visited, distance);
  }
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");

  const [n, m] = input.shift().split(" ").map(Number);

  const graph = new Array(n + 1).fill(null).map(() => []);

  for (let i = 0; i < n - 1; i++) {
    const [vX, vY, edge] = input.shift().split(" ").map(Number);
    graph[vX].push([vY, edge]);
    graph[vY].push([vX, edge]);
  }

  let result = [];
  for (let i = 0; i < 1; i++) {
    const [startV, endV] = input.shift().split(" ").map(Number);
    const visited = new Array(n + 1).fill(false);
    const distance = new Array(n + 1).fill(-1);

    solution(startV, 0, graph, visited, distance);
    result.push(distance[endV]);
  }

  console.log(result.join("\n"));
};

main();

/**
 * 문제 : 노드사이의 거리
 * 테마 : 그래프 탐색, DFS
 * 출처 : https://www.acmicpc.net/problem/1240
 */

/**
 * "트리" 구조의 그래프라는 점, 간선의 갯수는 "정점(v)의 수 - 1"
 * 트리에서는 임의의 두 노드 간의 경로가 "오직 1 개" -> 따라서 BFS 가 아닌 DFS 로도 간단히 최단 거리를 계산할 수 있다.
 */
