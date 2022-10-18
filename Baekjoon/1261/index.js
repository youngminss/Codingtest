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
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const BFS = (startX, startY) => {
    const queue = new Queue();
    queue.enqueue([startX, startY]);

    while (!queue.isEmpty()) {
      const [x, y] = queue.dequeue();

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];

        if (0 <= nx && nx < n && 0 <= ny && ny < m) {
          if (graph[nx][ny][0] === 1) {
            if (graph[x][y][1] + 1 < graph[nx][ny][1]) {
              graph[nx][ny][1] = graph[x][y][1] + 1;
              queue.enqueue([nx, ny]);
            }
          } else {
            if (graph[x][y][1] < graph[nx][ny][1]) {
              graph[nx][ny][1] = graph[x][y][1];
              queue.enqueue([nx, ny]);
            }
          }
        }
      }
    }
  };

  graph[0][0][1] = 0;
  BFS(0, 0);
  console.log(graph[n - 1][m - 1][1]);
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");
  const [n, m] = input[0].split(" ");

  solution(
    +m,
    +n,
    input.slice(1).map((line) => line.split("").map((item) => [Number(item), Number.MAX_SAFE_INTEGER])),
  );
};

main();

/**
 * 문제: 백준 - 알고스팟(1261)
 * 테마: 그래프탐색(BFS), 다익스트라
 * 출처: https://www.acmicpc.net/problem/1261
 */
