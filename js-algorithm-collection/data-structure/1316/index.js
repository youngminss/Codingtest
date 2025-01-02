const solution = (n, words) => {
  let result = 0;

  for (i = 0; i < n; i++) {
    let isGroup = true;
    const lastWordStack = [words[i][0]];

    for (j = 1; j < words[i].length; j++) {
      if (lastWordStack[lastWordStack.length - 1] != words[i][j]) {
        if (lastWordStack.includes(words[i][j])) {
          isGroup = false;
          break;
        } else {
          lastWordStack.push(words[i][j]);
        }
      }
    }

    if (isGroup) {
      result = result + 1;
    }
  }

  return result;
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().split("\n");

  const n = Number(input[0]);
  const words = input.slice(1);

  const result = solution(n, words);
  console.log(result);
};

main();

/* 
  그룹단어체커 - https://www.acmicpc.net/problem/1316
  + 문자열, 자료형
  + 주어진 문자열 데이터가 연속된 알파벳으로 구성되었고, 이전과 중복되어 등장했는지 확인하는 문제
  + 문자열에 대해 좌측부터 시작, 바로 다음 문자와 비교해서 다른것이 등장했다면, 최근에 조회된 알파벳이 또 등장했는지 판단하는 방법으로 접근
  + 💡 bool flag 방식으로 체크했음
*/
