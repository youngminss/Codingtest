function solution(survey, choices) {
  const typesMap = new Map();
  ["R", "T", "C", "F", "J", "M", "A", "N"].forEach((type) => typesMap.set(type, 0));

  choices.forEach((choice, i) => {
    const [disagree, agree] = survey[i];

    if (choice > 4) {
      typesMap.set(agree, typesMap.get(agree) + Math.abs(choice - 4));
    }

    if (choice < 4) {
      typesMap.set(disagree, typesMap.get(disagree) + Math.abs(choice - 4));
    }
  });

  return getMBTI(typesMap);
}

const getMBTI = (map) => {
  let result = "";

  result = result + (map.get("R") >= map.get("T") ? "R" : "T");
  result = result + (map.get("C") >= map.get("F") ? "C" : "F");
  result = result + (map.get("J") >= map.get("M") ? "J" : "M");
  result = result + (map.get("A") >= map.get("N") ? "A" : "N");

  return result;
};

// 입력부
// solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]); // "TCMA"
// solution(["TR", "RT", "TR"], [7, 1, 3]); // "RCJA"

/**
 * 문제: 프로그래머스 - 성격 유형 검사하기
 * 테마: 구현
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/118666?language=javascript
 *
 * [NOTE]
 * - 각 질문에 대해, 지표에서 4점(잘 모르겠음, 0점)을 기준으로, 유형 선택이 달라지는 것을 파악
 * - 각 질문에 대해, 유형 순서(survey 요소)의 순서가 보장되어 있지 않음을 파악
 *   -> 점수에 따라 추출되는 유형을 기반으로 빠르게 접근하기 위해 Map 자료형 사용
 * - 지표마다 두 유형의 점수가 같은 경우, 사전 순으로 빠른 유형을 선택한다는 점 반영
 */
