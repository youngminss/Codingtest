function solution(s) {
  // 전체 압축 문자열 후보군
  let maxCompressedStringCandidates = [];

  // 간격을 1부터 s길이까지 늘려가며 자름
  for (let width = 1; width <= s.length; width++) {
    // width 개씩 자른것으로 만들어지는 압축문자열, 현재 압축 기준 서브스트링, 중복 카운터 초기화(처음엔 0으로)
    let compressedStringCandidate = "";
    let currentCompressedString = s.slice(0, width);
    let currentStringDuplicatedCount = 0;

    for (let idx = 0; idx < s.length; idx += width) {
      cuttedStringAsMuchWidth = s.slice(idx, idx + width);

      if (currentCompressedString === cuttedStringAsMuchWidth) {
        currentStringDuplicatedCount++;
      } else {
        if (currentStringDuplicatedCount === 1) {
          // 압축되는 것이 없을 경우 -> 그대로 붙이기
          compressedStringCandidate += currentCompressedString;
        } else {
          // 2개 이상, 압축되는 경우 -> `숫자 + 압축 스트링` 형태로 붙이기
          compressedStringCandidate += String(currentStringDuplicatedCount) + currentCompressedString;
        }

        // 압축 기준 스트링 업데이트, 중복 카운터 초기화(처음 이후로는 1로 업데이트, 일단 한번 새로운거 등장했기 때문 !)
        currentCompressedString = cuttedStringAsMuchWidth;
        currentStringDuplicatedCount = 1;
      }
    }

    // 마무리 못하고 나온 마지막 프로세스 처리
    if (currentStringDuplicatedCount === 1) {
      compressedStringCandidate += currentCompressedString;
    } else {
      compressedStringCandidate += String(currentStringDuplicatedCount) + currentCompressedString;
    }

    maxCompressedStringCandidates.push(compressedStringCandidate);
  }

  // 최소길이 순으로 정렬하고, 첫 번째(최소길이) 압축 문자열 길이 반환
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
