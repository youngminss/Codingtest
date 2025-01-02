const solution = (start, end, depth) => {
  if (start === end) {
    return depth;
  } else if (start > end) {
    return -1;
  }

  const a = solution(start * 2, end, depth + 1);
  const b = solution(start * 10 + 1, end, depth + 1);

  if (a === -1 && b === -1) {
    return -1;
  } else if (a !== -1 && b === -1) {
    return a;
  } else if (a === -1 && b !== -1) {
    return b;
  } else {
    return Math.min(a, b);
  }
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const [start, end] = require("fs")
    .readFileSync(path)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

  const result = solution(start, end, 1);
  console.log(result);
};

main();

/**
 * 문제 : A -> B
 * 테마 : 그리디 or 그래프 탐색
 * 출처 : https://www.acmicpc.net/problem/16953
 */

/**
 * [DFS 를 적용한 방식]
 * a, b 에 대해 a 로 부터 연산 가능한 작업을 재귀를 통해 DFS 로 접근
 * 두 수가 일치하거나 a 가 b 를 넘어가면 재귀 함수 종료, 그것이 아닐 경우 두 수가 일치하는 경우가 있다면 해당 케이스가 되기까지 가장 작은 경우 수를 반환
 */
