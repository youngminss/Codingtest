const moveMap = {
  0: [-2, -1],
  1: [-2, 1],
  2: [-1, 2],
  3: [1, 2],
  4: [2, 1],
  5: [2, -1],
  6: [1, -2],
  7: [-1, -2],
};
const solution = (startPosition, targetPosition, size, world) => {
  const [sx, sy] = startPosition;
  const [tx, ty] = targetPosition;

  const queue = [[sx, sy]];
  world[sx][sy] = 0;

  while (queue.length !== 0) {
    const [x, y] = queue.shift();

    if (x === tx && y === ty) {
      break;
    }

    for (let i = 0; i < 8; i++) {
      const nx = x + moveMap[i][0];
      const ny = y + moveMap[i][1];

      if (0 <= nx && nx < size && 0 <= ny && ny < size && world[nx][ny] === 0) {
        world[nx][ny] = world[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  return world[tx][ty];
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");

  const n = Number(input.shift());
  const result = [];
  for (let i = 0; i < n; i++) {
    const size = Number(input.shift());
    const startPosition = input.shift().split(" ").map(Number);
    const targetPosition = input.shift().split(" ").map(Number);

    const world = new Array(size).fill(null).map(() => new Array(size).fill(0));
    result.push(solution(startPosition, targetPosition, size, world));
  }

  console.log(result.join("\n"));
};

main();

/**
 * 문제 : 나이트의 이동
 * 테마 : 그래프 탐색, BFS
 * 출처 : https://www.acmicpc.net/problem/7562
 */
