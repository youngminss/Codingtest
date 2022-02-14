function solution(n) {
  let dp = new Array(n + 1).fill(0);

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;

    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }

    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
  }

  return dp[n];
}

function main() {
  const fs = require("fs");
  let input = fs.readFileSync("./input.txt").toString().trim();

  const n = Number(input);
  console.log(solution(n));
}
main();

/**
 * 문제: 1로 만들기 (1463)
 * 테마: DP
 * 출처: https://www.acmicpc.net/problem/1463
 *
 * [사전 파악]
 * + 제한 실행시간은 0.15초, 상당히 적은 실행시간 제한인 것 확인
 * + 완전 탐색으론 통과하기 어렵다는 것 확인 필요
 * + 목표는 n 을 주어진 3가지 연산을 통해 최소한의 연산 횟수로 1을 만드는 것
 *
 * [핵심]
 * + DP로 풀이를 한다.
 * + DP의 각 인덱스는 숫자 n을 의미
 * + DP 배열에 연속적으로 연산한 숫자의 "최솟값"을 집어넣는 방식
 * + DP[n] 에 대해 3가지 연산 가능
 *   - 1을 뺀다 = DP[n - 1]
 *   - 2로 나누어 떨어진다 = DP[n / 2]
 *   - 3으로 나누어 떨어진다 = DP[n / 3]
 * + 어찌되었든 매번 n 에 대해 3가지 연산 중 가장 최적화된 연산을 해야한다.
 *   - 1차적으로 1을 뺀 값, 즉 바로 이전 n 에 대한 연산 횟수를 설정 :  dp[n - 1]
 *   - 이후 n이 2 나 3으로 나누어 떨어질 경우 현재 dp[n] 과 비교하여 더 최솟값인 것으로 dp[n]을 업데이트
 */
