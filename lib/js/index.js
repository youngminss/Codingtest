// 두 문자열 사전순 비교
const a = "abcc";
const b = "abcd";

console.log(a.localeCompare(b)); // -1
console.log(b.localeCompare(a)); // 1
console.log(a.localeCompare(a)); // 0
