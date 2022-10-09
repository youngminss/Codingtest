const solution = (n, tops) => {
  let result = [0];
  let stack = [];

  for (let i = 1; i < n; i++) {
    if (tops[i] < tops[i - 1]) {
      result.push(i);
      stack.push([i - 1, tops[i - 1]]);
      continue;
    }

    while (stack.length) {
      const pop = stack[stack.length - 1];
      if (tops[i] <= pop[1]) {
        result.push(pop[0] + 1);
        break;
      }

      stack.pop();
    }

    if (stack.length === 0) {
      result.push(0);
    }
  }

  console.log(result.join(" "));
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const [n, input] = require("fs").readFileSync(path).toString().trim().split("\n");
  solution(Number(n), input.split(" ").map(Number));
};

main();

/**
 * 문제: 백준 - 탑(2493)
 * 테마: 자료구조(스택)
 * 출처: https://www.acmicpc.net/problem/2493
 */
