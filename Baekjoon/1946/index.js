const compare = (a, b) => {
  return a[0] - b[0];
};

const solution = (data) => {
  data.sort(compare);

  let result = 1;
  let minPass = data[0][1];
  for (let i = 1; i < data.length; i++) {
    if (data[i][1] < minPass) {
      result++;
      minPass = data[i][1];
    }
  }

  return result;
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");

  const result = [];
  const t = Number(input.shift());
  for (let i = 0; i < t; i++) {
    const n = Number(input.shift());
    const data = input.splice(0, n).map((v) => v.split(" ").map(Number));

    result.push(solution(data));
  }

  console.log(result.join("\n"));
};

main();

/**
 * 문제 : 신입 사원
 * 테마 : 그리디, 정렬
 * 출처 : https://www.acmicpc.net/problem/1946
 */

/**
 * 정당성 : [서류 점수, 면접 점수] 리스트에 대해, 서류 점수에 대해 오름차순으로 정렬된 데이터에서 본인 기준 앞에 있는 사람들 중에 본인보다 면접 점수 우선 순위가 높은 사람이 있는지만 확인하면 된다.
 */

/**
 * 테스트 케이스 입력이 까다롭다 ;;
 */
