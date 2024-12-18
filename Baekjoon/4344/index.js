const solutions = (testCaseCount, testCases) => {
  let result = "";

  for (let i = 0; i < testCaseCount; i++) {
    const testCase = testCases.at(i).split(" ").map(Number);
    const scoreSize = testCase.at(0);
    const scores = testCase.slice(1);

    const scoreSum = scores.reduce((cal, cur) => cal + cur, 0);
    const average = scoreSum / scoreSize;

    let passCount = 0;
    for (let j = 0; j < scoreSize; j++) {
      if (scores[j] > average) {
        passCount = passCount + 1;
      }
    }

    result = result + `${((passCount / scoreSize) * 100).toFixed(3)}%\n`;
  }

  return result.trim();
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().split("\n");

  const testCaseCount = input.at(0);
  const textCases = input.slice(1);

  const result = solutions(testCaseCount, textCases);
  console.log(result);
};

main();

// 평균은 넘겠지 - https://www.acmicpc.net/problem/4344
// 배열, 사칙연산, 출력
