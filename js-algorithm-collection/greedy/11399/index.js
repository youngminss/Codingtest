const solution = (data) => {
  let result = 0;

  data.sort((a, b) => a - b);

  for (let i = 0; i < data.length; i++) {
    let cal = 0;
    for (let j = 0; j < i; j++) {
      cal = cal + data[j];
    }
    result = cal + result + data[i];
  }

  return result;
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");

  const data = input[1].split(" ").map(Number);
  const result = solution(data);
  console.log(result);
};

main();

/**
 * 문제 : ATM
 * 테마 : 그리디
 * 출처 : https://www.acmicpc.net/problem/11399
 */

/**
 * 정당성 : 앞에 있는 사람의 ATM 출력 시간이 적을 수록, 내 차례가 올때까지 ATM 출력 시간이 가장 적다.
 * 입력되는 인풋에 대해 일차적으로 "오름차순으로 정렬"하고, 이들의 "누적 합" 을 구한다.
 */
