function biSearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = parseInt((left + right) / 2);

    if (arr[mid] > target) {
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      return true;
    }
  }

  return false;
}

function solution(arrA, arrM) {
  let result = [];

  arrA = arrA.sort((a, b) => (a - b < 0 ? -1 : 1));

  arrM.forEach((number) => {
    result.push(biSearch(arrA, number) ? 1 : 0);
  });

  return result.join("\n");
}

function main() {
  const fs = require("fs");
  let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

  const [n, m] = [input[0], input[2]].map(Number);
  const arrA = input[1].split(" ").map(Number);
  const arrM = input[3].split(" ").map(Number);

  console.log(solution([...arrA], [...arrM]));
}
main();

/**
 * 문제: 수 찾기 (1920)
 * 테마: 이분탐색
 * 출처: https://www.acmicpc.net/problem/1920
 *
 * [다른 풀이]
 * + Set 자료형의 has 메서드 사용
 * + https://www.acmicpc.net/source/36286102
 * + https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set/has
 */
