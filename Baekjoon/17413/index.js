const solution = (sequence) => {
  let result = "";
  let stack = [];

  sequence.split("").forEach((c) => {
    if (c === "<") {
      if (stack.length) {
        result += `${stack.reverse().join("").split(" ").reverse().join(" ")}`;
        stack = [];
      }
      stack.push(c);
    } else if (c === ">") {
      result += `${stack.join("")}>`;
      stack = [];
    } else {
      stack.push(c);
    }
  });

  if (stack.length) {
    result += `${stack.reverse().join("").split(" ").reverse().join(" ")}`;
  }

  console.log(result);
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim();
  solution(input);
};

main();

/**
 * 문제: 백준 - 단어 뒤집기2(17413)
 * 테마: 문자열, 스택
 * 출처: https://www.acmicpc.net/problem/17413
 */
