function solution(n, commonColorMap, blindColorMap) {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const commonVisited = new Array(n).fill().map((_) => new Array(n).fill(false));
  const blindVisited = new Array(n).fill().map((_) => new Array(n).fill(false));
  let commonAreaCount = 0;
  let blindAreaCount = 0;

  // 정상 dfs
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!commonVisited[i][j]) {
        const standardColor = commonColorMap[i][j];
        dfs(i, j, standardColor, commonVisited, commonColorMap);
        commonAreaCount = commonAreaCount + 1;
      }
    }
  }

  // 색맹 dfs
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!blindVisited[i][j]) {
        const standardColor = blindColorMap[i][j];
        dfs(i, j, standardColor, blindVisited, blindColorMap);
        blindAreaCount = blindAreaCount + 1;
      }
    }
  }

  return [commonAreaCount, blindAreaCount].join(" ");

  function dfs(x, y, standard, visitedMap, colorMap) {
    if (!visitedMap[x][y] && colorMap[x][y] === standard) {
      visitedMap[x][y] = true;

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (0 <= nx && nx < n && 0 <= ny && ny < n) {
          dfs(nx, ny, standard, visitedMap, colorMap);
        }
      }
    }
  }
}

function main() {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const fs = require("fs");
  const input = fs.readFileSync(path).toString().trim().split("\n");

  const n = Number(input[0]);

  let blindMaps = input.slice(1).map((line) =>
    line
      .split("")
      .map((color) => (color === "G" ? "R" : color))
      .join(""),
  );
  console.log(solution(n, input.slice(1), blindMaps));
}
main();

/**
 * 문제: 적록색약 (10026)
 * 테마: 그래프 탐색
 * 출처: https://www.acmicpc.net/problem/10026
 *
 * [NOTE]
 * + [정상인 컬러맵, 정상인 컬러맵에 대한 방문배열], [색약인 컬러맵, 색약인 컬러맵에 대한 방문배열] 정보가 필요하다.
 * + 정상인, 색약인에 대한 영역 카운트는 dfs 를 적용한다.
 * + n^2 을 순회하면서 아직 방문하지 않은 영역이 있다면 최대한 dfs 로 체크해보면서 모든 맵을 순회한다.
 * + 정상인, 색약인에 대해 동일한 작업을 한 뒤, 정상인과 색약인에 대한 영역 카운트를 출력한다.
 */
