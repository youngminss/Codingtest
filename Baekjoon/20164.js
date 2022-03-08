function solution(numbersString) {
  let minCount = Number.MAX_SAFE_INTEGER;
  let maxCount = Number.MIN_SAFE_INTEGER;
  const regExp = /[1|3|5|7|9]/g;

  recursive(numbersString, 0);
  return [minCount, maxCount].join(" ");

  function recursive(numbersString, cnt) {
    if (numbersString.length === 1) {
      cnt += numbersString.match(regExp)?.length || 0;
      minCount = Math.min(minCount, cnt);
      maxCount = Math.max(maxCount, cnt);
      return;
    }

    cnt += numbersString.match(regExp)?.length || 0;

    if (numbersString.length === 2) {
      const newNumbersString = String(
        numbersString
          .split("")
          .map(Number)
          .reduce((acc, cur) => (acc += cur), 0),
      );
      recursive(newNumbersString, cnt);
    } else {
      for (let i = 1; i < numbersString.length; i++) {
        for (let j = i + 1; j < numbersString.length; j++) {
          const left = numbersString.substr(0, i);
          const mid = numbersString.substr(i, j - i);
          const right = numbersString.substr(j, numbersString.length - j);

          const newNumbersString = String(Number(left) + Number(mid) + Number(right));
          recursive(newNumbersString, cnt);
        }
      }
    }
  }
}

function main() {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const fs = require("fs");
  const input = fs.readFileSync(path).toString().trim();

  console.log(solution(input));
}
main();

/**
 * 문제: 홀수 홀릭 호석 (20164)
 * 테마: 구현, 브루트포스, 재귀
 * 출처: https://www.acmicpc.net/problem/20164
 *
 * [NOTE 1]
 * + 문제를 풀다 막힌 부분 = 수가 세 자리 이상이면 "임의의 위치에서 끊어서" 3개의 수로 분할
 * + 여기서 말하는 "임의의 3개 수"로 숫자를 분할 할 때 정해진 범위가 없으니 "브루트포스" 를 사용해야하는 것 까진 파악했다.
 * + 근데, 실제 코드로 어떻게 할까..에서 좀 막혔다.
 * + 브루트포스 문제..더 풀어보자.
 */
