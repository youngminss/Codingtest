function solution(d, budget) {
  let accumulateCost = 0;

  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    if (accumulateCost + d[i] > budget) return i;
    accumulateCost = accumulateCost + d[i];
  }

  return d.length;
}

console.log(solution([1, 3, 2, 5, 4], 9)); // 3
console.log(solution([100000], 100)); // 4
