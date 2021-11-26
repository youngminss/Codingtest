function convertToNmberTupleSets(tupleSets) {
  let result = [];
  let temp = [];
  let element = "";
  for (let i = 0; i < tupleSets.length; i++) {
    if (tupleSets[i] >= "0" && tupleSets[i] <= "9") {
      element += tupleSets[i];
    }
    if (tupleSets[i] === "," && element !== "") {
      temp.push(Number(element));
      element = "";
    }
    if (tupleSets[i] === "}") {
      temp.push(Number(element));
      result.push(temp);
      element = "";
      temp = [];
    }
  }
  return result;
}
function solution(s) {
  let result = [];
  let tupleSets = s.slice(1, s.length - 1);

  tupleSets = convertToNmberTupleSets(tupleSets);
  tupleSets.sort((a, b) => a.length - b.length);

  for (let tupleSet of tupleSets) {
    for (let element of tupleSet) {
      if (!result.includes(element)) {
        result.push(element);
        break;
      }
    }
  }

  return result;
}

solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"); //  [2, 1, 3, 4]
solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"); // [2, 1, 3, 4]
solution("{{20,111},{111}}"); // [111, 20]
solution("{{123}}"); // [123]
solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"); // [3, 2, 4, 1

/**
 * 문제 : 튜플 (2019 카카오 개발 인턴십 - Level 2)
 * 테마 : 구현, 문자열
 * 출처 : https://programmers.co.kr/learn/courses/30/lessons/64065
 *
 * [Approach]
 * + 문자열로 들어오는 N-Tuple을 숫자 리스트 형태로 변환한다.
 * + N-Tuple 리스트를 각 tupleSet의 길이에 대해 오름차순으로 정렬한다.
 *   - "순서"가 중요하기 때문
 *   - 길이가 1인 tupleSet부터 순회하면서 이전 tupleSet에는 없던 element를 찾아 넣으면 된다.
 *
 * [NOTE]
 * + 자바스크립트의 "함수형 프로그래밍"을 잘 활용하면 아름다우면서도 변태같은 해답도 만더라.
 * + https://programmers.co.kr/learn/courses/30/lessons/64065/solution_groups?language=javascript
 */
