function solution(sequence) {
  return [...sequence]
    .sort((a, b) => (a - b < 0 ? -1 : 1))
    .reduce((acc, _, idx, arr) => (acc += arr.slice(0, idx + 1).reduce((acc, cur) => (acc += cur), 0)), 0);
}

function main() {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const fs = require("fs");
  const input = fs.readFileSync(path).toString().trim().split("\n");

  const sequence = input[1].split(" ").map(Number);
  console.log(solution(sequence));
}
main();

/**
 * 문제: ATM (11399)
 * 테마: 그리디, 정렬
 * 출처: https://www.acmicpc.net/problem/11399
 *
 * [NOTE]
 * + 문제의 목표는 각 사람이 돈을 인출하는데 필요한 시간의 합 중 최솟값
 * + 빠르게 끝나는 사람 먼저 해결하는 게 타당 ? -> OK
 *   - 앞에 사람이 빨리 끝날 수록 뒷사람의 기다리는 시간도 줄어들고, 전체 목적인 총 기다리는 시간이 최소가 되기 때문에 타당
 */
