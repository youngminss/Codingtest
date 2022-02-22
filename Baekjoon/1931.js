function compare(a, b) {
  if (a[1] === b[1]) {
    return a[0] - b[0] < 0 ? -1 : 1;
  }
  return a[1] - b[1] < 0 ? -1 : 1;
}
function solution(n, times) {
  let result = 1;

  times = times.sort(compare);

  let temp = times[0];
  for (let i = 1; i < times.length; i++) {
    if (times[i][0] >= temp[1]) {
      result++;
      temp = times[i];
    }
  }

  return result;
}

function main() {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const fs = require("fs");
  const input = fs.readFileSync(path).toString().trim().split("\n");

  const n = Number(input[0]);
  const times = input.slice(1).map((time) => time.split(" ").map(Number));
  console.log(solution(n, times));
}
main();

/**
 * 문제: 회의실 배정 (1931)
 * 테마: 그리디, 정렬
 * 출처: https://www.acmicpc.net/problem/1931
 *
 * [NOTE]
 * + 겹치지 않게 하면서 회의실을 사용할 수 있는 "최대 개수" 가 목표
 * + 끝나는 시간이 빠른순으로 >> 끝나는 시간이 같다면 시작하는 시간이 빠른 순으로 정렬하는 것이 포인트
 *   - 왜냐하면, "시작과 종료가 동일한 시간인 회의가 존재할 수 있기 때문"
 *   - 예를 들어 [1,1], [2,2], [1,2] 순서로 정보가 들어왔을 경우
 *   - 끝나는 시간으로만 정렬하면 "2번의 회의" 가능
 *   - 시작, 끝나는 시간 모두를 고려해서 정렬하면 "3번의 회의" 가능
 */
