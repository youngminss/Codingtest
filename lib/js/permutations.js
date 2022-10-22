/**
 * 순열(Permutation, nPr)
 * - n 개의 원소 중에 r 개만 뽑아 "순서대로" 나열한 것
 * - 순서 상관 O
 * - ex) 10C3 = 10*9*8 = 720
 */
const getPermutataions = (array, selectNumber) => {
  const results = [];
  if (selectNumber === 1) {
    return array.map((element) => [element]);
  }

  array.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutataions(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);
    results.push(...attached);
  });

  return results;
};

// console.log(getPermutataions([1, 2, 3, 4], 4));
// [
//   [1, 2, 3, 4],
//   [1, 2, 4, 3],
//   [1, 3, 2, 4],
//   [1, 3, 4, 2],
//   [1, 4, 2, 3],
//   [1, 4, 3, 2],
//   [2, 1, 3, 4],
//   [2, 1, 4, 3],
//   [2, 3, 1, 4],
//   [2, 3, 4, 1],
//   [2, 4, 1, 3],
//   [2, 4, 3, 1],
//   [3, 1, 2, 4],
//   [3, 1, 4, 2],
//   [3, 2, 1, 4],
//   [3, 2, 4, 1],
//   [3, 4, 1, 2],
//   [3, 4, 2, 1],
//   [4, 1, 2, 3],
//   [4, 1, 3, 2],
//   [4, 2, 1, 3],
//   [4, 2, 3, 1],
//   [4, 3, 1, 2],
//   [4, 3, 2, 1],
// ];
