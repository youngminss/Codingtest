// 노드 클래스
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

// 큐(Queue) by. 양방향 연결리스트
class Queue {
  constructor() {
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  enqueue(data) {
    const newNode = new Node(data);
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

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // 1 dequeue !!
queue.enqueue(3);
console.log(queue, queue.getSize()); // head <-> 2 <-> 3 <-> tail, 2
