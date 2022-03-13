function solution(n, k, items) {
  items = [[0, 0], ...items];
  items.sort((a, b) => (a[0] < b[0] ? -1 : 1));

  let table = new Array(n + 1).fill().map(() => new Array(k + 1).fill(0)); // 0 번째 열은 제한 무게 제한 0 일 경우

  // item[0] = 무게, item[1] = 가치
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      const [wt, val] = items[i];
      if (j < wt) {
        table[i][j] = table[i - 1][j];
      } else {
        table[i][j] = Math.max(val + table[i - 1][j - wt], table[i - 1][j]);
      }
    }
  }

  return table[n][k];
}

function main() {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const fs = require("fs");
  const input = fs.readFileSync(path).toString().trim().split("\n");

  const [n, k] = input[0].split(" ").map(Number);
  const items = input.slice(1).map((item) => item.split(" ").map(Number));
  console.log(solution(n, k, items));
}
main();

/**
 * 문제: 평범한 배낭 ( 12865 )
 * 테마: 그리디, DP
 * 출처: https://www.acmicpc.net/problem/12865
 *
 * [NOTE 1]
 * + "가치합의 최대값" 이라는 확실한 목표가 있다.
 * + "넣을 수 있고(1)" 또는 "안넣을 수도 있다.(0)" 을 통해 "0 / 1 배낭문제"
 *
 * [NOTE 2]
 * + 그리디하게 접근
 *   - 1. 무게가 적은 순으로 물건을 담아보면 ? -> X
 *     - 포함하지 않은 물건 하나만 담았는데, 그 물건의 가치가 다른 것들의 가치합보다 크다면 ?
 *   - 2. 가치가 큰 물건부터 담아보면 ? -> X
 *     - 앞서 담은 물건의 가치합보다, 이후 담은 물건들의 가치 합이 크다면 ?
 * + 결과적으로, 단순 그리디하게 접근은 옳지 않다.
 *
 * [NOTE 3]
 * + 브루트 포스로 접근
 *   - 각 아이템에 대해 넣거나(1), 빼거나(0)를 할 수 있다.
 *   - n 개의 아이템에 대해 담아볼 수 있는 모든 경우의 수는 2^n 번을 수행해야 알 수 있다.
 *   - 이는, n 이 100 이상만 되어도 1억번 이상의 연산이 필요하므로 효율적인 방법이 아니라는 것을 알 수 있다.
 * + 결과적으로, 브루트포스한 방법도 옳지 않다.
 *
 * [NOTE 4]
 * + DP를 이용한 방법
 *   - 브루트포스 방식의 경우 배낭에 담을 수 있는 최대 무게를 고려하지 않고, 만들 수 있는 모든 조합을 생각하기 때문에 compact 하지 못한 것
 *   - 이를, "가방의 무게" 에 대한 테이블(= 2차원 DP)을 이용해서 해결할 경우, 최대 O(K * N) 번의 좀 더 compact 한 실행 시간을 보장한다.
 *   - 여기서 k 는 "가방의 최대 무게"를 n 은 "아이템의 수([무게, 가치] 를 저장됨)"
 * + 결과적으로, 이 방식을 통해 문제를 해결할 수 있다.
 * + 참고: https://www.youtube.com/watch?v=8LusJS5-AGo
 */
