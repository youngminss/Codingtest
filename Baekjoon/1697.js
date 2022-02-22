function solution(n, m) {
  n > m ? console.log(n - m) : console.log(bfs(n, m));

  function bfs(v, target) {
    const MAX = 100000;
    let queue = [v];
    let times = new Array(MAX + 1).fill(0);
    let visited = new Array(MAX + 1).fill(false);
    visited[v] = true;

    while (queue.length !== 0) {
      let popV = queue.shift();
      if (popV === target) break;

      const jump = 2 * popV;
      const go = popV + 1;
      const back = popV - 1;

      if (jump <= MAX && !visited[jump]) {
        queue.push(jump);
        visited[jump] = true;
        times[jump] = times[popV] + 1;
      }

      if (go <= MAX && !visited[go]) {
        queue.push(go);
        visited[go] = true;
        times[go] = times[popV] + 1;
      }

      if (back >= 0 && !visited[back]) {
        queue.push(back);
        visited[back] = true;
        times[back] = times[popV] + 1;
      }
    }

    return times[target];
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
 *   - 각 단계에서, 현재 위치가 동생 위치면 bfs 종료
 *   - 그렇지 않으면, jump, go, back 에 대한 각각의 과정을 진행
 *   - 아직 방문하지 않은 위치이며, 제한된 값을 넘지 않은 경우
 *     - queue 에 현재 위치 정보 넣기
 *     - 방문했음을 표시하기
 *     - 💡 이동한 위치에 가기까지 시간 === 현재 위치에서 +1
 * + bfs 가 종료되면 동생 위치(m) 에 times 배열 요소를 출력
 *
 */
