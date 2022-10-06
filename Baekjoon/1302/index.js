const solution = (n, books) => {
  const bookMap = new Map();

  for (const book of books) {
    if (bookMap.has(book)) {
      bookMap.set(book, bookMap.get(book) + 1);
    } else {
      bookMap.set(book, 1);
    }
  }

  const bestSeller = Array.from(bookMap).sort((a, b) => (a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]))[0][0];
  console.log(bestSeller);
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");

  solution(Number(input[0]), input.slice(1));
};

main();

/**
 * 문제: 1302 - 베스트셀러
 * 테마: 정렬, 자료구조
 * 출처: https://www.acmicpc.net/problem/1302
 */
