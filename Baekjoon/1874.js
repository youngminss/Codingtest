function solution(n, sequnce) {
  let stack1 = [];
  let stack2 = [];
  let opSequnce = [];

  let i = 0;
  let number = 1;
  while (number <= n) {
    stack1.push(number);
    opSequnce.push("+");

    while (stack1.length > 0 && sequnce[i] === stack1[stack1.length - 1]) {
      stack2.push(stack1.pop());
      opSequnce.push("-");
      i++;
    }

    number++;
  }

  while (stack1.length !== 0) {
    stack2.push(stack1.pop());
  }

  const result = stack2.join("") === sequnce.join("") ? opSequnce.join("\n") : "NO";
  return result;
}

function main() {
  let fs = require("fs");
  let input = fs.readFileSync("./p.txt").toString().trim().split("\n");

  const n = Number(input[0]);
  const sequnce = input.slice(1).map(Number);

  console.log(solution(n, sequnce));
}

main();

/**
 * 문제: 스택 수열 (1874)
 * 테마: 스택
 * 출처: https://www.acmicpc.net/problem/1874
 *
 * [NOTE]
 * + 1 ~ n 까지 수를 스택에 push OR pop 과정에서, 단 push 순서는 반드시 오름차순을 지킨다는 조건이 중요
 */
