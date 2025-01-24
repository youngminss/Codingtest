const isCycle = (start, prev, visited, graph) => {
  visited[start] = true;

  for (let i = 0; i < graph[start].length; i++) {
    const next = graph[start][i];

    if (!visited[next]) {
      if (isCycle(next, start, visited, graph)) {
        return true;
      }
    } else if (next !== prev) {
      return true;
    }
  }

  return false;
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");

  let result = [];
  let caseCount = 1;
  let line = 0;
  while (true) {
    const [n, m] = input[line].split(" ").map(Number);

    if (n === 0 && m === 0) {
      break;
    }

    let visited = new Array(n + 1).fill(false);
    let graph = new Array(n + 1).fill(null).map((_) => []);

    for (let i = 1; i <= m; i++) {
      const [start, end] = input[line + i].split(" ").map(Number);
      graph[start].push(end);
      graph[end].push(start);
    }

    let treeCount = 0;
    for (let i = 1; i <= n; i++) {
      if (!isCycle(i, 0, visited, graph)) {
        treeCount = treeCount + 1;
      }
    }

    result.push(
      `Case ${caseCount++}: ${
        treeCount === 0
          ? `No trees.`
          : treeCount === 1
          ? `There is one tree.`
          : `A forest of ${treeCount} trees.`
      }`
    );

    line = line + m + 1;
  }

  console.log(result.join("\n"));
};

main();
