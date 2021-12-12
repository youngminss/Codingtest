function solution(k, dungeons) {
  dungeons = dungeons.filter((dungeon) => dungeon[0] <= k);
  const dungeonsPermutation = makeDungeonsPermutionFor(dungeons, dungeons.length);

  let result = 0;
  let count, initK;
  for (let dungeons of dungeonsPermutation) {
    initK = k;
    count = 0;
    for (let i = 0; i < dungeons.length; i++) {
      if (dungeons[i][0] > initK) break;

      count++;
      initK -= dungeons[i][1];
    }
    result = Math.max(count, result);
  }

  return result;

  function makeDungeonsPermutionFor(arr, num) {
    let result = [];
    if (num === 1) return arr.map((v) => [v]);

    arr.forEach((v, idx, arr) => {
      const fixer = v;
      const restArr = arr.filter((_, index) => index !== idx);
      const permuationArr = makeDungeonsPermutionFor(restArr, num - 1);
      const combineFixer = permuationArr.map((v) => [fixer, ...v]);
      result.push(...combineFixer);
    });
    return result;
  }
}

solution(80, [
  [80, 20],
  [50, 40],
  [30, 10],
]); // 3

/**
 * 문제: 피로토
 * 테마: 순열 or 재귀 or DFS
 * 출처: https://programmers.co.kr/learn/courses/30/lessons/87946
 *
 * [Approach]
 * + 전체 던전 수가 8개 -> 만들 수 있는 최대 경로 수가 약 4만개 -> 순열 충분히 만들 수 있겠다.
 * + 모든 던전 세트를 만들고, 갈수 있는 최대 던전 수를 업데이트하고, 반환
 *
 * [NOTE]
 * + 조합의 베이스 수가 적어서 가능한 해법이었다.
 * + 다른 방법으론 DFS가 있었다.
 * https://programmers.co.kr/learn/courses/30/lessons/87946/solution_groups?language=javascript
 */
