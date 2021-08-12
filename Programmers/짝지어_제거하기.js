function solution(s) {
  let stack = [];

  for (let c of s) {
    if (stack.length > 0) {
      if (stack[stack.length - 1] === c) {
        stack.pop();
        while (stack.length >= 2) {
          if (stack[stack.length - 1] === stack[stack.length - 2]) {
            stack.pop();
            stack.pop();
          } else {
            break;
          }
        }
      } else {
        stack.push(c);
      }
    } else {
      stack.push(c);
    }
  }
  return stack.length === 0 ? 1 : 0;
}

function betterSolution(s) {
  let stack = [];

  for (let c of s) {
    if (stack.length === 0) stack.push(c);
    else if (stack[stack.length - 1] === c) stack.pop();
    else stack.push(c);
  }

  return stack.length === 0 ? 1 : 0;
}

console.log(solution("cdcd"));
console.log(betterSolution("cdcd"));

// baabaa => 1
// cdcd => 0

/**
 * 문제 : 짝지어 제거하기
 * 테마 : 스택
 * 출처 : https://programmers.co.kr/learn/courses/30/lessons/12973
 *
 * 해법
 * - 입력되는 문자열을 담을 스택이 하나있다.
 * - 문자열을 처음부터 끝까지 순회하면서, 현재 스택이 비어있으면 체크할 것 없으므로, 스택에 현재 문자 push
 * - 스택이 비어있지 않으면, 스택의 top 값이랑, 현재 문자를 비교해서 같으면, 스택에서 하나 pop
 * - 그 예외케이스의 경우도, 그냥 스택에 push
 * - 문자열 한번 쭉 돌고나서, 스택이 비어있으면 짝짓기가 성공(1), 스택이 남아있으면 짝짓기 실패(0) 반환
 */
