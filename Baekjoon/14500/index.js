const solution = (n, m, paper) => {
  const tetriminos = [
    // ㅡ
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
    // ㅁ
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
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
    // ㅗ
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
      [2, 0],
      [1, 1],
    ],
  ];

  let result = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      tetriminos.forEach((tetrimino) => {
        const [cell1, cell2, cell3, cell4] = [
          [i + tetrimino[0][0], j + tetrimino[0][1]],
          [i + tetrimino[1][0], j + tetrimino[1][1]],
          [i + tetrimino[2][0], j + tetrimino[2][1]],
          [i + tetrimino[3][0], j + tetrimino[3][1]],
        ];

        if (
          0 <= cell1[0] &&
          cell1[0] < n &&
          0 <= cell1[1] &&
          cell1[1] < m &&
          0 <= cell2[0] &&
          cell2[0] < n &&
          0 <= cell2[1] &&
          cell2[1] < m &&
          0 <= cell3[0] &&
          cell3[0] < n &&
          0 <= cell3[1] &&
          cell3[1] < m &&
          0 <= cell4[0] &&
          cell4[0] < n &&
          0 <= cell4[1] &&
          cell4[1] < m
        ) {
          result = Math.max(
            result,
            [
              paper[cell1[0]][cell1[1]],
              paper[cell2[0]][cell2[1]],
              paper[cell3[0]][cell3[1]],
              paper[cell4[0]][cell4[1]],
            ].reduce((acc, val) => (acc += val), 0),
          );
        }
      });
    }
  }

  console.log(result);
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");
  const [n, m] = input[0].split(" ").map(Number);

  solution(
    n,
    m,
    input.slice(1).map((line) => line.split(" ").map(Number)),
  );
};

main();

/**
 * 문제: 백준 - 테트리미노(14500)
 * 테마: 브루트포스
 * 출처: https://www.acmicpc.net/problem/14500
 */
