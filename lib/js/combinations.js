/**
 * 조합(Combination, nCr)
 * - 순서 없이 n개 중에 r개를 뽑는 것
 * - 순서 상관 X
 * - ex) 10C3 = 10*9*8 / 3*2*1 = 120
 */

// 1. 재귀를 이용한 조합 생성
const getCombinations = (array, selectNumber) => {
  const results = [];
  if (selectNumber === 1) {
    return array.map((element) => [element]);
  }

  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });

  return results;
};
console.log(getCombinations([1, 2, 3, 4, 5, 6, 7], 6));

// 2. DFS를 이용한 조합 생성 (속도가 좀 더 빠름)
let combinations = [];
let combinationByDFS = [];
const getCombinationsByDFS = (array, n) => {
  if (combinationByDFS.length === n) {
    combinations.push([...combinationByDFS]);
    return;
  }

  for (let i = 0; i < array.length; i++) {
    let top = combinationByDFS.length === 0 ? -1 : combinationByDFS[combinationByDFS.length - 1];

    if (!combinationByDFS.includes(array[i]) && top < array[i]) {
      combinationByDFS.push(array[i]);
      getCombinationsByDFS(array, n);
      combinationByDFS.pop();
    }
  }
};

getCombinationsByDFS([1, 2, 3, 4, 5, 6, 7], 6);
console.log(combinations);
