const solution = (data) => {
  const max = Math.max(...data);
  const arrows = new Array(max).fill(0);

  let result = 0;
  for (let i = 0; i < data.length; i++) {
    if (arrows[data[i]] > 0) {
      arrows[data[i]] = arrows[data[i]] - 1;
      arrows[data[i] - 1] = arrows[data[i] - 1] + 1;
    } else {
      arrows[data[i] - 1] = arrows[data[i] - 1] + 1;
      result = result + 1;
    }
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
 * 문제 : 풍선 맞추기
 * 테마 : 그리디, 구현
 * 출처 : https://www.acmicpc.net/problem/11509
 */

/**
 * 정당성 : 현재 풍성을 터뜨리기위한 화살이 없다면 새로 사용한다. (단, 높이 h 에서 사용한 화살은 h - 1 부터 사용 가능하다는 점)
 * + 풍선의 높이들 중 M 만큼의 길이를 가지는 0 으로 초기화된 array 생성 (= 0~M 까지 높이 중에서 현재 사용 가능한 화살 수)
 * + 각 풍선 N 개를 순회하면서 배열 내 사용 가능한 화살이 있는지 확인하여 사용 후 증감 처리, 없다면 화살을 사용한 후 증감 처리와 화살 생성 카운드 증가
 *
 * 문제에서 제시한 룰을 정확하게 이해하는 것이 중요
 */
