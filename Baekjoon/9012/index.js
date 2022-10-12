const solution = (n, PSs) => {
  const isVPS = (PS) => {
    const stack = [];

    for (let i = 0; i < PS.length; i++) {
      if (PS[i] === "(") {
        stack.push(PS[i]);
      } else {
        if (stack.length === 0) return "NO";
        stack.pop();
      }
    }

    return stack.length !== 0 ? "NO" : "YES";
  };

  PSs.forEach((PS) => console.log(isVPS(PS)));
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const [n, ...input] = require("fs").readFileSync(path).toString().trim().split("\n");
  solution(+n, input);
};

main();

/**
 * 문제: 백준 - 괄호(9012)
 * 테마: 자료구조(스택)
 * 출처: https://www.acmicpc.net/problem/9012
 */
