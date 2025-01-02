const compare = (a, b) => {
  if (a[0] === b[0]) {
    return a[2] - b[2];
  }

  return a[0] - b[0];
};

const solution = (data) => {
  let result = "";
  data.sort(compare);

  data.forEach((item) => {
    const [age, name] = item;
    result = result + `${age} ${name}\n`;
  });

  return result.trim();
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");

  const data = input.slice(1).map((element, index) => {
    const [age, name] = element.split(" ");
    return [Number(age), name, index];
  });

  const result = solution(data);
  console.log(result);
};

main();

/**
 * 문제 : 나이순 정렬
 * 테마 : 정렬
 * 출처 : https://www.acmicpc.net/problem/10814
 */

/**
 * 나이 순으로 정렬하되, 나이가 같으면 "먼저 가입한 순으로" 정렬하는 것이 포인트
 * 나이가 같을 경우, 다음 정렬 기준으로 사용할 가입한 순을 배열의 index 로 포함시켰다.
 */
