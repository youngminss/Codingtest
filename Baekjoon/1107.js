function solution(n, notWorkedButtons) {
  const workedButtons = new Array(10)
    .fill()
    .map((_, i) => String(i))
    .filter((number) => !notWorkedButtons.includes(number));

  let result = Math.abs(n - 100);

  for (let i = 0; i < 1000000; i++) {
    let clickCount = getClickCount(String(i), workedButtons);
    if (clickCount === -1) continue;
    result = Math.min(result, clickCount + Math.abs(n - i));
  }

  return result;

  function getClickCount(n, workedButtons) {
    for (let i = 0; i < n.length; i++) {
      if (!workedButtons.includes(n[i])) {
        return -1;
      }
    }

    return n.length;
  }
}

function main() {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const fs = require("fs");
  const input = fs.readFileSync(path).toString().trim().split("\n");

  const [n, m] = [input[0], input[1]];
  const notWorkedButton = input[2] ? input[2].split(" ") : [];

  console.log(solution(Number(n), notWorkedButton));
}
main();

/**
 * 문제: 리모컨 (1107)
 * 테마: 브루트포스
 * 출처: https://www.acmicpc.net/problem/1107
 */
