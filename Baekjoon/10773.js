function solution(k, numbers) {
  let stack = [];

  for (let i = 0; i < k; i++) {
    if (numbers[i] === 0) stack.pop();
    else stack.push(numbers[i]);
  }

  return stack.reduce((acc, cur) => (acc += cur), 0);
}

function main() {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().split("\n");

  const arr = [];
  input.forEach((data) => arr.push(...data.split(" ").map(Number)));

  const result = solution(arr[0], arr.slice(1));
  console.log(result);
}

main();

/**
 * 문제: 제로 (10773)
 * 테마: 스택
 * 출처: https://www.acmicpc.net/problem/10773
 *
 * [NOTE]
 * + 문제에서 테스트 케이스 수(k), 정수들(numbers)을 입력 받는다고는 했다.
 * + 이 문제의 경우 꼭 k 를 사용하지 않아도 되는 것 같아서 사용하지 않았다.
 *   - 그러면, 정답 처리가 안되는 에러가 있다.
 */
