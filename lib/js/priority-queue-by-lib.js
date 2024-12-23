const Priorityqueuejs = require("priorityqueuejs");

const comparator = (a, b) => {
  return a.val - b.val;
};

const pq = new Priorityqueuejs(comparator);

pq.enq({ val: 3 });
pq.enq({ val: 10 });
pq.enq({ val: 4 });
pq.enq({ val: 30 });
pq.enq({ val: 17 });

console.log(pq.size());
console.log(pq.peek());
console.log(pq.deq());
console.log(pq.peek());
