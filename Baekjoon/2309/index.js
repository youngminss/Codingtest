const solution = (mans) => {
  mans.sort((a, b) => a - b);

  for (let a = 0; a < 9; a++) {
    for (let b = a + 1; b < 9; b++) {
      for (let c = b + 1; c < 9; c++) {
        for (let d = c + 1; d < 9; d++) {
          for (let e = d + 1; e < 9; e++) {
            for (let f = e + 1; f < 9; f++) {
              for (let g = f + 1; g < 9; g++) {
                if (
                  [mans[a], mans[b], mans[c], mans[d], mans[e], mans[f], mans[g]].reduce(
                    (acc, val) => (acc += val),
                    0,
                  ) === 100
                ) {
                  console.log([mans[a], mans[b], mans[c], mans[d], mans[e], mans[f], mans[g]].join("\n"));
                  return;
                }
              }
            }
          }
        }
      }
    }
  }
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");
  solution(input.map(Number));
};

main();

/**
 * 문제: 백준 - 일곱 난쟁이(2309)
 * 테마: 브루트포스
 * 출처: https://www.acmicpc.net/problem/2309
 */
