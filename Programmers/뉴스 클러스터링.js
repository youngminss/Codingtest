function solution(str1, str2) {
  const WEIGHT = 65536;
  let str1Pairs = makePairFor(str1);
  let str2Pairs = makePairFor(str2);

  if (str1Pairs.length === 0 && str2Pairs.length === 0) return 1 * WEIGHT;

  const interSection = calcInterSection(str1Pairs, str2Pairs);
  const union = calcUnion(str1Pairs, str2Pairs);

  return parseInt((interSection / union) * WEIGHT);

  function calcInterSection(pair1, pair2) {
    let result = 0;
    let longPair = pair1.length < pair2.length ? [...pair2] : [...pair1];
    let shortPair = pair1.length < pair2.length ? [...pair1] : [...pair2];

    let shortPairTemp;
    while (shortPair.length !== 0) {
      shortPairTemp = shortPair[0];
      if (longPair.includes(shortPairTemp)) {
        result += Math.min(
          longPair.reduce((cnt, pair) => cnt + (pair === shortPairTemp), 0),
          shortPair.reduce((cnt, pair) => cnt + (pair === shortPairTemp), 0),
        );
      }

      while (shortPair.includes(shortPairTemp)) {
        shortPair.splice(shortPair.indexOf(shortPairTemp), 1);
      }
    }
    return result;
  }
  function calcUnion(pair1, pair2) {
    let result = 0;
    let longPair = pair1.length < pair2.length ? [...pair2] : [...pair1];
    let shortPair = pair1.length < pair2.length ? [...pair1] : [...pair2];

    let shortPairTemp;
    while (shortPair.length !== 0) {
      shortPairTemp = shortPair[0];
      if (longPair.includes(shortPairTemp)) {
        result += Math.max(
          longPair.reduce((cnt, pair) => cnt + (pair === shortPairTemp), 0),
          shortPair.reduce((cnt, pair) => cnt + (pair === shortPairTemp), 0),
        );
      } else {
        result += shortPair.reduce((cnt, pair) => cnt + (pair === shortPairTemp), 0);
      }

      while (shortPair.includes(shortPairTemp)) {
        shortPair.splice(shortPair.indexOf(shortPairTemp), 1);
      }

      while (longPair.includes(shortPairTemp)) {
        longPair.splice(longPair.indexOf(shortPairTemp), 1);
      }
    }

    if (longPair.length !== 0) result += longPair.length;
    return result;
  }
  function makePairFor(str) {
    let result = str.split("").map((_, i) => str.slice(i, i + 2));
    result = result.slice(0, result.length - 1);
    result = result.map((pair) => pair.toUpperCase());
    result = result.filter((pair) => isOnlyAlphaIn(pair));
    result.sort();
    return result;

    function isOnlyAlphaIn(pair) {
      for (let c of pair) {
        if (c > "Z" || c < "A") {
          return false;
        }
      }
      return true;
    }
  }
}

console.log(solution("FRANCE", "french")); // 16384
console.log(solution("handshake", "shake hands")); // 65536
console.log(solution("aa1+aa2", "	AAAA12")); // 43690
console.log(solution("E=M*C^2", "e=m*c^2")); // 65536

/**
 * 문제: 뉴스 클러스터링
 * 테마: 구현
 * 출처: https://programmers.co.kr/learn/courses/30/lessons/17677
 *
 * [Approach]
 * + 입력으로 주어지는 str1, str2 에 대해 두 문자씩 끊어만든 집합 str1Pair, str2Pair 를 생성한다.
 * + 두 pair 에 대해 intersection Number 와 union Number 를 구한다.
 * + intersection, union Number 를 이용해 자카드 유사도를 반환한다.
 *
 * [NOTE]
 * + intersection, union 수치를 구하는 데 좀 더 깔끔한 구현방식
 *   - intersection 은 두 pair 집합에 대해, 특정 pair 에 대한 Math.min(집합1 의 pair 보유개수, 집합2 의 pair 보유개수)
 *   - union 은 두 pair 집합에 대해, 특정 pair 에 대한 Math.max(집합1 의 pair 보유개수, 집합2 의 pair 보유개수)
 * https://programmers.co.kr/learn/courses/30/lessons/17677/solution_groups?language=javascri
 */
