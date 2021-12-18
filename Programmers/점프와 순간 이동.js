function solution(n) {
  return n.toString(2).match(/1/g).length;
}

solution(5); // 2
solution(6); // 2
solution(5000); // 5

/**
 * 문제: 점프와 순간 이동
 * 테마: 수학
 * 출처: https://programmers.co.kr/learn/courses/30/lessons/12980
 *
 * [NOTE]
 * + 문제의 input 제약사항을 확인했다면 log(n) 에는 수행가능한 로직이 필요하다 체크
 * + 목표는 최대한 점프(+1) 하지않고 순간이동(*2) 하는 것
 * + 결과적으로 이 문제가 n 에 대해 이진수 변환 시 1의 갯수를 구하는 것임을 깨닫는 것이 문제
 * + 이진수에서 1 이 점프(+1)했음을 의미하고, 0이 순간이동(*2) 했음을 의미
 */
