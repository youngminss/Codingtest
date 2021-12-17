function solution(n) {
  let i = 2;
  while (i < n) {
    if (n % i === 1) return i;
    i++;
  }
}

solution(10); // 3
solution(12); // 11

/**
 * 문제: 나머지가 1이 되는 수 찾기
 * 테마: 구현
 * 출처: https://programmers.co.kr/learn/courses/30/lessons/87389
 */
