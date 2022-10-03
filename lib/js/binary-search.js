/**
 * @NOTE
 * + 실행 시간 : (최대) O(log(N))
 * + 단, 이진 탐색 시작 전 배열은 "오름 차순 정렬" 필수
 */

const binarySearch = (arr, target) => {
  let [start, end] = [0, arr.length - 1];

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (target < arr[mid]) {
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  // return -1 or undefined (상황에 맞게 !);
};
