function solution(n, numbers) {
  let copyNumbers = Array.from(new Set([...numbers]));
  let numberSequenceCounter = {};

  copyNumbers = copyNumbers.sort((a, b) => (a - b < 0 ? -1 : 1));
  copyNumbers.forEach((number, i) => {
    if (!(number in numberSequenceCounter)) {
      numberSequenceCounter[number] = i;
    }
  });

  let result = [];
  numbers.forEach((number) => {
    result.push(numberSequenceCounter[number]);
  });

  return result.join(" ");
}

function main() {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const fs = require("fs");
  const input = fs.readFileSync(path).toString().trim().split("\n");

  const n = Number(input[0]);
  const numbers = input[1].split(" ").map(Number);
  console.log(solution(n, numbers));
}
main();

/**
 * 문제: 좌표 압축 (18870)
 * 테마: 정렬
 * 출처: https://www.acmicpc.net/problem/18870
 *
 * [NOTE]
 * + 문제를 정리하자면 "자신보다 작은 원소의 개수"를 구하는 것
 * + 다만 이것을 n 에 대해 O(n) 시간안에 해결해야한다. (1 <= n <= 1,000,000 이므로)
 * + 나는 객체 리터럴과 Set 자료형을 활용했다.
 *
 * [다른풀이]
 * + Map 자료형과 변수를 이용해서 풀이하는 방법
 * + https://www.acmicpc.net/source/38424621
 */
