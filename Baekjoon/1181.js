function compare(a, b) {
  return a.length - b.length || a.localeCompare(b);
}

function solution(words) {
  let uniqueWords = Array.from(new Set(words));
  let result = uniqueWords.sort(compare);

  console.log(result.join("\n"));
}

function main() {
  let fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  const words = input.slice(1);
  solution(words);
}

main();

/**
 * 문제: 단어 정렬 (1181)
 * 테마: 문자열, 정렬
 * 출처: https://www.acmicpc.net/problem/1181
 *
 * [NOTE]
 * + sort 메서드에 정렬 조건이 여러 개인 경우, compare 함수를 정의해서 인수로 넘겨주는 것이 가독성에 좋다.
 * + localCompare 메서드를 통해 "문자 간의 비교"가 가능하다는 것 확인
 */
