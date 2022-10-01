function solution(n, k) {
  return n
    .toString(k)
    .split("0")
    .map(Number)
    .filter((primeCandidateNumber) => isPrime(primeCandidateNumber)).length;
}

const isPrime = (n) => {
  if (!n || n === 1) return false;
  if (n === 2) return true;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
};

solution(437674, 3); // 3
solution(110011, 10); // 2
solution(3, 3); // 0
