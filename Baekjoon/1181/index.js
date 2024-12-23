const compare = (a, b) => {
  if (a.length === b.length) {
    return a.localCompare(b);
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
