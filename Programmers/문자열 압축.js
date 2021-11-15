function solution(s) {
  let maxCompressedStringCandidates = [];

  for (let width = 1; width <= s.length; width++) {
    let compressedStringCandidate = "";
    let currentCompressedString = s.slice(0, width);
    let currentStringDuplicatedCount = 0;

    for (let idx = 0; idx < s.length; idx += width) {
      cuttedStringAsMuchWidth = s.slice(idx, idx + width);

      if (currentCompressedString === cuttedStringAsMuchWidth) {
        currentStringDuplicatedCount++;
      } else {
        if (currentStringDuplicatedCount === 1) {
          compressedStringCandidate += currentCompressedString;
        } else {
          compressedStringCandidate += String(currentStringDuplicatedCount) + currentCompressedString;
        }

        currentCompressedString = cuttedStringAsMuchWidth;
        currentStringDuplicatedCount = 1;
      }
    }

    if (currentStringDuplicatedCount === 1) {
      compressedStringCandidate += currentCompressedString;
    } else {
      compressedStringCandidate += String(currentStringDuplicatedCount) + currentCompressedString;
    }

    maxCompressedStringCandidates.push(compressedStringCandidate);
  }

  maxCompressedStringCandidates.sort((a, b) => a.length - b.length);
  return maxCompressedStringCandidates[0].length;
}

console.log(solution("aabbaccc")); // 7
console.log(solution("ababcdcdababcdcd")); // 9
console.log(solution("abcabcdede")); // 8
console.log(solution("abcabcabcabcdededededede")); // 14
console.log(solution("xababcdcdababcdcd")); // 17

/**
 * 문제 : 문자열 압축 (2020 KAKAO BLIND)
 * 테마 : 구현, 문자열
 * 출처 : https://programmers.co.kr/learn/courses/30/lessons/60057
 *
 * [Approach]
 * 1. 1 <= s <= 1000 이므로, 완전탐색을 해도 무리없을 것이라 판단했다.
 * 2. 1 <= n <= s.length 에 대해, 앞에서부터 n개씩 자르면서 전체 압축 문자열 후보군 string 을 구할 것이다.
 * 3. 추출한 모든 압축 문자열을 길이 순으로 오름차순으로 정렬하고, 가장 첫 번째(최소길이) 압축문자열을 반환한다.
 *
 * [Note]
 * + '숫자 + 문자열' 을 만들 때, String(숫자)가 아닌 "String Literal"을 사용해서 `${숫자}${문자열}` 형태로 붙이면 더 깔끔했을 것이다.
 * + "가장 짧은 압축 문자열" 값만 가지고, 매 차례 새로 생성되는 압축 문자열과 Math.min() 함수를 통해 최소 압축 문자열 길이만 업데이트하는 방법도 있었다.
 */
