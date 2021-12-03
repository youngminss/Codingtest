function splitedFile(file) {
  let head, number;
  let temp = "";

  let i = 0;
  while ((file[i] >= "a" && file[i] <= "z") || (file[i] >= "A" && file[i] <= "Z") || file[i] == "-" || file[i] == "." || file[i] == " ") {
    temp += file[i];
    i++;
  }
  head = temp.toLowerCase();

  temp = "";
  while (file[i] >= "0" && file[i] <= "9") {
    temp += file[i];
    i++;
  }
  number = Number(temp);

  return [head, number, file];
}
function makeSplitedFiles(files) {
  let result = [];

  for (let file of files) {
    let [head, number, tail] = splitedFile(file);
    result.push([head, number, tail]);
  }

  result.sort(function (cur, next) {
    if (cur[0] > next[0]) return 1;
    if (cur[0] < next[0]) {
      return -1;
    }
    if (cur[0] === next[0]) {
      if (cur[1] > next[1]) {
        return 1;
      }
      if (cur[1] < next[1]) {
        return -1;
      }
      if (cur[1] === cur[1]) {
        return 0;
      }
    }
  });

  result = result.map((item) => item[2]);
  return result;
}

function solution(files) {
  let result = makeSplitedFiles(files);
  return result;
}

solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]); // ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]
solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]); // ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]

/**
 * 문제: 파일명 정렬 (2018 KAKAO BLIND - Level 2)
 * 테마: 구현, 문자열
 * 출처: https://programmers.co.kr/learn/courses/30/lessons/17686
 *
 * [Approach]
 * + 정렬에 필요하다고 생각한 것 -> [head, number, file명 원본]
 * + 1차적으로 head 즉, 각 item[0] 번째 원소로 비교를 실행
 * + 2차적으로 number 즉, 각 item[1] 번째 원소로 비교를 실행
 * + 그럼에도 두 비교값이 같다면 순서 그대로 진행
 */
