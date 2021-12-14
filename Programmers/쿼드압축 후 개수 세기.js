function solution(arr) {
  let result = [0, 0];
  let size = arr[0].length;

  quardTree([0, 0], size);
  return result;

  function quardTree(pos, size) {
    let standard = arr[pos[0]][pos[1]];

    if (size === 1) {
      result[standard]++;
      return;
    }

    let half = size / 2;

    for (let i = pos[0]; i < pos[0] + size; i++) {
      for (let j = pos[1]; j < pos[1] + size; j++) {
        if (standard !== arr[i][j]) {
          quardTree(pos, half);
          quardTree([pos[0], pos[1] + half], half);
          quardTree([pos[0] + half, pos[1]], half);
          quardTree([pos[0] + half, pos[1] + half], half);
          return;
        }
      }
    }

    result[standard]++;
  }
}

solution([
  [1, 1, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
]); // [4,9]

solution([
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
]); // [10,15]

/**
 * 문제: 쿼드압축 후 개수 세기 (Level-2)
 * 테마: 재귀(분할정복)
 * 출처: https://programmers.co.kr/learn/courses/30/lessons/68936
 *
 * [Approach]
 * + 필요 준비물
 *   - 부분 2차원배열을 순회하기 위한 시작 지점 좌표
 *   - 그 시작 시점에서의 2차원 배열 크기
 *
 * + 기준 값 == 매 시점 2차원 배열의 첫 번째 원소
 *   - 2차원 배열을 돌면서, 하나라도 다른 값이 있다면, "쿼드분할"(= 재귀호출)을 해야한다.
 *   - 이 때 4면(1사분면, 2사분면, 3사분면, 4사분면) 에 각 시작 좌표와, 절반으로 줄어든 2차원 배열 크기를 전달
 * + 모든 원소가 같은지 체크 이전에, size === 1 인지 확인
 *   - 맞다면 -> 크기가 1 X 1 이므로, 해당 셀의 원소 갯수를 증감 시키면 된다.
 *   - 그리고 해당 시점의 재귀 탈출( 더 볼 필요가 없다. )
 * + 해당 시점의 2차워 배열을 전부 돌았는 데도, 기존 값과 다른 것이 하나도 없다면 쿼드압축 가능한 부분 2차원 배열
 *   - 기준 값의 개수를 통으로 취급해서 1 증감해준다.
 *
 * [NOTE]
 * + 인덱스 관리를 잘 못하면 런타임에러가 발생한다.
 * + 오로지 부분 2차워 배열의 크기만 관리하는 변수를 두고
 * + 4분할 되는 기준 좌표는 size 크기로 계산해서 변환 뒤 넘겨주는 것을 기억하자.
 */
