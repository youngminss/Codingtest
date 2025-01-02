const compare = (a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }

  return a[1] - b[1];
};
const solution = (data) => {
  data.sort(compare);

  let result = 1;
  let current = 0;

  for (let i = 1; i < data.length; i++) {
    if (data[current][1] <= data[i][0]) {
      result = result + 1;
      current = i;
    }
  }

  return result;
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");
  const data = input.slice(1).map((element) => element.split(" ").map(Number));

  const result = solution(data);
  console.log(result);
};

main();

/**
 * 문제 : 회의실 배정
 * 테마 : 그리디, 정렬
 * 출처 : https://www.acmicpc.net/problem/1931
 */

/**
 * 정당성 : 회의가 가장 빨리 끝나고, 그 다음으로 시작으로 회의가 이어서 사용되면 겹치지 않고 가장 많은 회의실을 사용할 수 있다.
 * + 회의 끝나는 시간 순으로 정렬 -> 회의가 시작하는 시간 순으로 정렬
 * + 현재 회의를 첫 번째 요소로 시작하고, 다음 요소부터 확인하며 현재 회의의 끝나는 시간보다 크거나 같은 요소가 있다면 그 요소가 현재 회의가 된다. 이를 n 까지 수행한다.
 */
