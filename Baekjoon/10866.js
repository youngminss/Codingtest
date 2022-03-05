class Node {
  constructor(data) {
    this.next = null;
    this.prev = null;
    this.data = data;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  pushFront(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size = this.size + 1;
  }

  pushBack(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size = this.size + 1;
  }

  popFront() {
    if (this.isEmpty()) {
      return -1;
    }
    const popNode = this.head;
    this.head = this.head.next;
    if (this.getSize() === 1) {
      this.head = null;
    } else {
      this.head.prev = null;
    }
    this.size = this.size - 1;
    return popNode.data;
  }

  popBack() {
    if (this.isEmpty()) {
      return -1;
    }
    const popNode = this.tail;
    this.tail = this.tail.prev;
    if (this.getSize() === 1) {
      this.tail = null;
    } else {
      this.tail.next = null;
    }
    this.size = this.size - 1;
    return popNode.data;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0 ? true : false;
  }

  front() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.head.data;
  }

  back() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.tail.data;
  }
}

function solution(n, commands) {
  let result = [];
  const deque = new Deque();

  commands.forEach((command) => {
    const [op, data] = command.split(" ");

    switch (op) {
      case "push_front":
        deque.pushFront(data);
        break;
      case "push_back":
        deque.pushBack(data);
        break;
      case "pop_front":
        result.push(deque.popFront());
        break;
      case "pop_back":
        result.push(deque.popBack());
        break;
      case "size":
        result.push(deque.getSize());
        break;
      case "empty":
        result.push(deque.isEmpty() ? 1 : 0);
        break;
      case "front":
        result.push(deque.front());
        break;
      case "back":
        result.push(deque.back());
        break;
    }
  });

  return result.join("\n");
}

function main() {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const fs = require("fs");
  const input = fs.readFileSync(path).toString().trim().split("\n");

  const n = Number(input[0]);
  const commands = input.slice(1);
  console.log(solution(n, commands));
}
main();

/**
 * 문제: 덱 (10866)
 * 테마: 덱
 * 출처: https://www.acmicpc.net/problem/10866
 *
 * [NOTE 1]
 * + 전형적인 덱(deque) 기본문제
 */
