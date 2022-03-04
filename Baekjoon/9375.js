function solution(input) {
  const n = +input[0];

  let cursor = 0;
  for (let i = 1; i <= n; i++) {
    const map = {};
    const t = +input[++cursor];
    for (let j = 1; j <= t; j++) {
      input[j + cursor] = input[j + cursor].split(" ");
      const cloth = input[j + cursor][0];
      const kinds = input[j + cursor][1];

      if (map[kinds]) {
        map[kinds].push(cloth);
      } else {
        map[kinds] = [cloth];
      }
    }
    cursor += t;

    let cnt = 1;
    for (const key in map) {
      cnt *= map[key].length + 1;
    }

    console.log(cnt - 1);
  }
}

function main() {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const fs = require("fs");
  const input = fs.readFileSync(path).toString().trim().split("\n");

  solution(input);
}
main();

/**
 * 문제: 패션왕 신해빈 (9375)
 * 테마: 조합론
 * 출처: https://www.acmicpc.net/problem/9375
 *
 * [NOTE]
 * + 모든 옷에 대해 입을 수 있는 조합을 구한 것 - 1
 * + -1 은 알몸이 아닌 상태여야하기 때문에, 알몸인 경우 제외
 */
