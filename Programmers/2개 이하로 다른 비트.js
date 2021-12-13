function solution(numbers) {
  let result = [];
  let numberToBiString;

  for (let i = 0; i < numbers.length; i++) {
    numberToBiString = "0" + numbers[i].toString(2);
    if (numberToBiString[numberToBiString.length - 1] === "0") {
      result.push(numbers[i] + 1);
    } else {
      let changeIdx = numberToBiString.lastIndexOf("01");
      let adjacentBinaryString = numberToBiString.substring(0, changeIdx) + "10" + numberToBiString.substring(changeIdx + 2);
      result.push(parseInt(adjacentBinaryString, 2));
    }
  }

  return result;
}

console.log(solution([2, 7])); // [3,11]

/**
 * 문제: 2개 이하로 다른 비트 (Level 2)
 * 테마: 구현, 문자열, 이진수
 * 출처: https://programmers.co.kr/learn/courses/30/lessons/77885
 *
 * [Approach]
 * + 10진수 정수 배열 요소들에 대해
 *   - 2진수 string 으로 변환
 *   - 맨 끝자리가 (0) 이면 10진수 개념으로 +1 한 값을 정답에 추가
 *   - 맨 끝자리가 (1) 이면 조건에 맞는 가장 인접한 수는 (01) 인 곳을 찾아 (10) 으로 변환된 2진수를 찾아 10진수로 변환해서 정답에 추가
 *
 * [NOTE]
 * + 💩 문제접근을 number에 대해 2진수로 변환해서 -> 다음 프로세스로 하면 number가 엄청 큰 수일 때 시간초과
 * + 👍 간단한 관점에서 문제해결법을 생각하는 게 중요했던 문제
 *   - number가 0 or 1 일 경우, 2진수로 변환시 한 자리의 2진수 문자열 형태가 되어, toString 시, 맨 앞에 '0'을 추가한 2진수 형태로 반환 (암묵적으로, 부족한 자리수를 0으로 계산해서 사실 넣지 않아도 된다.)
 *
 * + Number.prototype.toString(N진수) = 10진수를 N진수로 쉽게 변형 가능
 * + String.prototype.lastIndexOf(타겟) = 기준 문자열에 대해, 뒤에서부터 타켓 문자열이 가장 매치되는 인덱스 반환
 * + parseInt('N진수 문자열', N) = N진수 문자열에 대해, N진수로 변환된 정수를 반환
 */
