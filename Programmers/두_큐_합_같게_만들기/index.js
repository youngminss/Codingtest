function solution(queue1, queue2) {
  const queue = [...queue1, ...queue2];
  const sumTarget = Math.floor(sum(queue) / 2);

  let [i, j] = [0, queue1.length - 1];
  let sumQueue1 = sum(queue1);
  let result = 0;

  while (i < queue.length && j < queue.length) {
    if (sumQueue1 === sumTarget) {
      return result;
    }

    if (sumQueue1 < sumTarget && j < queue.length - 1) {
      j = j + 1;
      sumQueue1 = sumQueue1 + queue[j];
    } else {
      sumQueue1 = sumQueue1 - queue[i];
      i = i + 1;
    }

    result = result + 1;
  }

  return -1;
}

const sum = (arr) => arr.reduce((acc, val) => (acc = acc + val), 0);
