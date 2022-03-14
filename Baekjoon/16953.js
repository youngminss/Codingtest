// 방법 1 - BFS
function solution(A, B) {
  let result = 0;
  let queue = [[A, 0]];

  while (queue.length !== 0) {
    const [num, step] = queue.shift();

    if (num === B) {
      result = step;
      break;
    }

    if (num < B) {
      queue.push([num * 10 + 1, step + 1]);
      queue.push([num * 2, step + 1]);
    }
  }

  return result === 0 ? -1 : result + 1;
}

// 방법 2 - DFS
function solution(A, B) {
  let result = 0;

  dfs(A, B, 0);

  return result === 0 ? -1 : result + 1;

  function dfs(A, B, step) {
    if (A === B) {
      result = step;
      return;
    }

    if (A * 2 <= B) {
      console.log(A * 2);
      dfs(A * 2, B, step + 1);
    }
    if (A * 10 + 1 <= B) {
      console.log(A * 10 + 1);
      dfs(A * 10 + 1, B, step + 1);
    }
  }
}

function main() {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const fs = require("fs");
  const input = fs.readFileSync(path).toString().trim().split(" ").map(Number);

  const [A, B] = input;
  console.log(solution(A, B));
}

main();

/**
 * 문제: A -> B (16953)
 * 테마: 그래프탐색, 그리디
 * 출처: https://www.acmicpc.net/problem/16953
 *
 * [NOTE 1]
 * 문제의 방향성
 * - 두 개의 데이터가 있고, 하나의 데이터가 다른 데이터가 되기 위한 최소한의 연산 횟수
 * - 연산할 수 있는 옵션이 있다.
 * - 기존의 수를 반복적으로 연산하면서 타겟을 맞추는 방법은 옳지 않다.
 * - 발생할 수 있는 연산의 경로를 추적해보는 것이 맞다.
 *
 * [NOTE 2]
 * BFS 로 해결하는 방법
 * - 해결된다. 다만 실행속도가 느리다.
 * - 기준 데이터가 작고 목표 데이터가 비교적 큰 수라면, 기준 데이터가 목표 데이터 수의 근접해질 때까지 불필요한 탐색이 필요하게 됨
 *
 * [NOTE 3]
 * DFS 로 해결하는 방법
 * - 해결된다. 비교적 BFS 보다 실행속도가 매우 빠르다.
 * - 기준 데이터가 작아도 최우선으로 목표 데이터의 가까워질 때까지 연산이 먼저 이뤄진다.
 * - 범위가 벗어나면, 한 단계 이전 단계에서 파생될 수 있는 근접한 수로 탐색이 가능하기 때문이라 생각함
 *
 */
