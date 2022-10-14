const solution = (text, n, commands) => {
  let stackL = text.split("");
  let stackR = [];

  commands.forEach((command) => {
    const [op, value] = command.split(" ");

    if (op === "L" && stackL.length) {
      stackR.push(stackL.pop());
    } else if (op === "D" && stackR.length) {
      stackL.push(stackR.pop());
    } else if (op === "B") {
      stackL.pop();
    } else if (op === "P") {
      stackL.push(value);
    }
  });

  console.log([...stackL, ...stackR.reverse()].join(""));
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const [text, m, ...input] = require("fs").readFileSync(path).toString().trim().split("\n");

  solution(text, text.length, input);
};

main();

/**
 * 문제: 에디터
 * 테마: 자료구조(스택)
 * 출처: https://www.acmicpc.net/problem/1406
 */
