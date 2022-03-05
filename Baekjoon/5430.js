class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
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
    if (this.empty()) {
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
    if (this.empty()) {
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
    if (this.empty()) {
      return -1;
    }
    const popData = this.head.data;
    this.head = this.head.next;
    if (this.getSize() === 1) {
      this.head = null;
    } else {
      this.head.prev = null;
    }
    this.size = this.size - 1;
    return popData;
  }

  popBack() {
    if (this.empty()) {
      return -1;
    }
    const popData = this.tail.data;
    this.tail = this.tail.prev;
    if (this.getSize() === 1) {
      this.tail = null;
    } else {
      this.tail.next = null;
    }
    this.size = this.size - 1;
    return popData;
  }

  getFront() {
    return this.getSize() ? this.head.data : -1;
  }

  getBack() {
    return this.getSize() ? this.tail.data : -1;
  }

  getSize() {
    return this.size;
  }

  empty() {
    return this.size === 0 ? true : false;
  }
}

function solution(t, testCases) {
  let result = [];
  for (let i = 0; i < t; i++) {
    const fnString = testCases[3 * i].split("");
    const arr = testCases[3 * i + 2].length > 2 ? testCases[3 * i + 2].slice(1, -1).split(",").map(Number) : [];

    let reverse = false;
    let deque = new Deque();
    arr.forEach((data) => deque.pushBack(data));

    let isEmpty = false;
    fnString.forEach((fn) => {
      switch (fn) {
        case "D":
          if (deque.empty()) {
            isEmpty = true;
          } else {
            if (reverse) {
              deque.popBack();
            } else {
              deque.popFront();
            }
          }
          break;
        case "R":
          reverse = !reverse;
          break;
      }
    });

    if (isEmpty) {
      result.push("error");
      continue;
    }

    let pushData = [];
    if (reverse) {
      while (!deque.empty()) {
        pushData.push(deque.popBack());
      }
    } else {
      while (!deque.empty()) {
        pushData.push(deque.popFront());
      }
    }

    result.push(JSON.stringify(pushData));
  }

  return result.join("\n");
}

function main() {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const fs = require("fs");
  const input = fs.readFileSync(path).toString().trim().split("\n");

  const t = Number(input[0]);
  console.log(solution(t, input.slice(1)));
}
main();

/**
 * 문제: AC (5430)
 * 테마: 덱
 * 출처: https://www.acmicpc.net/problem/5430
 *
 * [NOTE 1]
 * + 문제 자체가 어려운 문제는 아니다.
 * + 이 문제가 GOLD-5 인 이유는 실행시간 측면인 것 같다.
 * + 나열된 데이터를 뒤집고 뽑아내고하는 과정이 연속적으로 발생한다.
 *   - 이 때, 단순 배열을 통해 앞 뒤 데이터를 shift, pop 연산으로 진행하면 비효율적이다.
 * + 따라서, 이 때는 덱(deque) 자료구조가 필요한 순간이다.
 *
 * [NOTE 2]
 * + 배열의 데이터를 [배열 데이터 나열] 형태로 "대괄호" 가 포함된 형태로 출력하고 싶을 때 JSON.stringify() 메서드를 사용하면 편하다.
 */
