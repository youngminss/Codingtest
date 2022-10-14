class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.head = new Node("head");
    this.tail = new Node("tail");
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  pushFront(data) {
    const newNode = new Node(data);

    newNode.next = this.head.next;
    newNode.prev = this.head;
    this.head.next.prev = newNode;
    this.head.next = newNode;
    this.size++;
  }

  pushBack(data) {
    const newNode = new Node(data);

    newNode.prev = this.tail.prev;
    newNode.next = this.tail;
    this.tail.prev.next = newNode;
    this.tail.prev = newNode;
    this.size++;
  }

  popFront() {
    const popNode = this.head.next;
    this.head.next.next.prev = this.head;
    this.head.next = this.head.next.next;
    this.size--;
    return popNode.data;
  }

  popBack() {
    const popNode = this.tail.prev;
    this.tail.prev.prev.next = this.tail;
    this.tail.prev = this.tail.prev.prev;
    this.size--;
    return popNode.data;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  getFront() {
    return this.head.next.data;
  }

  getBack() {
    return this.tail.prev.data;
  }
}

const solution = (n, commands) => {
  let result = "";
  const deque = new Deque();

  commands.forEach((command) => {
    const [op, value] = command.split(" ");

    if (op === "push_front") {
      deque.pushFront(+value);
    } else if (op === "push_back") {
      deque.pushBack(+value);
    } else if (op === "pop_front") {
      if (deque.isEmpty()) {
        result += `-1\n`;
        return;
      }
      result += `${deque.popFront()}\n`;
    } else if (op === "pop_back") {
      if (deque.isEmpty()) {
        result += `-1\n`;
        return;
      }
      result += `${deque.popBack()}\n`;
    } else if (op === "size") {
      result += `${deque.getSize()}\n`;
    } else if (op === "empty") {
      result += `${deque.isEmpty() ? 1 : 0}\n`;
    } else if (op === "front") {
      if (deque.isEmpty()) {
        result += `-1\n`;
        return;
      }
      result += `${deque.getFront()}\n`;
    } else if (op === "back") {
      if (deque.isEmpty()) {
        result += `-1\n`;
        return;
      }
      result += `${deque.getBack()}\n`;
    }
  });

  console.log(result);
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const [n, ...input] = require("fs").readFileSync(path).toString().trim().split("\n");

  solution(n, input);
};

main();

/**
 * 문제: 백준 - 덱(10866)
 * 테마: 자료구조(덱(deque))
 * 출처: https://www.acmicpc.net/problem/10866
 */
