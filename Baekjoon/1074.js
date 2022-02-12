// function solution(n, r, c) {
//   const standard = [
//     [0, 1],
//     [2, 3],
//   ];

//   const mapSize = Math.floor((2 ** n - 1) / 2);
//   const coordinate = [r % 2, c % 2];

//   return (r - coordinate[0]) * mapSize + (c - coordinate[1]) * 2 + standard[coordinate[0]][coordinate[1]];
// }

function solution(n, r, c) {
  let result = 0;
  const size = 2 ** n;

  divide(size / 2, size / 2, n);

  function divide(x, y, n) {
    if (n === 0) {
      console.log(result);
      return;
    }

    const size = Math.floor(2 ** (n - 1) / 2);
    const skip = 4 ** (n - 1);

    if (r < x && c < y) {
      divide(x - size, y - size, n - 1);
    } else if (r < x && c >= y) {
      result += skip;
      divide(x - size, y + size, n - 1);
    } else if (r >= x && c < y) {
      result += 2 * skip;
      divide(x + size, y - size, n - 1);
    } else {
      result += 3 * skip;
      divide(x + size, y + size, n - 1);
    }
  }
}

function main() {
  const fs = require("fs");
  let [n, r, c] = fs.readFileSync("./input.txt").toString().trim().split(" ").map(Number);
  solution(n, r, c);
}
main();

/**
 * 문제: Z (1074)
 * 테마: 분할정복
 * 출처: https://www.acmicpc.net/status?user_id=forzero100&problem_id=1074&from_mine=1
 *
 * [NOTE]
 * + 문제 조건을 봤을 때 최대 2^15 * 2^15 번 연산이 필요할 수 있으므로 선형 알고리즘은 안된다.
 * + 최대한 불필요한 부분은 생략하면서 범위를 줄여(divide) 가며 정답 위치를 찾는다.
 * + 이 때 핵심은, 타겟 좌표가 몇 사분면인지 탐색하면서 범위를 좁히는 것
 */
