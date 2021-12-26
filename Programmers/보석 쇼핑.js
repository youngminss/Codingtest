function solution(gems) {
  let needs = Array.from(new Set(gems)).reduce((acc, gem) => {
    acc[gem] = 0;
    return acc;
  }, {});

  let i = 0;
  let j = 0;
  let left = 0;
  let right = 100001;

  while (j < gems.length) {
    if (needs[gems[j]] === 0) {
      needs[gems[j]]++;
      if (!Object.values(needs).includes(0)) {
        if (j - i < right - left) {
          left = i;
          right = j;
        }
      }

      j++;
    } else {
      needs[gems[j]]++;
      if (!Object.values(needs).includes(0)) {
        if (j - i < right - left) {
          left = i;
          right = j;
        }
        needs[gems[i]]--;
        i++;
      }

      j++;
    }

    console.log(needs, i, j);
  }

  while (!Object.values(needs).includes(0)) {
    if (j - i < right - left) {
      left = i;
      right = j;
    }
    needs[gems[i]]--;
    i++;
    // console.log(needs);
  }
}

solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]); // [3, 7]
// solution(["AA", "AB", "AC", "AA", "AC"]); // [1, 3]
// solution(["XYZ", "XYZ", "XYZ"]); // 	[1, 1]
// solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"]); // [1, 5]
