const solution = (n, numbers) => {
  let result = "";
  let numbersIdx = 0;
  let currentNumber = 1;
  let stack = [];

  while (currentNumber <= n) {
    stack.push(currentNumber++);
    result += "+";

    while (stack.length > 0 && stack[stack.length - 1] === numbers[numbersIdx]) {
      stack.pop();
      result += "-";
      numbersIdx++;
    }
  }

  console.log(stack.length ? "NO" : result.split("").join("\n"));
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const [n, ...input] = require("fs").readFileSync(path).toString().trim().split("\n");
  solution(+n, input.map(Number));
};

main();

/**
 * 문제: 백준 - 스택 수열(1874)
 * 테마: 자료구조(스택)
 * 출처: https://www.acmicpc.net/problem/1874
 */
