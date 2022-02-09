function isCorrectBracket(brackets) {
  let stack = [];

  for (let i = 0; i < brackets.length; i++) {
    if (brackets[i] === "[" || brackets[i] === "(") {
      stack.push(brackets[i]);
    } else {
      if (brackets[i] === "]" && stack[stack.length - 1] !== "[") {
        return false;
      }
      if (brackets[i] === ")" && stack[stack.length - 1] !== "(") {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0 ? true : false;
}

function solution(lines) {
  let result = [];

  lines.forEach((line) => {
    const brackets = line.match(/[\[\(\)\]]/g);
    if (brackets === null) result.push("yes");
    else result.push(isCorrectBracket(brackets) ? "yes" : "no");
  });

  return result.join("\n");
}

function main() {
  const fs = require("fs");
  let input = fs.readFileSync("./p.txt").toString().trim().split("\n");

  console.log(solution(input.slice(0, -1)));
}

main();

/**
 * 문제: 균형잡힌 세상 (4949)
 * 테마: 스택, 문자열
 * 출처: https://www.acmicpc.net/problem/4949
 *
 * [NOTE]
 * + 문제의 핵심만 보면 괄호 문자만 빼고 나머진 필요없는 것 같아서 "정규 표현식"으로 필터링 해봤다.
 * + 원래 의도는 [, ], (, ) 가 아닌 것들을 replace 할려 했는데 그러지 못했다. 정규 표현식 연습이 필요해 보인다.
 */
