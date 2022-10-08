function solution(rows, columns, queries) {
  let result = [];
  let arr = new Array(rows).fill().map((_, i) => new Array(columns).fill().map((_, j) => columns * i + (j + 1)));

  const rotate = (x1, y1, x2, y2) => {
    let min = arr[x1][y1];
    const start = arr[x1][y1];

    // 왼쪽 = 아래서 위로 댕김
    for (let i = x1; i < x2; i++) {
      arr[i][y1] = arr[i + 1][y1];
      min = Math.min(min, arr[i][y1]);
    }

    // 아래 = 오른쪽에서 왼쪽으로 댕김
    for (let i = y1; i < y2; i++) {
      arr[x2][i] = arr[x2][i + 1];
      min = Math.min(min, arr[x2][i]);
    }

    // 오른쪽 = 위에서 아래로 댕김
    for (let i = x2; i > x1; i--) {
      arr[i][y2] = arr[i - 1][y2];
      min = Math.min(min, arr[i][y2]);
    }

    // 위쪽 = 왼쪽에서 오른쪽으로 댕김(단, 마지막 요소에 대해서는 처음 저장한 start 저장
    for (let i = y2; i > y1; i--) {
      arr[x1][i] = arr[x1][i - 1];
      if (i === y1 + 1) {
        arr[x1][i] = start;
      }
      min = Math.min(min, arr[x1][i]);
    }

    return min;
  };

  queries.forEach((query) => {
    const [x1, y1, x2, y2] = query.map((q) => q - 1);
    result.push(rotate(x1, y1, x2, y2));
  });

  return result;
}

solution(6, 6, [
  [2, 2, 5, 4],
  [3, 3, 6, 6],
  [5, 1, 6, 3],
]); // 	[8, 10, 25]

solution(3, 3, [
  [1, 1, 2, 2],
  [1, 2, 2, 3],
  [2, 1, 3, 2],
  [2, 2, 3, 3],
]); // [1, 1, 5, 3]

solution(100, 97, [[1, 1, 100, 97]]); // [1]
