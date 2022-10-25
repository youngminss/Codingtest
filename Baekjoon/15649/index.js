const solution = (n, m) => {
  const arr = Array(n)
    .fill()
    .map((_, i) => i + 1);

  const getPermutations = (array, selectNumber) => {
    const results = [];
    if (selectNumber === 1) {
      return array.map((element) => [element]);
    }

    array.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutations(rest, selectNumber - 1);
      const attached = permutations.map((permutation) => [fixed, ...permutation]);
      results.push(...attached);
    });

    return results;
  };

  console.log(
    getPermutations(arr, m)
      .map((permutation) => permutation.join(" "))
      .join("\n"),
  );
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const [n, m] = require("fs").readFileSync(path).toString().trim().split(" ").map(Number);

  solution(n, m);
};

main();

/**
 * 문제: 백준 - N과 M(1)
 * 테마: 브루트포스(순열) or 백트래킹
 * 출처: https://www.acmicpc.net/problem/15649
 */
