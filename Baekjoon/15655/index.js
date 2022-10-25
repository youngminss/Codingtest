const solution = (sortedArray, n, m) => {
  const getCombinations = (array, selectNumber) => {
    if (selectNumber === 1) {
      return array.map((element) => [element]);
    }

    const results = [];
    array.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((combination) => [fixed, ...combination]);
      results.push(...attached);
    });

    return results;
  };

  console.log(
    getCombinations(sortedArray, m)
      .map((combination) => combination.join(" "))
      .join("\n"),
  );
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");
  const [n, m] = input[0].split(" ").map(Number);
  const array = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  solution(array, n, m);
};

main();

/**
 * 문제: 백준 - N과 M(6)
 * 테마: 브루트포스(조합), 백트래킹
 * 출처: https://www.acmicpc.net/problem/15655
 */
