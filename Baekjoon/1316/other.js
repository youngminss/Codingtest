const isGroupWord = (word) => {
  const wordSet = new Set(word[0]);

  for (let i = 0; i < word.length - 1; i++) {
    if (word[i] != word[i + 1]) {
      if (wordSet.has(word[i + 1])) {
        return false;
      } else {
        wordSet.add(word[i + 1]);
      }
    }
  }

  return true;
};

const solution = (n, words) => {
  let result = 0;

  for (let i = 0; i < n; i++) {
    if (isGroupWord(words[i])) {
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
  + 💡 Set 자료형을 활용해서 체크했음
*/
