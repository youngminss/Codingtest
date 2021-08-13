function makeTenaryNotation(n) {
  let result = "";

  while (n >= 3) {
    result += String(n % 3);
    n = Math.floor(n / 3);
  }
  result += String(n);
  return result;
}
function makeDecimalNotation(ternaryNotation) {
  let result = 0;

  for (let i = 0; i < ternaryNotation.length; i++) {
    result += Math.pow(3, i) * ternaryNotation[ternaryNotation.length - 1 - i];
  }
  return result;
}

function solution(n) {
  let ternaryNotation = makeTenaryNotation(n);
  let decimalNotation = makeDecimalNotation(ternaryNotation);

  return decimalNotation;
}

function betterSolution(n) {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
}

console.log(solution(125));
console.log(betterSolution(45));

// 45	=> 7
// 125	=> 229

/**
 * 문제 : 3진법 뒤집기
 * 테마 : 구현
 * 출처 : https://programmers.co.kr/learn/courses/30/lessons/68935
 *
 * 해법
 * - "수학적"으로 3진법 구하는 방식으로 구하면 뒤집지 않아도 된다. => 함수로 분리
 * - "수학적"으로 3잔법 -> 10진법으로 구하기
 *
 * 💡 NOTE
 * 1. numObj.toString([radix])
 * radix
 * - 수의 값을 나타내기 위해 사용되기 위한 기준을 정한다.
 * - 2 ~ 36 사이의 정수 (= 진수를 나타내는 기수의 값)
 * - 즉, 정수 n에 대해 => string 형태로 n진법 형태 반환
 *
 * 2. parseInt(string, [radix])
 * string - 분석할 '문자열'
 * radix - (default = 10) string이 표현하는 정수를 나타내는 2 ~ 36 사이의 진수
 */
