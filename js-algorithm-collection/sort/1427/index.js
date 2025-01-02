const solution = (data) => {
  return data
    .split("")
    .map(Number)
    .sort((a, b) => b - a)
    .join("");
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim();

  const result = solution(input);
  console.log(result);
};

main();

/**
 * 문제 : 소트인사이드
 * 테마 : 정렬, 계수정렬
 * 출처 : https://www.acmicpc.net/problem/1427
 */

/**
 * n <= 100_000_000 이므로, nlogn 시간 내에 정렬이 수행되어야함
 * 제한 조건 내에 문제 통과만 생각한다면 js 기본 sort 정렬을 사용하면 해결
 */
