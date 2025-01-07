const solution = (data) => {
  const [n, k] = data;

  const summary = ((1 + k) * k) / 2;

  if (summary > n) {
    return -1;
  }

  return (n - summary) % k === 0 ? k - 1 : k;
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs")
    .readFileSync(path)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

  const result = solution(input);
  console.log(result);
};

main();

/**
 * 문제 : 박 터뜨리기
 * 테마 : 그리디, 수학
 * 출처 : https://www.acmicpc.net/problem/19939
 */

/**
 * 정당성 : 바구니에 볼을 나눠 담았을 때 가장 많은 것과 적은 것의 차이가 최소가 되려면, 바구니에 담긴 볼의 수가 최대한 연속적이면 된다.
 * + 바구니에 볼의 개수는 중복이 될 수 없다는 점 확인
 * + n 을 나눠 담기 위한 k 개의 바구니가 있을 때, 1 ~ k 까지의 합이 n 보다 크면 중복 없이 볼의 수가 다르게 만들 수 없다. = -1 반환
 * + 1~k 의 합을 n 에서 차감, 그 후 k 로 나눠 떨어졌을 때는 k - 1 (= 마지막 k, 첫번째 1), 나눠 떨어지지 않는 경우는 k 를 반환
 */
