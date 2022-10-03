function solution(places) {
  return places.map((place) => (cycle(place) ? 1 : 0));
}

const cycle = (place) => {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (place[i][j] !== "P") continue;
      if (!isSafe(place, i, j)) return false;
    }
  }
  return true;
};

const isSafe = (place, x1, y1) => {
  // 검사해야할 범위 (바깥부터 시계방향으로)
  // [좌2, 좌상, 상2, 우상, 우2, 우하, 하2, 좌하, 좌1, 상1, 우1, 하1] 순
  const dx = [0, -1, -2, -1, 0, 1, 2, 1, 0, -1, 0, 1];
  const dy = [-2, -1, 0, 1, 2, 1, 0, -1, -1, 0, 1, 0];

  for (let i = 0; i < 12; i++) {
    const [x2, y2] = [x1 + dx[i], y1 + dy[i]];
    if (x2 < 0 || x2 > 4 || y2 < 0 || y2 > 4 || place[x2][y2] !== "P") continue;

    if (calculateManhattanDistance(x1, y1, x2, y2) <= 1) {
      return false;
    } else {
      if (x1 === x2 || y1 === y2) {
        const [midX, midY] = [Math.floor((x1 + x2) / 2), Math.floor((y1 + y2) / 2)];
        if (place[midX][midY] !== "X") return false;
      } else {
        if (x1 > x2 && y1 > y2) {
          if (!(place[x1 - 1][y1] === "X" && place[x1][y1 - 1] === "X")) return false;
        } else if (x1 > x2 && y1 < y2) {
          if (!(place[x1 - 1][y1] === "X" && place[x1][y1 + 1] === "X")) return false;
        } else if (x1 < x2 && y1 < y2) {
          if (!(place[x1 + 1][y1] === "X" && place[x1][y1 + 1] === "X")) return false;
        } else if (x1 < x2 && y1 > y2) {
          if (!(place[x1 + 1][y1] === "X" && place[x1][y1 - 1] === "X")) return false;
        }
      }
    }
  }
  return true;
};

const calculateManhattanDistance = (x1, y1, x2, y2) => {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
};

solution([
  ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
]); // [1, 0, 1, 1, 1]
