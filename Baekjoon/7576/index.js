class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this.head = new Node();
    this.tail = new Node();
    this.size = 0;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head.next = newNode;
      this.tail.prev = newNode;
      newNode.prev = this.head;
      newNode.next = this.tail;
      this.size++;
      return;
    }

    newNode.prev = this.tail.prev;
    this.tail.prev.next = newNode;
    this.tail.prev = newNode;
    newNode.next = this.tail;
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) throw new Error("Queue is Empty !");

    const popNode = this.head.next;
    this.head.next = this.head.next.next;
    this.head.next.prev = this.head;
    this.size--;
    return popNode.data;
  }

  isEmpty() {
    return this.size ? false : true;
  }
  getSize() {
    return this.size;
  }
}

const solution = (n, m, graph) => {
  const bfs = () => {
    let result = 0;
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    const visited = Array(n)
      .fill()
      .map((_) => Array(m).fill(false));
    const queue = new Queue();

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (graph[i][j] === 1) {
          queue.enqueue([i, j]);
        }
      }
    }

    while (queue.getSize()) {
      let temp = new Queue();

      while (queue.getSize()) {
        const [x, y] = queue.dequeue();

        for (let i = 0; i < 4; i++) {
          const [nx, ny] = [x + dx[i], y + dy[i]];

          if (0 <= nx && nx < n && 0 <= ny && ny < m && graph[nx][ny] === 0 && !visited[nx][ny]) {
            graph[nx][ny] = 1;
            visited[nx][ny] = true;
            temp.enqueue([nx, ny]);
          }
        }
      }

      if (!temp.isEmpty()) {
        while (!temp.isEmpty()) {
          queue.enqueue(temp.dequeue());
        }
        result++;
      }
    }

    console.log(graph.flat().includes(0) ? -1 : result);
  };

  bfs();
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");
  const [m, n] = input[0].split(" ").map(Number);
  solution(
    n,
    m,
    input.slice(1).map((line) => line.split(" ").map(Number)),
  );
};

main();

/**
 * 문제: 백준 - 토마토(7576)
 * 테마: 그래프 탐색(DFS, BFS), 자료구조(연결 리스트)
 * 출처: https://www.acmicpc.net/problem/7576
 */
