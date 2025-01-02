const solution = (data) => {
  let result = "";
  const numberCountArr = new Array(10).fill(0);

  for (let i = 0; i < data.length; i++) {
    const digit = Number(data[i]);
    numberCountArr[digit] = numberCountArr[digit] + 1;
  }

  for (let i = numberCountArr.length - 1; i >= 0; i--) {
    if (numberCountArr[i] !== 0) {
      for (let j = 0; j < numberCountArr[i]; j++) {
        result = result + `${i}`;
      }
    }
  }

  return result;
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim();

  const result = solution(input);
  console.log(result);
};

main();

/**
 * 문제 : 소트인사이드
 * 테마 : 정렬, 계수정렬
 * 출처 : https://www.acmicpc.net/problem/1427
 */

/**
 * 각 자리수는 0~9 의 숫자, 그리고 각 숫자들을 내림차순으로 정렬하는 것이 포인트
 * 0~9 사이의 숫자가 등장한 "빈도 수" 를 배열 인덱스에 매핑
 * 이를 역순으로 (오름차순이면 정방향으로) 확인하면서, 인덱스에 해당하는 배열의 값 만큼 현재 index 를 이어붙이면 정렬된 수가 출력됨
 */
