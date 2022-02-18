function solution(n) {
  let dp = [1, 1, 2];

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
  }

  return dp[n] % 10007;
}

function main() {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const fs = require("fs");
  const input = fs.readFileSync(path).toString().trim().split("\n");

  const n = Number(input[0]);
  console.log(solution(n));
}
main();

/**
 * 문제: 2 * n 타일링 ( 11726 )
 * 테마: DP
 * 출처: https://www.acmicpc.net/problem/11726
 *
 * [NOTE]
 * + 대표적인 DP 예시 문제라고 한다.
 * + 점화식이 dp[i] = dp[i - 1] + dp[i - 2] ( 단, dp[0] = 1, dp[1] = 1, dp[2] )
 * + 이것이 정당화되는 이유를 파악하는 것이 포인트다.
 * + n = 4 정도일 때까지만 수기로 그려보기만 해도 감이 온다.
 *   - n 에 대해 끝 부분만 생각했을 때 2 * n 크기를 마무리 하는 방법은 n - 1 단계에서 2 * 1 짜리를 추가하던가
 *   - 아니면, n - 2 단계에서 2 * 2 길이 짜리 하나를 두는 방법 밖에 없기 때문이다.
 *   - 두 가지 경로로 만들어 질 수 있는 경우의 수를 합치는 것이 n 번째 타일링을 만드는 경우의 수가 된다.
 */
