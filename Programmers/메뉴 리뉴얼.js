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
    return setMenuCandidate;
  }
}
function filterCandidateOnlyInOrders(candidate, orders) {
  return orders.includes(candidate);
}
function solution(orders, course) {
  let result = new Set();

  for (let order of orders) {
    let setMenuCandidates = extractSetMenuCandidateFor(order, course);

    for (let setMenuCandidate of setMenuCandidates) {
      if (isCandidateMenu(setMenuCandidate, orders)) {
        result.add(isCandidateMenu(setMenuCandidate, orders));
      }
    }
  }

  result = [...result].filter((candidate) => filterCandidateOnlyInOrders(candidate, orders)).sort();
  return result;
}

console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]));
console.log(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]));
console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]));
