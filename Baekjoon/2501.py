import sys
def solution(N,K) :
    array = [i for i in range(1,N+1) if N % i == 0]
    if len(array) >= K :
        return array[K-1]
    else :
        return 0
    
if __name__ == '__main__' :
    N, K = map(int,sys.stdin.readline().split())
    print(solution(N,K))

# [문제] 약수 구하기
# [테마] 구현
# [출처] https://www.acmicpc.net/problem/2501

# [Note]
# - 기본다지기