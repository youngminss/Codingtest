function solution(words) {
  let result = [];

  words.forEach((word) => {
    if (word !== "0") {
      const reversed = word.split("").reverse().join("");
      word === reversed ? result.push("yes") : result.push("no");
    }
  });

  return result.join("\n");
}

function main() {
  const fs = require("fs");
  let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

  console.log(solution(input));
}
main();

/**
 * 문제: 팰린드롬수 (1259)
 * 테마: 구현, 문자열
 * 출처: https://www.acmicpc.net/problem/1259
 */
