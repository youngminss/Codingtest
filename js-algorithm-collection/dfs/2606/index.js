const solution = (graph, v, visited) => {
  visited[v] = true;

  for (let i = 0; i < graph[v].length; i++) {
    const nextV = graph[v][i];

    if (visited[nextV] === false) {
      visited[nextV] = true;
      solution(graph, nextV, visited);
    }
  }

  return visited.reduce((acc, cur) => acc + cur, 0) - 1; // 시작 노드 제외
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");

  const n = Number(input.shift());
  const m = Number(input.shift());

  let visited = new Array(n + 1).fill(false);
  let graph = new Array(n + 1).fill(null).map((_) => []);

  for (let i = 0; i < m; i++) {
    const [start, end] = input[i].split(" ").map(Number);
    graph[start].push(end);
    graph[end].push(start);
  }

  const result = solution(graph, 1, visited);
  console.log(result);
};

main();

/**
 * 문제 : 바이러스
 * 테마 : DFS, 그래프 순회
 * 출처 : https://www.acmicpc.net/problem/2606
 */

/**
 * + recursive function 으로 구현
 * + graph 나 visited 배열의 길이를 +1 씩 한것은 노드 넘버링이 1 ~ n 이기때문에 직관적인 코드를 위해서
 *   - 조금의 메모리 낭비 vs 직관적인 코드 작성 중에 택
 */

/**
 * Array.fill(object) = reference 를 복사 = 특정 요소를 수정하면, 모든 요소가 동일하게 업데이트 된다. -> map 함수를 통해 새로운 객체 요소들로 구성된 배열로 생성하면 해결 가능)
 * Arrry.fill(primitive) = value 를 복사
 */
