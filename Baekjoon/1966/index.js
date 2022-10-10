// 배열 인덱스와 flag 배열을 조작해서 큐를 구현했을 경우
const solution1 = (n, m, arr) => {
  const out = Array(n).fill(false);
  let currentIdx = 0;

  while (true) {
    if (
      !out[currentIdx] &&
      arr[currentIdx][1] >=
        Math.max(...arr.filter(([idx, _]) => idx !== currentIdx && !out[idx]).map(([_, num]) => num))
    ) {
      out[arr[currentIdx][0]] = true;
      if (arr[currentIdx][0] === m) break;
    }

    currentIdx = (currentIdx + 1) % n;
  }

  console.log(out.filter((el) => el).length);
};

// 배열 메서드 shift 를 사용해서 큐를 구현했을 경우
const solution2 = (n, m, arr) => {
  let result = 1;

  while (true) {
    const [idx, num] = arr.shift();
    if (num >= Math.max(...arr.map(([_, num]) => num))) {
      if (idx === m) break;

      result = result + 1;
      continue;
    }

    arr.push([idx, num]);
  }

  console.log(result);
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const [n, ...input] = require("fs").readFileSync(path).toString().trim().split("\n");

  for (let i = 0; i < n; i++) {
    const [n, m] = input[2 * i].split(" ").map(Number);
    const arr = input[2 * i + 1].split(" ").map((num, idx) => [idx, Number(num)]);
    solution1(n, m, arr);
    solution2(n, m, arr);
  }
};

main();

/**
 * 문제: 백준 - 프린트 큐(1966)
 * 테마: 자료구조(큐)
 * 출처: https://www.acmicpc.net/problem/1966
 */
