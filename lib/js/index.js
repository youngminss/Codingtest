// ===== 두 문자열 사전순 비교 =====
const a = "abcc";
const b = "abcd";

console.log(a.localeCompare(b)); // -1
console.log(b.localeCompare(a)); // 1
console.log(a.localeCompare(a)); // 0

// ===== N * M 크기의 1 ~ N 까지 2차원 배열 생성 =====
const get2DArray = (N, M) => {
  return Array(N)
    .fill()
    .map((_, i) =>
      Array(M)
        .fill()
        .map((_, j) => M * i + (j + 1)),
    );
};

const arr1 = get2DArray(3, 3);
const arr2 = get2DArray(3, 4);

console.log(arr1); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
console.log(arr2); // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ] ]
