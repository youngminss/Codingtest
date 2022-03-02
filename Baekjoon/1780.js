function solution(n, papers) {
  let result = [0, 0, 0];
  divide(0, 0, n);
  return result.join("\n");

  function divide(x, y, size) {
    if (isAllSameAndReturnNumber(x, y, size)) {
      result[papers[x][y] + 1] = result[papers[x][y] + 1] + 1;
      return;
    }

    const newSize = size / 3;
    divide(x, y, newSize);
    divide(x, y + newSize, newSize);
    divide(x, y + newSize * 2, newSize);
    divide(x + newSize, y, newSize);
    divide(x + newSize, y + newSize, newSize);
    divide(x + newSize, y + newSize * 2, newSize);
    divide(x + newSize * 2, y, newSize);
    divide(x + newSize * 2, y + newSize, newSize);
    divide(x + newSize * 2, y + newSize * 2, newSize);
  }

  function isAllSameAndReturnNumber(x, y, size) {
    const standard = papers[x][y];

    for (let i = x; i < x + size; i++) {
      for (let j = y; j < y + size; j++) {
        if (standard !== papers[i][j]) {
          return false;
        }
      }
    }

    return true;
  }
}

function main() {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const fs = require("fs");
  const input = fs.readFileSync(path).toString().trim().split("\n");

  const n = Number(input[0]);
  const papers = input.slice(1).map((line) => line.split(" ").map(Number));
  console.log(solution(n, papers));
}
main();

/**
 * 문제: 종이의 개수 (1780)
 * 테마: 분할정복법
 * 출처: https://www.acmicpc.net/problem/1780
 *
 * [NOTE]
 * + divide 하는 size가 3이라는 점만 다를 뿐, 기본적인 divide 문제와 동일한 문제
 */
