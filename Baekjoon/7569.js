class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.size = this.size + 1;
    } else {
      let node = new Node(data);
      this.tail.next = node;
      this.tail = node;
      this.size = this.size + 1;
    }
  }

  shift() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      const popData = this.head.data;
      this.head.next = null;
      this.tail.next = null;
      this.size = this.size - 1;
      return popData;
    } else {
      this.head = this.head.next;
      this.size = this.size - 1;
      return this.head.data;
    }
  }

  getSize() {
    return this.size;
  }
}

function solution(m, n, h, tomatos) {
  let result = 0;
  let dx = [-1, 1, 0, 0, 0, 0];
  let dy = [0, 0, -1, 1, 0, 0];
  let dz = [0, 0, 0, 0, -1, 1];
  let queue = [];

  if (checkAllTomatosRipe()) return 0;
  initQueue();

  let pointer = 0;
  while (pointer < queue.length) {
    const [z, x, y, count] = queue[pointer];

    for (let i = 0; i < 6; i++) {
      const [nz, nx, ny] = [z + dz[i], x + dx[i], y + dy[i]];
      if (0 <= nx && nx < n && 0 <= ny && ny < m && 0 <= nz && nz < h) {
        if (tomatos[nz][nx][ny] === 0) {
          tomatos[nz][nx][ny] = 1;
          queue.push([nz, nx, ny, count + 1]);
          result = count + 1;
        }
      }
    }

    pointer += 1;
  }

  if (!checkAllTomatosRipe()) return -1;
  return result;

  function checkAllTomatosRipe() {
    return tomatos.flat(2).includes(0) ? false : true;
  }
  function initQueue() {
    for (let i = 0; i < tomatos.length; i++) {
      for (let j = 0; j < tomatos[i].length; j++) {
        for (let k = 0; k < tomatos[i][j].length; k++) {
          if (tomatos[i][j][k] === 1) {
            queue.push([i, j, k, 0]);
          }
        }
      }
    }
  }
}

function main() {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const fs = require("fs");
  const input = fs.readFileSync(path).toString().trim().split("\n");

  const [m, n, h] = input[0].split(" ").map(Number);
  const tomatos = [];

  input.slice(1).forEach((line, i) => {
    if (i % n === 0) {
      const layer = input
        .slice(1)
        .slice(i, i + n)
        .map((line) => line.split(" ").map(Number));
      tomatos.push(layer);
    }
  });

  console.log(solution(m, n, h, tomatos));
}
main();

/**
 * 문제: 토마토 (7569)
 * 테마: 그래프 탐색
 * 출처: https://www.acmicpc.net/problem/7569
 *
 * [NOTE]
 * https://www.acmicpc.net/problem/7576
 * + 2차원 토마토 문제 (7576) 와 같은 맥락이지만, 3차원이라는 것이 차이점인 문제
 * + 추가적으로, 실행시간에 대한 조건도 통과해야한다.
 * + 2차원 토마토 문제에서 풀이했던 방식 그대로 queue 에서 shift 하는 방식을 사용하면 실행시간초과 발생
 * + 대신, 인덱스를 통해 shift 역할을 대신 사용해서 실행시간을 줄인다.
 * + 또한, 특정 토마도가 익는 데 필요한 타임라인 데이터를, 좌표 데이터에 함께 저장해놓고 사용
 * + 특정 토마토가 익혀질 때, 이전에 익혀진 토마토의 타임라인 데이터 + 1로 업데이트한다.
 *
 * [WARNING]
 * + 통과하긴 했으나, 실행시간을 더 줄일 수 있는 풀이가 많다.
 * + node 로 풀이한 다른 사람들의 실행시간을 보니 비교적 내 풀이가 늦은 편으로 확인
 */
