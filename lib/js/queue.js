// Object 를 활용한 큐(Queue) 템플릿
class Queue {
  constructor() {
    this.items = {}; // 객체로
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex = this.tailIndex + 1;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex = this.headIndex + 1;
    return item;
  }

  peek() {
    return this.items[this.headIndex];
  }

  getSize() {
    return this.tailIndex - this.headIndex;
  }
}

const func1 = () => {
  const queue = new Queue();

  console.time("func1");
  for (let i = 0; i < 100_000_000; i++) {
    if (10_010_000 < i && i < 10_020_000) {
      queue.dequeue(i);
      continue;
    }

    queue.enqueue(i);
  }
  console.timeEnd("func1");
  console.log(`size : ${queue.getSize()}`);
};

const func2 = () => {
  const queue = [];

  console.time("func2");
  for (let i = 0; i < 100_000_000; i++) {
    if (10_010_000 < i && i < 10_020_000) {
      queue.shift(i);
      continue;
    }

    queue.push(i);
  }
  console.timeEnd("func2");
  console.log(`size : ${queue.length}`);
};

const main = () => {
  // const objQueue = new Queue();

  // objQueue.enqueue(1);
  // objQueue.enqueue(2);
  // console.log(objQueue.dequeue());

  // objQueue.enqueue(3);
  // objQueue.enqueue(4);
  // objQueue.enqueue(5);
  // console.log(objQueue.dequeue());

  // console.log(`rest queue data :`, objQueue, `size :`, objQueue.getSize());

  func1();
  func2();
};

main();
