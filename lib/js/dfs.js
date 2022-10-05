// ===== DFS - 방문한 순서(가장 기본) =====

const DFS1 = (graph, start) => {
  let visited = [];
  let queue = [];

  queue.push(start);

  while (queue.length) {
    const node = queue.shift(); // dfs 인데 stack 이 아닌 queue ?? << 여기가 포인트가 아님
    if (!visited.includes(node)) {
      visited.push(node);
      queue = [...graph[node], ...queue]; // 위에서 queue 를 일관성 있게 사용하되 새로 구성되는 큐 순서가 포인트 >> [...현재 노드에서 갈 수 있는 노드들, ...기존 노드들]
    }
  }

  return visited;
};

// const graph = {
//   A: ["B", "C"],
//   B: ["A", "D"],
//   C: ["A", "G", "H", "I"],
//   D: ["B", "E", "F"],
//   E: ["D"],
//   F: ["D"],
//   G: ["C"],
//   H: ["C"],
//   I: ["C", "J"],
//   J: ["I"],
// };

// console.log(DFS1(graph, "A"));
