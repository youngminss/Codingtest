const compare = (a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }

  return a[0] - b[0];
};

const solution = (arr) => {
  return arr
    .sort(compare)
    .map((element) => element.join(" "))
    .join("\n");
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");
  const arr = input.slice(1).map((element) => element.split(" ").map(Number));

  const result = solution(arr);
  console.log(result);
};

main();

/**
 * 문제 : 좌표 정렬하기
 * 테마 : 정렬
 * 출처 : https://www.acmicpc.net/problem/11650
 */
