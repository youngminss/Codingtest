function getTetriminos() {
  return {
    0: [
      // - 은 대칭 존재 X
      [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
      ],
      [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
      ],
    ],
    1: [
      // ㅁ 은 대칭 존재 X
      [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1],
      ],
    ],
    2: [
      // ㄴ
      [
        [0, 0],
        [1, 0],
        [2, 0],
        [2, 1],
      ],
      [
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 0],
      ],
      [
        [0, 0],
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 2],
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      // ㄴ 대칭
      [
        [0, 1],
        [1, 1],
        [2, 0],
        [2, 1],
      ],
      [
        [0, 0],
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [0, 0],
        [0, 1],
        [1, 0],
        [2, 0],
      ],
      [
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 2],
      ],
    ],
    3: [
      // ㄹ
      [
        [0, 0],
        [1, 0],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 1],
        [0, 2],
        [1, 0],
        [1, 1],
      ],
      // ㄹ 대칭
      [
        [0, 1],
        [1, 0],
        [1, 1],
        [2, 0],
      ],
      [
        [0, 0],
        [0, 1],
        [1, 1],
        [1, 2],
      ],
    ],
    4: [
      // ㅗ 는 대칭 없음
      [
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 1],
      ],
      [
        [0, 1],
        [1, 0],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 1],
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [0, 0],
        [1, 0],
        [1, 1],
        [2, 0],
      ],
    ],
    length: 5,
  };
}

function solution(n, m, arr) {
  let result = 0;
  const tetriminos = getTetriminos();

  for (let i = 0; i < tetriminos.length; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < m; k++) {
        for (let x = 0; x < tetriminos[i].length; x++) {
          let temp = 0;
          for (let y = 0; y < tetriminos[i][x].length; y++) {
            const [offsetX, offsetY] = tetriminos[i][x][y];
            const [posX, posY] = [j + offsetX, k + offsetY];

            if (posX < 0 || posX >= n || posY < 0 || posY >= m) break;
            temp += arr[posX][posY];
          }

          if (temp !== 0) {
            result = Math.max(result, temp);
          }
        }
      }
    }
  }

  return result;
}

function main() {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const fs = require("fs");
  const input = fs.readFileSync(path).toString().trim().split("\n");
  const [n, m] = input[0].split(" ").map(Number);
  const arr = input.slice(1).map((line) => line.split(" ").map(Number));

  console.log(solution(n, m, arr));
}

main();

/**
 * 문제: 테트리미노 (14500)
 * 테마: 구현, 브루트포스
 * 출처: https://www.acmicpc.net/problem/14500
 *
 * [NOTE 1]
 * + 첫 번째 제출했을 때 틀렸습니다.
 * + 이유는, "대칭" 상태를 고려하지 못했다.
 * + 대칭을 고려하지 않았을 때 테트리미노 모양의 케이스는 "13가지"
 * + 대칭까지 고려할 경우, 모든 테트리미노 모양의 케이스는 "19가지" 다.
 * + 참고 : https://www.acmicpc.net/board/view/77989
 */
