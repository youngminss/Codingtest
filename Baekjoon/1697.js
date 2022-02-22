function solution(n, m) {
  n > m ? console.log(n - m) : bfs(n, m);

  function bfs(v, target) {
    const MAX = 100000;
    let visited = new Array(MAX + 1).fill(false);
    let queue = [[v, 0]];

    while (queue.length !== 0) {
      let [popV, step] = queue.shift();

      if (visited[popV]) continue;
      visited[popV] = true;

      if (popV === target) {
        console.log(step);
        break;
      }

      const jump = 2 * popV;
      const go = popV + 1;
      const back = popV - 1;

      if (jump <= MAX) {
        queue.push([jump, step + 1]);
      }

      if (go <= X) {
        queue.push([go, step + 1]);
      }

      if (back >= 0) {
        queue.push([back, step + 1]);
      }
    }
  }
}

function main() {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const fs = require("fs");
  const input = fs.readFileSync(path).toString().trim().split(" ");

  const [n, m] = input.map(Number);
  solution(n, m);
}
main();

/**
 * 문제: 숨바꼭질 (1697)
 * 테마: BFS
 * 출처: https://www.acmicpc.net/problem/1697
 *
 * [NOTE]
 * + 수빈(n)이 보다 동생(m)이 앞에 있으면 다른 방법은 없다. === 한 칸씩 뒤로 가는 수밖에 없다.
 * + 그렇지 않은 경우 bfs 를 진행한다.
 *   - 이 때 queue 에 하나의 원소는 [현재 위치, 누적 스탭 횟수]
 *   - 이미 방문한 위치의 경우, 무시한다.
 *   - 현재 위치가 동생인 위치라면, 현재 위치에 오기까지 누적 스탭 횟수를 출력
 *   - 그렇지 않은 경우, jump, go, back 케이스를 queue 에 넣는다.
 *   - 이 과정을 정답 찾을 때까지 반복한다.
 */
