function makeOperatorSequence(expression) {
  let result = [];
  expression.includes("+") && result.push("+");
  expression.includes("-") && result.push("-");
  expression.includes("*") && result.push("*");
  return result;
}
function makeOperatorPermutaions(operatorInExpression) {
  let result = [];
  if (operatorInExpression.length === 1) {
    result.push(operatorInExpression);
  }
  if (operatorInExpression.length === 2) {
    result.push([operatorInExpression[0], operatorInExpression[1]]);
    result.push([operatorInExpression[1], operatorInExpression[0]]);
  }
  if (operatorInExpression.length === 3) {
    result.push([operatorInExpression[0], operatorInExpression[1], operatorInExpression[2]]);
    result.push([operatorInExpression[0], operatorInExpression[2], operatorInExpression[1]]);
    result.push([operatorInExpression[1], operatorInExpression[0], operatorInExpression[2]]);
    result.push([operatorInExpression[1], operatorInExpression[2], operatorInExpression[0]]);
    result.push([operatorInExpression[2], operatorInExpression[0], operatorInExpression[1]]);
    result.push([operatorInExpression[2], operatorInExpression[1], operatorInExpression[0]]);
  }
  return result;
}
function extractOnlyOerands(expression) {
  let result = [];
  let temp = "";
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] >= "0" && expression[i] <= "9") {
      temp += expression[i];
    } else {
      result.push(Number(temp));
      temp = "";
    }
  }
  result.push(Number(temp));
  return result;
}
function extractOnlyOperators(expression) {
  let result = [];
  for (let i = 0; i < expression.length; i++) {
    if (!(expression[i] >= "0" && expression[i] <= "9")) {
      result.push(expression[i]);
    }
  }
  return result;
}
function calculate(left, right, operator) {
  if (operator === "+") {
    return left + right;
  }
  if (operator === "-") {
    return left - right;
  }
  if (operator === "*") {
    return left * right;
  }
}
function calculateByPriority(operands, operators, priority) {
  for (let i = 0; i < priority.length; i++) {
    while (operators.includes(priority[i])) {
      let j = 0;
      while (operators[j] !== priority[i]) {
        j++;
      }
      let calculatedValue = calculate(operands[j], operands[j + 1], priority[i]);
      operators.splice(j, 1);
      operands.splice(j, 2, calculatedValue);
    }
  }
  return Math.abs(operands[0]);
}

function solution(expression) {
  let result = [];
  const operatorInExpression = makeOperatorSequence(expression);
  const operatorPermutations = makeOperatorPermutaions(operatorInExpression);

  let operands = extractOnlyOerands(expression);
  let operators = extractOnlyOperators(expression);

  for (let permutation of operatorPermutations) {
    let copyOperands = [...operands];
    let copyOperators = [...operators];

    result.push(calculateByPriority(copyOperands, copyOperators, permutation));
  }
  result.sort((a, b) => b - a);
  return result[0];
}

console.log(solution("100-200*300-500+20")); // 60420
console.log(solution("50*6-3*2")); // 300
console.log(solution("100+100+100+100")); // 400
console.log(solution("2-990-5+2")); // 995

/**
 * 문제 : 수식 최대화 (2020 카카오 인턴십)
 * 테마 : 구현, 문자열, 스택
 * 출처 : https://programmers.co.kr/learn/courses/30/lessons/67257
 *
 * [Keyword]
 * + operand 리스트, operator 리스트, splice 함수
 *
 * [Approach]
 * + 주어진 문자열수식에서 (+,-,*) 중에 어떤 연산자들이 있는지 우선 뽑아낸다.
 *
 * + 뽑아낸 연산자들로 만들어질수 있는 "연산자 우선순위 순열(permutation)"을 구한다.
 *   - 단, 이 문제는 순열의 최대 경우의 수가 정해져 있어서 수기로 구해도 된다.
 *   - javascript에선 파이썬의 itertools 에 permutation 이나 combination 모듈이 없어서 불편하다.
 *
 * + 입력 expression 에서 다음 2가지를 추출
 *   - 피연산자만 모은 배열 ( 순서 중요 )
 *   - 연산자만 모은 배열 ( 순서 중요 )
 *
 * + 앞서 구한 "연산자 우선순위 순열"을 하나씩 꺼내어 우선순위에 맞는 연산 시 나오는 결과를 candidate 에 넣어놓음
 *   - (중요) 한번의 수식 = [피연산자] + [연산자] + [피연산자]
 *   - 이 규칙으로 index를 잘 이용할 수 있다.
 *
 * + 결과적으로 candidate 들을 내림차순으로 정렬 후, 첫 번째 원소(가장 큰 값)를 반환한다.
 */
