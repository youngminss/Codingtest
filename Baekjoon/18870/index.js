const solution = (n, arr) => {
  const result = [];
  const uniqueArr = Array.from(new Set(arr));
  const matrixCountMap = {};

  Array.from(uniqueArr).forEach((data) => {
    matrixCountMap[data] = -1;
  });

  uniqueArr.sort((a, b) => a - b);

  for (let i = 0; i < uniqueArr.length; i++) {
    if (matrixCountMap[uniqueArr[i]] === -1) {
      matrixCountMap[uniqueArr[i]] = i;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    result.push(matrixCountMap[arr[i]]);
  }

  return result.join(" ");
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");

  const n = Number(input[0]);
  const data = input[1].split(" ").map(Number);

  const result = solution(n, data);
  console.log(result);
};

main();

/**
 * 문제 : 좌표 압축
 * 테마 : 정렬, 자료형, 구현
 * 출처 : https://www.acmicpc.net/problem/18870
 */

/**
 * 좌표 압축 === 크기 순위 라는 것 이해할 것
 * Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 ㄴ다른 좌표 Xj의 개수와 같아야 한다 === 크기 대로 정렬하되, 중복을 허용하지 않는다. 는 것을 이해할 것
 * n = 1_000_000 이하 이므로, 최대 n 시간으로 해결 가능토록 적절한 자료형 사용할 것
 */
