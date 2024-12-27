const solution = (data) => {
  const group = data.split("-");

  let result = 0;
  for (let i = 0; i < group.length; i++) {
    const groupSum = group[i]
      .split("+")
      .map(Number)
      .reduce((cal, cur) => cal + cur, 0);

    result = i === 0 ? result + groupSum : result - groupSum;
  }

  return result;
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim();

  const result = solution(input);
  console.log(result);
};

main();

/**
 * 문제 : 잃어버린 괄호
 * 테마 : 그리디, 문자열
 * 출처 : https://www.acmicpc.net/problem/1541
 */

/**
 * "+", "-", "0~9" 로 구성된 문자열 계산식에서 "연산 값의 최소" 를 만드는 것이 목표
 * 정당성 : 계산식에서 "-" 연산을 기준으로 좌항 우항을 최대한 많이 그룹화한다. 그룹핑된 각 그룹은 "+" 연산만 남는다. "-" 연산에 필요한 우항이 커질수록 최종 결과는 최소 값이 된다.
 */
