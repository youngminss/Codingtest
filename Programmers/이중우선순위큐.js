function solution(operations) {
  let answer = [];

  for (let i = 0; i < operations.length; i++) {
    const [op, num] = operations[i].split(" ");

    if (op === "I") {
      answer.push(Number(num));
      answer.sort((a, b) => (a - b < 0 ? -1 : 1));
    }

    if (op === "D" && answer.length > 0) {
      if (Number(num) === -1) {
        answer.shift();
      }
      if (Number(num) === 1) {
        answer.pop();
      }
    }
  }

  return answer.length === 0 ? [0, 0] : [answer[answer.length - 1], answer[0]];
}

/**
 * 문제: 이중우선순위큐 (Level - 3)
 * 테마: 우선순위큐
 * 출처: https://programmers.co.kr/learn/courses/30/lessons/42628?language=javascript
 */
