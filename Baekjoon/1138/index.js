const solution = (n, arr) => {
  let result = new Array(n).fill(0);

  for (let i = 1; i < n + 1; i++) {
    let left = arr[i - 1];
    let count = 0;

    for (let j = 0; j < n; j++) {
      if (count === left && result[j] === 0) {
        result[j] = i;
        break;
      } else if (result[j] === 0) {
        count += 1;
      }
    }
  }

  console.log(result.join(" "));
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  let input = require("fs").readFileSync(path).toString().trim().split("\n");

  const n = Number(input[0]);
  const arr = input[1].split(" ").map(Number);

  solution(n, arr);
};

main();

/**
 * 문제: 1138 - 한 줄로 서기
 * 테마: 구현, 그리디
 * 출처: https://www.acmicpc.net/problem/1138
 */
