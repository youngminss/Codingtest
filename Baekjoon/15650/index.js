const solution = (n, m) => {
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

  const array = Array(n)
    .fill()
    .map((_, index) => index + 1);
  const combinations = getCombinations(array, m);

  console.log(combinations.map((combination) => combination.join(" ")).join("\n"));
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const [n, m] = require("fs").readFileSync(path).toString().trim().split(" ").map(Number);

  solution(n, m);
};

main();

/**
 * 문제: N과 M(2)
 * 테마: 구현, 조합론
 * 출처: https://www.acmicpc.net/problem/15650
 */
