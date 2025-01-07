const solution = (data) => {
  const [n, k] = data;

  const summary = ((1 + k) * k) / 2;

  if (summary > n) {
    return -1;
  }

  return (n - summary) % k === 0 ? k - 1 : k;
};

const main = () => {
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs")
    .readFileSync(path)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

  const result = solution(input);
  console.log(result);
};

main();
