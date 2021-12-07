function solution(m, musicinfos) {
  let result = [];

  for (let musicinfo of musicinfos) {
    const [startTime, endTime, title, desc] = musicinfo.split(",");
    const playTime = clacPlayedTime(startTime, endTime);
    const originalDesc = makeOriginDesc(desc, playTime, parseInt(playTime / desc.length));

    originalDesc.includes(m) && checkHashMelody(originalDesc, m) && result.push([playTime, title]);
  }

  result.sort((a, b) => b[0] - a[0]);

  return result.length === 0 ? "(None)" : result[0][1];

  function checkHashMelody(desc, m) {
    const hashMelodyList = ["A", "C", "D", "F", "G"];
    let duplicateIdx = desc.indexOf(m);

    if (m[m.length - 1] === "#") {
      return true;
    } else {
      if (hashMelodyList.includes(m[m.length - 1]) && desc[duplicateIdx + m.length] !== "#") {
        return true;
      }
    }
    return false;
  }
  function makeOriginDesc(desc, playTime, repeat) {
    if (repeat === 0) return desc.slice(0, playTime);

    let result = "";
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

solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]); // "HELLO"
// solution("CC#BCC#BCC#BCC#B", ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"]); // 	"FOO"
// solution("ABC", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"]); // "WORLD"
