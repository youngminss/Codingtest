function isEmpty(brackets) {
  return brackets === "" ? true : false;
}

function isCorrectBracketsFor(brackets) {
  let openBracketCount = 0;

  for (let bracket of brackets) {
    if (bracket === "(") {
      openBracketCount++;
    } else {
      if (bracket === ")" && openBracketCount > 0) {
        openBracketCount--;
      } else if (bracket === ")" && openBracketCount <= 0) {
        return false;
      }
    }
  }

  return openBracketCount === 0 ? true : false;
}

function searchBaselineFor(blancedBrackets) {
  let openBracketCount = 0;
  let closeBracketCoint = 0;

  for (let idx = 1; idx < blancedBrackets.length; idx += 2) {
    blancedBrackets[idx - 1] === "(" ? openBracketCount++ : closeBracketCoint++;
    blancedBrackets[idx] === "(" ? openBracketCount++ : closeBracketCoint++;

    if (openBracketCount === closeBracketCoint) {
      return idx + 1;
    }
  }
}

function flipOver(splicedBrackets) {
  let result = "";
  for (let bracket of splicedBrackets) {
    result += bracket === "(" ? ")" : "(";
  }
  return result;
}

function solution(p) {
  if (isEmpty(p)) return "";
  if (isCorrectBracketsFor(p)) return p;

  const baseline = searchBaselineFor(p);

  let u = p.slice(0, baseline);
  let v = p.slice(baseline);

  let result = "(";
  if (isCorrectBracketsFor(u)) {
    return u + solution(v);
  } else {
    result += solution(v) + ")";
    result += flipOver(u.slice(1, u.length - 1));
  }

  return result;
}

console.log(solution("(()())()"));
console.log(solution(")("));
console.log(solution("()))((()"));

/**
 * 문제 : 괄호 변환 (프로그래머스, 2020 KAKAO BLIND, Level 2)
 * 테마 : 구현, 문자열, 재귀
 * 출처 : https://programmers.co.kr/learn/courses/30/lessons/60058
 *
 * [Approach]
 * + 문제에 조건이 많아보이지만, 이런 문제야말로 매우 친철한 문제다.
 * + 문제를 빠르게 이해하고 순서에 맞게 구현만 잘 해주면 풀리는 문제
 * + 문제를 이해했으면, 재귀를 하면서 반복적으로 필요한 작업은 함수로 빼놓으면 좋은 것 같다.
 *
 * 1. 빈 문자열인지 확인하고 빈 문자열이 맞으면 빈 문자열 반환
 * 2. u, v 에 대해 "균형잡힌 괄호 문자열을 분해"
 * 3. 그 다음 부터 u에 기준을 두고 분기한다.
 * 4. "올바른 괄호 문자열" 경우와 "올바른 괄호 문자열은 아닌" 경우로 나눠서 문제에서 제시해준대로 solution 함수를 "재귀"한 결과를 사용하면 된다.
 */
