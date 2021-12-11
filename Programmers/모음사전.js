function solution(word) {
  let vowelDict = makeVowelDict(["", "A", "E", "I", "O", "U"]).sort();
  return Array.from(new Set(vowelDict)).indexOf(word);

  function makeVowelDict(vowels) {
    let result = [];

    vowels.forEach((one) => {
      vowels.forEach((two) => {
        vowels.forEach((three) => {
          vowels.forEach((four) => {
            vowels.forEach((five) => {
              result.push(`${one}${two}${three}${four}${five}`);
            });
          });
        });
      });
    });

    return result;
  }
}

console.log(solution("AAAAE")); // 6
console.log(solution("AAAE")); // 10
console.log(solution("I")); // 1563
console.log(solution("EIO")); // 1189

/**
 * 문제: 모음 사전 (Level 2)
 * 테마: 구현
 * 출차: https://programmers.co.kr/learn/courses/30/lessons/84512
 *
 * [Approach]
 * + 모음으로 순서가 있는 배열을 만든다.
 * + 인풋으로 들어오는 word 에 해당하는 배열 내 원소의 index 를 순서라고 생각하고 반환한다.
 */
