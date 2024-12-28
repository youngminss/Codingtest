const solution = (start, end) => {
  let result = 1;
  let flag = false;

  while (start <= end) {
    if (start === end) {
      flag = true;
      break;
    }

    if (end % 2 === 0) {
      end = parseInt(end / 2);
    } else if (end % 10 === 1) {
      end = parseInt(end / 10);
    } else {
      break;
    }

    result = result + 1;
  }

  return flag === false ? -1 : result;
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const [start, end] = require("fs")
    .readFileSync(path)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

  const result = solution(start, end);
  console.log(result);
};

main();

/**
 * 문제 : A -> B
 * 테마 : 그리디 or 그래프 탐색
 * 출처 : https://www.acmicpc.net/problem/16953
 */

/**
 * [그리디를 적용한 방식]
 * a -> b 로 변형이 가능하다면, 반대로 b -> a 로 되는 경우가 있는지 확인한다.
 * 1) 현재 b 값이 2 로 나누어 떨어지는 경우, 2 로 나누는 연산만 가능
 * 2) 그렇지 않고 현재 b 값이 10 으로 나누었을 때 1 로 떨어지는 경우, 10 으로 나누는 연산만 가능
 * 3) 위 두 경우가 아닌 경우는 조건에 맞지 않으므로 종료
 *
 * 이 외 다른 경우는 존재할 수 없다.
 * 매 상황마다가 이동할 수 있는 경로는 하나이므로 그리디 알고리즘에 해당한다.
 */
