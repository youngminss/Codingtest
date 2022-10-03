function solution(infos, queries) {
  const infoData = {};

  // infos 정보에서 나올 수 있는 모든 키값 추출 (중복 포함처리포함)
  const fetchInfoData = (keyArr, score, start) => {
    const key = keyArr.join("");

    infoData[key] ? infoData[key].push(score) : (infoData[key] = [score]);

    for (let i = start; i < keyArr.length; i++) {
      fetchInfoData(
        keyArr.map((v, index) => (index === i ? "-" : v)),
        score,
        i + 1,
      );
    }
  };

  // 코딩 테스트 점수 커트라인에 만족하는 지원자 추출 - Binary Search 🌟 (filter 사용해서 거르면 시간초과)
  const getPassCount = (key, passScore) => {
    const scores = infoData[key];

    if (!scores) return 0;

    let [left, right] = [0, scores.length];

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      scores[mid] >= passScore ? (right = mid) : (left = mid + 1);
    }

    return scores.length - left;
  };

  // 모든 가능 지원자 키값 구하기 (중복된 키값 처리 포함)
  infos
    .map((info) => [info.split(" ").slice(0, 4), info.split(" ")[4]])
    .forEach(([keyArr, score]) => fetchInfoData(keyArr, +score, 0));

  // Binary Search 작업 이전에 코딩 테스트 점수(들) 오름차순 정렬 🌟
  Object.keys(infoData).forEach((key) => {
    infoData[key].sort((a, b) => a - b);
  });

  // queries 로 부터 [키, 코딩테스트 점수] 배열을 추출하고, 이진탐색을 통해 합격 지원자 수 추출
  return queries
    .map((query) => query.replace(/ and /g, "").split(" "))
    .map(([key, passScore]) => getPassCount(key, +passScore));
}

solution(
  [
    "java backend junior pizza 150",
    "python frontend senior chicken 210",
    "python frontend senior chicken 150",
    "cpp backend senior pizza 260",
    "java backend junior chicken 80",
    "python backend senior chicken 50",
  ],
  [
    "java and backend and junior and pizza 100",
    "python and frontend and senior and chicken 200",
    "cpp and - and senior and pizza 250",
    "- and backend and senior and - 150",
    "- and - and - and chicken 100",
    "- and - and - and - 150",
  ],
); // [1,1,1,1,2,4]

/**
 * ver 1.
 * 정확도: 100, 효율성: 0 => 40
 */

// function solution(info, query) {
//   const peopleMap = new Map();

//   for (const infoIndex in info) {
//     const [language, duty, experience, soulFood, score] = info[infoIndex].split(" ");
//     peopleMap.set(infoIndex, {
//       language,
//       duty,
//       experience,
//       soulFood,
//       score,
//     });
//   }

//   let result = [];
//   for (const conditionQuery of query) {
//     let [language, duty, experience, soulFood] = conditionQuery.split(" and ");
//     let baseScore = Number(soulFood.split(" ")[1]);
//     soulFood = soulFood.split(" ")[0];

//     let validConditions = {};
//     if (language !== "-") validConditions.language = language;
//     if (duty !== "-") validConditions.duty = duty;
//     if (experience !== "-") validConditions.experience = experience;
//     if (soulFood !== "-") validConditions.soulFood = soulFood;

//     result.push(dispatchQuery(peopleMap, validConditions, baseScore));
//   }

//   return result;
// }

// const dispatchQuery = (peopleMap, validConditions, baseScore) => {
//   let validPeopleAboutScore = Array.from(peopleMap).filter((people) => people[1].score >= baseScore);
//   if (validPeopleAboutScore.length === 0) return 0;

//   let result = validPeopleAboutScore.length;
//   for (let people of validPeopleAboutScore) {
//     for (let condition of Object.keys(validConditions)) {
//       if (people[1][condition] !== validConditions[condition]) {
//         result = result - 1;
//         break;
//       }
//     }
//   }

//   return result;
// };

// ======================

/**
 * ver 2. (ver1. 보다 속도 측면 조금 개선됨)
 * 정확도: 100, 효율성: 0
 * + 조건에 만족하는 지원자를 뽑아내는 과정에서 filter 함수를 사용함 -> 시간초과
 */

// function solution(info, query) {
//   let result = [];
//   const peoples = {};

//   info.forEach((peopleInfo) => {
//     const [language, duty, experience, soulFood, score] = peopleInfo.split(" ");
//     const peopleKey = `${language} ${duty} ${experience} ${soulFood}`;

//     if (!(peopleKey in peoples)) {
//       peoples[peopleKey] = [Number(score)];
//     } else {
//       peoples[peopleKey].push(Number(score));
//     }
//   });

//   query.forEach((conditionQuery) => {
//     let peopleKeys = Object.keys(peoples);
//     let [language, duty, experience, soulFood] = conditionQuery.split(" and ");
//     let baseScore = Number(soulFood.split(" ")[1]);
//     soulFood = soulFood.split(" ")[0];

//     if (language !== "-") {
//       peopleKeys = peopleKeys.filter((peopleKey) => peopleKey.includes(language));
//     }

//     if (duty !== "-") {
//       peopleKeys = peopleKeys.filter((peopleKey) => peopleKey.includes(duty));
//     }

//     if (experience !== "-") {
//       peopleKeys = peopleKeys.filter((peopleKey) => peopleKey.includes(experience));
//     }

//     if (soulFood !== "-") {
//       peopleKeys = peopleKeys.filter((peopleKey) => peopleKey.includes(soulFood));
//     }

//     let validPeopleCount = 0;
//     peopleKeys.forEach((peopleKey) => {
//       validPeopleCount = validPeopleCount + peoples[peopleKey].filter((score) => score >= baseScore).length;
//     });

//     result.push(validPeopleCount);
//   });

//   return result;
// }
