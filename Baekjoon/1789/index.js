const solution = (n) => {
  let result = 0;

  let i = 0;
  let j = 1;
  while (i <= n) {
    i = i + j;
    j = j + 1;
    result = result + 1;
  }

  return i === n ? result : result - 1;
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = Number(require("fs").readFileSync(path).toString().trim());

  const result = solution(input);
  console.log(result);
};

main();

/**
 * 문제 : 수들의 합
 * 테마 : 그리디
 * 출처 : https://www.acmicpc.net/problem/1789
 */

/**
 * 정당성 : (자연수라 했으니) 1부터 1씩 증감하면서 작은 값 들을 누적합 하는 것이 가장 많은 수를 사용하는 경우가 된다.
 *
 * 1부터 1씩 증감하면서 누적 합 하다가 목표 n 보다 크게 되는 시점의 카운트 -1 한다. (+1 하면서 사용된 수 중에 하나만 제거하면 무조건 원하는 n 을 만들 수 있기 때문)
 */
