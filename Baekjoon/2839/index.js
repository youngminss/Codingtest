const solution = (data) => {
  if (data % 5 === 0) {
    return parseInt(data / 5);
  }

  const start = parseInt(data / 5);

  for (let i = start; i > 0; i--) {
    if ((data - i * 5) % 3 === 0) {
      return i + parseInt((data - i * 5) / 3);
    }
  }

  return data % 3 === 0 ? parseInt(data / 3) : -1;
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = Number(require("fs").readFileSync(path).toString().trim());

  const result = solution(input);
  console.log(result);
};

main();

/**
 * 문제 : 설탕 배달
 * 테마 : 그리디, 수학
 * 출처 : https://www.acmicpc.net/problem/2839
 */

/**
 * 정당성 : 가능한 5 킬로그램 봉지에 담을 수 있으면 최대한 담는다. 그러면 최소 봉지 수만 사용 가능하다.
 */
