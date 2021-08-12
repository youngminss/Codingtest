function solution(nums) {
  let myPocketMon = new Set();
  let length = Math.floor(nums.length / 2);

  for (let pocketMon of nums) {
    if (myPocketMon.size > length) {
      break;
    }
    if (myPocketMon.size < length && !myPocketMon.has(pocketMon)) {
      myPocketMon.add(pocketMon);
    }
  }

  return myPocketMon.size;
}

function betterSolution(nums) {
  let myPocketMon = new Set(nums);
  let maxLength = Math.floor(nums.length / 2);

  return myPocketMon.size > maxLength ? maxLength : myPocketMon.size;
}

console.log(solution([3, 3, 3, 2, 2, 2]));
console.log(betterSolution([3, 3, 3, 2, 2, 2]));

/**
 * 문제 : 폰켓몬
 * 테마 : 구현
 * 출처 : https://programmers.co.kr/learn/courses/30/lessons/1845?language=javascript
 *
 * 해법
 * - 최대로 담을 수 있는 포켓몬 수를 구하고
 * - 입력으로 들어오는 포켓몬 주머니에 대해, Set 자료형을 적용
 * - maxLength 보다, Set 을 적용한 포켓몬 주머니 size 가, 크면 maxLength 길이를, 아니면 Set을 적용한 포켓몬 주머니 사이즈 반환
 */
