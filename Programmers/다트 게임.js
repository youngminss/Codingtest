function applySquare(score, square) {
  const squareDict = { S: 1, D: 2, T: 3 };
  return score ** squareDict[square];
}

function applyOption(scores, option) {
  let result = [...scores];

  if (option === "#") {
    result[result.length - 1] *= -1;
  }
  if (option === "*") {
    if (result.length >= 2) {
      result[result.length - 2] *= 2;
    }
    result[result.length - 1] *= 2;
  }

  return result;
}

function solution(dartResult) {
  let result = [];
  let i = 0;
  let currentValue = "";

  while (i < dartResult.length) {
    if (dartResult[i] >= "0" && dartResult[i] <= "9") {
      currentValue += dartResult[i];
    }
    if (dartResult[i] === "S" || dartResult[i] === "D" || dartResult[i] === "T") {
      result.push(Number(currentValue));
      currentValue = "";
      result[result.length - 1] = applySquare(result[result.length - 1], dartResult[i]);
    }
    if (dartResult[i] === "#" || dartResult[i] === "*") {
      result = applyOption(result, dartResult[i]);
    }

    i++;
  }

  return result.reduce((acc, value) => acc + value, 0);
}

solution("1S2D*3T");
solution("1D2S#10S");
solution("1D2S0T");
solution("1S*2T*3S");
solution("1D#2S*3S");
solution("1T2D3D#");
solution("1D2S3T*");

/**
 * 문제: 다트 게임 (2018 KAKAO BLIND, Level 1)
 * 테마: 구현, 문자열 or 정규표현식
 * 출처: https://programmers.co.kr/learn/courses/30/lessons/17682
 *
 * [Approach]
 * + 입력으로 주어지는 dart string 을 인덱싱하면서 반복
 * + 제곱 관련 연산 만나기 전까지 숫자를 만든다.
 * + 다음은 제곱 관련 연산을 만나는 경우
 *   - 이전까지 만든 숫자를 배열에 넣어주고, 조건에 맞는 제곱근을 설정해준다.
 *   - 새로운 숫자를 만들기 위해 currentValue 는 초기화
 * + 마지막으로 옵션 연산을 만나는 경우
 *   - 음수를 곱하던지, 이전 값(존재 할 경우)과 현재 값에 2배수를 적용한다.
 * + 3개의 수가 담긴 배열의 합을 반환
 */
