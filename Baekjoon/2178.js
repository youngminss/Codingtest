function solution(n, m, arr) {
  bfs();
  return arr[n - 1][m - 1];

  function bfs() {
    let visited = new Array(n).fill().map((_) => new Array(m).fill(false));
    visited[0][0] = true;
    let queue = [[0, 0]];
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];

    while (queue.length !== 0) {
      let [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (0 <= nx && nx < n && 0 <= ny && ny < m) {
          if (!visited[nx][ny] && arr[nx][ny] === 1) {
            visited[nx][ny] = true;
            queue.push([nx, ny]);
            arr[nx][ny] = arr[x][y] + 1;
          }
        }
      }
    }
  }
}

function main() {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const fs = require("fs");
  const input = fs.readFileSync(path).toString().trim().split("\n");

  const [n, m] = input[0].split(" ").map(Number);
  const arr = input.slice(1).map((line) => line.split("").map(Number));
  console.log(solution(n, m, arr));
}
main();

/**
 * 문제: 미로탐색 (2178)
 * 테마: 그래프 탐색
 * 출처: https://www.acmicpc.net/problem/2178
 */
