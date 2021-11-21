function initfailureRatios(N) {
  let result = {};
  for (let i = 1; i <= N; i++) {
    result[i] = 0;
  }
  return result;
}
function solution(N, stages) {
  let failureRatios = initfailureRatios(N);

  for (let i = 1; i <= N; i++) {
    let reachPlayerofCurrentStage = stages.reduce((cnt, stage) => cnt + (stage >= i), 0);
    let reachOnlyPlayerOfCurrentStage = stages.reduce((cnt, stage) => cnt + (stage === i), 0);

    failureRatios[i] = reachOnlyPlayerOfCurrentStage / reachPlayerofCurrentStage;
  }

  let sortedFailureRatio = Object.entries(failureRatios).sort((currentStage, nextStage) => nextStage[1] - currentStage[1]);
  return sortedFailureRatio.map((el) => Number(el[0]));
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3,4,2,1,5]
console.log(solution(4, [4, 4, 4, 4, 4])); // [4,1,2,3]

/**
 * 문제 : 실패율 (2019 KAKAO BLIND, Level 1)
 * 테마 : 구현
 * 출처 : https://programmers.co.kr/learn/courses/30/lessons/42889
 *
 * [Approach]
 * 1. 1~N 까지를 key 로 가지는 실패율 딕셔너리를 초기화
 * 2. 1~N 까지 반복문을 돌리면서 각 i(stage)에 대해서 i(stage)까지 도달한 플레이어와 도달했지만 머물고 있는 플레이어 수를 각각 구함
 * 3. 각 stage에 대한 실패율(도달했지만 머문 플레이어 수 / 도달한 플레이어 수)을 구한다.
 * 4. 정답 딕셔너리를 [stage, failureRatio] 정보들이 담긴 배열로 변환 후, failureRatio 기준으로 내림차순 정렬
 * 5. stage 값만 뽑아내서 반환
 *
 * [Note]
 * JS 객체 -> 배열 변환 방법s
 * https://blogpack.tistory.com/496
 *
 * JS 배열 -> 객체 변환 방법s
 * https://www.delftstack.com/ko/howto/javascript/array-to-objects-javascript/
 * https://codingbroker.tistory.com/75
 *
 * JS 배열 내 특정 값 갯수 구하는 방법s
 * https://hianna.tistory.com/488
 */
