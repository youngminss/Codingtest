function solution(m, musicinfos) {
  let result = [];
  m = hashToLower(m);

  for (let musicinfo of musicinfos) {
    let [startTime, endTime, title, desc] = musicinfo.split(",");
    const playTime = clacPlayedTime(startTime, endTime);
    desc = hashToLower(desc); // 🎯 포인트

    let originalDesc = makeOriginDesc(desc, playTime, parseInt(playTime / desc.length));
    originalDesc = hashToLower(originalDesc);
    originalDesc.includes(m) && result.push([playTime, title]);
  }

  result.sort((a, b) => b[0] - a[0]);
  return result.length === 0 ? "(None)" : result[0][1];

  function hashToLower(s) {
    return s.replace(/C#/g, "c").replace(/D#/g, "d").replace(/F#/g, "f").replace(/G#/g, "g").replace(/A#/g, "a");
  }
  function makeOriginDesc(desc, playTime, repeat) {
    let result = "";
    if (repeat === 0) return desc.slice(0, playTime);

    for (let i = 0; i < repeat; i++) {
      result += desc;
    }
    result += desc.slice(0, playTime - result.length);
    return result;
  }
  function clacPlayedTime(startTime, endTime) {
    let sTime = Number(startTime.split(":")[0]) * 60 + Number(startTime.split(":")[1]);
    let eTime = Number(endTime.split(":")[0]) * 60 + Number(endTime.split(":")[1]);
    return eTime - sTime;
  }
}

console.log(solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"])); // "HELLO"
console.log(solution("CC#BCC#BCC#BCC#B", ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"])); // 	"FOO"
console.log(solution("ABC", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"])); // "WORLD"
console.log(solution("A#BC", ["12:00,12:13,HELLO,CDEFGA#B", "13:00,13:05,WORLD,ABCDEF", "12:00,12:13,HELLY,CDEFGA#B", "12:00,12:13,HELLZ,CDEFGA#B"])); // "HELLO"

/**
 * 문제: 방금그곡 (2018 KAKAO BLIND)
 * 테마: 구현, 문자열
 * 출처: https://programmers.co.kr/learn/courses/30/lessons/17683
 *
 * [Approach]
 * + 각 음악 정보에 대해 [플레이시간(재생종료시간 - 재생시작시간), 제목, 악보] 를 추출한다.
 * + 악보정보는 #(Hash)음은 연산 시 번거롭기 때문에 특정 다른 문자로 변환하는 과정이 필요 (🎯중요)
 *   - 이것은 target 악보(m)에 대해서도 해당한다.
 * + 변환까지 마친 악보를 플레이시간 기반으로 원본 악보를 생성한다.
 * + 원본 악보 내에 target 악보(m)이 존재한다면 해당 곡에서 다음 정보를 후보군 배열에 넣는다.
 *   - [플레이시간, 곡 이름]
 * + 후보군 배열을 플레이 시간으로 내림차순으로 정렬 한다.
 * + 만약, 후보군이 하나도 없다면 "(None)"을 반환하고 아니면, 후보군 배열이 여럿일 경우를 대비해 첫번째 곡 정보의 곡 이름을 반환
 *
 * [NOTE]
 * + 플레이시간을 기반으로 원본 악보를 생성하기 전에, #(Hash)음에 대한 변환이 꼭 먼저 일어나야한다.
 *   - 왜냐하면, [C#, D#, F#, G#, A#] 도 [C,D,F,G,A] 처럼 "1분에 한 음씩 처리되는 것으로 처리"하기 위해서 !
 */
