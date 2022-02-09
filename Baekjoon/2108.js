function calcMean(numbers) {
  return Math.round(numbers.reduce((acc, cur) => (acc += cur), 0) / numbers.length);
}

function calcMedian(numbers) {
  return numbers[parseInt(numbers.length / 2)];
}

function calcMode(numbers) {
  let numbersCount = {};

  numbers.forEach((number) => {
    if (number in numbersCount) numbersCount[number] += 1;
    else numbersCount[number] = 1;
  });

  numbersCount = Object.entries(numbersCount);
  numbersCount.sort((a, b) => (a[1] - b[1] < 0 ? 1 : -1));
  numbersCount = numbersCount.filter((numberInfo) => numbersCount[0][1] == numberInfo[1]);
  numbersCount = numbersCount.sort((a, b) => (Number(a[0]) < Number(b[0]) ? -1 : 1));

  return numbersCount.length >= 2 ? Number(numbersCount[1][0]) : Number(numbersCount[0][0]);
}

function calcRange(numbers) {
  return numbers[numbers.length - 1] - numbers[0];
}

function solution(n, numbers) {
  let statistics = {};
  numbers = numbers.sort((a, b) => (a - b < 0 ? -1 : 1));

  statistics.mean = calcMean([...numbers]);
  statistics.median = calcMedian([...numbers]);
  statistics.mode = calcMode([...numbers]);
  statistics.range = calcRange([...numbers]);

  return Object.values(statistics).join("\n");
}

function main() {
  const fs = require("fs");
  let input = fs.readFileSync("./p.txt").toString().trim().split("\n").map(Number);

  console.log(solution(input[0], input.slice(1)));
}

main();

/**
 * 문제: 통계학 (2108)
 * 테마: 구현, 정렬
 * 출처: https://www.acmicpc.net/problem/2108
 */
