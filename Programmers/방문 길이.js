function solution(dirs) {
  const converter = { U: [0, 1], D: [0, -1], L: [-1, 0], R: [1, 0] };

  let playerPosHistory = [];
  let player = [0, 0];
  let nx, ny;
  for (let dir of dirs.split("")) {
    [nx, ny] = [player[0] + converter[dir][0], player[1] + converter[dir][1]];

    if (-5 <= nx && nx <= 5 && -5 <= ny && ny <= 5) {
      playerPosHistory.push(`${player}:${[nx, ny]}`);
      [player[0], player[1]] = [nx, ny];
    }
  }

  for (let i = 0; i < playerPosHistory.length - 1; i++) {
    let pos = playerPosHistory[i].split(":");

    for (let j = i + 1; j < playerPosHistory.length; j++) {
      let comp = playerPosHistory[j].split(":");
      if (pos[0] === comp[1] && pos[1] === comp[0]) {
        playerPosHistory.splice(j, 1);
        j--;
      }
    }
  }

  return new Set(playerPosHistory).size;
}

console.log(solution("ULURRDLLU")); // 7
console.log(solution("LULLLLLLU")); // 7
console.log(solution("UDU")); // 7

/**
 * 문제: 방문 길이 (Level-2)
 * 테마: 구현
 * 출처: https://programmers.co.kr/learn/courses/30/lessons/49994
 *
 * [Approach]
 * + 실제 2차원 좌표라고 가정하고 플레이어 위치 [0,0] 초기화
 * + U,D,L,R 에 대해 방향 데이터 선언
 * + 방향 dirs 를 하나씩 확인하면서 전진 가능한 방향이면 이동
 *   - 이동하면서 넣는 정보는 '(기준x,기준y):(이동x,이동y)'
 *   - 플레이어 새 위치로 업데이트
 *
 * + 중복된 경로 정보를 필터링 필요
 * + 최종적인 정답 좌표들의 길이를 반환
 *
 * [NOTE]
 * + 중복된 경로 정보를 필터링 할 때 주의점
 *   - 방향이 중요하지 않다.
 *   - 좌표의 개념으로 접근하지 마라.
 *   - 말 그대로 지나왔던 길인가 ? 를 확인해야한다.
 */
