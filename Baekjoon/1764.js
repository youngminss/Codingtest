function solution(n, m, mans) {
  let result = [];
  let map = new Map();

  mans.forEach((man) => (map.has(man) ? result.push(man) : map.set(man, true)));
  return `${result.length}\n${result.sort().join("\n")}`;
}

function main() {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const fs = require("fs");
  const input = fs.readFileSync(path).toString().trim().split("\n");

  const [n, m] = input[0].split(" ").map(Number);
  const mans = input.slice(1);
  console.log(solution(n, m, mans));
}
main();

/**
 * 문제: 듣보잡 (1764)
 * 테마: 해시맵
 * 출처: https://www.acmicpc.net/problem/1764
 */
