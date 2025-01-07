const isPalindrome = (data) => {
  return data === data.split("").reverse().join("");
};

const solution = (data) => {
  if (isPalindrome(data)) {
    return 0;
  }

  let flag = false;
  for (let i = 0; i < parseInt(data.length / 2); i++) {
    if (data[i] !== data[data.length - 1 - i]) {
      if (isPalindrome(data.slice(0, i) + data.slice(i + 1))) {
        flag = true;
      }

      if (
        isPalindrome(
          data.slice(0, data.length - i - 1) + data.slice(data.length - i)
        )
      ) {
        flag = true;
      }

      break;
    }
  }

  return flag ? 1 : 2;
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");

  const result = [];

  for (let i = 1; i <= input.slice(1).length; i++) {
    result.push(solution(input[i]));
  }

  console.log(result.join("\n"));
};

main();

/**
 * 문제 : 회문
 * 테마 : 그리디, 구현
 * 출처 : https://www.acmicpc.net/problem/17609
 */

/**
 * 정당성 : 회문 체크하면서 서로 다른 순간이 왔을 때, 어느 한쪽을 지웠다는 가정하에 회문이면, 그것은 유사회문이다.
 * + (n / 2) 길이만큼 회문을 체크하되, 양쪽이 다른 순간이 온다면 한쪽이 제거했을 경우의 문자열이 회문인지 체크한다.
 * + 두 경우 회문이 아니라면, 그것은 회문도, 유사회문도 아니다.
 */
