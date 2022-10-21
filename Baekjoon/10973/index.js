const solution = (n, targetSequence) => {
  if (targetSequence.join(" ") === [...targetSequence].sort((a, b) => (a - b < 0 ? -1 : 1)).join(" ")) {
    console.log(-1);
    return;
  }

  for (let i = n - 1; i > 0; i--) {
    if (targetSequence[i] < targetSequence[i - 1]) {
      for (let j = n - 1; j >= i; j--) {
        if (targetSequence[i - 1] > targetSequence[j]) {
          const temp = targetSequence[i - 1];
          targetSequence[i - 1] = targetSequence[j];
          targetSequence[j] = temp;

          console.log([...targetSequence.slice(0, i), ...targetSequence.slice(i).reverse()].join(" "));
          return;
        }
      }
    }
  }
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");

  solution(+input[0], input[1].split(" ").map(Number));
};

main();

/**
 * 문제: 백준 - 이전 순열(10973)
 * 테마: 구현, 수학, 조합론
 * 출처: https://www.acmicpc.net/problem/10973
 */
