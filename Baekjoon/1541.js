function solution(expressions) {
  const numbers = expressions.split("-").map((expression) =>
    expression
      .split("+")
      .map(Number)
      .reduce((acc, cur) => (acc += cur), 0),
  );

  let answer = numbers[0] * 2 - numbers.reduce((acc, cur) => acc + cur, 0);
  return answer;
}

function main() {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const fs = require("fs");
  const input = fs.readFileSync(path).toString().trim();

  console.log(solution(input));
}
main();

/**
 * 문제: 잃어버린 괄호 (1541)
 * 테마: 그리디, 파싱
 * 출처: https://www.acmicpc.net/problem/1541
 *
 * [NOTE]
 * + (+, -) 로 이뤄진 표현식에서 가장 최소로 만드는 것이 목표일 때, 최소가 되는 법
 *   - 최대한 + 의 피연산자를 먼저 계산
 *   - 첫 번째 좌항에 대해, 나머지 항을 하나씩 - 연산하는 것이 만족
 */
