function solution(t, hotels) {
  let result = [];

  hotels.forEach((hotel) => {
    const [h, w, n] = hotel.split(" ").map(Number);

    const roomNumber = Math.ceil(n / h);
    let floor = h === 1 ? 100 : n % h === 0 ? h * 100 : (n % h) * 100;
    result.push(floor + roomNumber);
  });

  return result.join("\n");
}

function main() {
  const fs = require("fs");
  let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

  const t = Number(input[0]);
  const hotels = input.slice(1);
  console.log(solution(t, hotels));
}
main();

/**
 * 문제: ACM 호텔 (10250)
 * 테마: 구현
 * 출처: https://www.acmicpc.net/problem/10250
 */
