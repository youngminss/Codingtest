from itertools import combinations

def primeSieve(n):
    base = [False,False] + [True] * (n-1)
    primes = []
    
    for i in range(2, n+1):
        if base[i]:
            primes.append(i)
            for j in range((2*i), n+1, i):
                base[j] = False
    
    return primes

def solution(nums):
    answer = 0

    # 에라토스테네스 체 만들기 (필요한 n 까지만 만듦)
    primes = primeSieve(3000)

    # 주어진 nums 배열 중, 3개를 뽑는 경우의 수 (조합)
    c_list = list(combinations(nums, 3))
    for c in c_list:
        if sum(c) in primes:
            answer += 1

    return answer

if __name__ == "__main__":
    result = solution([1,6,4])
    print(result)

# [1,2,3,4]	
# [1,2,7,6,4]

# [문제] 소수 만들기 / 프로그래머스 Summer/Winter Coding (2018)
# [문제링크] https://programmers.co.kr/learn/courses/30/lessons/12977
# [카테고리] 수학 & 구현

# [해법]
# - 에라토스테네스 체를 이용함
# - 조합(Combination)을 이용해서, nums 배열 내에서 3개를 뽑는 중복되지 않은 조합을 뽑아냄
# - 각 조합들의 합이, 에라토스테네스 체에 존재하면 카운팅함
