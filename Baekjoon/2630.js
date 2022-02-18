function solution(n, paper) {
  let result = [0, 0];

  divide(0, 0, n);
  return result.join("\n");

  function divide(i, j, size) {
    isUnique(i, j, size, paper[i][j]);
    if (size === 1) {
      result[paper[i][j]]++;
      return;
    }

    if (!isUnique(i, j, size, paper[i][j])) {
      const newSize = size / 2;
      divide(i, j, newSize);
      divide(i, j + newSize, newSize);
      divide(i + newSize, j, newSize);
      divide(i + newSize, j + newSize, newSize);
    } else {
      result[paper[i][j]]++;
    }
  }

  function isUnique(si, sj, size, color) {
    for (let i = si; i < si + size; i++) {
      for (let j = sj; j < sj + size; j++) {
        if (paper[i][j] !== color) {
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
  const paper = input.slice(1).map((line) => line.split(" ").map(Number));
  console.log(solution(n, paper));
}
main();

/**
 * 문제: 색종이 만들기 (2630)
 * 테마: 분할정복, 재귀
 * 출처: https://www.acmicpc.net/problem/2630
 *
 * [NOTE]
 * + 분할 정복에서 divide 과정을 이용하면 쉽게 풀 수 있는 문제
 * + 탐색해야할 범위가 2^N 으로 좁혀간다는 것을 확인했다면 size 라는 변수를 통해 범위를 좁혀 나갈 수 있다는 것 확인
 * + 분할을 그만해도 되는 시점은 2가지
 *   - 탐색할 맵의 크기가 1 X 1 인경우
 *   - 하나의 맵이 하나의 값(여기선, 색깔)으로 통일된 경우
 */
