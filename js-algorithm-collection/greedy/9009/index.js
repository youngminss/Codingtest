const solution = (data) => {
  const fibo = [0, 1];

  while (fibo[fibo.length - 1] <= data) {
    fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
  }
  fibo.pop();

  let current = fibo[fibo.length - 1];
  const result = [current];

  for (let i = fibo.length - 2; i >= 0; i--) {
    if (current === data) {
      break;
    }

    if (current + fibo[i] > data) {
      continue;
    }

    result.push(fibo[i]);
    current = current + fibo[i];
  }

  return result.reverse().join(" ");
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs")
    .readFileSync(path)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

  const n = input.shift();
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(solution(input[i]));
  }

  console.log(result.join("\n"));
};

main();

/**
 * 문제 : 피보나치
 * 테마 : 그리디, 수학
 * 출처 : https://www.acmicpc.net/problem/9009
 */

/**
 * 요약 : n 을 만들 수 있는 최소 길이 피보나치 수열 케이스 찾기
 * 정당성 : n - k 의 결과는 또 다른 피보나치 수열들의 합으로 표현 가능하다.
 * + n 까지 생성 가능한 피보나치 수열을 만들어 놓는다.
 * + 뒤에서 앞으로 피보나치 수열 배열을 순회하면서 누적합이 n 이 만들어지기까지 선택된 요소들을 담는다.
 */
