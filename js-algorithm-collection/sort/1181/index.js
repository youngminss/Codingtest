const compare = (a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b);
  }

  return a.length - b.length;
};
const solution = (data) => {
  const arr = Array.from(new Set(data));
  return arr.sort(compare).join("\n");
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");
  const data = input.slice(1);

  const result = solution(data);
  console.log(result);
};

main();

/**
 * 문제 : 단어 정렬
 * 테마 : 정렬, 자료형
 * 출처 : https://www.acmicpc.net/problem/1181
 */

/**
 * 숫자가 아닌 문자열 형태의 두 데이터를 연산할 경우, 동적 타이핑으로 인한 숫자 변환이 발생하지 않는다.
 * 문자열 a, 문자열 b 가 있을 때 a - b 의 결과는 "NaN" (Not a Number) 다.
 * 그럼 sort 함수의 "올바른" 기준을 제공하지 못한다.
 * 정렬 기준이 "NaN" 일 경우, 브라우저마다 정렬 기준은 다른 듯하며 예를 들어 V8 엔진을 사용하는 Chrome 의 경우에는 "동등" 연산인 듯 처리한다.
 */
