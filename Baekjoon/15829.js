function calcHashValue(alpha, index, r, m) {
  const convertedValue = alpha.charCodeAt(0) - "a".charCodeAt(0) + 1;

  let pow_n = 1;
  for (let i = 0; i < index; i++) {
    pow_n = (pow_n * r) % m;
  }

  return convertedValue * pow_n;
}

function solution(l, alphas) {
  let result = 0;
  const r = 31;
  const m = 1234567891;

  alphas.forEach((alpha, index) => {
    result = (result + calcHashValue(alpha, index, r, m)) % m;
  });

  return result;
}

function main() {
  const fs = require("fs");
  let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

  const l = Number(input[0]);
  const alphas = input[1].split("");

  console.log(solution(l, alphas));
}
main();

/**
 * 문제: Hashing (15829)
 * 테마: 해싱, 문자열
 * 출처: https://www.acmicpc.net/problem/15829
 *
 * [NOTE]
 * + 해시 값을 누적하면서 더할 경우, 매 차례마다 누적 해시값의 범위가 초과할 수 있으므로 mod 로 나눠줘야 뻗지 않는다.
 */
