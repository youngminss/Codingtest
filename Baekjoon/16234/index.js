const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const solution = (n, l, r, arr) => {
  const bfs = (x, y, visited) => {
    let queue = [];
    let union = [];

    queue.push([x, y]);
    union.push([x, y]);
    visited[x][y] = true;

    let population = arr[x][y];

    while (queue.length) {
      const [curX, curY] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [curX + dx[i], curY + dy[i]];

        if (0 <= nx && nx < n && 0 <= ny && ny < n && !visited[nx][ny]) {
          const difference = Math.abs(arr[curX][curY] - arr[nx][ny]);

          if (l <= difference && difference <= r) {
            visited[nx][ny] = true;
            queue.push([nx, ny]);
            union.push([nx, ny]);
            population += arr[nx][ny];
          }
        }
      }
    }

    union.forEach(([x, y]) => {
      arr[x][y] = Math.floor(population / union.length);
    });

    return union.length;
  };

  let result = 0;
  while (true) {
    let visited = new Array(n).fill().map((_) => new Array(n).fill(false));
    let flag = false;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (!visited[i][j]) {
          const unionCount = bfs(i, j, visited);

          if (unionCount > 1) {
            flag = true;
          }
        }
      }
    }

    if (!flag) break;
    result++;
  }

  console.log(result);
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");

  const [n, l, r] = input[0].split(" ").map(Number);
  const arr = input.slice(1).map((r) => r.split(" ").map(Number));

  solution(n, l, r, arr);
};

main();

/**
 * 문제: 16234 - 인구 이동
 * 테마: 구현, 그래프 탐색
 * 출처: https://www.acmicpc.net/problem/16234
 */
