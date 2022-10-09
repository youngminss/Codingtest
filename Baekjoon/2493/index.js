const solution = (n, tops) => {
  let result = [0]; // 가장 왼쪽 탑은 어차피 전파 받아줄 탑이 없으므로 0 으로 초기화
  let stack = []; // 가장 가깝게 전파를 받을 수 있는 탑 정보 스택

  for (let i = 1; i < n; i++) {
    // 현재 탑 기준, 바로 옆 탑이 전파를 받을 수 있으면 처리
    if (tops[i] < tops[i - 1]) {
      result.push(i);
      stack.push([i - 1, tops[i - 1]]);
      continue;
    }

    // 현재 탑 기준, 바로 옆 탑이 전파를 받을 수 없으면, 스택에 있는 탑 정보중 가장 가까운 탑 정보를 뽇아내면서 전파를 받을 탑 정보 처리
    while (stack.length) {
      const pop = stack[stack.length - 1];
      if (tops[i] <= pop[1]) {
        result.push(pop[0] + 1);
        break;
      }

      stack.pop();
    }

    // 만약에, 스택에 존재하는 탑 정보를 다 뽑아냈음에도 현재 탑의 전파를 받을 탑이 없을 경우 처리
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
