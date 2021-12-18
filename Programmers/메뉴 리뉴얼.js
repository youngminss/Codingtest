function canEnrollSetMenuCandidate(candidate, course) {
  for (let cour of course) {
    if (cour === candidate) {
      return true;
    }
  }
  return false;
}
function extractSetMenuCandidateFor(order, course) {
  let result = [];
  for (let i = 0; i < order.length; i++) {
    for (let j = i + 2; j < order.length + 1; j++) {
      result.push(order.slice(i, j));
    }
  }
  return result.filter((candidate) => canEnrollSetMenuCandidate(candidate.length, course));
}
<<<<<<< HEAD
function checkNotAcceptedSequenceFor(setMenu) {
  for (let i = 0; i < setMenu.length - 1; i++) {
    if (setMenu[i] > setMenu[i + 1]) {
      return false;
    }
  }
  return true;
}

=======
>>>>>>> 6647390bf1b60d453465227f7eb1c0962ca83fa3
function isCandidateMenu(setMenuCandidate, orders) {
  let countCommonCandidate = 0;
  let countCandidateMenuInCurrentOrder;
  for (let order of orders) {
    countCandidateMenuInCurrentOrder = 0;
    for (let menu of setMenuCandidate) {
      if (order.includes(menu)) {
        countCandidateMenuInCurrentOrder++;
      }
    }

    if (countCandidateMenuInCurrentOrder === setMenuCandidate.length) {
      countCommonCandidate++;
    }
  }
  if (countCommonCandidate >= 2) {
<<<<<<< HEAD
    return [setMenuCandidate, countCommonCandidate];
=======
    return setMenuCandidate;
>>>>>>> 6647390bf1b60d453465227f7eb1c0962ca83fa3
  }
}
function filterCandidateOnlyInOrders(candidate, orders) {
  return orders.includes(candidate);
}
function solution(orders, course) {
  let result = new Set();
<<<<<<< HEAD
  let mostNumberousSetMenuEachCourse = [];
=======

>>>>>>> 6647390bf1b60d453465227f7eb1c0962ca83fa3
  for (let order of orders) {
    let setMenuCandidates = extractSetMenuCandidateFor(order, course);

    for (let setMenuCandidate of setMenuCandidates) {
      if (isCandidateMenu(setMenuCandidate, orders)) {
<<<<<<< HEAD
        mostNumberousSetMenuEachCourse.push(isCandidateMenu(setMenuCandidate, orders));
=======
        result.add(isCandidateMenu(setMenuCandidate, orders));
>>>>>>> 6647390bf1b60d453465227f7eb1c0962ca83fa3
      }
    }
  }

<<<<<<< HEAD
  for (let cour of course) {
    let candidateSetMenusOfCurrentSize = mostNumberousSetMenuEachCourse.filter((setMenu) => setMenu[0].length === cour);
    candidateSetMenusOfCurrentSize.sort((a, b) => b[1] - a[1]);
    let currentCourseSizePassSetMenu = candidateSetMenusOfCurrentSize
      .filter((candidate) => candidateSetMenusOfCurrentSize[0][1] === candidate[1])
      .map((menuinfo) => menuinfo[0]);

    let removedDuplicateSetmenu = new Set(currentCourseSizePassSetMenu);
    for (let setMenu of removedDuplicateSetmenu) {
      result.add(setMenu);
    }
  }

  result = Array.from(result).sort();
  result = result.filter((setMenu) => checkNotAcceptedSequenceFor(setMenu));
=======
  result = [...result].filter((candidate) => filterCandidateOnlyInOrders(candidate, orders)).sort();
>>>>>>> 6647390bf1b60d453465227f7eb1c0962ca83fa3
  return result;
}

console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]));
console.log(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]));
console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]));
<<<<<<< HEAD

/**
 * 문제 : 메뉴 리뉴얼 (2021 KAKAO BLIND, Level 2)
 * 테마 : 구현, 문자열
 * 출처 : https://programmers.co.kr/learn/courses/30/lessons/72411?language=javascript
 *
 * [Note]
 * + 후...... (1전 1패)
 */
=======
>>>>>>> 6647390bf1b60d453465227f7eb1c0962ca83fa3
