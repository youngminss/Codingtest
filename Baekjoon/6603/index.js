const solution = (arr) => {
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

  console.log(
    getCombinations(arr, 6)
      .map((lotto) => lotto.join(" "))
      .join("\n"),
  );
  console.log();
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");

  for (let i = 0; i < input.length; i++) {
    if (input[i].length > 1) {
      const [n, ...arr] = input[i].split(" ").map(Number);
      solution(arr);
    }
  }
};

main();

/**
 * 문제: 백준 - 로또(6603)
 * 테마: 수학, 조합
 * 출처: https://www.acmicpc.net/problem/6603
 */
