const solution = (n, m, array) => {
  const getPermutations = (array, selectNumber) => {
    if (selectNumber === 1) {
      return array.map((element) => [element]);
    }

    const results = [];
    array.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutations(rest, selectNumber - 1);
      const attached = permutations.map((permutation) => [fixed, ...permutation]);
      results.push(...attached);
    });

    return results;
  };

  console.log(
    getPermutations(array, m)
      .map((permutation) => permutation.join(" "))
      .join("\n"),
  );
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");
  const [n, m] = input[0].split(" ").map(Number);
  const array = input[1].split(" ").map(Number);

  solution(
    n,
    m,
    array.sort((a, b) => a - b),
  );
};

main();

/**
 * 문제: 백준 - N과 M(5)
 * 테마: 브루트포스(순열), 백트래킹
 * 출처: https://www.acmicpc.net/problem/15654
 */
