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
 */
