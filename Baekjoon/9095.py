from sys import stdin

def solution(n) :
    dp = [1, 1, 2]
    for i in range(3, n + 1) : 
        dp.append(dp[i-1] + dp[i-2] + dp[i-3])

    return dp[n]

if __name__ == '__main__' :
    T = int(stdin.readline().rstrip('\n'))
    for _ in range(T) : 
        print(solution(int(stdin.readline().rstrip('\n'))))

# DP 문제는 시간들여서 풀이하고 나면 항상드는 생각
# = 규칙 찾는 게 제일 힘들다..
# 이 문제 같은 경우는 쉬운 편에 속하나, 이걸 n, n-1, n-2 즉 3개의 수를 간의 관계를 볼 수 있는 시야가 있었냐 없었냐 차이일 것 같다.

# 🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦

# 문제 : 1,2,3 더하기
# 테마 : DP
# 출처 : https://www.acmicpc.net/problem/9095
