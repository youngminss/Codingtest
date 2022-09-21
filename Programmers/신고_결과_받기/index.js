function solution(id_list, report, k) {
  const userMap = new Map();
  const userReportedObj = {};

  // 유저 Map 객체 초기화
  id_list.forEach((userId) => {
    userMap.set(userId, {
      reportTargetIds: [],
      notificationCountAboutReport: 0,
    });
  });

  // 유저들의 신고당한 횟수 객체 초기화
  id_list.forEach((userId) => {
    userReportedObj[userId] = 0;
  });

  // 유저 신고발생 처리
  report.forEach((userIds) => {
    const [reportUserId, reportedUserId] = userIds.split(" ");
    const reportUser = userMap.get(reportUserId);

    if (!reportUser.reportTargetIds.includes(reportedUserId)) {
      reportUser.reportTargetIds.push(reportedUserId);
      userMap.set(reportUserId, reportUser);
      userReportedObj[reportedUserId] = userReportedObj[reportedUserId] + 1;
    }
  });

  // 정지대상 유저 추출
  const stopTargetUserIds = Object.entries(userReportedObj)
    .filter((user) => user[1] >= k)
    .map((stopUser) => stopUser[0]);

  // 각 유저별 처리 결과 메일 받는 횟수 처리
  id_list.forEach((userId) => {
    const user = userMap.get(userId);
    user.reportTargetIds.forEach((reportTargetId) => {
      if (stopTargetUserIds.includes(reportTargetId)) {
        user.notificationCountAboutReport = user.notificationCountAboutReport + 1;
      }
    });
    userMap.set(userId, user);
  });

  // 입력받은 유저 순서대로 결과 메일 받는 횟수 배열 반환
  return id_list.map((userId) => userMap.get(userId).notificationCountAboutReport);
}

// 입력부
// solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2); // [2, 1, 1, 0]
// solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3); // [0, 0]

/**
 * 문제: 프로그래머스 - 신고 결과 받기
 * 테마: 구현
 * 출처: https://school.programmers.co.kr/learn/courses/30/lessons/92334
 *
 * [NOTE]
 * - Map 자료형을 사용했는데, Set 자료형으로 초기에 id_list 중복 처리를 해서 성능을 향상 시키는 방법이 있다.
 *   -> 참고: https://school.programmers.co.kr/learn/courses/30/lessons/92334/solution_groups?language=javascript
 */
