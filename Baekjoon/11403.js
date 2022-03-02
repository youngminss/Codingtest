function solution(n, arr) {
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        // A -> B 로 경로가 있는데, B -> C 로 경로가 있다 ?
        // 그럼 A -> C 로도 경로가 있다 !
        if (arr[i][k] && arr[k][j]) {
          arr[i][j] = 1;
        }
      }
    }
  }

  let result = "";
  arr.forEach((line) => (result += line.join(" ") + "\n"));
  return result;
}

function main() {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const fs = require("fs");
  const input = fs.readFileSync(path).toString().trim().split("\n");

  const n = Number(input[0]);
  const arr = input.slice(1).map((line) => line.split(" ").map(Number));
  console.log(solution(n, arr));
}
main();

/**
 * 문제: 경로 찾기 (11403)
 * 테마: 그래프 탐색, 플로이드-와샬
 * 출처: https://www.acmicpc.net/problem/11403
 */
