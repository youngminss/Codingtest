const solution = (n) => {
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

  console.log(
    getPermutataions(
      Array(n)
        .fill()
        .map((_, i) => i + 1),
      n,
    )
      .map((permutation) => permutation.join(" "))
      .join("\n"),
  );
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");

  solution(+input);
};

main();

/**
 * 문제: 백준 - 모든 순열(10974)
 * 테마: 구현, 수학, 조합론
 * 출처: https://www.acmicpc.net/problem/10974
 */
