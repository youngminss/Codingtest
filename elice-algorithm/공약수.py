def solution(n, nums):
    nums.sort()
    result = []
    i = 1
    while i <= nums[-1]:
        flag = True
        for num in nums:
            if num % i != 0:
                flag = False
                break
        if flag:
            result.append(i)
        i += 1
    
    return result

if __name__ == '__main__':
    n = int(input())
    nums = list(map(int,input().split()))
    result = solution(n, nums)
    [print(x, end=' ') for x in result]


# [구현] 공약수
# [실행시간] O(n(i) * n)

# 엘리스 토끼는 수업 시간에 공약수를 배웠습니다.
# 그래서 엘리스 토끼는 공약수를 구하는 연습을 하고 싶습니다.
# 수 N개를 줬을 때 그 수들의 공약수를 모두 출력하는 프로그램을 작성하세요.

# [입력]
# 첫 번째 줄에 자연수 N을 입력합니다.
# (2≤N≤100)
# 두 번째 줄에 공약수를 구할 자연수 N_i 를 공백을 기준으로 N 번 입력합니다.
# (1≤N_i≤1,000)

# [출력]
# 첫 번째 줄에 N개의 수의 공약수를 오름차순으로 모두 출력합니다.
# [입력 예시]
# 3
# 3 6 9
# [출력 예시]
# 1 3

# [문제출처] 앨리스 AI 트랙