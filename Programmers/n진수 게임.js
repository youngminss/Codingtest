function makeNBase(maxLength, n) {
  let result = "";
  let i = 0;

  while (result.length < maxLength) {
    let convertedCurrentNumber = i.toString(n);
    result += convertedCurrentNumber;
    i++;
  }

  result = result.toUpperCase();
  return result;
}

function solution(n, t, m, p) {
  let nBase = makeNBase(t * m, n);
  let result = "";

  for (let i = p - 1; i < nBase.length; i += m) {
    result += nBase[i];
    if (result.length >= t) break;
  }

  return result;
}

solution(2, 4, 2, 1); // "0111"
solution(16, 16, 2, 1); // 	"02468ACE11111111"
solution(16, 16, 2, 2); // "13579BDF01234567"

/**
 * 문제: n진수 게임 (2018 KAKAO BLIND - Level 2)
 * 테마: 구현, 문자열
 * 출처: https://programmers.co.kr/learn/courses/30/lessons/17687
 *
 * [Approach]
 * + 최대로 체크해야하는 n진수 string 길이를 구한다. (t * m)
 *   - t = 말해야하는 갯수
 *   - m = 전체 참가 인원
 * + t * m 길이 만큼의 n진수로 이뤄진 nBase 를 반환 받는다.
 * + 반환받은 nBase 에 대해, p번째부터 m만큼 뛰어넘으면서 추출하고 반환한다.
 *
 * [NOTE]
 * + 자바스크립트 number 에서 n진법 string으로, n진법 string에 대해 number로 변환하는 법
 * https://jsikim1.tistory.com/161
 */
