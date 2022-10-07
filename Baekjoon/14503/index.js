const move = [
  [-1, 0], // 북
  [0, 1], // 동
  [1, 0], // 남
  [0, -1], // 서
];

const solution = (n, m, r, c, d, world) => {
  let result = 0;
  let visited = new Array(n).fill().map(() => new Array(m).fill(false));

  const travel = () => {
    let queue = [[r, c, d]];

    while (queue.length) {
      let [x, y, direction] = queue.shift();

      if (!world[x][y] && !visited[x][y]) {
        visited[x][y] = true;
        result += 1;
      }

      for (let i = 0; i < 4; i++) {
        direction = getDirection(--direction);
        const [nx, ny] = [x + move[direction][0], y + move[direction][1]];

        if (!world[nx][ny] && !visited[nx][ny]) {
          queue.push([nx, ny, direction]);
          break;
        }

        // 현재 위치에서 주변에 모든 청소가 이뤄진 경우
        if (i === 3) {
          const backDirection = getDirection(direction - 2);
          if (!world[x + move[backDirection][0]][y + move[backDirection][1]]) {
            queue.push([x + move[backDirection][0], y + move[backDirection][1], direction]);
            break;
          }
        }
      }
    }
  };

  const getDirection = (n) => (n < 0 ? n + 4 : n);

  travel();
  console.log(result);
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");

  const [n, m] = input[0].split(" ").map(Number);
  const [r, c, d] = input[1].split(" ").map(Number);
  const world = input.slice(2).map((line) => line.split(" ").map(Number));

  solution(n, m, r, c, d, world);
};

main();
