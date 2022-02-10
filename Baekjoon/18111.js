function solution(n, m, b, array) {
  let result = [Infinity, 0];

  const min = Math.min(...array.flat());
  const max = Math.max(...array.flat());

  for (let height = min; height <= max; height++) calc(height);

  console.log(result.join(" "));

  function calc(height) {
    let blockStorage = b;
    let temp = 0;

    // 땅 파기
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < m; k++) {
        if (height < array[j][k]) {
          temp += 2 * (array[j][k] - height);
          blockStorage += array[j][k] - height;
        }
      }
    }

    // 땅 심기
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < m; k++) {
        if (height > array[j][k]) {
          temp += height - array[j][k];
          blockStorage -= height - array[j][k];
          if (blockStorage < 0) {
            return;
          }
        }
      }
    }

    if (result[0] >= temp) {
      result = [temp, height];
    }
  }
}

function main() {
  const fs = require("fs");
  let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

  const [n, m, b] = input[0].split(" ").map(Number);
  const array = input.slice(1).map((line) => line.split(" ").map(Number));

  solution(n, m, b, array);
}

main();

/**
 * 문제: 마인크래프트 (18111)
 * 테마: 구현, 브루트포스
 * 출처: https://www.acmicpc.net/problem/18111
 *
 * [NOTE]
 * + 문제 조건에서 주목할 점
 *   - 작업에 걸리는 최소 시간과 그 때 당의 높이
 *   - 답이 여러 개인 경우 "땅의 높이가 가장 높은 것을 출력"
 *
 * + 어려웠던 점
 *   - 처음 구현했던 방식은 땅을 팠을 때 시간 vs 땅을 심을 때 시간을 비교했다.
 *   - 모든 구현 조건은 맞춰졌으나, 단 1초의 차이로 땅을 한 번 더 갈아야하는 경우 처리를 생각하기 힘들었다.
 *
 * + 결론
 *   - 문제의 입력 조건을 계산 했을 때 최대는 500 * 500 * 256 이므로 브루트포스가 가능하다.
 *   - 맵의 최소, 최대 높이만 설정하고, 가능한 모든 높이에 대한 cost 비교를 통해 값을 구하면 된다.
 */
