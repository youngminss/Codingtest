function solution(n) {
  let result = -1;
  let big = 5;
  let small = 3;

  let max = parseInt(n / big);
  for (let i = max; i >= 0; i--) {
    let temp = big * i;

    if ((n - temp) % small === 0) {
      result = i + parseInt((n - temp) / small);
      break;
    }
  }

  return result;
}

function main() {
  const fs = require("fs");
  let input = fs.readFileSync("./input.txt").toString().trim();

  const n = Number(input);
  console.log(solution(n));
}
main();

/**
 * 문제: 설탕 배달 (2839)
 * 테마: 그리디
 * 출처: https://www.acmicpc.net/problem/2839
 *
 * [NOTE]
 * + "최대한 적은 봉지"가 목표
 *
 * [다른 풀이]
 * https://www.acmicpc.net/source/37387097
 */
