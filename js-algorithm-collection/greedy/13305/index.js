const solution = (edges, costs) => {
  let minCost = costs[0];
  for (let i = 0; i < costs.length; i++) {
    minCost = Math.min(minCost, costs[i]);
    costs[i] = minCost;
  }

  let result = BigInt(0);
  for (let i = 0; i < edges.length; i++) {
    result = result + BigInt(costs[i]) * BigInt(edges[i]);
  }

  return result.toString();
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");

  const edges = input[1].split(" ").map(Number);
  const costs = input[2].split(" ").map(Number);

  const result = solution(edges, costs);
  console.log(result);
};

main();

/**
 * 문제 : 주유소
 * 테마 : 그리디
 * 출처 : https://www.acmicpc.net/problem/13305
 */

/**
 * 정당성 : 자기보다 뒤에 있는 비싼 주유소에 대해서 "미리 결제" 하면 전체로 봤을 때는 총 비용이 가장 싸다. (= 주유 비용을 비오름차순으로 변경한다.)
 */

/**
 * BigInt 의 경우, 해당 문제의 요구사항에 존재하는 숫자들이 매우 커질 경우까지 체크해서 적용
 */
