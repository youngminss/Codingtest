function solution(n, a, b) {
  return tournament(1, a, b);

  function tournament(round, a, b) {
    let curRoundA = (a / 2).toFixed(0);
    let curRoundB = (b / 2).toFixed(0);

    return curRoundA === curRoundB ? round : tournament(round + 1, curRoundA, curRoundB);
  }
}

console.log(solution(8, 4, 7));
console.log(solution(8, 4, 5));

/**
 * 문제: 예상 대진표 (Level-2)
 * 테마: 재귀 or 이진탐색
 * 출처: https://programmers.co.kr/learn/courses/30/lessons/12985
 *
 * [Approach]
 * + 두 플레이어가 시작 위치에서 서로 같은 라운드에서 만나는 시점
 *   - 같은 조에 있는 경우
 *   - 단, 이것이 플레이어A의 위치와 플레이어B의 위치가 단순히 1 차이가 나는 것으로 판단하면 X
 *   - (예외케이스 = (A,4) (B,5) 일 경우 = A는 2조에 있고, B는 3조에 있는 것
 */
