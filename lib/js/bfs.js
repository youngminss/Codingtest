// ===== BFS - 방문한 순서(가장 기본) =====

const BFS1 = (graph, start) => {
  let visited = [];
  let queue = [];

  queue.push(start);

  while (queue.length) {
    const node = queue.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      queue = [...queue, ...graph[node]];
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
// };  // 연결리스트 가정

// console.log(BFS1(graph, "A"));
