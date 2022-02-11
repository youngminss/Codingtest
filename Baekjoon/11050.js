function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) result *= i;
  return result;
}

function calcNumerator(n) {
  return factorial(n);
}

function calcDenominator(n, k) {
  return factorial(n - k) * factorial(k);
}

function solution(n, k) {
  const numerator = calcNumerator(n);
  const denominator = calcDenominator(n, k);

  return Math.floor(numerator / denominator);
}

function main() {
  const fs = require("fs");
  let input = fs.readFileSync("./input.txt").toString().trim().split(" ");

  const [n, k] = input.map(Number);
  console.log(solution(n, k));
}
main();

/**
 * 문제: 이항 계수 1 (11050)
 * 테마: 수학, 정수론
 * 출처: https://www.acmicpc.net/problem/11050
 *
 * [NOTE]
 * + 이항 계수(Binomial Coefficient) : 주어진 크기 집합에서 원하는 개수만큼 순서없이 뽑는 조합의 가짓 수
 * + "이항" : 하나의 아이템에 대해서 선택하거나 선택하지 않거나 두 가지 선택만이 있기 때문을 의미
 */
