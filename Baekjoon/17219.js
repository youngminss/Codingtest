function solution(mapItems, targets) {
  const map = new Map();

  mapItems.forEach((mapItem) => {
    const [address, password] = mapItem.split(" ");
    map.set(address, password);
  });

  let result = [];
  targets.forEach((target) => {
    result.push(map.get(target));
  });

  return result.join("\n");
}

function main() {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const fs = require("fs");
  const input = fs.readFileSync(path).toString().trim().split("\n");

  const [n, m] = input[0].split(" ").map(Number);
  const mapItems = input.slice(1, 1 + n);
  const targets = input.slice(1 + n, 1 + n + m);
  console.log(solution(mapItems, targets));
}
main();

/**
 * 문제: 비밀번호 찾기
 * 테마: 맵(Map) 자료구조
 * 출처: https://www.acmicpc.net/problem/17219
 */
