function solution(s) {
  let step = 0;
  let removedZeroCount = 0;

  while (s !== "1") {
    step++;

    removedZeroCount += s.match(/0/g) && s.match(/0/g).length;
    s = s.replace(/0/g, "");
    s = s.length.toString(2);
  }

  return [step, removedZeroCount];
}

solution("110010101001"); // [3,8]
solution("01110"); // [3,3]
solution("1111111"); // [4,1]

/**
 * 문제: 이진 변환 반복하기 (Level 2)
 * 테마: 구현, 문자열(정규표현식)
 * 출처: https://programmers.co.kr/learn/courses/30/lessons/70129
 *
 * [Approach]
 * + 인풋 s 가 '1'이 될 때까지만 반복
 *   - s 에 '0'이 1개라도 있다면, s에 있는 '0'의 갯수만큼 count 증가
 *   - s 를 '0'을 제외한 '1'로만 이뤄진 문자열로 변환 후, 그 s의 길이를 이진수로 변환한 문자열로 변경
 * + 모든 반복과정이 끝난 후에, [step, removedZeroCount] 배열을 반환
 */
