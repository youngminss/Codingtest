function solution(n, graph) {
  let result = 0;
  let visited = new Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      bfs(i);
      result++;
    }
  }

  return result;

  function bfs(start) {
    let queue = [start];

    while (queue.length !== 0) {
      const popV = queue.shift();

      for (let i = 0; i < graph[popV].length; i++) {
        if (!visited[i] && graph[popV][i]) {
          visited[i] = true;
          queue.push(i);
        }
      }
    }
  }
}

function main() {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const fs = require("fs");
  const input = fs.readFileSync(path).toString().trim().split("\n");

  const [n, m] = input[0].split(" ").map(Number);
  const edges = input.slice(1).map((edge) => edge.split(" ").map(Number));
  let graph = new Array(n).fill().map((_) => new Array(n).fill(false));

  edges.forEach((edge) => {
    const [i, j] = edge;
    graph[i - 1][j - 1] = true;
    graph[j - 1][i - 1] = true;
  });
  console.log(solution(n, graph));
}
main();

/**
 * 문제: 연결 요소의 개수
 * 테마: 그래프 탐색
 * 출처: https://www.acmicpc.net/problem/11724
 *
 * [NOTE]
 * + 그래프에서 "연결 요소" 란 쉽게 말해 연결되어있는 뭉텅이 개수라고 생각하면 된다.
 */
