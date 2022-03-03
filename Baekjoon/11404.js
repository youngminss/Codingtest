function solution(n, m, edges) {
  const adjacencyMatrix = new Array(n).fill().map(() => new Array(n).fill(Infinity));

  edges.forEach((edge) => {
    const [s, e, c] = edge.split(" ").map(Number);
    adjacencyMatrix[s - 1][e - 1] = Math.min(adjacencyMatrix[s - 1][e - 1], c);
  });

  for (let i = 0; i < n; i++) {
    adjacencyMatrix[i][i] = 0;
  }

  for (let k = 0; k < n; k++) {
    for (let j = 0; j < n; j++) {
      for (let i = 0; i < n; i++) {
        if (adjacencyMatrix[i][j] > adjacencyMatrix[i][k] + adjacencyMatrix[k][j]) {
          adjacencyMatrix[i][j] = adjacencyMatrix[i][k] + adjacencyMatrix[k][j];
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (adjacencyMatrix[i][j] === Infinity) {
        adjacencyMatrix[i][j] = 0;
      }
    }
  }

  let result = "";
  adjacencyMatrix.forEach((line) => (result += line.join(" ") + "\n"));
  return result;
}

function main() {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const fs = require("fs");
  const input = fs.readFileSync(path).toString().trim().split("\n");

  const n = Number(input[0]);
  const m = Number(input[1]);
  const edges = input.slice(2);
  console.log(solution(n, m, edges));
}
main();

/**
 * 문제: 플로이드 (11404)
 * 테마: 그래프 탐색, 플로이드-와샬
 * 출처:
 *
 * [NOTE]
 * + 전형적인 플로이드-와샬 알고리즘 문제
 * + 그래프 cost 가 있는 단방향 인접행렬 정보가 주어질 때, A -> B로 가는 최소 비용을 구하는 문제
 */
