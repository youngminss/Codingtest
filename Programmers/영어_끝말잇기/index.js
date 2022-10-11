function solution(n, words) {
  const set = new Set();
  set.add(words[0]);

  for (let i = 1; i < words.length; i++) {
    if (set.has(words[i]) || words[i][0] !== words[i - 1][words[i - 1].length - 1])
      return [(i % n) + 1, Math.floor(i / n) + 1];

    set.add(words[i]);
  }

  return [0, 0];
}

console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]));
console.log(
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ]),
);
console.log(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]));
