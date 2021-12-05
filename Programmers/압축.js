function initDict() {
  let result = Array(26)
    .fill()
    .map((_, i) => {
      return [String.fromCharCode(65 + i), i + 1];
    });

  return Object.fromEntries(result);
}
function solution(msg) {
  let result = [];
  let dict = initDict();
  let i = 0;
  let temp = "";

  while (i < msg.length) {
    if (temp + msg[i] in dict) {
      temp += msg[i];
      i++;
    } else {
      result.push(dict[temp?.slice(0, temp.length)]);
      temp = temp + msg[i];
      dict[temp] = Object.entries(dict).length + 1;
      temp = "";
    }
  }
  result.push(dict[temp?.slice(0, temp.length)]);

  return result;
}

solution("KAKAO");
solution("TOBEORNOTTOBEORTOBEORNOT");
solution("ABABABABABABABAB");

/**
 * 문제: 압축 (2018 KAKAO BLIND - Level 2)
 * 테마: 구현
 * 출처: https://programmers.co.kr/learn/courses/30/lessons/17684
 *
 * [Approach]
 * + "A(1) ~ Z(26)" 에 해당하는 딕셔너리를 반환 받는다.
 * + i(0 ~ msg 길이), temp(초기화 = '')에 대해, 입력으로 받은 msg 길이만큼 반복할 것인데
 *   - temp + msg[i]가 현재 딕셔너리 내부에 있으면 temp 에 새로운 단어로 업데이트하고 i 인덱스 증가
 *   - temp + msg[i]가 현재 딕셔너리 내부에 없으면, 이전 단계 temp 단어에 대한 딕셔너리 색인 번호를 정답 배열에 추가
 *   - 그리고 새로운 단어에 대한 딕셔너리 업데이트 (i 인덱스는 증감하지 X)
 * + 반복 과정이 끝난 후, 마지막 작업 누락된 것 포함 시키기
 * + 정답 배열 반환
 *
 * [NOTE]
 * + 연속된 문자들에 대해 딕셔너리 생성하는 법
 *   + 간단한 방법
 *     - Strgin.split('').reduce(...) Function chainning 사용하기
 *     - https://programmers.co.kr/learn/courses/30/lessons/17684/solution_groups?language=javascript
 *
 *   + 2단계 걸쳐 생성
 *     + 원하는 연속된 원소들의 1차원 배열 생성
 *       - Array(정수).fill().map()
 *     + 2차원 배열에 -> { key: value } 객체로 만드는 법
 *       - Object.fromEntrie(배열)
 *     - https://velog.io/@loocia1910/3%EC%B0%A8%EC%9B%90-%EB%B0%B0%EC%97%B4-%ED%82%A4-%EA%B0%92-%EC%8C%8D%EC%9D%98-%EB%AA%A9%EB%A1%9D%EC%9D%98-%EB%B0%B0%EC%97%B4%EC%9D%84-%EA%B0%9D%EC%B2%B4%EB%A1%9C-%EB%B0%94%EA%BE%B8%EA%B8%B0-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C
 *
 * + 아스키코드 -> 문자열 변환
 *   - String.fromCharCode(아스키코드)
 *   - https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=diceworld&logNo=220175224345
 */
