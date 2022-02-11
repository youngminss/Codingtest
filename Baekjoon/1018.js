function compareWithStandardBoard(compareBoard, board, si, sj, ei, ej) {
  let result = 0;
  for (let x = si; x < ei; x++) {
    for (let y = sj; y < ej; y++) {
      if (compareBoard[x - si][y - sj] !== board[x][y]) {
        result++;
      }
    }
  }

  return result;
}

function solution(n, m, board) {
  let result = Number.MAX_SAFE_INTEGER;

  const standardBoard = {
    whiteFirstBoard: ["WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW"],
    blackFirstBoard: ["BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB"],
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let [ei, ej] = [i + 8, j + 8];
      if (!(0 <= ei && ei <= n) || !(0 <= ej && ej <= m)) break;

      result = Math.min(result, compareWithStandardBoard(standardBoard.blackFirstBoard, board, i, j, ei, ej));
      result = Math.min(result, compareWithStandardBoard(standardBoard.whiteFirstBoard, board, i, j, ei, ej));
    }
  }

  return result;
}

function main() {
  const fs = require("fs");
  let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

  const [n, m] = input[0].split(" ").map(Number);
  const board = input.slice(1);

  console.log(solution(n, m, board));
}
main();

/**
 * 문제: 체스판 다시 칠하기 (1018)
 * 테마: 브루트포스
 * 출처: https://www.acmicpc.net/problem/1018
 *
 * [NOTE]
 * + 문제 이해부터 제대로 하자.
 * + 현재 흰색 or 검은색의 단위 정사각형 이 NM 크기로 존재한다.
 * + 여기서 8 * 8 크기로 잘라 체스판을 만들 건데, 만들 수 있는 체스판 종류는 크게 2가지라는 점
 * + 목표는 최소한의 정사각형을 다시 칠하는 상황이다.
 * + 아무튼, 매 상황마다 8 * 8 크기로 자른 판을 "검은색 시작 체스판" or "흰색 시작 체스판" 두 상황 모두 체크해봐야한다.
 */
