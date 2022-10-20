const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const [e, s, m] = line.split(" ").map(Number);

  let n = 1;
  while (true) {
    if ((n - e) % 15 === 0 && (n - s) % 28 === 0 && (n - m) % 19 === 0) {
      process.stdout(n);
      process.exit();
    }
    n++;
  }
});

/**
 * 문제: 백준 - 날짜 계산(1476)
 * 테마: 브루트포스
 * 출처: https://www.acmicpc.net/problem/1476
 */
