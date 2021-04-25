def solution(n):
    dp = []
    dp.append(0)
    dp.append(1)

    for i in range(2,n):
        if i % 2 == 0:
            dp.append(dp[i-1] + dp[i-1] - 1)
        else:
            dp.append((dp[i-1] + 1) + dp[i-1])
    return dp[n-1]

if __name__ == '__main__':
    n = int(input())
    print(solution(n))


# [구현] 마법의 이진수
# 실행시간 : O(n)
# Note : 구현문제라고, 생각나는대로 풀면, 시간초과, dp로 풀어야된다. << 생각하는대까지 시간 걸림

# 엘리스 토끼는 마법의 이진수를 얻었습니다.
# 마법의 이진수는 0과 1로 구성됐으며, 시간이 지나면 0은 10으로, 1은 01로 변환되어 길이가 두 배인 이진수가 됩니다. 이러한 이진수들을 차례로 나열하면 하나의 이진수 수열이 됩니다.
# 마법의 이진수의 시작 수는 1이라고 하고 처음 몇 개의 이진수들을 구해 보면,
# 1 -> 01 -> 1001 -> 01101001 -> …
# 이 됩니다.
# N=4일 경우의 이진수는 01101001이고, 따라서 이 안에는 01101001, 한 개 혹은 연속된 0으로 이루어진 그룹이 세 개입니다.
# N이 주어졌을 때, N 번째 이진수에서 한 개 혹은 연속된 0들의 그룹이 몇 개나 있는지 알아내는 프로그램을 작성하세요.

# [입력]
# 첫째 줄에 정수 N을 입력합니다.
# (1≤N≤1,000)

# [출력]
# 첫째 줄에 답을 출력합니다.
# [입력 예시]
# 3
# [출력 예시]
# 1

# [비고] 시간초과 ver
# def makebinary(bi_str):
#     length = len(bi_str)
#     new_str = ""
#     for i in range(length):
#         if bi_str[i] == '1': 
#             new_str += '0'
#         else: 
#             new_str += '1'
    
#     return new_str + bi_str

# def solution(n):
#     bi_str = '1'
#     for _ in range(n-1):
#         bi_str = makebinary(bi_str)
    
#     count = 0
#     for i in range(len(bi_str)-1):
#         if bi_str[i] == '0' and bi_str[i+1] != '0':
#             count += 1
#     return count

# if __name__ == '__main__':
#     n = int(input())
#     print(solution(n))

# [문제출처] : 엘리스 AI 트랙