function solution(monsters, problems) {
  let result = [];
  let nameToNumber = new Map();
  let numberToName = new Map();

  monsters.forEach((m, idx) => {
    nameToNumber.set(m, idx + 1);
    numberToName.set(idx + 1, m);
  });

  problems.forEach((p) => result.push(isNaN(p) ? nameToNumber.get(p) : numberToName.get(parseInt(p))));

  return result.join("\n");
}

function main() {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const fs = require("fs");
  const input = fs.readFileSync(path).toString().trim().split("\n");

  const [n, m] = input[0].split(" ").map(Number);
  const monsters = input.slice(1, n + 1);
  const problems = input.slice(n + 1, n + m + 1);

  console.log(solution(monsters, problems));
}
main();

/**
 * 문제: 나는야 포켓몬 마스터 이다솜 (1620)
 * 테마: 해시맵
 * 출처: https://www.acmicpc.net/problem/1620
 */
