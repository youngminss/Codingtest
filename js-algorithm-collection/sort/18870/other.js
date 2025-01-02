const solution = (n, arr) => {
  const result = [];
  const uniqueArr = Array.from(new Set(arr));
  const matrixCountMap = new Map();

  uniqueArr.sort((a, b) => a - b);

  for (let i = 0; i < uniqueArr.length; i++) {
    matrixCountMap.set(uniqueArr[i], i);
  }

  for (let i = 0; i < arr.length; i++) {
    result.push(matrixCountMap.get(arr[i]));
  }

  return result.join(" ");
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");

  const n = Number(input[0]);
  const data = input[1].split(" ").map(Number);

  const result = solution(n, data);
  console.log(result);
};

main();
